import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout/Layout.jsx'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))
root.render(<App/>)