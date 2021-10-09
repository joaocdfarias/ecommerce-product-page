import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.scss'
import Header from './components/header'

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
