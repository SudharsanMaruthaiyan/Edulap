import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import Body from './Component/Body/Body.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body/>
  </StrictMode>,
)
