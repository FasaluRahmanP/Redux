import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
// import store from './Component/Redux/Store.js'
import storee from './App/storee.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={storee}>
    {/* <Provider store={store}> */}
    <App />
    </Provider>
  </React.StrictMode>,
)
