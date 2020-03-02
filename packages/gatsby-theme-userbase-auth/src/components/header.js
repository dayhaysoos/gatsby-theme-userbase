/**@jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { useUserbase } from '../context/userbase'
import LoginButton from '../components/login-button'
import LogoutButton from '../components/logout-button'

const Header = () => {
  const { user, userbase } = useUserbase()

  return (
    <Flex sx={{ justifyContent: 'center' }}>
      {!user.username ? <LoginButton /> : <LogoutButton />}
    </Flex>
  )
}

export default Header
