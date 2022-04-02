import type { GetStaticProps, NextPage } from 'next'
import { UserItem } from '../../src/components/User'
import { IUser } from '../../src/models'
import { UserService } from '../../src/services'

interface IUserPageProps {
  users: IUser[]
}

const UserPage: NextPage<IUserPageProps> = (props) => {
  const { users } = props
  return (
    <>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </>
  )
}

export default UserPage

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await UserService.getUsers()
  return {
    props: {
      users: data,
    },
  }
}
