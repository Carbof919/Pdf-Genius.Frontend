cat > src/pages/Home.jsx << 'EOF'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Workspace from '../components/Workspace'

export default function Home({ darkMode, toggleDarkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-screen"
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Workspace />
    </motion.div>
  )
}
EOF
