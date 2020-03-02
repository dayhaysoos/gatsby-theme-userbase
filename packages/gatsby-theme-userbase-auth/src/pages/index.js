/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Layout from '../components/layout'
import { useUserbase } from '../context/userbase'

const Index = () => {
  const { user } = useUserbase()

  return (
    <Layout>
      <Flex sx={{ justifyContent: 'center' }}>
        {user.username ? <h1>ty for signing in</h1> : <h1>Please sign in</h1>}
      </Flex>
    </Layout>
  )
}

export default Index
