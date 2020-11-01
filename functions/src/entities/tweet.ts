import { firestore } from 'firebase-admin'

export type Tweet = {
  id: string
  text: string
  fileURLs: string[]
  writer: {
    ref: firestore.DocumentReference
  }
  createdAt: Date
  updatedAt: Date
}

export const buildTweet = (id: string, data: firestore.DocumentData) => {
  const newTweet: Tweet = {
    id,
    text: data.text,
    fileURLs: data.fileURLs,
    writer: data.writer,
    createdAt: data.createdAt.toDate(),
    updatedAt: data.updatedAt.toDate(),
  }

  return newTweet
}
