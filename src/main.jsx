
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import Layout from './layout/Layout.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Layout>
     <App />
    </Layout>

  //</StrictMode>
)
