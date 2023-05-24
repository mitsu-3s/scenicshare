import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { image, title, description } = req.body
            const scenery = await prisma.scenery.create({
                data: {
                    image,
                    title,
                    description,
                    likes: 0,
                },
            })
            res.status(200).json(scenery)
        } catch (e) {
            res.status(500).json({ message: 'Miss' })
        }
    }
}
