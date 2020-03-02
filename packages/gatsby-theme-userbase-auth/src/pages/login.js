/**@jsx jsx */
import { jsx, Box } from 'theme-ui'
import LoginForm from '../components/login-form'

const Login = () => {
  return (
    <Box sx={{ maxWidth: 300, margin: '0 auto' }}>
      <LoginForm />
    </Box>
  )
}

export default Login
