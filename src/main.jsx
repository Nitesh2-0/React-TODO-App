import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import TaskContext from './Helpers/TaskContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskContext>
    <App />
  </TaskContext>,
)
