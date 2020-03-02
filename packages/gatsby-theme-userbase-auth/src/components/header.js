/**@jsx jsx */
import { jsx, Flex, Grid } from 'theme-ui'
import { useUserbase } from '../context/userbase'
import LoginButton from '../components/login-button'
import LogoutButton from '../components/logout-button'
import SignUpButton from '../components/sign-up-button'

const Header = () => {
  const { isLoggedIn } = useUserbase()

  return (
    <Flex sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
      <h2>Userbase + Gatsby</h2>
      <Grid columns={2} gap={2}>
        {isLoggedIn ? <LogoutButton /> : <LoginButton />}
        {isLoggedIn ? null : <SignUpButton />}
      </Grid>
    </Flex>
  )
}

export default Header
