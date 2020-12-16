import { firestore } from 'firebase-admin'

export type Tweet = {
  id: string
  text: string
  fileURLs: string[]
  writer: {
    ref: firestore.DocumentReference
  }
  origin: {
    ref: firestore.DocumentReference
    writer: {
      ref: firestore.DocumentReference
    }
  } | null
  reply: {
    ref: firestore.DocumentReference
    writer: {
      ref: firestore.DocumentReference
    }
  } | null
  createdAt: Date
  updatedAt: Date
}

export const buildTweet = (id: string, data: firestore.DocumentData) => {
  const newTweet: Tweet = {
    id,
    text: data.text,
    fileURLs: data.fileURLs,
    writer: data.writer,
    origin: data.origin,
    reply: data.reply,
    createdAt: data.createdAt.toDate(),
    updatedAt: data.updatedAt.toDate(),
  }

  return newTweet
}
