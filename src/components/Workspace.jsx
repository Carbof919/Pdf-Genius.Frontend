cat > src/components/Workspace.jsx << 'EOF'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Presentation, FileEdit } from 'lucide-react'

export default function Workspace() {
  const [activeTab, setActiveTab] = useState('pdf')
  const [isDragging, setIsDragging] = useState(false)

  const tabs = [
    { id: 'pdf', icon: <FileText className="w-4 h-4" />, label: 'PDF' },
    { id: 'ppt', icon: <Presentation className="w-4 h-4" />, label: 'PPT' },
    { id: 'word', icon: <FileEdit className="w-4 h-4" />, label: 'Word' }
  ]

  return (
    <div className="flex flex-1 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Left Panel - Document Viewer */}
      <div className="w-1/2 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-4">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
        
        <motion.div
          animate={{
            scale: isDragging ? 1.02 : 1,
            borderColor: isDragging ? '#9333ea' : '#e5e7eb'
          }}
          className={`flex-1 m-4 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed ${
            isDragging ? 'border-purple-600' : 'border-gray-300 dark:border-gray-600'
          } transition-all duration-300`}
          onDragEnter={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
        >
          <div className="text-center p-6 max-w-md">
            <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
              Drag & drop your {activeTab.toUpperCase()} file
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              Or click to browse files
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
            >
              Select File
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Right Panel - AI Chat */}
      <div className="w-1/2 bg-white dark:bg-gray-800 flex flex-col shadow-inner">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="font-semibold text-gray-800 dark:text-white">AI Assistant</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Placeholder for chat messages */}
          <div className="text-center text-gray-500 dark:text-gray-400 py-10">
            <p>Ask questions about your document</p>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask something about this document..."
              className="flex-1 bg-gray-100 dark:bg-gray-700 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF
