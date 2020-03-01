/**@jsx jsx */
import { jsx, Button } from 'theme-ui'
import { useContext } from 'react'
import { UserbaseContext } from '../context/userbase'
import { navigate } from 'gatsby'

const LogoutButton = () => {
  const { userbase } = useContext(UserbaseContext)

  const handleSignout = () => {
    userbase.signOut()
    window.location.reload()
  }

  return <Button onClick={handleSignout}>Logout</Button>
}

export default LogoutButton
