// src/components/common/ThemeSelector.jsx
import { useState } from 'react'
import { Check } from 'lucide-react'

const themes = [
  { id: 'thread', name: 'Thread', color: '#171717' },
  { id: 'blue', name: 'Blue', color: '#3B82F6' },
  { id: 'purple', name: 'Purple', color: '#8B5CF6' },
  { id: 'green', name: 'Green', color: '#10B981' },
  { id: 'orange', name: 'Orange', color: '#F97316' },
]

function ThemeSelector() {
  const [activeTheme, setActiveTheme] = useState('thread')
  
  const handleThemeChange = (themeId) => {
    const root = document.documentElement
    
    // Remove all theme classes
    themes.forEach(t => root.classList.remove(`theme-${t.id}`))
    
    // Add new theme class
    root.classList.add(`theme-${themeId}`)
    
    // Save to localStorage
    localStorage.setItem('color-theme', themeId)
    
    setActiveTheme(themeId)
  }
  
  return (
    <div className="p-4">
      <h3 className="font-semibold mb-3">Color Theme</h3>
      
      <div className="flex gap-3">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => handleThemeChange(theme.id)}
            className="relative"
          >
            <div
              className="w-10 h-10 rounded-full border-2 border-border hover:scale-110 transition-transform"
              style={{ backgroundColor: theme.color }}
            />
            
            {activeTheme === theme.id && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
            )}
            
            <p className="text-xs mt-1 text-center">{theme.name}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ThemeSelector
