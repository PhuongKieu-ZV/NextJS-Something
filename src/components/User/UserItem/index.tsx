import { NextPage } from 'next/types'
import { IUser } from '../../../models'
import { UserItemWrapper } from './styles'

interface IUserItem {
  user: IUser
}

const UserItem: NextPage<IUserItem> = (props) => {
  const { user } = props
  return (
    <UserItemWrapper>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </UserItemWrapper>
  )
}

export default UserItem
