import React from 'react';
import Routes from './src/routes';

import { AuthProvider } from './src/Context/AuthContext.js'

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}