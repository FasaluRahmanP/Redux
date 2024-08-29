import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './example/counterstore.js'
import { CounterStore } from './FLARELABS/CounterStore.js'
import { Todostore } from './TodoApp/TodoStore.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={Todostore}>
    <App />
  </Provider>,
  </StrictMode>,
)
