/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import AuthButtons from './header/auth-buttons'

const Header = () => {
  return (
    <Flex sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
      <h2>Userbase + Gatsby</h2>
      <AuthButtons />
    </Flex>
  )
}

export default Header
