import * as admin from 'firebase-admin'

admin.initializeApp()

export { createUser } from './triggers/user/create'
export { createUserCallable } from './handlers/user/create'

export { incrementFollowCount } from './triggers/user/incrementFollowCount'
export { decrementFollowCount } from './triggers/user/decrementFollowCount'
export { incrementFollowerCount } from './triggers/user/incrementFollowerCount'
export { decrementFollowerCount } from './triggers/user/decrementFollowerCount'
