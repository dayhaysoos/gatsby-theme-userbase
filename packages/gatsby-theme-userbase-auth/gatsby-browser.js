import React from 'react'
import { UserbaseProvider } from './src/context/userbase'

export const wrapRootElement = ({ element }, { APP_ID }) => {
  return <UserbaseProvider appId={APP_ID}>{element}</UserbaseProvider>
}
