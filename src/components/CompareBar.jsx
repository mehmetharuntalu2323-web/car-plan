import React, { useState } from 'react'
import { useCompare } from '../contexts/CompareContext'
import CompareModal from './CompareModal'

const CompareBar = ({ carData }) => {
  const { compareList, clearCompare } = useCompare()
  const [showModal, setShowModal] = useState(false)

  if (compareList.length === 0) return null

  return (
    <>
      <div className="compare-bar">
        <div className="compare-bar-content">
          <div className="selected-cars">
            {compareList.map((car, index) => (
              <div key={index} className="selected-car">
                <div className="car-info">
                  <span className="car-brand">{car.brand}</span>
                  <span className="car-name">{car.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="compare-actions">
            <button 
              className="clear-btn"
              onClick={clearCompare}
              title="Seçimi Temizle"
            >
              🗑️
            </button>
            <button 
              className="compare-modal-btn"
              onClick={() => setShowModal(true)}
              disabled={compareList.length < 2}
            >
              {compareList.length < 2 ? 
                `${compareList.length}/2 Seçildi` : 
                '⚖️ Karşılaştır'
              }
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <CompareModal 
          cars={compareList}
          carData={carData}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export default CompareBar