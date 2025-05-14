cat > src/components/Navbar.jsx << 'EOF'
import { Sun, Moon, Upload, Settings, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <motion.nav
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 shadow-sm"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="p-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg"
          >
            <span className="text-white font-bold text-lg">DG</span>
          </motion.div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            DocGenius
          </h1>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Document</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
EOF
