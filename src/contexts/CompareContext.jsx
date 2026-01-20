import React, { createContext, useContext, useState } from 'react'

const CompareContext = createContext()

export const useCompare = () => {
  const context = useContext(CompareContext)
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider')
  }
  return context
}

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([])

  // Karşılaştırma listesine ekleme/çıkarma
  const toggleCompare = (model) => {
    setCompareList(prev => {
      const isAlreadyInList = prev.some(item => 
        item.brand === model.brand && item.name === model.name
      )

      if (isAlreadyInList) {
        // Listeden çıkar
        return prev.filter(item => 
          !(item.brand === model.brand && item.name === model.name)
        )
      } else {
        // Maksimum 2 araba kontrolü
        if (prev.length >= 2) {
          alert('Maksimum 2 araba karşılaştırabilirsiniz!')
          return prev
        }
        // Listeye ekle
        return [...prev, model]
      }
    })
  }

  // Karşılaştırma listesini temizle
  const clearCompare = () => {
    setCompareList([])
  }

  // Bir arabanın listede olup olmadığını kontrol et
  const isInCompareList = (model) => {
    return compareList.some(item => 
      item.brand === model.brand && item.name === model.name
    )
  }

  const value = {
    compareList,
    toggleCompare,
    clearCompare,
    isInCompareList,
    canAddMore: compareList.length < 2
  }

  return (
    <CompareContext.Provider value={value}>
      {children}
    </CompareContext.Provider>
  )
}