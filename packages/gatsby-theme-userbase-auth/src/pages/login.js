/**@jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useContext } from 'react'
import LoginForm from '../components/login-form'
import Layout from '../components/layout'

const Login = () => {
  return (
    <Box sx={{ maxWidth: 300, margin: '0 auto' }}>
      <LoginForm />
    </Box>
  )
}

export default Login
