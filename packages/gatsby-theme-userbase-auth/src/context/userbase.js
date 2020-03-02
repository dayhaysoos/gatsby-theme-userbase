import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from 'react'
import userbase from 'userbase-js'

const initialState = {
  user: {},
  userbase: {},
}

const reducer = (user, action) => {
  switch (action.type) {
    case 'setUser':
      return {
        ...user,
        ...action.payload,
      }

    default:
      return user
  }
}

export const UserbaseContext = createContext()

export const UserbaseProvider = ({ children, appId }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const initialize = async () => {
      if (state.user.username) return null
      try {
        let result = await userbase.init({ appId })
        await dispatch({
          type: 'setUser',
          payload: { user: { ...result.user }, userbase },
        })

        await console.log(state)
      } catch (error) {
        console.log(error)
      }
    }
    initialize()
  }, [])

  console.log('stert', state)
  return (
    <UserbaseContext.Provider value={state}>
      {children}
    </UserbaseContext.Provider>
  )
}

export const useUserbase = () => {
  const session = useContext(UserbaseContext)
  console.log('session', session)
  // const { user, userbase } = session
  // const setUser = ({ username }) => dispatch({ type: 'setUser' })
  // return {
  //   user,
  //   userbase,
  //   setUser,
  // }
}
