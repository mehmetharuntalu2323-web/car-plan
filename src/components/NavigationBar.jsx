import React from 'react'

const NavigationBar = ({ 
  showBackButton = false, 
  onBackClick, 
  onHomeClick,
  backText = "← Geri",
  title = null,
  showHomeButton = false
}) => {
  return (
    <div className="navigation-bar">
      <div className="nav-content">
        <div className="nav-left">
          {showBackButton && (
            <button 
              className="nav-back-button" 
              onClick={onBackClick}
            >
              {backText}
            </button>
          )}
        </div>
        
        {title && (
          <h2 className="nav-title">{title}</h2>
        )}
        
        <div className="nav-right">
          {showHomeButton && (
            <button 
              className="nav-home-button" 
              onClick={onHomeClick}
            >
              🏠 Ana Sayfa
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavigationBar