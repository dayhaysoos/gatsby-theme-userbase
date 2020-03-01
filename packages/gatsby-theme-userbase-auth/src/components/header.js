/**@jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { useUserbase } from '../context/userbase'
import LoginButton from '../components/login-button'

const Header = () => {
  const { user, userbase } = useUserbase()
  return (
    <Flex sx={{ justifyContent: 'center' }}>
      {!user.username ? (
        <LoginButton />
      ) : (
        <Button onClick={userbase.signOut}>Sign Out</Button>
      )}
    </Flex>
  )
}

export default Header
