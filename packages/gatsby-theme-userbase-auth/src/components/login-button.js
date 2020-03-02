/**@jsx jsx */
import { jsx, Button } from 'theme-ui'
import { navigate } from 'gatsby'

const LoginButton = () => {
  return <Button onClick={() => navigate('login')}>Sign In</Button>
}

export default LoginButton
