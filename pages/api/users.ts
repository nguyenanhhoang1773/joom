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
    const { firt_name, last_name, email, last_sign_in } = req.body;
    const emailAddress = email[0].emailAddress;
    const prequery =
      await sql`SELECT * FROM users WHERE email = ${emailAddress};`;
    console.log(prequery);
    if (prequery.rowCount) return;
    const query =
      await sql`INSERT INTO users (first_name ,last_name , email,last_sign_in)
    VALUES (${firt_name}, ${last_name},${emailAddress}, ${last_sign_in});`;
    res.status(200);
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
