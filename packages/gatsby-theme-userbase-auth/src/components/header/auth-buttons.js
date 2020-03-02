/**@jsx jsx */
import { jsx, Flex, Grid } from 'theme-ui'
import LoginButton from '../login-button'
import LogoutButton from '../logout-button'
import SignUpButton from '../sign-up-button'
import { useUserbase } from '../../context/userbase'

const AuthButtons = () => {
  const { isLoggedIn } = useUserbase()
  return (
    <Flex>
      <Grid columns={2} gap={2}>
        {isLoggedIn ? <LogoutButton /> : <LoginButton />}
        {isLoggedIn ? null : <SignUpButton />}
      </Grid>
    </Flex>
  )
}

export default AuthButtons
