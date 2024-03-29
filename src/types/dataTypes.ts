export type User = {
  id: number
  firstName: string
  lastName: string
  username: string
  gender: 'male' | 'female' | undefined
  bio: string
}

export type Tweet = {
  id: number
  userId: User['id']
  text: string
  postedAt: Date
}
