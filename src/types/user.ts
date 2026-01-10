type Role = 'Admin' | 'User'
export interface User {
  _id: string
  roles: Role[]
  email: string
  createdAt: string
  updatedAt: string
}
