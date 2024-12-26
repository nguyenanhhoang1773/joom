import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';
type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === 'POST') {
    const { id } = req.body;
    const query = await sql`UPDATE rooms
SET finished = true
WHERE id = ${id};`;
    res.status(200);
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
