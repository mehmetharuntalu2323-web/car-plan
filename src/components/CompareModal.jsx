import React from 'react'

const CompareModal = ({ cars, onClose, carData }) => {
  if (cars.length !== 2) return null

  const [car1, car2] = cars

  // Teknik özellikler verilerini parse etme fonksiyonu
  const parseSpecs = (specs) => {
    const parsed = {}
    if (!specs) return parsed
    
    specs.forEach(spec => {
      if (spec.includes('Motor:')) parsed.motor = spec.replace('Motor: ', '')
      if (spec.includes('Güç:')) parsed.guc = spec.replace('Güç: ', '')
      if (spec.includes('Tork:')) parsed.tork = spec.replace('Tork: ', '')
      if (spec.includes('0-100 km/h:')) parsed.hizlanma = spec.replace('0-100 km/h: ', '')
      if (spec.includes('Maksimum Hız:')) parsed.maksHiz = spec.replace('Maksimum Hız: ', '')
      if (spec.includes('Şanzıman:')) parsed.sanziman = spec.replace('Şanzıman: ', '')
      if (spec.includes('Yakıt Tüketimi:')) parsed.yakit = spec.replace('Yakıt Tüketimi: ', '')
    })
    return parsed
  }

  // carData'dan detayları al
  const getCarSpecs = (brand, modelName) => {
    if (carData && carData[brand] && carData[brand].details && carData[brand].details[modelName]) {
      return carData[brand].details[modelName].specs || []
    }
    return []
  }

  const car1Specs = getCarSpecs(car1.brand, car1.name)
  const car2Specs = getCarSpecs(car2.brand, car2.name)
  
  const car1Details = parseSpecs(car1Specs)
  const car2Details = parseSpecs(car2Specs)

  const comparisonRows = [
    { label: 'Motor', key: 'motor' },
    { label: 'Güç', key: 'guc' },
    { label: 'Tork', key: 'tork' },
    { label: '0-100 km/h', key: 'hizlanma' },
    { label: 'Maksimum Hız', key: 'maksHiz' },
    { label: 'Şanzıman', key: 'sanziman' },
    { label: 'Yakıt Tüketimi', key: 'yakit' }
  ]

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="compare-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Araç Karşılaştırması</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-content">
          <div className="cars-header">
            <div className="car-header">
              <h3>{car1.brand} {car1.name}</h3>
              <p>{car1.year}</p>
            </div>
            <div className="vs-divider">VS</div>
            <div className="car-header">
              <h3>{car2.brand} {car2.name}</h3>
              <p>{car2.year}</p>
            </div>
          </div>

          <div className="comparison-table">
            <div className="table-header">
              <div className="spec-label">Özellik</div>
              <div className="car-value">{car1.brand} {car1.name}</div>
              <div className="car-value">{car2.brand} {car2.name}</div>
            </div>

            {comparisonRows.map((row, index) => (
              <div key={index} className="table-row">
                <div className="spec-label">{row.label}</div>
                <div className="car-value">{car1Details[row.key] || 'Bilgi yok'}</div>
                <div className="car-value">{car2Details[row.key] || 'Bilgi yok'}</div>
              </div>
            ))}

            {/* Fiyat Karşılaştırması */}
            <div className="table-section-header">
              <div className="spec-label">Fiyat Bilgileri</div>
              <div className="car-value"></div>
              <div className="car-value"></div>
            </div>
            
            <div className="table-row">
              <div className="spec-label">Sıfır Fiyat</div>
              <div className="car-value">{car1.prices?.new || 'Bilgi yok'}</div>
              <div className="car-value">{car2.prices?.new || 'Bilgi yok'}</div>
            </div>
            
            <div className="table-row">
              <div className="spec-label">İkinci El Fiyat</div>
              <div className="car-value">{car1.prices?.used || 'Bilgi yok'}</div>
              <div className="car-value">{car2.prices?.used || 'Bilgi yok'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareModal