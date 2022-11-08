// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string | string[];
  ok:boolean;
}


//el 201 es relacionado a que se creo algo en el backend
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const {message = "Bad Request"} = req.query

  res.status(400).json({ ok:false,message })
}
