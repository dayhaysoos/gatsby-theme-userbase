import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from 'react'
import userbase from 'userbase-js'

const reducer = (user, action) => {
  console.log('action', action)
  switch (action.type) {
    case 'setUser':
      return {
        ...user,
        username: action.payload,
      }

      break

    default:
      return user
  }
}

export const UserbaseContext = createContext()

export const UserbaseProvider = ({ children, appId }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    const initialize = async () => {
      if (user) return null
      try {
        let result = await userbase.init({ appId })
        await setUser(result.user)
      } catch (error) {
        console.log(error)
      }
    }
    initialize()
  }, [])
  return (
    <UserbaseContext.Provider
      value={useReducer(reducer, {
        user: { ...user },
        userbase,
      })}
    >
      {children}
    </UserbaseContext.Provider>
  )
}

export const useUserbase = () => {
  console.log('wtf', useContext(UserbaseContext))
  const [session, dispatch] = useContext(UserbaseContext)
  console.log('session', session)
  const { user, userbase } = session
  const setUser = ({ username }) => dispatch({ type: 'setUser' })
  return {
    user,
    userbase,
    setUser,
  }
}
