// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Manager = {
  name: string,
  line: number,
  calls: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Manager>
) {
  res.status(200).json({ name: 'Nika', line: 877788787, calls:10 })
}


https://github.com/vercel/next.js/tree/canary/examples/api-routes/pages/api/people
