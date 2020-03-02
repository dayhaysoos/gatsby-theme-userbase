/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useUserbase } from '../context/userbase'
import LoginButton from '../components/login-button'
import LogoutButton from '../components/logout-button'

const Header = () => {
  const { user, isLoggedIn } = useUserbase()

  return (
    <Flex sx={{ justifyContent: 'center' }}>
      {!user.username ? <LoginButton /> : <LogoutButton />}
    </Flex>
  )
}

export default Header
