import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialMembersList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Michael',
    email: 'michael@inthebathroom.com',
    role: 'Back-End Engineer',
  },
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Renee',
    email: 'dontrenee@onmyparade.com',
    role: 'Web Designer',
  },
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Thomas',
    email: 'tacobell@tholivemas.com',
    role: 'Leader',
  },
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Sarah',
    email: 'quesarahsarah@whateverwillbewillbe.com',
    role: 'Front-End Engineer',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialMembersList })
  },
  post(url, { name, email, role }) {
    const newMember = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newMember })
  }
}
