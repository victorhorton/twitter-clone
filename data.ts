import { type User, type Tweet } from './src/types/dataTypes'
import { Faker, en, base } from '@faker-js/faker'

const usersData = new Array<User>()
const tweetsData = new Array<Tweet>()

for (let i = 0; i < 30; i++) {
  const faker = new Faker({ locale: [en, base] })

  const gender = faker.person.sexType()
  const firstName = faker.person.firstName(gender)
  const lastName = faker.person.lastName()

  usersData.push({
    id: i + 1,
    firstName,
    lastName,
    username: faker.internet.displayName({ firstName, lastName }),
    gender,
    bio: faker.person.bio()
  })
}

for (let i = 0; i < 100; i++) {
  const faker = new Faker({ locale: [en, base] })

  tweetsData.push({
    id: i + 1,
    userId: faker.number.int({ min: 1, max: 30 }),
    text: faker.lorem.paragraph(),
    postedAt: faker.date.recent()
  })
}

export { usersData, tweetsData }
