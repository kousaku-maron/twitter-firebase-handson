import * as functions from 'firebase-functions'
import { firestore } from 'firebase-admin'
import { FieldValue } from '@google-cloud/firestore'

export const createUser = functions.auth.user().onCreate(async (data) => {
  const uid = data.uid

  const db = firestore()

  const userRef = db.collection('users').doc(uid)
  const userSnapshot = await userRef.get()
  if (userSnapshot.exists) {
    return { message: `already create ${uid} user` }
  }

  const user = {
    name: data.displayName ?? '未設定',
    profile: '',
    thubmnailURL: null,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  }

  await userRef.set(user)

  return { message: 'New User is created successfully.' }
})
