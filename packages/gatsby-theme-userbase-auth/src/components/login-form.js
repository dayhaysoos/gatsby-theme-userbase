/**@jsx jsx */
import { jsx, Box, Flex, Input, Label, Button } from 'theme-ui'
import { useState } from 'react'
import { useUserbase } from '../context/userbase'
import { navigate } from 'gatsby'

const LoginForm = () => {
  const { user, userbase, setUser } = useUserbase()
  const [userInput, setUserInput] = useState({ username: '', password: '' })

  const signIn = async e => {
    e.preventDefault()
    const { username, password } = userInput

    try {
      const result = await userbase.signIn({ username, password })
      await setUser(result)
      await navigate('/')
    } catch (error) {
      console.log(error)
      navigate('/')
    }
  }
  return (
    <Box as="form" onSubmit={e => signIn(e)}>
      <Label>Username</Label>
      <Input
        onChange={input =>
          setUserInput({ ...userInput, username: input.target.value })
        }
        name={'username'}
        mb={3}
      />
      <Label>Password</Label>
      <Input
        onChange={input =>
          setUserInput({ ...userInput, password: input.target.value })
        }
        name={'password'}
        mb={3}
      />
      <Flex sx={{ justifyContent: 'space-evenly' }}>
        <Button>Submit</Button>
      </Flex>
    </Box>
  )
}

export default LoginForm
