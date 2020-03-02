import React, { createContext, useReducer, useContext, useEffect } from 'react'
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

    case 'resetUser':
      return {
        ...user,
        user: {},
      }
    default:
      return user
  }
}

export const UserbaseContext = createContext()

export const UserbaseProvider = ({ children, appId }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setUser = ({ username }) =>
    dispatch({ type: 'setUser', payload: { user: { username } } })

  const resetUser = () => dispatch({ type: 'resetUser' })

  useEffect(() => {
    if (!state.user.username) {
      const initialize = async () => {
        try {
          let result = await userbase.init({ appId })
          await dispatch({
            type: 'setUser',
            payload: { user: { ...result.user }, userbase },
          })
        } catch (error) {
          console.log(error)
        }
      }
      initialize()
    }
  }, [state.user.username, appId])

  return (
    <UserbaseContext.Provider value={{ ...state, setUser, resetUser }}>
      {children}
    </UserbaseContext.Provider>
  )
}

export const useUserbase = () => {
  const session = useContext(UserbaseContext)

  return {
    ...session,
    isLoggedIn: session.user.hasOwnProperty('username'),
  }
}
