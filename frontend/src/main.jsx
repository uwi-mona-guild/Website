import { StrictMode } from 'react'              // React tool that highlights potential issues
import { createRoot } from 'react-dom/client'   // React Function to create a root for react to attach itself to the html
import App from './App.jsx'                     // Imports the actual app component (hence the capitalization) where the info is loaded
import './index.css'                            // Global default CSS styles

createRoot(document.getElementById('root')).render( // getElementbyId targets the <div id="root"> in the index.html
  <StrictMode>
    <App />
  </StrictMode>
)
