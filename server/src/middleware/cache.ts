import redis from '@/redisClient.js'
import { Request, Response, NextFunction } from 'express'

export const cache = async (req: Request, res: Response, next: NextFunction) => {
  const cacheKey = req.originalUrl

  try {
    let response = await redis.get(cacheKey)
    if (Buffer.isBuffer(response)) {
      response = Buffer.from(response).toString()
    }

    if (response) {
      res.send(JSON.parse(response))
    } else {
      next()
    }
  } catch (error) {
    throw error
  }
}