import React from 'react'
import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-8 sm:mt-12 py-5 sm:py-6 border-t border-slate-200 dark:border-gray-800/60 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-center sm:text-left text-xs sm:text-sm font-medium text-slate-500 dark:text-gray-400">
        
        {/* Left: Copyright */}
        <div>
          <span>&copy; {currentYear} Smart Task Manager. All rights reserved.</span>
        </div>

        {/* Right: Developer Link */}
        <div className="flex items-center gap-1">
          <span>Developed with</span>
          <FiHeart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>by</span>
          <a
            href="http://chaitalimore.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors underline decoration-2 decoration-slate-400/30 hover:decoration-teal-500/50"
          >
            Chaitali More
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer