// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import './style.css'
// import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/reset.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux'

ReactDOM.render(
  <div style={{ height: '100%', marginInline: '15px' }}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)