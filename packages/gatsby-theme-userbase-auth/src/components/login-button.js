/**@jsx jsx */
import { jsx, Button } from 'theme-ui'
import { useContext } from 'react'
import { navigate } from 'gatsby'
import { UserbaseContext } from '../context/userbase'

const LoginButton = () => {
  const { userbase } = useContext(UserbaseContext)

  return <Button onClick={() => navigate('login')}>Log In</Button>
}

export default LoginButton
