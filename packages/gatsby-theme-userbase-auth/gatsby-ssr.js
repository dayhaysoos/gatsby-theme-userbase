import React, { useEffect } from 'react'
import Userbase from 'userbase-js'
import { UserbaseProvider } from './src/context/userbase'

export const wrapRootElement = ({ element }, { APP_ID }) => {
  return <UserbaseProvider appId={APP_ID}>{element}</UserbaseProvider>
}
