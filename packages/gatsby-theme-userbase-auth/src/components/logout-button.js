/**@jsx jsx */
import { jsx, Button } from 'theme-ui'
import { useUserbase } from '../context/userbase'
import { navigate } from 'gatsby'

const LogoutButton = () => {
  const { userbase, resetUser } = useUserbase()

  const handleSignout = () => {
    userbase.signOut()
    resetUser()
    navigate('/')
  }

  return <Button onClick={handleSignout}>Sign Out</Button>
}

export default LogoutButton
