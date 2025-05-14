cat > src/App.jsx << 'EOF'
import { useState } from 'react'
import Home from './pages/Home'
import './styles/main.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Home toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      </div>
    </div>
  )
}

export default App
EOF
