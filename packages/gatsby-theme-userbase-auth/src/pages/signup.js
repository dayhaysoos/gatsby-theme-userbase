/**@jsx jsx */
import { jsx, Box, Label, Input, Button, Flex } from 'theme-ui'
import { useState, useContext } from 'react'
import { useUserbase } from '../context/userbase'
import LogoutButton from '../components/logout-button'
import Header from '../components/header'
import { navigate } from 'gatsby'

const Signup = () => {
  const { user, userbase, setUser } = useUserbase()
  const [userInput, setUserInput] = useState({ username: '', password: '' })

  const signUp = async e => {
    e.preventDefault()
    const { username, password } = userInput

    try {
      const result = await userbase.signUp({ username, password })
      setUser(result.user)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box sx={{ maxWidth: 300, margin: '0 auto' }}>
      <Box as="form" onSubmit={e => signUp(e)}>
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
          <LogoutButton />
        </Flex>
      </Box>
    </Box>
  )
}

export default Signup
