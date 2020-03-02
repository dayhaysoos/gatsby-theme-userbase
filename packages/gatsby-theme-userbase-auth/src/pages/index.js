/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Layout from '../components/layout'
import { useUserbase } from '../context/userbase'

const Index = () => {
  const { user } = useUserbase()

  return (
    <Layout>
      <Flex
        sx={{
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h4>Welcome to the gatsby-theme-userbase-auth demo!</h4>
        {user.username ? <h2>ty for signing in</h2> : <h2>Please sign in</h2>}
      </Flex>
    </Layout>
  )
}

export default Index
