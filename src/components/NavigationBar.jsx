import React from 'react'

const NavigationBar = ({ 
  showBackButton = false, 
  onBackClick, 
  backText = "← Geri Dön",
  title = null 
}) => {
  return (
    <div className="navigation-bar">
      <div className="nav-content">
        {showBackButton && (
          <button 
            className="nav-back-button" 
            onClick={onBackClick}
          >
            {backText}
          </button>
        )}
        
        {title && (
          <h2 className="nav-title">{title}</h2>
        )}
        
        <div className="nav-spacer"></div>
      </div>
    </div>
  )
}

export default NavigationBar