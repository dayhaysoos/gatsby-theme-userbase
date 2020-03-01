/**@jsx jsx */
import { jsx, Box } from 'theme-ui'
import Header from '../components/header'

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
}

export default Layout
