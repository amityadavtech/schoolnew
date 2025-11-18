import type { NextApiRequest, NextApiResponse } from 'next'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }
  // Verify admin token if ADMIN_JWT_SECRET is configured
  const ADMIN_SECRET = process.env.ADMIN_JWT_SECRET || ''
  if (ADMIN_SECRET) {
    // Accept cookie first (HttpOnly cookie set by /api/admin-login), fall back to Authorization header
    const cookieToken = (req.cookies && req.cookies['admin_token']) || ''
    const authHeader = req.headers.authorization || ''
    const token = cookieToken || (authHeader.startsWith('Bearer ') ? authHeader.replace('Bearer ', '') : '')
    if (!token) return res.status(401).json({ error: 'Missing authorization token' })

    try {
      // Validate token (signed as payloadB64.signature)
      const [payloadB64, sig] = token.split('.')
      if (!payloadB64 || !sig) throw new Error('Invalid token format')
      const expected = require('crypto').createHmac('sha256', ADMIN_SECRET).update(payloadB64).digest('base64url')
      if (expected !== sig) throw new Error('Invalid token signature')
      const payloadStr = Buffer.from(payloadB64, 'base64url').toString('utf8')
      const payload = JSON.parse(payloadStr)
      if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) throw new Error('Token expired')
      // token valid
    } catch (err) {
      return res.status(401).json({ error: 'Invalid or expired token' })
    }
  }
  try {
    const { image } = req.body || {}

    if (!image || typeof image !== 'string') {
      return res.status(400).json({ error: 'Missing image in request body' })
    }

    // Support both data URLs and remote URLs
    // Cloudinary SDK accepts data URLs directly (data:image/xxx;base64,....)
    // If a remote URL is provided, cloudinary will fetch it.

    const uploadResult = await cloudinary.uploader.upload(image, {
      folder: 'pinnacle_academy/gallery',
      resource_type: 'image',
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    })

    return res.status(200).json({ url: uploadResult.secure_url, public_id: uploadResult.public_id })
  } catch (err) {
    console.error('[upload-image] error:', err)
    // Cloudinary sometimes returns HTML for errors if credentials are wrong — surface message
    const message = err instanceof Error ? err.message : String(err)
    return res.status(500).json({ error: 'Upload failed', details: message })
  }
}
