import React from 'react'
import { AuthProvider } from './auth'
import { AppRouter } from './Router/AppRouter'

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
