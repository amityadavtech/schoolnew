import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const usage = await cloudinary.api.usage();

    const used = usage.storage?.usage || 0;  // in bytes
    const max = usage.storage?.limit || 25 * 1024 * 1024 * 1024; // fallback to 25GB
    const free = max - used;

    res.status(200).json({ used, max, free });
  } catch (err) {
    res.status(500).json({
      error: 'Could not fetch usage',
      details: (err as Error).message,
    });
  }
}
