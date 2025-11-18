import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'

// Simple signed token (no external deps). Payload is base64 JSON, signature is HMAC-SHA256.
function signPayload(payload: object, secret: string) {
  const payloadStr = JSON.stringify(payload)
  const payloadB64 = Buffer.from(payloadStr).toString('base64url')
  const sig = crypto.createHmac('sha256', secret).update(payloadB64).digest('base64url')
  return `${payloadB64}.${sig}`
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { username, password } = req.body || {}

  const ADMIN_USER = process.env.ADMIN_USERNAME || 'admin'
  const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'pinnacle2024'
  const SECRET = process.env.ADMIN_JWT_SECRET || ''

  // Basic server-side check
  if (!username || !password) return res.status(400).json({ error: 'Missing credentials' })

  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  // If no SECRET is configured, issue a short opaque token (random) but warn
  if (!SECRET) {
    const token = crypto.randomBytes(32).toString('hex')
    // set cookie for demo/dev
    const maxAge = 60 * 60 * 6 // 6 hours
    res.setHeader('Set-Cookie', `admin_token=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`)
    return res.status(200).json({ note: 'No ADMIN_JWT_SECRET configured; consider setting it for stronger security.' })
  }

  const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 6 // 6 hours
  const payload = { user: username, exp }
  const token = signPayload(payload, SECRET)

  // Set HttpOnly cookie so client cannot access token via JS
  const maxAge = 60 * 60 * 6 // 6 hours
  res.setHeader('Set-Cookie', `admin_token=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`)

  return res.status(200).json({ ok: true })
}
