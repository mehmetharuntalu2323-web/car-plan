import React, { useState } from 'react'
import CommentSection from './components/CommentSection'
import CompareBar from './components/CompareBar'
import NavigationBar from './components/NavigationBar'
import { useCompare } from './contexts/CompareContext'

// Marka renkleri
const brandColors = {
  'BMW': '#0066CC',
  'Mercedes': '#000000',
  'Audi': '#8B0000',
  'Volkswagen': '#1E3A8A',
  'Toyota': '#DC2626',
  'Tesla': '#EF4444',
  'Ford': '#1F2937',
  'BYD': '#059669',
  'MG': '#DC2626',
  'Fiat': '#DC2626',
  'Renault': '#FBBF24',
  'Alfa Romeo': '#DC2626',
  'Honda': '#DC2626',
  'Opel': '#FBBF24',
  'Hyundai': '#1E40AF',
  'Volvo': '#1E40AF',
  'Peugeot': '#1E40AF',
  'Nissan': '#DC2626',
  'Skoda': '#059669',
  'Citroen': '#DC2626',
  'Kia': '#DC2626',
  'Lexus': '#374151',
  'Seat': '#DC2626'
}

// Araba verileri
const carData = {
  "BMW": {
    logo: "https://www.carlogos.org/car-logos/bmw-logo.png",
    models: [
      {
        name: "1 Serisi",
        year: "2019-2024",
        description: "Kompakt hatchback",
        image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=BMW+1+Series",
        prices: {
          new: " 3.550.400 - 4.050.000 TL",
          used: "950.000 - 1.500.000 TL"
        }
      },
      {
        name: "2 Serisi",
        year: "2021-2024",
        description: "Kompakt coupe ve gran coupe",
        image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=BMW+2+Series",
        prices: {
          new: "3.987.700 - 4.252.100 TL",
          used: "1.850.000 - 3.250.000 TL"
        }
      },
      {
        name: "3 Serisi",
        year: "2019-2024",
        description: "Kompakt executive sedan",
        image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=BMW+3+Series",
        prices: {
          new: "5.137.900 - 5.564.500 TL",
          used: "2.500.000 - 3.500.500 TL"
        }
      },
      {
        name: "4 Serisi",
        year: "2020-2024",
        description: "Orta segment coupe",
        image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=BMW+4+Series",
        prices: {
          new: "6.361.300 - 9.159.300 TL",
          used: "1.900.000 - 4.200.000 TL"
        }
      },
      {
        name: "5 Serisi",
        year: "2017-2024",
        description: "Executive sedan",
        image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=BMW+5+Series",
        prices: {
          new: "7.958.200 - 11.513.600 TL",
          used: "2.575.000 - 4.175.000 TL"
        }
      }
,
      {
        name: "6 Serisi",
        year: "2018-2024",
        description: "Luxury grand tourer",
        image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=BMW+6+Series",
        prices: {
          new: " -  TL",
          used: "1.900.000 - 6.250.000 TL"
        }
      },
      {
        name: "7 Serisi",
        year: "2022-2024",
        description: "Luxury sedan",
        image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=BMW+7+Series",
        prices: {
          new: "19.000.000 - 21.000.000 TL",
          used: "3.800.000 - 7.200.000 TL"
        }
      },
      {
        name: "8 Serisi",
        year: "2018-2024",
        description: "Grand tourer coupe",
        image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=BMW+8+Series",
        prices: {
          new: "19.200.000 - 21.400.000 TL",
          used: "4.600.000 - 15.800.000 TL"
        }
      },
      {
        name: "X1",
        year: "2022-2024",
        description: "Kompakt SUV",
        image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=BMW+X1",
        prices: {
          new: "3.850.000 - 5.200.000 TL",
          used: "1.150.000 - 3.200.000 TL"
        }
      },
      {
        name: "X3",
        year: "2017-2024",
        description: "Kompakt SUV",
        image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=BMW+X3",
        prices: {
          new: " -  TL",
          used: "2.340.000 - 4.400.000 TL"
        }
      }
    ],
    details: {
      "1 Serisi": {
        specs: [
          "Motor: 1.5L-2.0L TwinPower Turbo",
          "Güç: 140-306 HP",
          "Tork: 220-450 Nm",
          "Yakıt Tüketimi: 5.2-7.1L/100km",
          "Şanzıman: 6-8 İleri Manuel/Otomatik",
          "0-100 km/h: 4.8-8.5 saniye",
          "Maksimum Hız: 210-250 km/h",
          "Çekiş: Önden Çekiş/xDrive AWD",
          "Bagaj Hacmi: 380 litre",
          "Yakıt Deposu: 52 litre",
          "CO2 Emisyonu: 118-162 g/km",
          "Ağırlık: 1.370-1.520 kg"
        ],
        problems: [
          "B48 motor zamanlama zinciri aşınması",
          "Şanzıman soğutma sistemi sızıntısı",
          "LED far içinde nem birikimi",
          "Panoramik tavan motor arızası",
          "Park asistanı kamera kalibrasyonu sorunu",
          "Turbo actuator elektronik arızası",
          "Yakıt pompası yüksek basınç sorunu",
          "iDrive sistemi donma ve yavaşlama",
          "Klima evaporatör sızıntısı ve koku",
          "Fren balata erken aşınması"
        ]
      },
      "2 Serisi": {
        specs: [
          "Motor: 2.0L-3.0L TwinPower Turbo",
          "Güç: 178-382 HP",
          "Tork: 280-500 Nm",
          "Yakıt Tüketimi: 6.8-8.2L/100km",
          "Şanzıman: 8 İleri Otomatik",
          "0-100 km/h: 4.2-7.1 saniye",
          "Maksimum Hız: 230-280 km/h",
          "Çekiş: Arka Çekiş/xDrive AWD",
          "Bagaj Hacmi: 390 litre",
          "Yakıt Deposu: 52 litre",
          "CO2 Emisyonu: 155-187 g/km",
          "Ağırlık: 1.450-1.650 kg"
        ],
        problems: [
          "B48/B58 motor zamanlama zinciri problemi",
          "Şanzıman adaptasyon sorunu",
          "Elektronik park freni arızası",
          "iDrive sistemi donma sorunu",
          "Klima kompresörü erken arızası",
          "Turbo intercooler sızıntısı",
          "Yakıt enjektörü karbon birikimi",
          "Diferansiyel yağ sızıntısı",
          "LED far balast arızası",
          "Kapı kilit mekanizması sorunu"
        ]
      },
      "3 Serisi": {
        specs: [
          "Motor: 2.0L-3.0L TwinPower Turbo",
          "Güç: 156-510 HP",
          "Tork: 250-650 Nm",
          "Yakıt Tüketimi: 5.8-8.9L/100km",
          "Şanzıman: 8 İleri Otomatik",
          "0-100 km/h: 3.9-8.4 saniye",
          "Maksimum Hız: 230-290 km/h",
          "Çekiş: Arka Çekiş/xDrive AWD",
          "Bagaj Hacmi: 480 litre",
          "Yakıt Deposu: 59 litre",
          "CO2 Emisyonu: 132-203 g/km",
          "Ağırlık: 1.540-1.715 kg"
        ],
        problems: [
          "B48/B58 motor zamanlama zinciri aşınması",
          "48V hafif hibrit sistem arızası",
          "Şanzıman adaptasyon problemi",
          "Live Cockpit Professional donma sorunu",
          "Adaptif LED far kalibrasyon sorunu",
          "Turbo intercooler sızıntısı",
          "Yakıt enjektörü karbon birikimi",
          "Elektronik park freni kalibrasyon",
          "Klima kompresörü erken arızası",
          "Diferansiyel yağ sızıntısı"
        ]
      }
,
      "4 Serisi": {
        specs: [
          "Motor: 2.0L-3.0L TwinPower Turbo",
          "Güç: 184-510 HP",
          "Yakıt Tüketimi: 6.1-8.7L/100km",
          "Şanzıman: 8 İleri Otomatik",
          "0-100 km/h: 3.9-7.5 saniye"
        ],
        problems: [
          "Motor zamanlama zinciri erken aşınması",
          "Şanzıman soğutma sistemi arızası",
          "Elektronik süspansiyon arızası",
          "Panoramik tavan sızıntı sorunu",
          "Park sensörü kalibrasyon problemi"
        ]
      },
      "5 Serisi": {
        specs: [
          "Motor: 2.0L-4.4L V8 TwinTurbo",
          "Güç: 184-625 HP",
          "Yakıt Tüketimi: 6.2-10.8L/100km",
          "Şanzıman: 8 İleri Otomatik",
          "0-100 km/h: 3.1-7.8 saniye"
        ],
        problems: [
          "B48/B58 motor zamanlama zinciri problemi",
          "48V hafif hibrit sistem arızası",
          "Şanzıman adaptasyon ve soğutma sorunu",
          "Live Cockpit Professional donma sorunu",
          "Hava süspansiyonu kompresörü arızası"
        ]
      },
      "6 Serisi": {
        specs: [
          "Motor: 3.0L-4.4L V8 TwinTurbo",
          "Güç: 340-625 HP",
          "Yakıt Tüketimi: 8.1-11.2L/100km",
          "Şanzıman: 8 İleri Otomatik",
          "0-100 km/h: 3.6-5.4 saniye"
        ],
        problems: [
          "V8 motor turbo intercooler sızıntısı",
          "Aktif süspansiyon kompresörü arızası",
          "iDrive sistemi donma sorunu",
          "Karbon fiber parçaların aşınması",
          "Elektronik park freni kalibrasyonu"
        ]
      }
,
      "7 Serisi": {
        specs: [
          "Motor: 3.0L-4.4L V8 TwinTurbo + Mild Hybrid",
          "Güç: 286-630 HP",
          "Yakıt Tüketimi: 7.8-12.1L/100km",
          "Şanzıman: 8 İleri Otomatik",
          "0-100 km/h: 3.7-6.1 saniye"
        ],
        problems: [
          "V8 motor turbo intercooler sızıntısı",
          "Hava süspansiyonu kompresörü erken arızası",
          "iDrive 8 sistemi donma sorunu",
          "Lazer far kalibrasyon problemi",
          "Arka tekerlek yönlendirme arızası"
        ]
      },
      "8 Serisi": {
        specs: [
          "Motor: 3.0L-4.4L V8 TwinTurbo",
          "Güç: 340-625 HP",
          "Yakıt Tüketimi: 8.8-12.5L/100km",
          "Şanzıman: 8 İleri Otomatik",
          "0-100 km/h: 3.2-5.2 saniye"
        ],
        problems: [
          "V8 BiTurbo turbo actuator sorunu",
          "Aktif aerodinamik parçalar arızası",
          "Karbon seramik fren aşınması",
          "Adaptif M süspansiyon kalibrasyonu",
          "Lazer far matrix sistemi arızası"
        ]
      },
      "X1": {
        specs: [
          "Motor: 2.0L TwinPower Turbo",
          "Güç: 178-231 HP",
          "Yakıt Tüketimi: 6.8-7.8L/100km",
          "Şanzıman: 7-8 İleri Otomatik",
          "0-100 km/h: 6.6-8.7 saniye"
        ],
        problems: [
          "B48 motor zamanlama zinciri aşınması",
          "Şanzıman adaptasyon problemi",
          "Elektronik park freni motor arızası",
          "iDrive sistemi güncelleme sorunu",
          "LED far balast arızası"
        ]
      },
      "X3": {
        specs: [
          "Motor: 2.0L-3.0L TwinPower Turbo",
          "Güç: 184-510 HP",
          "Yakıt Tüketimi: 7.1-9.3L/100km",
          "Şanzıman: 8 İleri Otomatik",
          "0-100 km/h: 4.4-8.9 saniye"
        ],
        problems: [
          "B48/B58 motor zamanlama zinciri aşınması",
          "48V hafif hibrit sistem arızası",
          "Transfer kutusu elektronik kontrol sorunu",
          "Live Cockpit Professional donma sorunu",
          "360 derece kamera kalibrasyon sorunu"
        ]
      }
    }
  },
  "Mercedes": {
    logo: "https://www.carlogos.org/car-logos/mercedes-benz-logo.png",
    models: [
      {
        name: "A-Class",
        year: "2018-2024",
        description: "Kompakt hatchback ve sedan",
        image: "https://via.placeholder.com/400x250/000000/ffffff?text=Mercedes+A-Class",
        prices: {
          new: "2.543.000 - 4.670.500 TL",
          used: "1.200.000 - 2.800.000 TL"
        }
      },
      {
        name: "B-Class",
        year: "2019-2024",
        description: "Kompakt MPV",
        image: "https://via.placeholder.com/400x250/000000/ffffff?text=Mercedes+B-Class",
        prices: {
          new: "2.717.000 TL",
          used: "1.400.000 - 2.200.000 TL"
        }
      },
      {
        name: "C-Class",
        year: "2021-2024",
        description: "Kompakt executive sedan",
        image: "https://via.placeholder.com/400x250/000000/ffffff?text=Mercedes+C-Class",
        prices: {
          new: "3.668.000 - 8.950.000 TL",
          used: "1.800.000 - 4.500.000 TL"
        }
      },
      {
        name: "CLA",
        year: "2019-2024",
        description: "Kompakt coupe sedan",
        image: "https://via.placeholder.com/400x250/000000/ffffff?text=Mercedes+CLA",
        prices: {
          new: "2.894.500 - 4.847.000 TL",
          used: "1.500.000 - 3.200.000 TL"
        }
      },
      {
        name: "E-Class",
        year: "2020-2024",
        description: "Executive sedan",
        image: "https://via.placeholder.com/400x250/000000/ffffff?text=Mercedes+E-Class",
        prices: {
          new: "5.082.500 - 7.827.500 TL",
          used: "2.800.000 - 5.200.000 TL"
        }
      },
      {
        name: "S-Class",
        year: "2021-2024",
        description: "Luxury sedan",
        image: "https://via.placeholder.com/400x250/000000/ffffff?text=Mercedes+S-Class",
        prices: {
          new: "15.829.000 - 28.183.000 TL",
          used: "8.500.000 - 18.000.000 TL"
        }
      },
      {
        name: "GLA",
        year: "2020-2024",
        description: "Kompakt SUV",
        image: "https://via.placeholder.com/400x250/000000/ffffff?text=Mercedes+GLA",
        prices: {
          new: "3.130.000 TL",
          used: "1.800.000 - 2.600.000 TL"
        }
      },
      {
        name: "GLB",
        year: "2019-2024",
        description: "Kompakt 7 koltuklu SUV",
        image: "https://via.placeholder.com/400x250/000000/ffffff?text=Mercedes+GLB",
        prices: {
          new: "3.382.000 - 3.559.000 TL",
          used: "1.900.000 - 2.800.000 TL"
        }
      },
      {
        name: "GLC",
        year: "2019-2024",
        description: "Kompakt SUV",
        image: "https://via.placeholder.com/400x250/000000/ffffff?text=Mercedes+GLC",
        prices: {
          new: "4.325.000 - 9.987.500 TL",
          used: "2.400.000 - 5.800.000 TL"
        }
      },
      {
        name: "GLE",
        year: "2019-2024",
        description: "Orta segment SUV",
        image: "https://via.placeholder.com/400x250/000000/ffffff?text=Mercedes+GLE",
        prices: {
          new: "13.272.500 TL",
          used: "6.500.000 - 10.800.000 TL"
        }
      }
    ],
    details: {
      "A-Class": {
        specs: [
          "Motor: 1.3L-2.0L Turbo + EQBoost",
          "Güç: 136-421 HP",
          "Yakıt Tüketimi: 5.6-8.2L/100km",
          "Şanzıman: 7-8 İleri Otomatik",
          "0-100 km/h: 4.9-9.0 saniye"
        ],
        problems: [
          "M282 motor zamanlama zinciri aşınması",
          "7G-DCT şanzıman kavrama paketi sorunu",
          "MBUX sistemi donma sorunu",
          "LED far içinde nem birikimi",
          "Klima evaporatör sızıntısı"
        ]
      },
      "B-Class": {
        specs: [
          "Motor: 1.3L-2.0L Turbo + EQBoost",
          "Güç: 136-224 HP",
          "Yakıt Tüketimi: 5.8-7.1L/100km",
          "Şanzıman: 7-8 İleri Otomatik",
          "0-100 km/h: 6.8-9.2 saniye"
        ],
        problems: [
          "M282 motor karbon birikimi sorunu",
          "7G-DCT şanzıman sarsıntı problemi",
          "MBUX dokunmatik ekran yanıtsızlığı",
          "Panoramik tavan motor arızası",
          "Park asistanı sensör kalibrasyonu"
        ]
      },
      "C-Class": {
        specs: [
          "Motor: 1.5L-2.0L Turbo + EQBoost",
          "Güç: 170-421 HP",
          "Yakıt Tüketimi: 6.4-8.7L/100km",
          "Şanzıman: 9G-Tronic Otomatik",
          "0-100 km/h: 4.9-7.3 saniye"
        ],
        problems: [
          "M254 motor hafif hibrit sistem arızası",
          "48V EQBoost marş-jeneratör problemi",
          "MBUX hiper ekran donma sorunu",
          "LED matrix far kalibrasyon problemi",
          "Kablosuz güncelleme başarısızlığı"
        ]
      }
,
      "CLA": {
        specs: [
          "Motor: 1.3L-2.0L Turbo + EQBoost",
          "Güç: 136-421 HP",
          "Tork: 200-500 Nm",
          "Yakıt Tüketimi: 5.8-8.4L/100km",
          "Şanzıman: 7-8 İleri Otomatik",
          "0-100 km/h: 4.9-8.7 saniye",
          "Maksimum Hız: 210-270 km/h",
          "Çekiş: Önden Çekiş/4MATIC AWD",
          "Bagaj Hacmi: 460 litre",
          "Yakıt Deposu: 43 litre",
          "CO2 Emisyonu: 132-191 g/km",
          "Ağırlık: 1.440-1.620 kg"
        ],
        problems: [
          "M282 motor zamanlama zinciri gerginlik sorunu",
          "7G-DCT şanzıman sarsıntı problemi",
          "MBUX bilgi-eğlence sistemi gecikmesi",
          "Panoramik tavan motor arızası",
          "LED far balast arızası",
          "Klima evaporatör sızıntısı ve koku",
          "Park asistanı sensör kalibrasyonu",
          "Turbo intercooler sızıntı sorunu"
        ]
      },
      "E-Class": {
        specs: [
          "Motor: 2.0L-3.0L Turbo + EQBoost",
          "Güç: 197-449 HP",
          "Tork: 320-600 Nm",
          "Yakıt Tüketimi: 6.8-9.1L/100km",
          "Şanzıman: 9G-Tronic Otomatik",
          "0-100 km/h: 4.6-7.3 saniye",
          "Maksimum Hız: 230-280 km/h",
          "Çekiş: Arka Çekiş/4MATIC AWD",
          "Bagaj Hacmi: 540 litre",
          "Yakıt Deposu: 66 litre",
          "CO2 Emisyonu: 154-207 g/km",
          "Ağırlık: 1.730-1.950 kg"
        ],
        problems: [
          "M254 motor hafif hibrit sistem sorunu",
          "48V marş-jeneratör kalibrasyon problemi",
          "MBUX hiper ekran yazılım güncellemeleri",
          "LED matrix far adaptif kontrol sorunu",
          "Arka aks yönlendirme kalibrasyon sorunu",
          "Hava süspansiyonu kompresörü arızası",
          "Turbo intercooler sızıntı problemi",
          "Klima kompresörü erken arızası"
        ]
      },
      "S-Class": {
        specs: [
          "Motor: 3.0L-4.0L V8 + EQBoost",
          "Güç: 367-630 HP",
          "Tork: 500-900 Nm",
          "Yakıt Tüketimi: 8.7-12.8L/100km",
          "Şanzıman: 9G-Tronic Otomatik",
          "0-100 km/h: 3.4-5.4 saniye",
          "Maksimum Hız: 250-290 km/h",
          "Çekiş: Arka Çekiş/4MATIC AWD",
          "Bagaj Hacmi: 550 litre",
          "Yakıt Deposu: 76 litre",
          "CO2 Emisyonu: 198-291 g/km",
          "Ağırlık: 2.110-2.370 kg"
        ],
        problems: [
          "V8 BiTurbo intercooler sızıntısı",
          "E-Active Body Control arızası",
          "MBUX hiper ekran bağlantı sorunu",
          "Dijital ışık far kalibrasyon problemi",
          "Arka aks yönlendirme sistem arızası",
          "48V EQBoost marş-jeneratör sorunu",
          "Hava süspansiyonu kompresörü erken arızası",
          "Kablosuz güncelleme başarısızlığı"
        ]
      }
,
      "GLA": {
        specs: [
          "Motor: 1.3L-2.0L Turbo + EQBoost",
          "Güç: 136-421 HP",
          "Tork: 200-500 Nm",
          "Yakıt Tüketimi: 6.2-8.6L/100km",
          "Şanzıman: 7-8 İleri Otomatik",
          "0-100 km/h: 4.9-8.9 saniye",
          "Maksimum Hız: 210-270 km/h",
          "Çekiş: Önden Çekiş/4MATIC AWD",
          "Bagaj Hacmi: 435 litre",
          "Yakıt Deposu: 43 litre",
          "CO2 Emisyonu: 141-195 g/km",
          "Ağırlık: 1.465-1.685 kg"
        ],
        problems: [
          "M282 motor karbon birikimi",
          "4MATIC kavrama aşırı ısınması",
          "MBUX sistem donma sorunu",
          "Diferansiyel yağ sızıntısı",
          "Park asistanı kalibrasyon sorunu",
          "LED far içinde nem birikimi",
          "Turbo intercooler sızıntı problemi",
          "Klima evaporatör arızası"
        ]
      },
      "GLB": {
        specs: [
          "Motor: 1.3L-2.0L Turbo + EQBoost",
          "Güç: 136-306 HP",
          "Tork: 200-400 Nm",
          "Yakıt Tüketimi: 6.4-8.1L/100km",
          "Şanzıman: 7-8 İleri Otomatik",
          "0-100 km/h: 5.6-9.1 saniye",
          "Maksimum Hız: 210-250 km/h",
          "Çekiş: Önden Çekiş/4MATIC AWD",
          "Bagaj Hacmi: 570 litre (7 koltuk)",
          "Yakıt Deposu: 50 litre",
          "CO2 Emisyonu: 145-184 g/km",
          "Ağırlık: 1.615-1.795 kg"
        ],
        problems: [
          "M282 motor zamanlama zinciri sorunları",
          "7G-DCT kavrama aşınması",
          "Üçüncü sıra koltuk mekanizması",
          "MBUX bağlantı problemleri",
          "LED far içinde yoğuşma",
          "4MATIC sistem elektronik kontrol",
          "Park asistanı sensör arızası",
          "Klima kompresörü erken arızası"
        ]
      },
      "GLC": {
        specs: [
          "Motor: 2.0L Turbo + EQBoost",
          "Güç: 197-416 HP",
          "Tork: 320-520 Nm",
          "Yakıt Tüketimi: 7.8-9.2L/100km",
          "Şanzıman: 9G-Tronic Otomatik",
          "0-100 km/h: 5.1-7.6 saniye",
          "Maksimum Hız: 230-270 km/h",
          "Çekiş: Arka Çekiş/4MATIC AWD",
          "Bagaj Hacmi: 550 litre",
          "Yakıt Deposu: 66 litre",
          "CO2 Emisyonu: 177-209 g/km",
          "Ağırlık: 1.760-1.940 kg"
        ],
        problems: [
          "M254 motor hafif hibrit sistem arızası",
          "48V EQBoost marş-jeneratör sorunu",
          "MBUX sistemi bağlantı sorunları",
          "LED matrix far kalibrasyon problemi",
          "Kablosuz güncelleme başarısızlığı",
          "4MATIC sistem elektronik kontrol",
          "Hava süspansiyonu kompresörü arızası",
          "Turbo intercooler sızıntı sorunu"
        ]
      },
      "GLE": {
        specs: [
          "Motor: 2.0L-4.0L V8 + EQBoost",
          "Güç: 255-630 HP",
          "Tork: 370-900 Nm",
          "Yakıt Tüketimi: 8.2-12.1L/100km",
          "Şanzıman: 9G-Tronic Otomatik",
          "0-100 km/h: 3.7-7.2 saniye",
          "Maksimum Hız: 210-280 km/h",
          "Çekiş: 4MATIC AWD",
          "Bagaj Hacmi: 630 litre",
          "Yakıt Deposu: 85 litre",
          "CO2 Emisyonu: 186-275 g/km",
          "Ağırlık: 2.110-2.485 kg"
        ],
        problems: [
          "M256 motor zamanlama zinciri problemi",
          "E-Active Body Control süspansiyon arızası",
          "48V EQBoost sistem arızası",
          "MBUX sistemi donma ve güncelleme sorunu",
          "Çeki demiri elektrik bağlantı problemi",
          "V8 BiTurbo intercooler sızıntısı",
          "Hava süspansiyonu kompresörü erken arızası",
          "4MATIC sistem elektronik kontrol sorunu"
        ]
      }
    }
  },
  "Audi": {
    logo: "https://www.carlogos.org/car-logos/audi-logo.png",
    models: [
      {
        name: "A1",
        year: "2018-2024",
        description: "Subcompact hatchback",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Audi+A1",
        prices: {
          new: "1.850.000 - 2.200.000 TL",
          used: "950.000 - 1.400.000 TL"
        }
      },
      {
        name: "A3",
        year: "2020-2024",
        description: "Kompakt hatchback ve sedan",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Audi+A3",
        prices: {
          new: "2.100.000 - 2.800.000 TL",
          used: "1.200.000 - 1.900.000 TL"
        }
      },
      {
        name: "A4",
        year: "2020-2024",
        description: "Kompakt executive sedan",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Audi+A4",
        prices: {
          new: "2.800.000 - 4.200.000 TL",
          used: "1.600.000 - 2.800.000 TL"
        }
      },
      {
        name: "A5",
        year: "2020-2024",
        description: "Kompakt coupe ve sportback",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Audi+A5",
        prices: {
          new: "3.200.000 - 4.800.000 TL",
          used: "1.800.000 - 3.200.000 TL"
        }
      },
      {
        name: "A6",
        year: "2018-2024",
        description: "Executive sedan",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Audi+A6",
        prices: {
          new: "4.500.000 - 6.800.000 TL",
          used: "2.400.000 - 4.200.000 TL"
        }
      },
      {
        name: "A7",
        year: "2018-2024",
        description: "Executive sportback",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Audi+A7",
        prices: {
          new: "6.200.000 - 8.600.000 TL",
          used: "3.200.000 - 5.800.000 TL"
        }
      },
      {
        name: "Q2",
        year: "2016-2024",
        description: "Subcompact SUV",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Audi+Q2",
        prices: {
          new: "2.700.000 - 3.200.000 TL",
          used: "1.400.000 - 2.200.000 TL"
        }
      },
      {
        name: "Q3",
        year: "2018-2024",
        description: "Kompakt SUV",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Audi+Q3",
        prices: {
          new: "3.400.000 - 4.600.000 TL",
          used: "1.800.000 - 3.000.000 TL"
        }
      },
      {
        name: "Q5",
        year: "2017-2024",
        description: "Kompakt SUV",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Audi+Q5",
        prices: {
          new: "4.800.000 - 6.500.000 TL",
          used: "2.600.000 - 4.200.000 TL"
        }
      },
      {
        name: "Q7",
        year: "2015-2024",
        description: "Full-size SUV",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Audi+Q7",
        prices: {
          new: "7.500.000 - 10.200.000 TL",
          used: "3.800.000 - 6.800.000 TL"
        }
      }
    ],
    details: {
      "A1": {
        specs: [
          "Motor: 1.0L-1.5L TFSI Turbo",
          "Güç: 95-150 HP",
          "Tork: 160-250 Nm",
          "Yakıt Tüketimi: 4.4-5.8L/100km",
          "Şanzıman: 5-7 İleri Manuel/S tronic",
          "0-100 km/h: 7.8-10.4 saniye",
          "Maksimum Hız: 190-215 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 335 litre",
          "Yakıt Deposu: 40 litre",
          "CO2 Emisyonu: 99-132 g/km",
          "Ağırlık: 1.175-1.320 kg"
        ],
        problems: [
          "EA211 motor zamanlama zinciri gerginlik sorunu",
          "S tronic DQ200 kavrama aşınması",
          "Sanal Kokpit ekran sorunları",
          "LED far içinde yoğuşma",
          "Klima evaporatör sızıntısı",
          "Turbo actuator elektronik arızası",
          "Park asistanı sensör kalibrasyonu",
          "Yakıt pompası yüksek basınç sorunu"
        ]
      },
      "A3": {
        specs: [
          "Motor: 1.0L-2.0L TFSI Turbo + Mild Hybrid",
          "Güç: 110-310 HP",
          "Tork: 200-400 Nm",
          "Yakıt Tüketimi: 4.9-7.4L/100km",
          "Şanzıman: 6-7 İleri Manuel/S tronic",
          "0-100 km/h: 5.8-9.4 saniye",
          "Maksimum Hız: 210-250 km/h",
          "Çekiş: Önden Çekiş/Quattro AWD",
          "Bagaj Hacmi: 380 litre",
          "Yakıt Deposu: 50 litre",
          "CO2 Emisyonu: 111-168 g/km",
          "Ağırlık: 1.320-1.520 kg"
        ],
        problems: [
          "EA888 Gen4 zamanlama zinciri sorunları",
          "48V hafif hibrit sistem arızaları",
          "MMI dokunmatik yanıt gecikmesi",
          "S tronic DQ381 adaptasyon sorunu",
          "LED matrix far kalibrasyon problemi",
          "Turbo intercooler sızıntı sorunu",
          "Yakıt enjektörü karbon birikimi",
          "Park asistanı kamera arızası"
        ]
      },
      "A4": {
        specs: [
          "Motor: 2.0L TFSI + Mild Hybrid",
          "Güç: 150-265 HP",
          "Tork: 250-370 Nm",
          "Yakıt Tüketimi: 6.1-7.8L/100km",
          "Şanzıman: 6-7 İleri Manuel/S tronic",
          "0-100 km/h: 6.2-8.5 saniye",
          "Maksimum Hız: 210-250 km/h",
          "Çekiş: Önden Çekiş/Quattro AWD",
          "Bagaj Hacmi: 460 litre",
          "Yakıt Deposu: 54 litre",
          "CO2 Emisyonu: 138-177 g/km",
          "Ağırlık: 1.520-1.680 kg"
        ],
        problems: [
          "EA888 evo4 motor zamanlama zinciri sorunu",
          "48V hafif hibrit sistem arızası",
          "MMI dokunmatik yanıt donma sorunu",
          "S tronic DQ381 adaptasyon gecikmesi",
          "Quattro ultra kavrama elektronik kontrol",
          "LED matrix far adaptif sistem arızası",
          "Turbo intercooler sızıntı problemi",
          "Park asistanı sensör kalibrasyonu"
        ]
      },
      "A5": {
        specs: [
          "Motor: 2.0L-3.0L TFSI + Mild Hybrid",
          "Güç: 150-354 HP",
          "Tork: 250-500 Nm",
          "Yakıt Tüketimi: 6.4-8.2L/100km",
          "Şanzıman: 6-7 İleri Manuel/S tronic",
          "0-100 km/h: 4.7-8.2 saniye",
          "Maksimum Hız: 210-280 km/h",
          "Çekiş: Önden Çekiş/Quattro AWD",
          "Bagaj Hacmi: 465 litre",
          "Yakıt Deposu: 58 litre",
          "CO2 Emisyonu: 145-186 g/km",
          "Ağırlık: 1.570-1.750 kg"
        ],
        problems: [
          "EA888/EA839 zamanlama zinciri aşınması",
          "48V sistem kalibrasyon sorunları",
          "Sanal Kokpit Plus donma sorunu",
          "S tronic DQ500 adaptasyon problemi",
          "Quattro sport diferansiyel arızası",
          "LED matrix far kalibrasyon sorunu",
          "Turbo intercooler sızıntı problemi",
          "Park asistanı kamera kalibrasyonu"
        ]
      },
      "A6": {
        specs: [
          "Motor: 2.0L-4.0L TFSI + Mild Hybrid",
          "Güç: 204-600 HP",
          "Tork: 320-800 Nm",
          "Yakıt Tüketimi: 6.4-10.7L/100km",
          "Şanzıman: 7-8 İleri S tronic/Tiptronic",
          "0-100 km/h: 3.6-7.3 saniye",
          "Maksimum Hız: 210-305 km/h",
          "Çekiş: Önden Çekiş/Quattro AWD",
          "Bagaj Hacmi: 530 litre",
          "Yakıt Deposu: 63 litre",
          "CO2 Emisyonu: 145-243 g/km",
          "Ağırlık: 1.720-1.995 kg"
        ],
        problems: [
          "EA888 Gen3 motor zamanlama zinciri problemi",
          "48V hafif hibrit sistem arızası",
          "Quattro ultra kavrama elektronik kontrol sorunu",
          "MMI dokunmatik ekran donma sorunu",
          "Hava süspansiyonu kompresörü arızası",
          "LED matrix far adaptif kontrol problemi",
          "V8 TFSI turbo intercooler sızıntısı",
          "Park asistanı 360 derece kamera arızası"
        ]
      },
      "A7": {
        specs: [
          "Motor: 2.0L-4.0L TFSI + Mild Hybrid",
          "Güç: 204-600 HP",
          "Tork: 320-800 Nm",
          "Yakıt Tüketimi: 6.8-10.9L/100km",
          "Şanzıman: 7-8 İleri S tronic/Tiptronic",
          "0-100 km/h: 3.6-7.5 saniye",
          "Maksimum Hız: 210-305 km/h",
          "Çekiş: Önden Çekiş/Quattro AWD",
          "Bagaj Hacmi: 535 litre",
          "Yakıt Deposu: 63 litre",
          "CO2 Emisyonu: 154-248 g/km",
          "Ağırlık: 1.795-2.070 kg"
        ],
        problems: [
          "V8 TFSI turbo intercooler sızıntısı",
          "48V hafif hibrit kalibrasyon sorunu",
          "MMI dokunmatik yanıt bağlantı sorunu",
          "Quattro sport diferansiyel elektronik kontrol",
          "Hava süspansiyonu kompresörü erken arızası",
          "LED matrix far adaptif sistem arızası",
          "Park asistanı kamera kalibrasyonu",
          "Aktif süspansiyon yazılım güncellemeleri"
        ]
      },
      "Q2": {
        specs: [
          "Motor: 1.0L-2.0L TFSI Turbo",
          "Güç: 116-190 HP",
          "Tork: 200-320 Nm",
          "Yakıt Tüketimi: 5.1-6.8L/100km",
          "Şanzıman: 6-7 İleri Manuel/S tronic",
          "0-100 km/h: 7.4-9.6 saniye",
          "Maksimum Hız: 205-230 km/h",
          "Çekiş: Önden Çekiş/Quattro AWD",
          "Bagaj Hacmi: 405 litre",
          "Yakıt Deposu: 50 litre",
          "CO2 Emisyonu: 115-154 g/km",
          "Ağırlık: 1.320-1.485 kg"
        ],
        problems: [
          "EA211/EA888 zamanlama sorunları",
          "S tronic kavrama paketi aşınması",
          "Sanal Kokpit ekran arızası",
          "LED far içinde nem birikimi",
          "Klima kompresörü erken arızası",
          "Turbo actuator elektronik sorunu",
          "Park asistanı sensör kalibrasyonu",
          "Quattro kavrama elektronik kontrol"
        ]
      },
      "Q3": {
        specs: [
          "Motor: 1.4L-2.0L TFSI + Mild Hybrid",
          "Güç: 150-245 HP",
          "Tork: 250-370 Nm",
          "Yakıt Tüketimi: 6.1-7.8L/100km",
          "Şanzıman: 6-7 İleri Manuel/S tronic",
          "0-100 km/h: 6.3-8.8 saniye",
          "Maksimum Hız: 210-240 km/h",
          "Çekiş: Önden Çekiş/Quattro AWD",
          "Bagaj Hacmi: 530 litre",
          "Yakıt Deposu: 60 litre",
          "CO2 Emisyonu: 138-177 g/km",
          "Ağırlık: 1.520-1.680 kg"
        ],
        problems: [
          "EA888 Gen4 zamanlama zinciri sorunu",
          "48V hafif hibrit arızaları",
          "MMI dokunmatik yanıt sorunları",
          "S tronic DQ381 adaptasyon gecikmesi",
          "Quattro ultra kavrama elektronik kontrol",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera arızası",
          "Turbo intercooler sızıntı sorunu"
        ]
      },
      "Q5": {
        specs: [
          "Motor: 2.0L TFSI + Mild Hybrid",
          "Güç: 190-367 HP",
          "Tork: 320-500 Nm",
          "Yakıt Tüketimi: 7.6-9.1L/100km",
          "Şanzıman: 7-8 İleri S tronic/Tiptronic",
          "0-100 km/h: 5.8-7.9 saniye",
          "Maksimum Hız: 210-250 km/h",
          "Çekiş: Quattro AWD",
          "Bagaj Hacmi: 550 litre",
          "Yakıt Deposu: 70 litre",
          "CO2 Emisyonu: 172-206 g/km",
          "Ağırlık: 1.770-1.945 kg"
        ],
        problems: [
          "EA888 Gen3 motor zamanlama zinciri aşınması",
          "48V hafif hibrit sistem arızası",
          "Quattro ultra kavrama elektronik sorunu",
          "MMI dokunmatik ekran donma sorunu",
          "Hava süspansiyonu kompresörü arızası",
          "LED matrix far adaptif kontrol problemi",
          "Park asistanı 360 derece kamera arızası",
          "Turbo intercooler sızıntı problemi"
        ]
      },
      "Q7": {
        specs: [
          "Motor: 2.0L-4.0L TFSI + Mild Hybrid",
          "Güç: 252-500 HP",
          "Tork: 370-660 Nm",
          "Yakıt Tüketimi: 8.7-11.9L/100km",
          "Şanzıman: 8 İleri Tiptronic",
          "0-100 km/h: 4.2-7.1 saniye",
          "Maksimum Hız: 210-280 km/h",
          "Çekiş: Quattro AWD",
          "Bagaj Hacmi: 770 litre",
          "Yakıt Deposu: 85 litre",
          "CO2 Emisyonu: 197-270 g/km",
          "Ağırlık: 2.240-2.485 kg"
        ],
        problems: [
          "EA888/EA839 motor zamanlama zinciri sorunu",
          "48V hafif hibrit sistem arızası",
          "Hava süspansiyonu kompresörü erken arızası",
          "MMI dokunmatik ekran bağlantı sorunu",
          "Quattro sport diferansiyel elektronik kontrol",
          "LED matrix far adaptif sistem arızası",
          "V8 TFSI turbo intercooler sızıntısı",
          "Park asistanı kamera kalibrasyonu"
        ]
      }
    }
  },
  "Volkswagen": {
    logo: "https://www.carlogos.org/car-logos/volkswagen-logo.png",
    models: [
      {
        name: "Polo",
        year: "2017-2024",
        description: "Subcompact hatchback",
        image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=VW+Polo",
        prices: { new: "1.400.000 - 1.900.000 TL", used: "800.000 - 1.300.000 TL" }
      },
      {
        name: "Golf",
        year: "2019-2024",
        description: "Kompakt hatchback",
        image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=VW+Golf",
        prices: { new: "1.600.000 - 2.400.000 TL", used: "1.000.000 - 1.700.000 TL" }
      },
      {
        name: "Jetta",
        year: "2018-2024",
        description: "Kompakt sedan",
        image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=VW+Jetta",
        prices: { new: "1.800.000 - 2.500.000 TL", used: "1.100.000 - 1.800.000 TL" }
      },
      {
        name: "Passat",
        year: "2014-2024",
        description: "Mid-size sedan",
        image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=VW+Passat",
        prices: { new: "2.200.000 - 4.300.000 TL", used: "1.300.000 - 2.800.000 TL" }
      },
      {
        name: "Arteon",
        year: "2017-2024",
        description: "Executive fastback",
        image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=VW+Arteon",
        prices: { new: "3.500.000 - 4.800.000 TL", used: "2.000.000 - 3.200.000 TL" }
      },
      {
        name: "T-Cross",
        year: "2018-2024",
        description: "Subcompact SUV",
        image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=VW+T-Cross",
        prices: { new: "1.500.000 - 1.900.000 TL", used: "900.000 - 1.400.000 TL" }
      },
      {
        name: "T-Roc",
        year: "2017-2024",
        description: "Kompakt SUV",
        image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=VW+T-Roc",
        prices: { new: "1.800.000 - 2.200.000 TL", used: "1.100.000 - 1.700.000 TL" }
      },
      {
        name: "Tiguan",
        year: "2016-2024",
        description: "Kompakt SUV",
        image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=VW+Tiguan",
        prices: { new: "2.100.000 - 3.900.000 TL", used: "1.400.000 - 2.800.000 TL" }
      },
      {
        name: "Touareg",
        year: "2018-2024",
        description: "Mid-size SUV",
        image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=VW+Touareg",
        prices: { new: "8.500.000 - 11.000.000 TL", used: "4.200.000 - 7.500.000 TL" }
      },
      {
        name: "ID.4",
        year: "2021-2024",
        description: "Electric compact SUV",
        image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=VW+ID.4",
        prices: { new: "2.500.000 - 3.200.000 TL", used: "1.800.000 - 2.600.000 TL" }
      }
    ],
    details: {
      "Polo": {
        specs: [
          "Motor: 1.0L-1.5L TSI Turbo",
          "Güç: 80-150 HP",
          "Tork: 160-250 Nm",
          "Yakıt Tüketimi: 4.7-5.9L/100km",
          "Şanzıman: 5-7 İleri Manuel/DSG",
          "0-100 km/h: 7.9-11.9 saniye",
          "Maksimum Hız: 185-220 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 351 litre",
          "Yakıt Deposu: 40 litre",
          "CO2 Emisyonu: 106-134 g/km",
          "Ağırlık: 1.145-1.280 kg"
        ],
        problems: [
          "EA211 motor zamanlama zinciri gerginlik sorunu",
          "DSG DQ200 kavrama aşınması",
          "LED far içinde nem birikimi",
          "Klima evaporatör sızıntısı",
          "Park asistanı sensör kalibrasyonu",
          "Turbo actuator elektronik arızası",
          "Yakıt pompası yüksek basınç sorunu",
          "Elektrikli cam mekanizması arızası"
        ]
      },
      "Golf": {
        specs: [
          "Motor: 1.0L-2.0L TSI eTSI",
          "Güç: 90-320 HP",
          "Tork: 175-420 Nm",
          "Yakıt Tüketimi: 4.9-7.8L/100km",
          "Şanzıman: 6-7 İleri Manuel/DSG",
          "0-100 km/h: 4.9-10.2 saniye",
          "Maksimum Hız: 200-270 km/h",
          "Çekiş: Önden Çekiş/4MOTION AWD",
          "Bagaj Hacmi: 380 litre",
          "Yakıt Deposu: 50 litre",
          "CO2 Emisyonu: 111-177 g/km",
          "Ağırlık: 1.270-1.520 kg"
        ],
        problems: [
          "EA888 evo4 motor yeni nesil sorunları",
          "48V eTSI hafif hibrit sistem arızası",
          "DSG DQ381 adaptasyon gecikmesi",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera arızası",
          "Turbo intercooler sızıntı sorunu",
          "Yakıt enjektörü karbon birikimi",
          "Klima kompresörü erken arızası"
        ]
      },
      "Jetta": {
        specs: [
          "Motor: 1.4L-2.0L TSI Turbo",
          "Güç: 150-228 HP",
          "Tork: 250-350 Nm",
          "Yakıt Tüketimi: 5.8-7.2L/100km",
          "Şanzıman: 6-8 İleri Manuel/DSG",
          "0-100 km/h: 6.7-8.5 saniye",
          "Maksimum Hız: 210-240 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 510 litre",
          "Yakıt Deposu: 50 litre",
          "CO2 Emisyonu: 131-163 g/km",
          "Ağırlık: 1.320-1.450 kg"
        ],
        problems: [
          "EA888 Gen3 zamanlama zinciri aşınması",
          "DSG DQ381 adaptasyon sorunları",
          "LED far balast arızası",
          "Klima evaporatör sızıntısı",
          "Park asistanı sensör kalibrasyonu",
          "Turbo intercooler sızıntı problemi",
          "Yakıt pompası yüksek basınç sorunu",
          "Elektrikli direksiyon arızası"
        ]
      },
      "Passat": {
        specs: [
          "Motor: 1.4L-2.0L TSI BiTurbo",
          "Güç: 125-280 HP",
          "Tork: 200-400 Nm",
          "Yakıt Tüketimi: 5.6-8.1L/100km",
          "Şanzıman: 6-7 İleri Manuel/DSG",
          "0-100 km/h: 6.1-9.6 saniye",
          "Maksimum Hız: 210-250 km/h",
          "Çekiş: Önden Çekiş/4MOTION AWD",
          "Bagaj Hacmi: 586 litre",
          "Yakıt Deposu: 66 litre",
          "CO2 Emisyonu: 127-184 g/km",
          "Ağırlık: 1.470-1.650 kg"
        ],
        problems: [
          "EA888 Gen3 motor zamanlama zinciri aşınması",
          "DSG DQ381 şanzıman adaptasyon sorunu",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera arızası",
          "Turbo intercooler sızıntı sorunu",
          "Klima kompresörü erken arızası",
          "4MOTION kavrama elektronik kontrol",
          "Yakıt enjektörü karbon birikimi"
        ]
      },
      "Arteon": {
        specs: [
          "Motor: 1.5L-2.0L TSI + eHybrid",
          "Güç: 150-320 HP",
          "Tork: 250-420 Nm",
          "Yakıt Tüketimi: 5.9-8.4L/100km",
          "Şanzıman: 7 İleri DSG",
          "0-100 km/h: 5.6-8.7 saniye",
          "Maksimum Hız: 210-250 km/h",
          "Çekiş: Önden Çekiş/4MOTION AWD",
          "Bagaj Hacmi: 563 litre",
          "Yakıt Deposu: 66 litre",
          "CO2 Emisyonu: 134-191 g/km",
          "Ağırlık: 1.580-1.750 kg"
        ],
        problems: [
          "EA888 evo4 zamanlama sorunları",
          "eHybrid sistem yazılım hataları",
          "DSG DQ381 adaptasyon gecikmesi",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera arızası",
          "Hibrit batarya soğutma sistemi",
          "Turbo intercooler sızıntı sorunu",
          "4MOTION kavrama elektronik kontrol"
        ]
      },
      "T-Cross": {
        specs: [
          "Motor: 1.0L-1.5L TSI Turbo",
          "Güç: 95-150 HP",
          "Tork: 175-250 Nm",
          "Yakıt Tüketimi: 5.2-6.1L/100km",
          "Şanzıman: 5-7 İleri Manuel/DSG",
          "0-100 km/h: 8.5-10.2 saniye",
          "Maksimum Hız: 190-205 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 385 litre",
          "Yakıt Deposu: 40 litre",
          "CO2 Emisyonu: 118-138 g/km",
          "Ağırlık: 1.205-1.320 kg"
        ],
        problems: [
          "EA211 motor karbon birikimi",
          "DSG DQ200 sarsıntı sorunu",
          "LED far içinde nem birikimi",
          "Klima evaporatör sızıntısı",
          "Park asistanı sensör kalibrasyonu",
          "Turbo actuator elektronik arızası",
          "Yakıt pompası basınç sorunu",
          "Elektrikli cam mekanizması"
        ]
      },
      "T-Roc": {
        specs: [
          "Motor: 1.0L-2.0L TSI Turbo",
          "Güç: 115-300 HP",
          "Tork: 200-400 Nm",
          "Yakıt Tüketimi: 5.9-7.8L/100km",
          "Şanzıman: 6-7 İleri Manuel/DSG",
          "0-100 km/h: 4.9-9.2 saniye",
          "Maksimum Hız: 205-250 km/h",
          "Çekiş: Önden Çekiş/4MOTION AWD",
          "Bagaj Hacmi: 445 litre",
          "Yakıt Deposu: 50 litre",
          "CO2 Emisyonu: 134-177 g/km",
          "Ağırlık: 1.320-1.520 kg"
        ],
        problems: [
          "EA888 Gen3 zamanlama zinciri sorunu",
          "DSG DQ381 adaptasyon problemi",
          "LED matrix far kalibrasyon sorunu",
          "Park asistanı kamera arızası",
          "4MOTION kavrama elektronik kontrol",
          "Turbo intercooler sızıntı problemi",
          "Klima kompresörü erken arızası",
          "Yakıt enjektörü karbon birikimi"
        ]
      },
      "Tiguan": {
        specs: [
          "Motor: 1.4L-2.0L TSI + eTSI",
          "Güç: 125-245 HP",
          "Tork: 200-370 Nm",
          "Yakıt Tüketimi: 6.2-8.1L/100km",
          "Şanzıman: 6-8 İleri Manuel/DSG",
          "0-100 km/h: 6.5-9.3 saniye",
          "Maksimum Hız: 200-220 km/h",
          "Çekiş: Önden Çekiş/4MOTION AWD",
          "Bagaj Hacmi: 615 litre",
          "Yakıt Deposu: 60 litre",
          "CO2 Emisyonu: 141-184 g/km",
          "Ağırlık: 1.585-1.750 kg"
        ],
        problems: [
          "48V eTSI hafif hibrit sistem arızası",
          "DSG DQ381 şanzıman adaptasyon sorunu",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı 360 derece kamera arızası",
          "4MOTION kavrama elektronik kontrol",
          "Turbo intercooler sızıntı sorunu",
          "Klima kompresörü erken arızası",
          "Yakıt enjektörü karbon birikimi"
        ]
      },
      "Touareg": {
        specs: [
          "Motor: 3.0L V6 TSI + eHybrid",
          "Güç: 340-462 HP",
          "Tork: 450-700 Nm",
          "Yakıt Tüketimi: 8.2-10.5L/100km",
          "Şanzıman: 8 İleri Tiptronic",
          "0-100 km/h: 4.9-6.1 saniye",
          "Maksimum Hız: 230-250 km/h",
          "Çekiş: 4MOTION AWD",
          "Bagaj Hacmi: 810 litre",
          "Yakıt Deposu: 90 litre",
          "CO2 Emisyonu: 186-238 g/km",
          "Ağırlık: 2.205-2.485 kg"
        ],
        problems: [
          "EA839 V6 zamanlama zinciri sorunları",
          "eHybrid sistem kalibrasyon sorunu",
          "Hava süspansiyonu kompresörü arızası",
          "LED matrix far adaptif kontrol problemi",
          "Park asistanı kamera kalibrasyonu",
          "4MOTION sport diferansiyel elektronik kontrol",
          "Hibrit batarya termal yönetim",
          "Turbo intercooler sızıntı problemi"
        ]
      },
      "ID.4": {
        specs: [
          "Motor: Single/Dual Electric Motor",
          "Güç: 170-265 HP",
          "Tork: 310-425 Nm",
          "Menzil: 350-520 km",
          "Şarj Hızı: 11-125 kW",
          "0-100 km/h: 6.9-10.9 saniye",
          "Maksimum Hız: 160-180 km/h",
          "Çekiş: Arka Çekiş/4MOTION AWD",
          "Bagaj Hacmi: 543 litre",
          "Batarya Kapasitesi: 52-77 kWh",
          "DC Şarj: CCS Combo 2",
          "Ağırlık: 1.973-2.124 kg"
        ],
        problems: [
          "Elektrik motor inverter sorunları",
          "Batarya termal yönetim sistemi",
          "ID. yazılım güncellemeleri",
          "Şarj portu bağlantı sorunları",
          "Isı pompası sistem arızaları",
          "12V batarya erken boşalması",
          "Dokunmatik kontrol yanıt gecikmesi",
          "OTA güncelleme başarısızlığı"
        ]
      }
    }
  },
  "Toyota": {
    logo: "https://www.carlogos.org/car-logos/toyota-logo.png",
    models: [
      { name: "Yaris", year: "2020-2024", description: "Subcompact hatchback", image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Toyota+Yaris", prices: { new: "1.300.000 - 1.750.000 TL", used: "800.000 - 1.200.000 TL" } },
      { name: "Corolla", year: "2019-2024", description: "Compact sedan ve hatchback", image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Toyota+Corolla", prices: { new: "1.400.000 - 1.900.000 TL", used: "900.000 - 1.400.000 TL" } },
      { name: "Camry", year: "2018-2024", description: "Mid-size sedan", image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Toyota+Camry", prices: { new: "2.800.000 - 3.500.000 TL", used: "1.800.000 - 2.600.000 TL" } },
      { name: "Avalon", year: "2018-2024", description: "Full-size sedan", image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Toyota+Avalon", prices: { new: "3.200.000 - 4.000.000 TL", used: "2.200.000 - 3.000.000 TL" } },
      { name: "C-HR", year: "2016-2024", description: "Subcompact crossover SUV", image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Toyota+C-HR", prices: { new: "1.800.000 - 2.400.000 TL", used: "1.100.000 - 1.700.000 TL" } },
      { name: "RAV4", year: "2019-2024", description: "Compact SUV", image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Toyota+RAV4", prices: { new: "2.700.000 - 3.500.000 TL", used: "1.800.000 - 2.600.000 TL" } },
      { name: "Highlander", year: "2020-2024", description: "Mid-size SUV", image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Toyota+Highlander", prices: { new: "4.500.000 - 5.800.000 TL", used: "3.200.000 - 4.500.000 TL" } },
      { name: "Land Cruiser", year: "2021-2024", description: "Full-size SUV", image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Toyota+Land+Cruiser", prices: { new: "8.000.000 - 12.000.000 TL", used: "6.000.000 - 9.500.000 TL" } },
      { name: "Prius", year: "2016-2024", description: "Compact hybrid hatchback", image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Toyota+Prius", prices: { new: "2.200.000 - 2.800.000 TL", used: "1.400.000 - 2.000.000 TL" } },
      { name: "Urban Cruiser", year: "2009-2020", description: "Compact hybrid SUV", image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Toyota+Urban+Cruiser", prices: { new: "-", used: "700.000 - 850.000 TL" } }
    ],
    details: {
      "Yaris": {
        specs: [
          "Motor: 1.0L-1.5L + Hybrid Dynamic Force",
          "Güç: 72-125 HP",
          "Tork: 93-120 Nm",
          "Yakıt Tüketimi: 3.8-5.2L/100km",
          "Şanzıman: 5-6 İleri Manuel/CVT",
          "0-100 km/h: 9.7-11.8 saniye",
          "Maksimum Hız: 175-185 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 286 litre",
          "Yakıt Deposu: 42 litre",
          "CO2 Emisyonu: 87-118 g/km",
          "Ağırlık: 1.010-1.120 kg"
        ],
        problems: [
          "M15A-FKE motor karbon birikimi",
          "CVT şanzıman sarsıntı sorunu",
          "Hibrit batarya soğutma sistemi",
          "LED far balast arızası",
          "Klima evaporatör sızıntısı",
          "Park asistanı sensör kalibrasyonu",
          "Yakıt pompası basınç sorunu",
          "Elektrikli direksiyon arızası"
        ]
      },
      "Corolla": {
        specs: [
          "Motor: 1.2L-2.0L Turbo + Hybrid",
          "Güç: 116-272 HP",
          "Tork: 185-370 Nm",
          "Yakıt Tüketimi: 4.2-6.8L/100km",
          "Şanzıman: 6 İleri Manuel/CVT",
          "0-100 km/h: 6.2-10.9 saniye",
          "Maksimum Hız: 180-230 km/h",
          "Çekiş: Önden Çekiş/AWD",
          "Bagaj Hacmi: 361 litre",
          "Yakıt Deposu: 50 litre",
          "CO2 Emisyonu: 96-154 g/km",
          "Ağırlık: 1.315-1.435 kg"
        ],
        problems: [
          "M20A-FKS motor yağ seyreltme sorunu",
          "CVT şanzıman yazılım güncellemeleri",
          "Hibrit sistem koordinasyon sorunu",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera arızası",
          "Klima kompresörü erken arızası",
          "Yakıt enjektörü karbon birikimi",
          "TSS 2.0 güvenlik sistemi kalibrasyonu"
        ]
      },
      "Camry": {
        specs: [
          "Motor: 2.5L + Hybrid Dynamic Force",
          "Güç: 203-208 HP",
          "Tork: 247-221 Nm",
          "Yakıt Tüketimi: 4.3-6.8L/100km",
          "Şanzıman: 8 İleri Otomatik/CVT",
          "0-100 km/h: 7.1-8.4 saniye",
          "Maksimum Hız: 210 km/h",
          "Çekiş: Önden Çekiş/AWD",
          "Bagaj Hacmi: 524 litre",
          "Yakıt Deposu: 60 litre",
          "CO2 Emisyonu: 98-154 g/km",
          "Ağırlık: 1.590-1.685 kg"
        ],
        problems: [
          "A25A-FKS motor yağ seyreltme sorunu",
          "8 ileri otomatik şanzıman adaptasyon sorunu",
          "Hibrit sistem inverter arızası",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera kalibrasyonu",
          "Klima kompresörü erken arızası",
          "TSS 2.5+ güvenlik sistemi arızası",
          "Yakıt enjektörü karbon birikimi"
        ]
      },
      "Avalon": {
        specs: [
          "Motor: 3.5L V6 + Hybrid",
          "Güç: 301-215 HP",
          "Tork: 362-221 Nm",
          "Yakıt Tüketimi: 5.1-7.8L/100km",
          "Şanzıman: 8 İleri Otomatik/CVT",
          "0-100 km/h: 6.0-8.1 saniye",
          "Maksimum Hız: 210 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 456 litre",
          "Yakıt Deposu: 60 litre",
          "CO2 Emisyonu: 116-177 g/km",
          "Ağırlık: 1.650-1.730 kg"
        ],
        problems: [
          "2GR-FKS V6 motor karbon birikimi",
          "8 ileri otomatik şanzıman sarsıntı sorunu",
          "Hibrit sistem koordinasyon problemi",
          "LED matrix far adaptif kontrol arızası",
          "Park asistanı kamera kalibrasyonu",
          "Klima kompresörü erken arızası",
          "TSS 2.5+ güvenlik sistemi kalibrasyonu",
          "V6 motor zamanlama zinciri aşınması"
        ]
      },
      "C-HR": {
        specs: [
          "Motor: 1.2L Turbo + 1.8L Hybrid",
          "Güç: 116-122 HP",
          "Tork: 185-142 Nm",
          "Yakıt Tüketimi: 4.3-6.1L/100km",
          "Şanzıman: 6 İleri Manuel/CVT",
          "0-100 km/h: 9.2-11.8 saniye",
          "Maksimum Hız: 170-185 km/h",
          "Çekiş: Önden Çekiş/AWD",
          "Bagaj Hacmi: 377 litre",
          "Yakıt Deposu: 43 litre",
          "CO2 Emisyonu: 98-138 g/km",
          "Ağırlık: 1.395-1.440 kg"
        ],
        problems: [
          "8NR-FTS turbo motor karbon birikimi",
          "CVT şanzıman yazılım sorunları",
          "Hibrit sistem koordinasyon problemi",
          "LED far balast arızası",
          "Park asistanı sensör kalibrasyonu",
          "Klima evaporatör sızıntısı",
          "TSS güvenlik sistemi kalibrasyonu",
          "Turbo actuator elektronik arızası"
        ]
      },
      "RAV4": {
        specs: [
          "Motor: 2.0L-2.5L + Hybrid Dynamic Force",
          "Güç: 203-302 HP",
          "Tork: 203-270 Nm",
          "Yakıt Tüketimi: 4.9-6.8L/100km",
          "Şanzıman: CVT/8 İleri Otomatik",
          "0-100 km/h: 6.0-8.1 saniye",
          "Maksimum Hız: 180-200 km/h",
          "Çekiş: Önden Çekiş/AWD",
          "Bagaj Hacmi: 580 litre",
          "Yakıt Deposu: 55 litre",
          "CO2 Emisyonu: 111-154 g/km",
          "Ağırlık: 1.595-1.685 kg"
        ],
        problems: [
          "A25A-FKS motor yağ seyreltme sorunu",
          "Hibrit sistem yazılım güncellemeleri",
          "CVT şanzıman geç tepki sorunu",
          "AWD sistem elektronik kontrol",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera arızası",
          "TSS 2.0 güvenlik sistemi kalibrasyonu",
          "Klima kompresörü erken arızası"
        ]
      },
      "Highlander": {
        specs: [
          "Motor: 3.5L V6 + Hybrid",
          "Güç: 295-243 HP",
          "Tork: 356-221 Nm",
          "Yakıt Tüketimi: 6.6-8.1L/100km",
          "Şanzıman: 8 İleri Otomatik/CVT",
          "0-100 km/h: 7.3-8.4 saniye",
          "Maksimum Hız: 200 km/h",
          "Çekiş: Önden Çekiş/AWD",
          "Bagaj Hacmi: 606 litre",
          "Yakıt Deposu: 65 litre",
          "CO2 Emisyonu: 150-184 g/km",
          "Ağırlık: 1.925-2.040 kg"
        ],
        problems: [
          "2GR-FKS V6 motor karbon birikimi sorunu",
          "8 ileri otomatik şanzıman adaptasyon sorunu",
          "Hibrit sistem koordinasyon problemi",
          "AWD sistem elektronik kontrol",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera kalibrasyonu",
          "TSS 2.5+ güvenlik sistemi arızası",
          "V6 motor zamanlama zinciri aşınması"
        ]
      },
      "Land Cruiser": {
        specs: [
          "Motor: 3.3L V6 Twin-Turbo Hybrid",
          "Güç: 409 HP",
          "Tork: 650 Nm",
          "Yakıt Tüketimi: 8.9-10.5L/100km",
          "Şanzıman: 10 İleri Otomatik",
          "0-100 km/h: 6.7 saniye",
          "Maksimum Hız: 210 km/h",
          "Çekiş: 4WD",
          "Bagaj Hacmi: 700 litre",
          "Yakıt Deposu: 110 litre",
          "CO2 Emisyonu: 202-238 g/km",
          "Ağırlık: 2.630-2.740 kg"
        ],
        problems: [
          "V35A-FTS twin-turbo intercooler sızıntısı",
          "Hibrit sistem yazılım güncellemeleri",
          "10 ileri otomatik şanzıman adaptasyon",
          "Multi-terrain sistemi kalibrasyon",
          "LED matrix far adaptif kontrol",
          "Park asistanı kamera kalibrasyonu",
          "TSS 2.5+ güvenlik sistemi arızası",
          "Hava süspansiyonu kompresörü arızası"
        ]
      },
      "Prius": {
        specs: [
          "Motor: 1.8L-2.0L Hybrid Dynamic Force",
          "Güç: 122-196 HP",
          "Tork: 142-190 Nm",
          "Yakıt Tüketimi: 3.9-4.6L/100km",
          "Şanzıman: CVT",
          "0-100 km/h: 8.1-10.6 saniye",
          "Maksimum Hız: 180 km/h",
          "Çekiş: Önden Çekiş/AWD",
          "Bagaj Hacmi: 502 litre",
          "Yakıt Deposu: 43 litre",
          "CO2 Emisyonu: 89-104 g/km",
          "Ağırlık: 1.380-1.490 kg"
        ],
        problems: [
          "2ZR-FXE motor yağ tüketimi sorunu",
          "Hibrit batarya soğutma sistemi arızası",
          "CVT şanzıman yazılım güncellemeleri",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera arızası",
          "Klima kompresörü erken arızası",
          "TSS 2.0 güvenlik sistemi kalibrasyonu",
          "Hibrit sistem inverter arızası"
        ]
      },
      "Urban Cruiser": {
        specs: [
          "Motor: 1.5L 4 Silindir + Hibrit Sistem",
          "Güç: 91-103 HP",
          "Tork: 122-135 Nm",
          "Yakıt Tüketimi: 4.8-5.2L/100km",
          "Şanzıman: CVT Otomatik",
          "0-100 km/h: 11.2-12.8 saniye",
          "Maksimum Hız: 170-180 km/h",
          "Çekiş: Önden Çekiş/AWD",
          "Bagaj Hacmi: 373 litre",
          "Yakıt Deposu: 48 litre",
          "CO2 Emisyonu: 109-118 g/km",
          "Ağırlık: 1.240-1.320 kg"
        ],
        problems: [
          "Hibrit sistem koordinasyon sorunu",
          "CVT şanzıman sarsıntı problemi",
          "Sürücü kapısı kapanma zorluğu",
          "Panoramik tavan ısı geçirgenliği",
          "Bluetooth bağlantı kopma sorunu",
          "İnfotainment sistemi donma problemi",
          "DPF tıkanma sorunu (dizel versiyonlarda)",
          "Debriyaj erken aşınması",
          "Süspansiyon yorgunluğu",
          "ABS sensör arızaları"
        ]
      }
    }
  },
  "Tesla": {
    logo: "https://www.carlogos.org/car-logos/tesla-logo.png",
    models: [
      { name: "Model S", year: "2021-2024", description: "Luxury electric sedan", image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Tesla+Model+S", prices: { new: "6.500.000 - 8.200.000 TL", used: "4.800.000 - 6.800.000 TL" } },
      { name: "Model 3", year: "2019-2024", description: "Compact electric sedan", image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Tesla+Model+3", prices: { new: "2.800.000 - 3.600.000 TL", used: "2.000.000 - 2.900.000 TL" } },
      { name: "Model X", year: "2021-2024", description: "Luxury electric SUV", image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Tesla+Model+X", prices: { new: "7.800.000 - 9.500.000 TL", used: "5.800.000 - 7.800.000 TL" } },
      { name: "Model Y", year: "2020-2024", description: "Compact electric SUV", image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Tesla+Model+Y", prices: { new: "2.300.000 - 4.400.000 TL", used: "1.800.000 - 3.200.000 TL" } },
      { name: "Cybertruck", year: "2024-2024", description: "Electric pickup truck", image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Tesla+Cybertruck", prices: { new: "4.200.000 - 5.800.000 TL", used: "3.800.000 - 5.200.000 TL" } },
      { name: "Roadster", year: "2024-2025", description: "Electric sports car", image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Tesla+Roadster", prices: { new: "12.000.000 - 15.000.000 TL", used: "10.500.000 - 13.500.000 TL" } },
      { name: "Semi", year: "2023-2024", description: "Electric semi truck", image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Tesla+Semi", prices: { new: "9.500.000 - 12.000.000 TL", used: "8.200.000 - 10.800.000 TL" } },
      { name: "Model 2", year: "2025-2026", description: "Compact electric hatchback", image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Tesla+Model+2", prices: { new: "1.800.000 - 2.400.000 TL", used: "1.500.000 - 2.000.000 TL" } },
      { name: "Model Q", year: "2025-2026", description: "Mid-size electric SUV", image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Tesla+Model+Q", prices: { new: "3.800.000 - 4.800.000 TL", used: "3.200.000 - 4.200.000 TL" } },
      { name: "Model P", year: "2026-2027", description: "Performance electric coupe", image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Tesla+Model+P", prices: { new: "6.800.000 - 8.500.000 TL", used: "5.800.000 - 7.500.000 TL" } }
    ],
    details: {
      "Model S": {
        specs: [
          "Motor: Dual/Tri Electric Motor AWD",
          "Güç: 670-1020 HP",
          "Tork: 1020-1420 Nm",
          "Menzil: 634-840 km",
          "Şarj Hızı: 11-250 kW",
          "0-100 km/h: 2.1-3.2 saniye",
          "Maksimum Hız: 200-322 km/h",
          "Çekiş: AWD",
          "Bagaj Hacmi: 804 litre",
          "Batarya Kapasitesi: 100 kWh",
          "DC Şarj: Tesla Supercharger",
          "Ağırlık: 2.265-2.352 kg"
        ],
        problems: [
          "Yoke direksiyon adaptasyon sorunu",
          "MCU2 dokunmatik ekran arızası",
          "Falcon Wing kapı mekanizması (Model X benzeri)",
          "Batarya termal yönetim sistemi",
          "OTA güncelleme bağlantı sorunu",
          "12V batarya erken boşalması",
          "Hava süspansiyonu kompresörü arızası",
          "Autopilot kamera kalibrasyonu"
        ]
      },
      "Model 3": {
        specs: [
          "Motor: Dual/Single Electric Motor",
          "Güç: 283-510 HP",
          "Tork: 420-660 Nm",
          "Menzil: 491-629 km",
          "Şarj Hızı: 11-250 kW",
          "0-100 km/h: 3.3-6.1 saniye",
          "Maksimum Hız: 201-261 km/h",
          "Çekiş: RWD/AWD",
          "Bagaj Hacmi: 561 litre",
          "Batarya Kapasitesi: 60-82 kWh",
          "DC Şarj: Tesla Supercharger",
          "Ağırlık: 1.760-1.930 kg"
        ],
        problems: [
          "Kapı kolu mekanizması donma sorunu",
          "Boya kalitesi ve panel boşlukları",
          "MCU dokunmatik ekran arızası",
          "Batarya termal yönetim sistemi",
          "Autopilot kamera kalibrasyonu",
          "12V batarya erken boşalması",
          "Şarj portu bağlantı sorunları",
          "OTA güncelleme başarısızlığı"
        ]
      },
      "Model X": {
        specs: [
          "Motor: Dual/Tri Electric Motor AWD",
          "Güç: 670-1020 HP",
          "Tork: 1020-1420 Nm",
          "Menzil: 560-700 km",
          "Şarj Hızı: 11-250 kW",
          "0-100 km/h: 2.6-3.8 saniye",
          "Maksimum Hız: 200-262 km/h",
          "Çekiş: AWD",
          "Bagaj Hacmi: 2180 litre",
          "Batarya Kapasitesi: 100 kWh",
          "DC Şarj: Tesla Supercharger",
          "Ağırlık: 2.459-2.561 kg"
        ],
        problems: [
          "Falcon Wing kapı mekanizması arızası",
          "MCU2 dokunmatik ekran donma sorunu",
          "Yoke direksiyon adaptasyon problemi",
          "Batarya termal yönetim sistemi",
          "Hava süspansiyonu kompresörü arızası",
          "12V batarya erken boşalması",
          "Autopilot kamera kalibrasyonu",
          "OTA güncelleme bağlantı sorunu"
        ]
      },
      "Model Y": {
        specs: [
          "Motor: Dual Electric Motor AWD",
          "Güç: 378-534 HP",
          "Tork: 420-660 Nm",
          "Menzil: 533-600 km",
          "Şarj Hızı: 11-250 kW",
          "0-100 km/h: 3.5-5.0 saniye",
          "Maksimum Hız: 217-250 km/h",
          "Çekiş: RWD/AWD",
          "Bagaj Hacmi: 2158 litre",
          "Batarya Kapasitesi: 60-82 kWh",
          "DC Şarj: Tesla Supercharger",
          "Ağırlık: 1.995-2.135 kg"
        ],
        problems: [
          "Isı pompası sistem arızaları",
          "Arka bagaj hizalama sorunları",
          "MCU dokunmatik ekran arızası",
          "Batarya termal yönetim sistemi",
          "Autopilot kamera kalibrasyonu",
          "12V batarya erken boşalması",
          "Boya kalitesi ve panel boşlukları",
          "OTA güncelleme başarısızlığı"
        ]
      },
      "Cybertruck": {
        specs: [
          "Motor: Dual/Tri Electric Motor AWD",
          "Güç: 600-845 HP",
          "Tork: 930-1355 Nm",
          "Menzil: 547-705 km",
          "Şarj Hızı: 11-250 kW",
          "0-100 km/h: 2.6-4.1 saniye",
          "Maksimum Hız: 180-209 km/h",
          "Çekiş: AWD",
          "Yük Kapasitesi: 1134 kg",
          "Batarya Kapasitesi: 123-200 kWh",
          "DC Şarj: Tesla Supercharger",
          "Ağırlık: 3.104-3.670 kg"
        ],
        problems: [
          "Paslanmaz çelik panel lekelenme sorunu",
          "Çeki kapasitesi yazılım sınırlaması",
          "Yoke direksiyon adaptasyon problemi",
          "Batarya termal yönetim sistemi",
          "Autopilot kamera kalibrasyonu",
          "12V batarya erken boşalması",
          "OTA güncelleme bağlantı sorunu",
          "Üretim kalitesi tutarsızlığı"
        ]
      },
      "Roadster": {
        specs: [
          "Motor: Tri Electric Motor AWD + Cold Gas Thrusters",
          "Güç: 1000+ HP",
          "Tork: 10000+ Nm",
          "Menzil: 1000+ km",
          "Şarj Hızı: 11-350 kW",
          "0-100 km/h: 1.9 saniye",
          "Maksimum Hız: 400+ km/h",
          "Çekiş: AWD",
          "Bagaj Hacmi: 300 litre",
          "Batarya Kapasitesi: 200 kWh",
          "DC Şarj: Tesla Supercharger",
          "Ağırlık: 1.800-2.000 kg"
        ],
        problems: [
          "SpaceX paket güvenilirlik sorunu",
          "Karbon fiber gövde dayanıklılık sorunu",
          "Cold gas thruster sistem karmaşıklığı",
          "Batarya termal yönetim sistemi",
          "Autopilot kamera kalibrasyonu",
          "12V batarya erken boşalması",
          "OTA güncelleme bağlantı sorunu",
          "Üretim gecikmeleri ve kalite kontrol"
        ]
      },
      "Semi": {
        specs: [
          "Motor: Quad Electric Motor",
          "Güç: 1000+ HP",
          "Tork: 2000+ Nm",
          "Menzil: 800-965 km",
          "Şarj Hızı: 11-1000 kW (Megacharger)",
          "0-100 km/h: 5.0 saniye (boş)",
          "Maksimum Hız: 105 km/h",
          "Çekiş: AWD",
          "Yük Kapasitesi: 36.000 kg",
          "Batarya Kapasitesi: 500-1000 kWh",
          "DC Şarj: Tesla Megacharger",
          "Ağırlık: 8.845 kg (boş)"
        ],
        problems: [
          "Megacharger altyapı sınırlılığı",
          "Batarya ağırlığı yük kapasitesi etkisi",
          "Autopilot kamera kalibrasyonu",
          "Batarya termal yönetim sistemi",
          "12V batarya erken boşalması",
          "OTA güncelleme bağlantı sorunu",
          "Üretim ölçeklendirme zorlukları",
          "Şarj altyapısı uyumluluk sorunu"
        ]
      },
      "Model 2": {
        specs: [
          "Motor: Single Electric Motor FWD",
          "Güç: 250-300 HP",
          "Tork: 350-420 Nm",
          "Menzil: 400-500 km",
          "Şarj Hızı: 11-150 kW",
          "0-100 km/h: 5.5-6.5 saniye",
          "Maksimum Hız: 180-200 km/h",
          "Çekiş: FWD/AWD",
          "Bagaj Hacmi: 350 litre",
          "Batarya Kapasitesi: 50-70 kWh",
          "DC Şarj: Tesla Supercharger",
          "Ağırlık: 1.600-1.750 kg"
        ],
        problems: [
          "Yeni platform yazılım sorunları",
          "LFP batarya soğuk hava performansı",
          "MCU dokunmatik ekran arızası",
          "Batarya termal yönetim sistemi",
          "Autopilot kamera kalibrasyonu",
          "12V batarya erken boşalması",
          "Şarj portu bağlantı sorunları",
          "OTA güncelleme başarısızlığı"
        ]
      },
      "Model Q": {
        specs: [
          "Motor: Dual Electric Motor AWD",
          "Güç: 450-550 HP",
          "Tork: 600-750 Nm",
          "Menzil: 580-650 km",
          "Şarj Hızı: 11-250 kW",
          "0-100 km/h: 3.8-4.5 saniye",
          "Maksimum Hız: 210-230 km/h",
          "Çekiş: AWD",
          "Bagaj Hacmi: 650 litre",
          "Batarya Kapasitesi: 85-100 kWh",
          "DC Şarj: Tesla Supercharger",
          "Ağırlık: 2.200-2.350 kg"
        ],
        problems: [
          "Yeni SUV platform adaptasyon sorunu",
          "Hava süspansiyonu yazılım sorunları",
          "MCU dokunmatik ekran arızası",
          "Batarya termal yönetim sistemi",
          "Autopilot kamera kalibrasyonu",
          "12V batarya erken boşalması",
          "OTA güncelleme bağlantı sorunu",
          "Üretim kalitesi tutarsızlığı"
        ]
      },
      "Model P": {
        specs: [
          "Motor: Tri Electric Motor AWD",
          "Güç: 800-1000 HP",
          "Tork: 1200-1500 Nm",
          "Menzil: 500-600 km",
          "Şarj Hızı: 11-350 kW",
          "0-100 km/h: 2.2-2.8 saniye",
          "Maksimum Hız: 280-320 km/h",
          "Çekiş: AWD",
          "Bagaj Hacmi: 280 litre",
          "Batarya Kapasitesi: 100-120 kWh",
          "DC Şarj: Tesla Supercharger",
          "Ağırlık: 1.900-2.100 kg"
        ],
        problems: [
          "Yüksek performans batarya ısınma sorunu",
          "Karbon fiber parça dayanıklılık sorunu",
          "MCU dokunmatik ekran arızası",
          "Batarya termal yönetim sistemi",
          "Autopilot kamera kalibrasyonu",
          "12V batarya erken boşalması",
          "OTA güncelleme bağlantı sorunu",
          "Üretim maliyeti ve kalite kontrol"
        ]
      }
    }
  },
  "Ford": {
    logo: "https://www.carlogos.org/car-logos/ford-logo.png",
    models: [
      { name: "Fiesta", year: "2017-2023", description: "Subcompact hatchback", image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Ford+Fiesta", prices: { new: "-", used: "650.000 - 950.000 TL" } },
      { name: "Focus", year: "2018-2024", description: "Compact hatchback/sedan", image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Ford+Focus", prices: { new: "1.200.000 - 1.750.000 TL", used: "800.000 - 1.300.000 TL" } },
      { name: "Mondeo", year: "2019-2024", description: "Mid-size sedan", image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Ford+Mondeo", prices: { new: "-", used: "1.200.000 - 1.800.000 TL" } },
      { name: "EcoSport", year: "2017-2023", description: "Subcompact SUV", image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Ford+EcoSport", prices: { new: "-", used: "750.000 - 1.100.000 TL" } },
      { name: "Kuga", year: "2019-2024", description: "Compact SUV", image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Ford+Kuga", prices: { new: "2.200.000 - 2.800.000 TL", used: "1.400.000 - 2.100.000 TL" } },
      { name: "Edge", year: "2018-2024", description: "Mid-size SUV", image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Ford+Edge", prices: { new: "-", used: "1.600.000 - 2.400.000 TL" } },
      { name: "Mustang", year: "2018-2024", description: "Sports car coupe/convertible", image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Ford+Mustang", prices: { new: "4.500.000 - 6.800.000 TL", used: "3.200.000 - 5.500.000 TL" } },
      { name: "Transit", year: "2019-2024", description: "Large van", image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Ford+Transit", prices: { new: "2.400.000 - 3.000.000 TL", used: "1.600.000 - 2.400.000 TL" } },
      { name: "Transit Custom", year: "2018-2024", description: "Mid-size van", image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Ford+Transit+Custom", prices: { new: "1.500.000 - 1.900.000 TL", used: "1.100.000 - 1.600.000 TL" } },
      { name: "Ranger", year: "2019-2024", description: "Mid-size pickup truck", image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Ford+Ranger", prices: { new: "2.800.000 - 3.800.000 TL", used: "2.000.000 - 3.000.000 TL" } }
    ],
    details: {
      "Fiesta": {
        specs: [
          "Motor: 1.0L-1.5L EcoBoost",
          "Güç: 85-200 HP",
          "Tork: 170-290 Nm",
          "Yakıt Tüketimi: 4.9-6.8L/100km",
          "Şanzıman: 5-6 İleri Manuel/PowerShift",
          "0-100 km/h: 6.5-11.4 saniye",
          "Maksimum Hız: 182-230 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 292 litre",
          "Yakıt Deposu: 42 litre",
          "CO2 Emisyonu: 112-154 g/km",
          "Ağırlık: 1.085-1.245 kg"
        ],
        problems: [
          "1.0 EcoBoost motor soğutma sistemi arızası",
          "PowerShift şanzıman kavrama aşınması",
          "LED far balast arızası",
          "Klima evaporatör sızıntısı",
          "Park asistanı sensör kalibrasyonu",
          "Turbo actuator elektronik arızası",
          "Yakıt pompası basınç sorunu",
          "Elektrikli direksiyon arızası"
        ]
      },
      "Focus": {
        specs: [
          "Motor: 1.0L-2.3L EcoBoost",
          "Güç: 100-350 HP",
          "Tork: 170-440 Nm",
          "Yakıt Tüketimi: 4.8-8.4L/100km",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "0-100 km/h: 5.7-10.5 saniye",
          "Maksimum Hız: 190-270 km/h",
          "Çekiş: Önden Çekiş/AWD",
          "Bagaj Hacmi: 375 litre",
          "Yakıt Deposu: 52 litre",
          "CO2 Emisyonu: 108-191 g/km",
          "Ağırlık: 1.245-1.524 kg"
        ],
        problems: [
          "1.0 EcoBoost motor zamanlama kayışı aşınması",
          "8 ileri otomatik şanzıman adaptasyon sorunu",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera arızası",
          "Turbo intercooler sızıntı sorunu",
          "Klima kompresörü erken arızası",
          "SYNC 3 sistemi donma sorunu",
          "Yakıt enjektörü karbon birikimi"
        ]
      },
      "Mondeo": {
        specs: [
          "Motor: 1.5L-2.0L EcoBoost + Hybrid",
          "Güç: 165-240 HP",
          "Tork: 240-345 Nm",
          "Yakıt Tüketimi: 5.2-7.8L/100km",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "0-100 km/h: 7.6-9.7 saniye",
          "Maksimum Hız: 205-230 km/h",
          "Çekiş: Önden Çekiş/AWD",
          "Bagaj Hacmi: 557 litre",
          "Yakıt Deposu: 62 litre",
          "CO2 Emisyonu: 118-177 g/km",
          "Ağırlık: 1.605-1.769 kg"
        ],
        problems: [
          "2.0 EcoBoost motor turbo intercooler sızıntısı",
          "Hibrit sistem yazılım güncellemeleri",
          "8 ileri otomatik şanzıman sarsıntı sorunu",
          "LED matrix far adaptif kontrol arızası",
          "Park asistanı kamera kalibrasyonu",
          "Klima kompresörü erken arızası",
          "SYNC 3 sistemi bağlantı sorunu",
          "AWD sistem elektronik kontrol"
        ]
      },
      "EcoSport": {
        specs: [
          "Motor: 1.0L-1.5L EcoBoost",
          "Güç: 100-125 HP",
          "Tork: 170-205 Nm",
          "Yakıt Tüketimi: 5.7-6.8L/100km",
          "Şanzıman: 5-6 İleri Manuel/PowerShift",
          "0-100 km/h: 9.4-12.7 saniye",
          "Maksimum Hız: 180-190 km/h",
          "Çekiş: Önden Çekiş/AWD",
          "Bagaj Hacmi: 334 litre",
          "Yakıt Deposu: 52 litre",
          "CO2 Emisyonu: 129-154 g/km",
          "Ağırlık: 1.345-1.454 kg"
        ],
        problems: [
          "1.0 EcoBoost motor soğutma sistemi sızıntısı",
          "PowerShift şanzıman sarsıntı sorunu",
          "LED far balast arızası",
          "Klima evaporatör sızıntısı",
          "Park asistanı sensör kalibrasyonu",
          "Turbo actuator elektronik arızası",
          "SYNC sistemi donma sorunu",
          "Yakıt pompası basınç sorunu"
        ]
      },
      "Kuga": {
        specs: [
          "Motor: 1.5L-2.5L EcoBoost + Hybrid",
          "Güç: 120-225 HP",
          "Tork: 240-387 Nm",
          "Yakıt Tüketimi: 5.4-7.8L/100km",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "0-100 km/h: 7.9-10.3 saniye",
          "Maksimum Hız: 180-200 km/h",
          "Çekiş: Önden Çekiş/AWD",
          "Bagaj Hacmi: 456 litre",
          "Yakıt Deposu: 54 litre",
          "CO2 Emisyonu: 122-177 g/km",
          "Ağırlık: 1.674-1.941 kg"
        ],
        problems: [
          "Plug-in hibrit sistem şarj sorunu",
          "2.5 Duratec hibrit motor yazılım güncellemeleri",
          "8 ileri otomatik şanzıman adaptasyon",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera arızası",
          "AWD sistem elektronik kontrol",
          "SYNC 4 sistemi bağlantı sorunu",
          "Hibrit batarya soğutma sistemi"
        ]
      },
      "Edge": {
        specs: [
          "Motor: 2.0L EcoBoost",
          "Güç: 238 HP",
          "Tork: 345 Nm",
          "Yakıt Tüketimi: 7.8-8.9L/100km",
          "Şanzıman: 8 İleri Otomatik",
          "0-100 km/h: 8.2 saniye",
          "Maksimum Hız: 200 km/h",
          "Çekiş: Önden Çekiş/AWD",
          "Bagaj Hacmi: 602 litre",
          "Yakıt Deposu: 68 litre",
          "CO2 Emisyonu: 177-202 g/km",
          "Ağırlık: 1.842-1.967 kg"
        ],
        problems: [
          "2.0 EcoBoost motor turbo actuator sorunu",
          "8 ileri otomatik şanzıman adaptasyon sorunu",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera arızası",
          "AWD sistem elektronik kontrol",
          "Turbo intercooler sızıntı sorunu",
          "SYNC 3 sistemi donma sorunu",
          "Klima kompresörü erken arızası"
        ]
      },
      "Mustang": {
        specs: [
          "Motor: 2.3L EcoBoost - 5.0L V8",
          "Güç: 290-460 HP",
          "Tork: 434-569 Nm",
          "Yakıt Tüketimi: 8.7-12.4L/100km",
          "Şanzıman: 6 İleri Manuel/10 İleri Otomatik",
          "0-100 km/h: 4.3-5.8 saniye",
          "Maksimum Hız: 250-270 km/h",
          "Çekiş: Arka Çekiş",
          "Bagaj Hacmi: 382 litre",
          "Yakıt Deposu: 59 litre",
          "CO2 Emisyonu: 197-281 g/km",
          "Ağırlık: 1.665-1.760 kg"
        ],
        problems: [
          "5.0 Coyote V8 motor zamanlama zinciri aşınması",
          "10 ileri otomatik şanzıman adaptasyon sorunu",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera arızası",
          "Turbo intercooler sızıntı sorunu (EcoBoost)",
          "Aktif egzoz sistemi arızası",
          "SYNC 4 sistemi bağlantı sorunu",
          "Performance Pack süspansiyon kalibrasyonu"
        ]
      },
      "Transit": {
        specs: [
          "Motor: 2.0L EcoBlue + Electric",
          "Güç: 105-185 HP",
          "Tork: 360-415 Nm",
          "Yakıt Tüketimi: 6.8-8.2L/100km",
          "Şanzıman: 6 İleri Manuel/10 İleri Otomatik",
          "0-100 km/h: 11.6-14.1 saniye",
          "Maksimum Hız: 160-180 km/h",
          "Çekiş: Arka Çekiş",
          "Yük Hacmi: 15.1 m³",
          "Yakıt Deposu: 80 litre",
          "CO2 Emisyonu: 154-186 g/km (elektrikli: 0)",
          "Yük Kapasitesi: 2.000 kg"
        ],
        problems: [
          "2.0 EcoBlue motor EGR valfi arızası",
          "Elektrikli versiyonda şarj hızı düşüklüğü",
          "AdBlue sistemi kalibrasyon sorunu",
          "LED far balast arızası",
          "Park asistanı sensör kalibrasyonu",
          "DPF rejenerasyon sorunu",
          "SYNC sistemi bağlantı problemi",
          "Yük sensörü elektronik arızası"
        ]
      },
      "Transit Custom": {
        specs: [
          "Motor: 2.0L EcoBlue",
          "Güç: 105-185 HP",
          "Tork: 360-415 Nm",
          "Yakıt Tüketimi: 6.2-7.8L/100km",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "0-100 km/h: 10.8-13.2 saniye",
          "Maksimum Hız: 165-180 km/h",
          "Çekiş: Önden Çekiş",
          "Yük Hacmi: 8.3 m³",
          "Yakıt Deposu: 70 litre",
          "CO2 Emisyonu: 141-177 g/km",
          "Yük Kapasitesi: 1.400 kg"
        ],
        problems: [
          "2.0 EcoBlue motor DPF rejenerasyon sorunu",
          "6 ileri manuel şanzıman debriyaj aşınması",
          "AdBlue sistemi kalibrasyon sorunu",
          "LED far balast arızası",
          "Park asistanı sensör kalibrasyonu",
          "EGR valfi karbon birikimi",
          "SYNC sistemi donma sorunu",
          "Turbo intercooler sızıntı problemi"
        ]
      },
      "Ranger": {
        specs: [
          "Motor: 2.0L EcoBlue BiTurbo",
          "Güç: 170-213 HP",
          "Tork: 420-500 Nm",
          "Yakıt Tüketimi: 7.8-9.2L/100km",
          "Şanzıman: 6 İleri Manuel/10 İleri Otomatik",
          "0-100 km/h: 9.0-10.5 saniye",
          "Maksimum Hız: 180-190 km/h",
          "Çekiş: Arka Çekiş/4WD",
          "Yük Kapasitesi: 1.252 kg",
          "Yakıt Deposu: 80 litre",
          "CO2 Emisyonu: 177-208 g/km",
          "Çeki Kapasitesi: 3.500 kg"
        ],
        problems: [
          "2.0 BiTurbo motor intercooler sızıntısı",
          "10 ileri otomatik şanzıman adaptasyon sorunu",
          "4WD sistem elektronik kontrol",
          "LED matrix far kalibrasyon problemi",
          "Park asistanı kamera arızası",
          "AdBlue sistemi kalibrasyon sorunu",
          "SYNC 4 sistemi bağlantı problemi",
          "Diferansiyel kilidi elektronik arızası"
        ]
      }
    }
  },
"BYD": {
  logo: "https://www.carlogos.org/car-logos/byd-logo.png",

    models: [
      { name: "Atto 3", year: "2022-2024", description: "Compact electric SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BYD_Auto_2022_logo.svg/2560px-BYD_Auto_2022_logo.svg.png", prices: { new: "1.650.000 - 1.950.000 TL", used: "1.200.000 - 1.550.000 TL" } },
      { name: "Dolphin", year: "2023-2024", description: "Compact electric hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BYD_Auto_2022_logo.svg/2560px-BYD_Auto_2022_logo.svg.png", prices: { new: "1.150.000 - 1.450.000 TL", used: "850.000 - 1.150.000 TL" } },
      { name: "Seal", year: "2023-2024", description: "Mid-size electric sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BYD_Auto_2022_logo.svg/2560px-BYD_Auto_2022_logo.svg.png", prices: { new: "1.850.000 - 2.350.000 TL", used: "1.450.000 - 1.950.000 TL" } },
      { name: "Tang", year: "2022-2024", description: "Full-size electric SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BYD_Auto_2022_logo.svg/2560px-BYD_Auto_2022_logo.svg.png", prices: { new: "-", used: "2.200.000 - 2.800.000 TL" } },
      { name: "Han", year: "2021-2024", description: "Executive electric sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BYD_Auto_2022_logo.svg/2560px-BYD_Auto_2022_logo.svg.png", prices: { new: "2.150.000 - 2.650.000 TL", used: "1.650.000 - 2.150.000 TL" } },
      { name: "Song Plus", year: "2022-2024", description: "Mid-size electric SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BYD_Auto_2022_logo.svg/2560px-BYD_Auto_2022_logo.svg.png", prices: { new: "-", used: "1.400.000 - 1.800.000 TL" } },
      { name: "Yuan Plus", year: "2023-2024", description: "Subcompact electric SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BYD_Auto_2022_logo.svg/2560px-BYD_Auto_2022_logo.svg.png", prices: { new: "-", used: "1.050.000 - 1.350.000 TL" } },
      { name: "Qin Plus", year: "2022-2024", description: "Compact electric sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BYD_Auto_2022_logo.svg/2560px-BYD_Auto_2022_logo.svg.png", prices: { new: "-", used: "1.100.000 - 1.450.000 TL" } },
      { name: "Destroyer 05", year: "2023-2024", description: "Performance electric sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BYD_Auto_2022_logo.svg/2560px-BYD_Auto_2022_logo.svg.png", prices: { new: "-", used: "1.850.000 - 2.350.000 TL" } },
      { name: "Seagull", year: "2024-2024", description: "Entry-level electric hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BYD_Auto_2022_logo.svg/2560px-BYD_Auto_2022_logo.svg.png", prices: { new: "-", used: "700.000 - 950.000 TL" } }
    ],
    details: {
      "Atto 3": {
        specs: [
          "Motor: Single Electric Motor FWD",
          "Güç: 204 HP",
          "Tork: 310 Nm",
          "Menzil: 420-480 km",
          "Şarj Hızı: 7-88 kW",
          "0-100 km/h: 7.3 saniye",
          "Maksimum Hız: 160 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 440 litre",
          "Batarya Kapasitesi: 49.9-60.5 kWh",
          "DC Şarj: CCS Combo 2",
          "Ağırlık: 1.750 kg"
        ],
        problems: [
          "Blade batarya soğutma sistemi",
          "Şarj portu bağlantı sorunu",
          "DiLink sistemi güncelleme problemi",
          "LED far balast arızası",
          "Park asistanı sensör kalibrasyonu",
          "12V batarya erken boşalması",
          "OTA güncelleme başarısızlığı",
          "Klima kompresörü erken arızası"
        ]
      },
      "Dolphin": {
        specs: [
          "Motor: Single Electric Motor FWD",
          "Güç: 95-204 HP",
          "Tork: 180-310 Nm",
          "Menzil: 301-427 km",
          "Şarj Hızı: 7-60 kW",
          "0-100 km/h: 7.5-10.9 saniye",
          "Maksimum Hız: 150-160 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 345 litre",
          "Batarya Kapasitesi: 30.7-44.9 kWh",
          "DC Şarj: CCS Combo 2",
          "Ağırlık: 1.405-1.550 kg"
        ],
        problems: [
          "LFP batarya soğuk hava performansı",
          "DiLink sistemi güncelleme sorunu",
          "Şarj portu bağlantı problemi",
          "LED far balast arızası",
          "Park asistanı sensör kalibrasyonu",
          "12V batarya erken boşalması",
          "OTA güncelleme bağlantı sorunu",
          "Regeneratif frenleme ayar problemi"
        ]
      },
      "Seal": {
        specs: [
          "Motor: Single/Dual Electric Motor",
          "Güç: 230-530 HP",
          "Tork: 360-670 Nm",
          "Menzil: 550-700 km",
          "Şarj Hızı: 11-150 kW",
          "0-100 km/h: 3.8-5.9 saniye",
          "Maksimum Hız: 180-210 km/h",
          "Çekiş: RWD/AWD",
          "Bagaj Hacmi: 400 litre",
          "Batarya Kapasitesi: 61.4-82.5 kWh",
          "DC Şarj: CCS Combo 2",
          "Ağırlık: 1.885-2.150 kg"
        ],
        problems: [
          "CTB batarya teknolojisi adaptasyon",
          "Hava süspansiyonu kalibrasyon sorunu",
          "DiLink sistemi güncelleme problemi",
          "LED matrix far kalibrasyon sorunu",
          "Park asistanı kamera arızası",
          "12V batarya erken boşalması",
          "OTA güncelleme başarısızlığı",
          "Regeneratif frenleme ayar problemi"
        ]
      },
      "Tang": {
        specs: [
          "Motor: Dual Electric Motor AWD",
          "Güç: 517 HP",
          "Tork: 700 Nm",
          "Menzil: 505-635 km",
          "Şarj Hızı: 11-120 kW",
          "0-100 km/h: 4.4 saniye",
          "Maksimum Hız: 180 km/h",
          "Çekiş: AWD",
          "Bagaj Hacmi: 940 litre",
          "Batarya Kapasitesi: 86.4-108.8 kWh",
          "DC Şarj: CCS Combo 2",
          "Ağırlık: 2.280-2.420 kg"
        ],
        problems: [
          "Yüksek güç batarya ısınma sorunu",
          "AWD sistem elektronik kontrol",
          "DiLink sistemi bağlantı problemi",
          "LED matrix far adaptif kontrol arızası",
          "Park asistanı kamera kalibrasyonu",
          "12V batarya erken boşalması",
          "OTA güncelleme başarısızlığı",
          "Hava süspansiyonu kompresörü arızası"
        ]
      },
      "Han": {
        specs: [
          "Motor: Single/Dual Electric Motor",
          "Güç: 245-517 HP",
          "Tork: 350-700 Nm",
          "Menzil: 506-715 km",
          "Şarj Hızı: 11-120 kW",
          "0-100 km/h: 3.9-7.9 saniye",
          "Maksimum Hız: 185 km/h",
          "Çekiş: RWD/AWD",
          "Bagaj Hacmi: 410 litre",
          "Batarya Kapasitesi: 64.8-85.4 kWh",
          "DC Şarj: CCS Combo 2",
          "Ağırlık: 1.920-2.200 kg"
        ],
        problems: [
          "Blade batarya uzun vadeli dayanıklılık",
          "DiPilot sürüş asistanı kalibrasyon",
          "DiLink sistemi güncelleme problemi",
          "LED matrix far kalibrasyon sorunu",
          "Park asistanı kamera arızası",
          "12V batarya erken boşalması",
          "OTA güncelleme bağlantı sorunu",
          "Regeneratif frenleme ayar problemi"
        ]
      },
      "Song Plus": {
        specs: [
          "Motor: Single Electric Motor FWD",
          "Güç: 204 HP",
          "Tork: 310 Nm",
          "Menzil: 505 km",
          "Şarj Hızı: 7-80 kW",
          "0-100 km/h: 8.5 saniye",
          "Maksimum Hız: 160 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 520 litre",
          "Batarya Kapasitesi: 71.7 kWh",
          "DC Şarj: CCS Combo 2",
          "Ağırlık: 1.870 kg"
        ],
        problems: [
          "Batarya termal yönetim sistemi",
          "Şarj hızı tutarsızlığı",
          "DiLink sistemi bağlantı problemi",
          "LED far balast arızası",
          "Park asistanı sensör kalibrasyonu",
          "12V batarya erken boşalması",
          "OTA güncelleme başarısızlığı",
          "Klima kompresörü erken arızası"
        ]
      },
      "Yuan Plus": {
        specs: [
          "Motor: Single Electric Motor FWD",
          "Güç: 150 HP",
          "Tork: 310 Nm",
          "Menzil: 430 km",
          "Şarj Hızı: 7-60 kW",
          "0-100 km/h: 9.2 saniye",
          "Maksimum Hız: 130 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 450 litre",
          "Batarya Kapasitesi: 50.1 kWh",
          "DC Şarj: CCS Combo 2",
          "Ağırlık: 1.660 kg"
        ],
        problems: [
          "Kompakt batarya soğutma sorunu",
          "DiLink bağlantı kesintileri",
          "Şarj portu bağlantı problemi",
          "LED far balast arızası",
          "Park asistanı sensör kalibrasyonu",
          "12V batarya erken boşalması",
          "OTA güncelleme başarısızlığı",
          "Regeneratif frenleme ayar problemi"
        ]
      },
      "Qin Plus": {
        specs: [
          "Motor: Single Electric Motor FWD",
          "Güç: 204 HP",
          "Tork: 310 Nm",
          "Menzil: 600 km",
          "Şarj Hızı: 7-80 kW",
          "0-100 km/h: 7.3 saniye",
          "Maksimum Hız: 160 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 450 litre",
          "Batarya Kapasitesi: 71.7 kWh",
          "DC Şarj: CCS Combo 2",
          "Ağırlık: 1.760 kg"
        ],
        problems: [
          "LFP batarya kapasitesi düşüşü",
          "Regeneratif frenleme ayar sorunu",
          "DiLink sistemi güncelleme problemi",
          "LED far balast arızası",
          "Park asistanı sensör kalibrasyonu",
          "12V batarya erken boşalması",
          "OTA güncelleme bağlantı sorunu",
          "Klima kompresörü erken arızası"
        ]
      },
      "Destroyer 05": {
        specs: [
          "Motor: Dual Electric Motor AWD",
          "Güç: 517 HP",
          "Tork: 700 Nm",
          "Menzil: 550 km",
          "Şarj Hızı: 11-150 kW",
          "0-100 km/h: 3.8 saniye",
          "Maksimum Hız: 180 km/h",
          "Çekiş: AWD",
          "Bagaj Hacmi: 400 litre",
          "Batarya Kapasitesi: 85.4 kWh",
          "DC Şarj: CCS Combo 2",
          "Ağırlık: 2.050 kg"
        ],
        problems: [
          "Yüksek performans batarya yönetimi",
          "Aktif süspansiyon yazılım sorunu",
          "DiLink sistemi bağlantı problemi",
          "LED matrix far kalibrasyon sorunu",
          "Park asistanı kamera arızası",
          "12V batarya erken boşalması",
          "OTA güncelleme başarısızlığı",
          "AWD sistem elektronik kontrol"
        ]
      },
      "Seagull": {
        specs: [
          "Motor: Single Electric Motor FWD",
          "Güç: 75 HP",
          "Tork: 135 Nm",
          "Menzil: 305 km",
          "Şarj Hızı: 6.6-30 kW",
          "0-100 km/h: 13.0 saniye",
          "Maksimum Hız: 130 km/h",
          "Çekiş: Önden Çekiş",
          "Bagaj Hacmi: 300 litre",
          "Batarya Kapasitesi: 30.08 kWh",
          "DC Şarj: CCS Combo 2",
          "Ağırlık: 1.240 kg"
        ],
        problems: [
          "Temel seviye batarya dayanıklılığı",
          "Basit şarj sistemi sınırlamaları",
          "DiLink sistemi temel versiyon sorunları",
          "LED far balast arızası",
          "Park asistanı sensör kalibrasyonu",
          "12V batarya erken boşalması",
          "OTA güncelleme başarısızlığı",
          "Regeneratif frenleme ayar problemi"
        ]
      }
    }
  },
  "MG": {
    logo: "https://www.carlogos.org/car-logos/mg-logo.png",
    models: [
      { name: "ZS EV", year: "2021-2024", description: "Compact electric SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/MG_Motor_logo.svg/2560px-MG_Motor_logo.svg.png", prices: { new: "1.450.000 - 1.750.000 TL", used: "1.050.000 - 1.350.000 TL" } },
      { name: "HS", year: "2020-2024", description: "Mid-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/MG_Motor_logo.svg/2560px-MG_Motor_logo.svg.png", prices: { new: "1.250.000 - 1.550.000 TL", used: "850.000 - 1.150.000 TL" } },
      { name: "Marvel R", year: "2022-2024", description: "Mid-size electric SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/MG_Motor_logo.svg/2560px-MG_Motor_logo.svg.png", prices: { new: "-", used: "1.650.000 - 2.050.000 TL" } },
      { name: "5", year: "2022-2024", description: "Compact sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/MG_Motor_logo.svg/2560px-MG_Motor_logo.svg.png", prices: { new: "950.000 - 1.250.000 TL", used: "700.000 - 1.000.000 TL" } },
      { name: "EHS", year: "2021-2024", description: "Mid-size plug-in hybrid SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/MG_Motor_logo.svg/2560px-MG_Motor_logo.svg.png", prices: { new: "-", used: "1.300.000 - 1.600.000 TL" } },
      { name: "ZST", year: "2020-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/MG_Motor_logo.svg/2560px-MG_Motor_logo.svg.png", prices: { new: "1.050.000 - 1.350.000 TL", used: "750.000 - 1.050.000 TL" } },
      { name: "GT", year: "2023-2024", description: "Sports coupe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/MG_Motor_logo.svg/2560px-MG_Motor_logo.svg.png", prices: { new: "-", used: "1.500.000 - 1.900.000 TL" } },
      { name: "EP", year: "2024-2024", description: "Compact electric hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/MG_Motor_logo.svg/2560px-MG_Motor_logo.svg.png", prices: { new: "-", used: "950.000 - 1.250.000 TL" } },
      { name: "Cyberster", year: "2024-2024", description: "Electric roadster", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/MG_Motor_logo.svg/2560px-MG_Motor_logo.svg.png", prices: { new: "-", used: "2.800.000 - 3.300.000 TL" } },
      { name: "One", year: "2023-2024", description: "Entry-level SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/MG_Motor_logo.svg/2560px-MG_Motor_logo.svg.png", prices: { new: "850.000 - 1.150.000 TL", used: "650.000 - 900.000 TL" } }
    ],
    details: {
      "ZS EV": {
        specs: [
          "Motor: Single Electric Motor FWD",
          "Güç: 177 HP",
          "Tork: 280 Nm",
          "Batarya Kapasitesi: 44.5-70 kWh",
          "Menzil: 320-440 km",
          "0-100 km/h: 8.2 saniye",
          "Maksimum Hız: 140 km/h",
          "Şarj Hızı: 7-76 kW (AC/DC)",
          "Ağırlık: 1.809 kg",
          "Bagaj Hacmi: 448 litre"
        ],
        problems: [
          "Batarya soğutma sistemi yetersizliği",
          "iSMART sistemi bağlantı sorunu",
          "Şarj portu bağlantı problemi",
          "12V batarya erken boşalması"
        ]
      },
      "HS": {
        specs: [
          "Motor: 1.5L-2.0L Turbo",
          "Güç: 162-231 HP",
          "Tork: 250-370 Nm",
          "Yakıt Tüketimi: 7.2-8.5L/100km",
          "0-100 km/h: 7.8-9.5 saniye",
          "Maksimum Hız: 190-210 km/h",
          "Şanzıman: CVT Otomatik",
          "Çekiş: Önden Çekiş/AWD",
          "Ağırlık: 1.610-1.720 kg",
          "Bagaj Hacmi: 463 litre"
        ],
        problems: [
          "1.5T motor turbo actuator sorunu",
          "CVT şanzıman adaptasyon problemi",
          "Klima kompresörü erken arızası",
          "LED far balast arızası"
        ]
      },
      "Marvel R": {
        specs: [
          "Motor: Dual Electric Motor AWD",
          "Güç: 288 HP",
          "Tork: 665 Nm",
          "Batarya Kapasitesi: 70 kWh",
          "Menzil: 402 km",
          "0-100 km/h: 4.9 saniye",
          "Maksimum Hız: 200 km/h",
          "Şarj Hızı: 11-94 kW",
          "Ağırlık: 2.100 kg",
          "Bagaj Hacmi: 357 litre"
        ],
        problems: [
          "Yüksek voltaj batarya yönetimi",
          "AWD sistem elektronik kontrol sorunu",
          "OTA güncelleme başarısızlığı",
          "Regeneratif frenleme ayar problemi"
        ]
      },
      "5": {
        specs: [
          "Motor: 1.5L Turbo",
          "Güç: 173 HP",
          "Tork: 275 Nm",
          "Yakıt Tüketimi: 6.8-7.5L/100km",
          "0-100 km/h: 8.2 saniye",
          "Maksimum Hız: 185 km/h",
          "Şanzıman: CVT Otomatik",
          "Çekiş: Önden Çekiş",
          "Ağırlık: 1.456 kg",
          "Bagaj Hacmi: 479 litre"
        ],
        problems: [
          "1.5T motor zamanlama zinciri aşınması",
          "CVT şanzıman sarsıntı sorunu",
          "Turbo intercooler sızıntısı",
          "Park asistanı sensör kalibrasyonu"
        ]
      },
      "EHS": {
        specs: [
          "Motor: 1.5L Turbo + Electric",
          "Güç: 291 HP (Toplam)",
          "Tork: 480 Nm",
          "Elektrik Menzil: 75 km",
          "Toplam Menzil: 650 km",
          "0-100 km/h: 6.9 saniye",
          "Maksimum Hız: 190 km/h",
          "Şarj Hızı: 3.3-6.6 kW",
          "Ağırlık: 1.920 kg",
          "Bagaj Hacmi: 448 litre"
        ],
        problems: [
          "Plug-in hibrit sistem koordinasyon sorunu",
          "Batarya şarj yönetimi",
          "Motor geçiş modu titreşimi",
          "Hibrit kontrol ünitesi arızası"
        ]
      },
      "ZST": {
        specs: [
          "Motor: 1.3L-1.5L Turbo",
          "Güç: 156-181 HP",
          "Tork: 230-285 Nm",
          "Yakıt Tüketimi: 6.5-7.8L/100km",
          "0-100 km/h: 8.5-9.2 saniye",
          "Maksimum Hız: 180-190 km/h",
          "Şanzıman: CVT Otomatik",
          "Çekiş: Önden Çekiş",
          "Ağırlık: 1.380-1.450 kg",
          "Bagaj Hacmi: 359 litre"
        ],
        problems: [
          "1.3T motor karbon birikimi",
          "CVT şanzıman geç tepki sorunu",
          "Turbo actuator elektronik arızası",
          "Klima evaporatör sızıntısı"
        ]
      },
      "GT": {
        specs: [
          "Motor: 2.0L Turbo",
          "Güç: 261 HP",
          "Tork: 400 Nm",
          "Yakıt Tüketimi: 8.2-9.1L/100km",
          "0-100 km/h: 6.4 saniye",
          "Maksimum Hız: 230 km/h",
          "Şanzıman: 8 İleri Otomatik",
          "Çekiş: Arka Çekiş",
          "Ağırlık: 1.650 kg",
          "Bagaj Hacmi: 335 litre"
        ],
        problems: [
          "2.0T motor intercooler sızıntısı",
          "Spor süspansiyon kalibrasyon sorunu",
          "Diferansiyel yağ sızıntısı",
          "Performans modu elektronik arızası"
        ]
      },
      "EP": {
        specs: [
          "Motor: Single Electric Motor FWD",
          "Güç: 150 HP",
          "Tork: 310 Nm",
          "Batarya Kapasitesi: 50.8 kWh",
          "Menzil: 350 km",
          "0-100 km/h: 8.3 saniye",
          "Maksimum Hız: 140 km/h",
          "Şarj Hızı: 7-80 kW",
          "Ağırlık: 1.580 kg",
          "Bagaj Hacmi: 363 litre"
        ],
        problems: [
          "Kompakt batarya termal yönetim",
          "Şarj portu dayanıklılık sorunu",
          "DC şarj hızı tutarsızlığı",
          "Regeneratif frenleme ayar problemi"
        ]
      },
      "Cyberster": {
        specs: [
          "Motor: Dual Electric Motor RWD",
          "Güç: 510 HP",
          "Tork: 725 Nm",
          "Batarya Kapasitesi: 77 kWh",
          "Menzil: 520 km",
          "0-100 km/h: 3.2 saniye",
          "Maksimum Hız: 200 km/h",
          "Şarj Hızı: 11-144 kW",
          "Ağırlık: 1.985 kg",
          "Bagaj Hacmi: 249 litre"
        ],
        problems: [
          "Yüksek performans batarya soğutma",
          "Convertible tavan mekanizması",
          "Spor süspansiyon elektronik kontrol",
          "Yüksek voltaj sistem arızası"
        ]
      },
      "One": {
        specs: [
          "Motor: 1.5L Turbo",
          "Güç: 173 HP",
          "Tork: 275 Nm",
          "Yakıt Tüketimi: 7.1-7.8L/100km",
          "0-100 km/h: 9.1 saniye",
          "Maksimum Hız: 180 km/h",
          "Şanzıman: CVT Otomatik",
          "Çekiş: Önden Çekiş",
          "Ağırlık: 1.420 kg",
          "Bagaj Hacmi: 378 litre"
        ],
        problems: [
          "Temel seviye turbo motor dayanıklılık",
          "CVT şanzıman erken aşınma",
          "Basit infotainment sistem donması",
          "Klima kompresörü erken arızası"
        ]
      }
    }
  },
  "Fiat": {
    logo: "https://www.carlogos.org/car-logos/fiat-logo.png",
    models: [
      { name: "500", year: "2020-2024", description: "Subcompact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/2560px-Fiat_Automobiles_logo.svg.png", prices: { new: "-", used: "450.000 - 800.000 TL" } },
      { name: "Panda", year: "2012-2024", description: "City car", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/2560px-Fiat_Automobiles_logo.svg.png", prices: { new: "-", used: "350.000 - 550.000 TL" } },
      { name: "Tipo", year: "2016-2024", description: "Compact hatchback/sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/2560px-Fiat_Automobiles_logo.svg.png", prices: { new: "750.000 - 1.050.000 TL", used: "500.000 - 800.000 TL" } },
      { name: "500X", year: "2014-2024", description: "Subcompact crossover", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/2560px-Fiat_Automobiles_logo.svg.png", prices: { new: "-", used: "550.000 - 950.000 TL" } },
      { name: "500L", year: "2012-2024", description: "Compact MPV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/2560px-Fiat_Automobiles_logo.svg.png", prices: { new: "-", used: "500.000 - 850.000 TL" } },
      { name: "Doblo", year: "2015-2024", description: "Compact van/MPV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/2560px-Fiat_Automobiles_logo.svg.png", prices: { new: "950.000 - 1.350.000 TL", used: "600.000 - 1.000.000 TL" } },
      { name: "Ducato", year: "2014-2024", description: "Large van", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/2560px-Fiat_Automobiles_logo.svg.png", prices: { new: "1.450.000 - 2.100.000 TL", used: "800.000 - 1.500.000 TL" } },
      { name: "Fiorino", year: "2016-2024", description: "Small van", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/2560px-Fiat_Automobiles_logo.svg.png", prices: { new: "-", used: "450.000 - 750.000 TL" } },
      { name: "Fullback", year: "2016-2019", description: "Mid-size pickup truck", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/2560px-Fiat_Automobiles_logo.svg.png", prices: { new: "-", used: "850.000 - 1.250.000 TL" } },
      { name: "Talento", year: "2016-2024", description: "Mid-size van", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/2560px-Fiat_Automobiles_logo.svg.png", prices: { new: "-", used: "750.000 - 1.150.000 TL" } }
    ],
    details: {
      "500": {
        specs: [
          "Motor: 0.9L-1.4L TwinAir/MultiAir",
          "Güç: 69-160 HP",
          "Tork: 102-230 Nm",
          "Yakıt Tüketimi: 4.1-6.2L/100km",
          "Şanzıman: 5-6 İleri Manuel/Dualogic",
          "0-100 km/h: 9.5-12.9 saniye",
          "Maksimum Hız: 160-195 km/h",
          "Bagaj Hacmi: 185 litre",
          "Ağırlık: 865-1.035 kg",
          "Yakıt Deposu: 35 litre"
        ],
        problems: [
          "TwinAir motor karbon birikimi",
          "Dualogic şanzıman sarsıntı sorunu",
          "Elektrikli direksiyon arızası",
          "Klima kompresörü erken arızası"
        ]
      },
      "Panda": {
        specs: [
          "Motor: 0.9L-1.3L TwinAir/MultiJet",
          "Güç: 69-95 HP",
          "Tork: 102-200 Nm",
          "Yakıt Tüketimi: 3.9-5.8L/100km",
          "Şanzıman: 5-6 İleri Manuel",
          "0-100 km/h: 11.2-14.8 saniye",
          "Maksimum Hız: 155-171 km/h",
          "Bagaj Hacmi: 225 litre",
          "Ağırlık: 975-1.070 kg",
          "Yakıt Deposu: 37 litre"
        ],
        problems: [
          "TwinAir motor yağ tüketimi",
          "Elektrikli direksiyon arızası",
          "MultiJet motor EGR valfi",
          "Elektrikli cam mekanizması"
        ]
      },
      "Tipo": {
        specs: [
          "Motor: 1.0L-1.6L FireFly/MultiJet",
          "Güç: 100-120 HP",
          "Tork: 190-320 Nm",
          "Yakıt Tüketimi: 4.1-5.8L/100km",
          "Şanzıman: 5-6 İleri Manuel/Otomatik",
          "0-100 km/h: 9.7-12.1 saniye",
          "Maksimum Hız: 180-195 km/h",
          "Bagaj Hacmi: 440 litre",
          "Ağırlık: 1.205-1.320 kg",
          "Yakıt Deposu: 45 litre"
        ],
        problems: [
          "1.0 FireFly motor zamanlama kayışı",
          "Manuel şanzıman debriyaj aşınması",
          "MultiJet motor DPF rejenerasyon",
          "Klima evaporatör sızıntısı"
        ]
      },
      "500X": {
        specs: [
          "Motor: 1.0L-1.4L FireFly/MultiAir",
          "Güç: 120-170 HP",
          "Tork: 190-250 Nm",
          "Yakıt Tüketimi: 5.2-6.8L/100km",
          "Şanzıman: 6 İleri Manuel/9 İleri Otomatik",
          "0-100 km/h: 8.8-10.8 saniye",
          "Maksimum Hız: 190-205 km/h",
          "Bagaj Hacmi: 350 litre",
          "Ağırlık: 1.295-1.465 kg",
          "Yakıt Deposu: 48 litre"
        ],
        problems: [
          "1.4 MultiAir motor turbo actuator",
          "AWD sistem elektronik kontrol",
          "9 ileri otomatik şanzıman adaptasyon",
          "Panoramik tavan sızıntısı"
        ]
      },
      "500L": {
        specs: [
          "Motor: 0.9L-1.6L TwinAir/MultiJet",
          "Güç: 95-120 HP",
          "Tork: 145-320 Nm",
          "Yakıt Tüketimi: 4.2-6.1L/100km",
          "Şanzıman: 5-6 İleri Manuel/Dualogic",
          "0-100 km/h: 10.8-12.7 saniye",
          "Maksimum Hız: 173-185 km/h",
          "Bagaj Hacmi: 400 litre",
          "Ağırlık: 1.245-1.380 kg",
          "Yakıt Deposu: 50 litre"
        ],
        problems: [
          "TwinAir motor soğutma sistemi",
          "Dualogic şanzıman adaptasyon",
          "MultiJet motor yakıt sistemi",
          "Elektrikli sürgülü kapı arızası"
        ]
      },
      "Doblo": {
        specs: [
          "Motor: 1.3L-2.0L MultiJet",
          "Güç: 90-135 HP",
          "Tork: 200-350 Nm",
          "Yakıt Tüketimi: 4.9-6.8L/100km",
          "Şanzıman: 5-6 İleri Manuel",
          "0-100 km/h: 11.5-14.6 saniye",
          "Maksimum Hız: 165-180 km/h",
          "Bagaj Hacmi: 790 litre",
          "Ağırlık: 1.405-1.565 kg",
          "Yakıt Deposu: 60 litre"
        ],
        problems: [
          "MultiJet motor EGR valfi",
          "Manuel şanzıman senkronizasyon",
          "DPF rejenerasyon sorunu",
          "Elektrikli cam arızası"
        ]
      },
      "Ducato": {
        specs: [
          "Motor: 2.0L-3.0L MultiJet",
          "Güç: 115-180 HP",
          "Tork: 280-450 Nm",
          "Yakıt Tüketimi: 6.8-8.5L/100km",
          "Şanzıman: 6 İleri Manuel/9 İleri Otomatik",
          "0-100 km/h: 12.5-16.8 saniye",
          "Maksimum Hız: 150-170 km/h",
          "Yük Hacmi: 8-17 m³",
          "Ağırlık: 1.950-2.450 kg",
          "Yakıt Deposu: 75-90 litre"
        ],
        problems: [
          "MultiJet motor DPF rejenerasyon",
          "AdBlue sistemi arızası",
          "Turbo intercooler sızıntısı",
          "Manuel şanzıman yağ sızıntısı"
        ]
      },
      "Fiorino": {
        specs: [
          "Motor: 1.3L MultiJet",
          "Güç: 75-95 HP",
          "Tork: 190-200 Nm",
          "Yakıt Tüketimi: 4.5-5.2L/100km",
          "Şanzıman: 5 İleri Manuel",
          "0-100 km/h: 13.2-15.1 saniye",
          "Maksimum Hız: 155-165 km/h",
          "Yük Hacmi: 2.8 m³",
          "Ağırlık: 1.185-1.245 kg",
          "Yakıt Deposu: 45 litre"
        ],
        problems: [
          "MultiJet motor yakıt sistemi",
          "Elektrikli cam arızası",
          "EGR valfi karbon birikimi",
          "Manuel şanzıman debriyaj aşınması"
        ]
      },
      "Fullback": {
        specs: [
          "Motor: 2.4L MIVEC",
          "Güç: 154-181 HP",
          "Tork: 430-441 Nm",
          "Yakıt Tüketimi: 7.8-9.2L/100km",
          "Şanzıman: 5-6 İleri Manuel/Otomatik",
          "0-100 km/h: 10.4-11.8 saniye",
          "Maksimum Hız: 175-185 km/h",
          "Yük Kapasitesi: 1.180 kg",
          "Ağırlık: 1.755-1.920 kg",
          "Yakıt Deposu: 62 litre"
        ],
        problems: [
          "MIVEC motor zamanlama zinciri",
          "4WD sistem kavrama aşınması",
          "DPF rejenerasyon sorunu",
          "Otomatik şanzıman adaptasyon"
        ]
      },
      "Talento": {
        specs: [
          "Motor: 1.6L-2.0L dCi",
          "Güç: 95-145 HP",
          "Tork: 240-340 Nm",
          "Yakıt Tüketimi: 5.8-7.2L/100km",
          "Şanzıman: 6 İleri Manuel",
          "0-100 km/h: 11.8-14.2 saniye",
          "Maksimum Hız: 160-175 km/h",
          "Yük Hacmi: 5.2-8.6 m³",
          "Ağırlık: 1.695-1.895 kg",
          "Yakıt Deposu: 70 litre"
        ],
        problems: [
          "dCi motor turbo intercooler",
          "Manuel şanzıman yağ sızıntısı",
          "DPF rejenerasyon sorunu",
          "Elektrikli sürgülü kapı arızası"
        ]
      }
    }
  },
  "Renault": {
    logo: "https://www.carlogos.org/car-logos/renault-logo.png",
    models: [
      { name: "Clio", year: "2019-2024", description: "Subcompact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Textless.svg/2560px-Renault_2021_Textless.svg.png", prices: { new: "1.066.021 - 1.666.678 TL", used: "650.000 - 1.200.000 TL" } },
      { name: "Captur", year: "2019-2024", description: "Subcompact crossover SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Textless.svg/2560px-Renault_2021_Textless.svg.png", prices: { new: "1.516.678 - 1.901.678 TL", used: "850.000 - 1.400.000 TL" } },
      { name: "Megane", year: "2020-2024", description: "Compact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Textless.svg/2560px-Renault_2021_Textless.svg.png", prices: { new: "1.548.578 - 1.783.678 TL", used: "900.000 - 1.300.000 TL" } },
      { name: "Kadjar", year: "2015-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Textless.svg/2560px-Renault_2021_Textless.svg.png", prices: { new: "-", used: "750.000 - 1.200.000 TL" } },
      { name: "Koleos", year: "2017-2024", description: "Mid-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Textless.svg/2560px-Renault_2021_Textless.svg.png", prices: { new: "-", used: "950.000 - 1.500.000 TL" } },
      { name: "Talisman", year: "2015-2024", description: "Executive sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Textless.svg/2560px-Renault_2021_Textless.svg.png", prices: { new: "-", used: "800.000 - 1.300.000 TL" } },
      { name: "Zoe", year: "2019-2024", description: "Subcompact electric hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Textless.svg/2560px-Renault_2021_Textless.svg.png", prices: { new: "-", used: "800.000 - 1.200.000 TL" } },
      { name: "Kangoo", year: "2021-2024", description: "Compact van/MPV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Textless.svg/2560px-Renault_2021_Textless.svg.png", prices: { new: "1.682.817 TL", used: "700.000 - 1.100.000 TL" } },
      { name: "Master", year: "2019-2024", description: "Large van", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Textless.svg/2560px-Renault_2021_Textless.svg.png", prices: { new: "-", used: "900.000 - 1.600.000 TL" } },
      { name: "Arkana", year: "2021-2024", description: "Compact coupe SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Textless.svg/2560px-Renault_2021_Textless.svg.png", prices: { new: "-", used: "950.000 - 1.400.000 TL" } }
    ],
    details: {
      "Clio": {
        specs: [
          "Motor Tipi: 1.0L TCe Turbo/E-Tech Hybrid",
          "Beygir Gücü: 90-145 HP",
          "Tork: 160-250 Nm",
          "Yakıt Tüketimi: 4.2-5.8L/100km",
          "Şanzıman Tipi: 6 İleri Manuel/X-Tronic CVT",
          "0-100 km/s: 9.9-11.2 saniye",
          "Maksimum Hız: 180-188 km/h",
          "Bagaj Hacmi: 391 litre",
          "Ağırlık: 1.204-1.394 kg",
          "Depo Kapasitesi: 42 litre"
        ],
        problems: [
          "1.0 TCe motor zamanlama kayışı erken aşınması",
          "X-Tronic CVT şanzıman adaptasyon sorunu",
          "Start/Stop sistemi batarya tükenmesi",
          "R-Link multimedya sistemi donma problemi"
        ]
      },
      "Captur": {
        specs: [
          "Motor Tipi: 1.0L TCe/1.5L dCi/E-Tech Hybrid",
          "Beygir Gücü: 90-160 HP",
          "Tork: 160-300 Nm",
          "Yakıt Tüketimi: 4.3-6.1L/100km",
          "Şanzıman Tipi: 6 İleri Manuel/EDC Otomatik",
          "0-100 km/s: 9.7-12.1 saniye",
          "Maksimum Hız: 175-191 km/h",
          "Bagaj Hacmi: 422 litre",
          "Ağırlık: 1.245-1.468 kg",
          "Depo Kapasitesi: 48 litre"
        ],
        problems: [
          "1.0 TCe motor karbon birikimi sorunu",
          "EDC şanzıman sarsıntı ve geç vites değişimi",
          "E-Tech hibrit sistem koordinasyon hatası",
          "Panoramik tavan sızıntı problemi"
        ]
      },
      "Megane": {
        specs: [
          "Motor Tipi: 1.3L TCe/1.5L dCi/E-Tech Electric",
          "Beygir Gücü: 115-220 HP",
          "Tork: 250-300 Nm",
          "Yakıt Tüketimi: 4.4-6.2L/100km",
          "Şanzıman Tipi: 6 İleri Manuel/EDC Otomatik",
          "0-100 km/s: 7.4-10.5 saniye",
          "Maksimum Hız: 180-200 km/h",
          "Bagaj Hacmi: 434 litre",
          "Ağırlık: 1.330-1.636 kg",
          "Depo Kapasitesi: 50 litre"
        ],
        problems: [
          "1.3 TCe motor turbo actuator arızası",
          "EDC şanzıman elektronik kontrol sorunu",
          "4Control dört tekerlek direksiyon sistemi",
          "Easy Link multimedya sistemi yazılım hatası"
        ]
      },
      "Kadjar": {
        specs: [
          "Motor Tipi: 1.3L TCe/1.5L dCi/1.7L dCi",
          "Beygir Gücü: 140-150 HP",
          "Tork: 240-320 Nm",
          "Yakıt Tüketimi: 5.1-6.8L/100km",
          "Şanzıman Tipi: 6 İleri Manuel/CVT Otomatik",
          "0-100 km/s: 9.3-10.8 saniye",
          "Maksimum Hız: 190-200 km/h",
          "Bagaj Hacmi: 472 litre",
          "Ağırlık: 1.455-1.620 kg",
          "Depo Kapasitesi: 55 litre"
        ],
        problems: [
          "1.3 TCe motor zamanlama zinciri gürültüsü",
          "CVT şanzıman geç tepki ve titreşim",
          "AWD sistem elektronik kontrol hatası",
          "Klima evaporatör sızıntı sorunu"
        ]
      },
      "Koleos": {
        specs: [
          "Motor Tipi: 1.3L TCe/2.0L dCi/2.5L Benzin",
          "Beygir Gücü: 160-190 HP",
          "Tork: 260-380 Nm",
          "Yakıt Tüketimi: 6.2-8.1L/100km",
          "Şanzıman Tipi: 6 İleri Manuel/CVT Otomatik",
          "0-100 km/s: 8.9-10.2 saniye",
          "Maksimum Hız: 190-205 km/h",
          "Bagaj Hacmi: 579 litre",
          "Ağırlık: 1.624-1.750 kg",
          "Depo Kapasitesi: 60 litre"
        ],
        problems: [
          "2.0 dCi motor EGR valfi karbon birikimi",
          "CVT şanzıman adaptasyon ve kayış sorunu",
          "AWD sistem diferansiyel yağ sızıntısı",
          "Elektronik park freni kalibrasyon hatası"
        ]
      },
      "Talisman": {
        specs: [
          "Motor Tipi: 1.3L TCe/1.5L dCi/2.0L dCi",
          "Beygir Gücü: 150-200 HP",
          "Tork: 250-380 Nm",
          "Yakıt Tüketimi: 4.9-6.5L/100km",
          "Şanzıman Tipi: 6 İleri Manuel/EDC Otomatik",
          "0-100 km/s: 7.8-9.8 saniye",
          "Maksimum Hız: 205-220 km/h",
          "Bagaj Hacmi: 608 litre",
          "Ağırlık: 1.468-1.650 kg",
          "Depo Kapasitesi: 66 litre"
        ],
        problems: [
          "1.3 TCe motor intercooler sızıntı sorunu",
          "EDC şanzıman elektronik kontrol hatası",
          "4Control aktif direksiyon sistemi arızası",
          "Multi-Sense sürüş modu seçici problemi"
        ]
      },
      "Zoe": {
        specs: [
          "Motor Tipi: Senkron Elektrik Motoru",
          "Beygir Gücü: 108-135 HP",
          "Tork: 225-245 Nm",
          "Enerji Tüketimi: 17.2-18.8 kWh/100km",
          "Şanzıman Tipi: Tek Vitesli Otomatik",
          "0-100 km/s: 9.5-11.4 saniye",
          "Maksimum Hız: 135-140 km/h",
          "Bagaj Hacmi: 338 litre",
          "Ağırlık: 1.502-1.577 kg",
          "Batarya Kapasitesi: 52 kWh"
        ],
        problems: [
          "Batarya soğutma sistemi yetersizliği",
          "R-Link multimedya sistemi donma sorunu",
          "Şarj kapağı mekanizması arızası",
          "Kabin ısıtma sistemi enerji tüketimi"
        ]
      },
      "Kangoo": {
        specs: [
          "Motor Tipi: 1.0L TCe/1.5L dCi/Elektrik",
          "Beygir Gücü: 75-122 HP",
          "Tork: 160-270 Nm",
          "Yakıt Tüketimi: 5.2-6.8L/100km",
          "Şanzıman Tipi: 5-6 İleri Manuel/Otomatik",
          "0-100 km/s: 11.8-16.5 saniye",
          "Maksimum Hız: 160-175 km/h",
          "Bagaj Hacmi: 775 litre",
          "Ağırlık: 1.395-1.919 kg",
          "Depo Kapasitesi: 50 litre"
        ],
        problems: [
          "1.5 dCi motor DPF rejenerasyon sorunu",
          "Elektrikli versiyonda şarj hızı düşüklüğü",
          "Sürgülü kapı ray sistemi aşınması",
          "Start/Stop sistemi batarya ömrü kısalığı"
        ]
      },
      "Master": {
        specs: [
          "Motor Tipi: 2.3L dCi Turbo Dizel",
          "Beygir Gücü: 110-180 HP",
          "Tork: 290-400 Nm",
          "Yakıt Tüketimi: 7.8-9.2L/100km",
          "Şanzıman Tipi: 6 İleri Manuel/EDC Otomatik",
          "0-100 km/s: 12.5-16.8 saniye",
          "Maksimum Hız: 150-170 km/h",
          "Yük Hacmi: 8-17 m³",
          "Ağırlık: 2.080-2.850 kg",
          "Depo Kapasitesi: 80-105 litre"
        ],
        problems: [
          "2.3 dCi motor turbo intercooler sızıntısı",
          "AdBlue sistemi kalibrasyon hatası",
          "EDC şanzıman hidrolik pompa arızası",
          "DPF rejenerasyon sıklığı artışı"
        ]
      },
      "Arkana": {
        specs: [
          "Motor Tipi: 1.3L TCe/E-Tech Hybrid",
          "Beygir Gücü: 140-145 HP",
          "Tork: 260-250 Nm",
          "Yakıt Tüketimi: 4.8-6.1L/100km",
          "Şanzıman Tipi: 6 İleri Manuel/CVT Otomatik",
          "0-100 km/s: 9.8-10.1 saniye",
          "Maksimum Hız: 185-188 km/h",
          "Bagaj Hacmi: 513 litre",
          "Ağırlık: 1.330-1.468 kg",
          "Depo Kapasitesi: 50 litre"
        ],
        problems: [
          "E-Tech hibrit sistem yazılım güncelleme",
          "CVT şanzıman adaptasyon gecikmesi",
          "1.3 TCe motor karbon temizleme gereksinimi",
          "Easy Link sistemi bağlantı kopması"
        ]
      }
    }
  },
  "Alfa Romeo": {
    logo: "https://www.carlogos.org/car-logos/alfa-romeo-logo.png",
    models: [
      { name: "Giulietta", year: "2016-2020", description: "Compact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alfa_Romeo_brand_logo.svg/2560px-Alfa_Romeo_brand_logo.svg.png", prices: { new: "-", used: "650.000 - 1.200.000 TL" } },
      { name: "Giulia", year: "2016-2024", description: "Executive sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alfa_Romeo_brand_logo.svg/2560px-Alfa_Romeo_brand_logo.svg.png", prices: { new: "-", used: "1.400.000 - 2.800.000 TL" } },
      { name: "Stelvio", year: "2017-2024", description: "Mid-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alfa_Romeo_brand_logo.svg/2560px-Alfa_Romeo_brand_logo.svg.png", prices: { new: "-", used: "1.600.000 - 3.200.000 TL" } },
      { name: "4C", year: "2013-2020", description: "Sports car coupe/spider", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alfa_Romeo_brand_logo.svg/2560px-Alfa_Romeo_brand_logo.svg.png", prices: { new: "-", used: "2.500.000 - 4.500.000 TL" } },
      { name: "Tonale", year: "2022-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alfa_Romeo_brand_logo.svg/2560px-Alfa_Romeo_brand_logo.svg.png", prices: { new: "-", used: "1.800.000 - 2.600.000 TL" } },
      { name: "MiTo", year: "2014-2018", description: "Subcompact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alfa_Romeo_brand_logo.svg/2560px-Alfa_Romeo_brand_logo.svg.png", prices: { new: "-", used: "450.000 - 850.000 TL" } },
      { name: "159", year: "2011-2015", description: "Executive sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alfa_Romeo_brand_logo.svg/2560px-Alfa_Romeo_brand_logo.svg.png", prices: { new: "-", used: "500.000 - 1.000.000 TL" } },
      { name: "Brera", year: "2011-2015", description: "Sports coupe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alfa_Romeo_brand_logo.svg/2560px-Alfa_Romeo_brand_logo.svg.png", prices: { new: "-", used: "700.000 - 1.400.000 TL" } },
      { name: "Spider", year: "2011-2015", description: "Convertible roadster", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alfa_Romeo_brand_logo.svg/2560px-Alfa_Romeo_brand_logo.svg.png", prices: { new: "-", used: "750.000 - 1.500.000 TL" } },
      { name: "GT", year: "2010-2015", description: "Sports coupe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alfa_Romeo_brand_logo.svg/2560px-Alfa_Romeo_brand_logo.svg.png", prices: { new: "-", used: "550.000 - 1.100.000 TL" } }
    ],
    details: {
      "Giulietta": {
        specs: [
          "Motor Tipi: 1.4L MultiAir Turbo/1.6L JTDm/1.8L TBi",
          "Beygir Gücü: 105-240 HP",
          "Tork: 206-340 Nm",
          "0-100 km/s: 6.8-10.2 saniye",
          "Maksimum Hız: 190-240 km/h",
          "Şanzıman: 6 İleri Manuel/TCT Otomatik",
          "Ağırlık: 1.320-1.465 kg",
          "Bagaj Hacmi: 350 litre",
          "Yakıt Tüketimi: 4.2-7.8L/100km",
          "Çekiş Sistemi: Önden Çekiş"
        ],
        problems: [
          "MultiAir motor karbon birikimi ve valf temizliği",
          "TCT şanzıman kavrama aşınması ve sarsıntı",
          "Elektronik direksiyon sensör arızası",
          "İç trim plastik parça gıcırtı sesleri"
        ]
      },
      "Giulia": {
        specs: [
          "Motor Tipi: 2.0L Turbo/2.2L JTDm/2.9L V6 BiTurbo",
          "Beygir Gücü: 136-510 HP",
          "Tork: 320-600 Nm",
          "0-100 km/s: 3.9-7.1 saniye",
          "Maksimum Hız: 215-307 km/h",
          "Şanzıman: 6 İleri Manuel/8 İleri ZF Otomatik",
          "Ağırlık: 1.429-1.655 kg",
          "Bagaj Hacmi: 480 litre",
          "Yakıt Tüketimi: 5.2-9.7L/100km",
          "Çekiş Sistemi: Arkadan İtiş/Q4 AWD"
        ],
        problems: [
          "2.0 Turbo motor intercooler sızıntı sorunu",
          "ZF 8HP şanzıman adaptasyon ve titreşim",
          "Elektronik park freni kalibrasyon hatası",
          "Infotainment sistemi donma ve yavaşlık"
        ]
      },
      "Stelvio": {
        specs: [
          "Motor Tipi: 2.0L Turbo/2.2L JTDm/2.9L V6 BiTurbo",
          "Beygir Gücü: 136-510 HP",
          "Tork: 320-600 Nm",
          "0-100 km/s: 3.8-7.4 saniye",
          "Maksimum Hız: 210-283 km/h",
          "Şanzıman: 6 İleri Manuel/8 İleri ZF Otomatik",
          "Ağırlık: 1.660-1.830 kg",
          "Bagaj Hacmi: 525 litre",
          "Yakıt Tüketimi: 5.7-10.2L/100km",
          "Çekiş Sistemi: Q4 AWD Standart"
        ],
        problems: [
          "2.0 Turbo motor zamanlama zinciri gürültüsü",
          "Q4 AWD sistem elektronik kontrol arızası",
          "Süspansiyon amortisör erken aşınması",
          "Panoramik tavan mekanizması ses sorunu"
        ]
      },
      "4C": {
        specs: [
          "Motor Tipi: 1.75L TBi Turbo",
          "Beygir Gücü: 240 HP",
          "Tork: 350 Nm",
          "0-100 km/s: 4.5 saniye",
          "Maksimum Hız: 258 km/h",
          "Şanzıman: 6 İleri TCT Otomatik",
          "Ağırlık: 895-940 kg",
          "Bagaj Hacmi: 110 litre",
          "Yakıt Tüketimi: 6.8L/100km",
          "Çekiş Sistemi: Arkadan İtiş"
        ],
        problems: [
          "1.75 TBi motor turbo actuator arızası",
          "Karbon fiber şasi çatlak riski yüksek yüklerde",
          "TCT şanzıman yüksek sıcaklık koruması",
          "İç kabin yalıtım yetersizliği ve ses"
        ]
      },
      "Tonale": {
        specs: [
          "Motor Tipi: 1.3L Turbo/1.5L Hybrid/1.6L Diesel",
          "Beygir Gücü: 130-272 HP",
          "Tork: 240-400 Nm",
          "0-100 km/s: 6.2-10.9 saniye",
          "Maksimum Hız: 200-212 km/h",
          "Şanzıman: 6 İleri Manuel/7 İleri TCT/8 İleri Otomatik",
          "Ağırlık: 1.500-1.650 kg",
          "Bagaj Hacmi: 385-500 litre",
          "Yakıt Tüketimi: 1.3-6.2L/100km",
          "Çekiş Sistemi: Önden Çekiş/Q4 AWD"
        ],
        problems: [
          "Hibrit sistem koordinasyon ve yazılım sorunu",
          "Q4 AWD sistem kalibrasyon gecikmesi",
          "Infotainment sistemi bağlantı kopması",
          "Elektrikli park freni gürültü sorunu"
        ]
      },
      "MiTo": {
        specs: [
          "Motor Tipi: 0.9L TwinAir/1.4L MultiAir/1.3L JTDm",
          "Beygir Gücü: 78-170 HP",
          "Tork: 145-250 Nm",
          "0-100 km/s: 7.3-11.5 saniye",
          "Maksimum Hız: 190-215 km/h",
          "Şanzıman: 5-6 İleri Manuel/TCT Otomatik",
          "Ağırlık: 1.070-1.180 kg",
          "Bagaj Hacmi: 270 litre",
          "Yakıt Tüketimi: 3.9-6.8L/100km",
          "Çekiş Sistemi: Önden Çekiş"
        ],
        problems: [
          "TwinAir motor yağ tüketimi ve karbon birikimi",
          "DNA sistemi elektronik arıza ve kalibrasyon",
          "MultiAir motor valf temizleme gereksinimi",
          "İç döşeme plastik parça gevşeme sesleri"
        ]
      },
      "159": {
        specs: [
          "Motor Tipi: 1.8L JTS/2.2L JTS/3.2L V6/1.9L JTDm",
          "Beygir Gücü: 140-260 HP",
          "Tork: 206-322 Nm",
          "0-100 km/s: 7.4-10.2 saniye",
          "Maksimum Hız: 205-240 km/h",
          "Şanzıman: 5-6 İleri Manuel/Q-Tronic Otomatik",
          "Ağırlık: 1.410-1.660 kg",
          "Bagaj Hacmi: 405 litre",
          "Yakıt Tüketimi: 5.9-9.8L/100km",
          "Çekiş Sistemi: Önden Çekiş/Q4 AWD"
        ],
        problems: [
          "JTS motor zamanlama zinciri gerginlik sorunu",
          "Q-Tronic şanzıman sarsıntı ve geç vites",
          "Elektronik kontrol ünitesi nem sorunu",
          "Süspansiyon alt salıncak burç aşınması"
        ]
      },
      "Brera": {
        specs: [
          "Motor Tipi: 2.2L JTS/3.2L V6 JTS/2.4L JTDm",
          "Beygir Gücü: 185-260 HP",
          "Tork: 230-322 Nm",
          "0-100 km/s: 7.0-9.3 saniye",
          "Maksimum Hız: 230-250 km/h",
          "Şanzıman: 6 İleri Manuel/Q-Tronic Otomatik",
          "Ağırlık: 1.590-1.680 kg",
          "Bagaj Hacmi: 300 litre",
          "Yakıt Tüketimi: 6.8-11.2L/100km",
          "Çekiş Sistemi: Önden Çekiş/Q4 AWD"
        ],
        problems: [
          "JTS motor karbon birikimi ve valf temizliği",
          "Q4 AWD sistem yağ sızıntısı ve bakım",
          "Elektronik direksiyon pompa arızası",
          "Kapı cam mekanizması ve motor sorunu"
        ]
      },
      "Spider": {
        specs: [
          "Motor Tipi: 2.2L JTS/3.2L V6 JTS/2.4L JTDm",
          "Beygir Gücü: 185-260 HP",
          "Tork: 230-322 Nm",
          "0-100 km/s: 7.0-9.5 saniye",
          "Maksimum Hız: 230-250 km/h",
          "Şanzıman: 6 İleri Manuel/Q-Tronic Otomatik",
          "Ağırlık: 1.590-1.720 kg",
          "Bagaj Hacmi: 240 litre",
          "Yakıt Tüketimi: 7.2-11.5L/100km",
          "Çekiş Sistemi: Önden Çekiş/Q4 AWD"
        ],
        problems: [
          "Convertible tavan hidrolik sistem sızıntısı",
          "JTS motor soğutma sistemi termostat arızası",
          "Elektrikli cam mekanizması yavaşlığı",
          "Kabin hava sızıntısı ve rüzgar gürültüsü"
        ]
      },
      "GT": {
        specs: [
          "Motor Tipi: 1.8L Twin Spark/2.0L JTS/3.2L V6",
          "Beygir Gücü: 140-240 HP",
          "Tork: 181-300 Nm",
          "0-100 km/s: 7.4-10.8 saniye",
          "Maksimum Hız: 205-245 km/h",
          "Şanzıman: 5-6 İleri Manuel/Selespeed",
          "Ağırlık: 1.320-1.410 kg",
          "Bagaj Hacmi: 320 litre",
          "Yakıt Tüketimi: 6.8-10.5L/100km",
          "Çekiş Sistemi: Önden Çekiş"
        ],
        problems: [
          "Twin Spark motor ateşleme bobini arızası",
          "Selespeed şanzıman kavrama ve pompa",
          "Elektronik kontrol ünitesi yaşlanma sorunu",
          "İç trim plastik parça çıtırtı ve gevşeme"
        ]
      }
    }
  },
  "Honda": {
    logo: "https://www.carlogos.org/car-logos/honda-logo.png",
    models: [
      { name: "Civic", year: "2022-2024", description: "Compact sedan/hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png", prices: { new: "2.360.000 - 5.490.000 TL", used: "1.200.000 - 2.800.000 TL" } },
      { name: "Accord", year: "2018-2024", description: "Mid-size sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png", prices: { new: "2.152.000 TL", used: "1.400.000 - 2.200.000 TL" } },
      { name: "CR-V", year: "2018-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png", prices: { new: "6.160.000 TL", used: "1.800.000 - 3.500.000 TL" } },
      { name: "HR-V", year: "2021-2024", description: "Subcompact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png", prices: { new: "2.330.000 - 2.950.000 TL", used: "1.400.000 - 2.200.000 TL" } },
      { name: "Pilot", year: "2019-2024", description: "Mid-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png", prices: { new: "-", used: "2.200.000 - 3.500.000 TL" } },
      { name: "Passport", year: "2019-2024", description: "Mid-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png", prices: { new: "-", used: "2.000.000 - 3.200.000 TL" } },
      { name: "Ridgeline", year: "2017-2024", description: "Mid-size pickup truck", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png", prices: { new: "-", used: "1.800.000 - 2.800.000 TL" } },
      { name: "Insight", year: "2019-2022", description: "Compact hybrid sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png", prices: { new: "-", used: "1.200.000 - 1.800.000 TL" } },
      { name: "Clarity", year: "2018-2021", description: "Mid-size plug-in hybrid", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png", prices: { new: "-", used: "1.500.000 - 2.200.000 TL" } },
      { name: "NSX", year: "2016-2022", description: "Hybrid supercar", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png", prices: { new: "-", used: "8.000.000 - 15.000.000 TL" } }
    ],
    details: {
      "Civic": {
        specs: [
          "Motor Tipi: 1.5L VTEC Turbo/2.0L VTEC Turbo",
          "Beygir Gücü: 180-315 HP",
          "Tork: 240-400 Nm",
          "0-100 km/s: 6.4-8.2 saniye",
          "Maksimum Hız: 200-272 km/h",
          "Şanzıman: CVT Otomatik/6 İleri Manuel",
          "Yakıt Tüketimi: 6.7-8.5L/100km",
          "Bagaj Hacmi: 428-519 litre",
          "Ağırlık: 1.330-1.429 kg",
          "Depo Kapasitesi: 47 litre"
        ],
        problems: [
          "1.5L Turbo motor yağ seyreltme sorunu",
          "CVT şanzıman vızıltı ve titreşim sesi",
          "Boya kalitesi inceliği ve çizik hassasiyeti",
          "Klima kompresörü erken arıza eğilimi"
        ]
      },
      "Accord": {
        specs: [
          "Motor Tipi: 1.5L VTEC Turbo/2.0L Hybrid",
          "Beygir Gücü: 192-252 HP",
          "Tork: 260-315 Nm",
          "0-100 km/s: 7.3-8.5 saniye",
          "Maksimum Hız: 190-195 km/h",
          "Şanzıman: CVT Otomatik/10 İleri Otomatik",
          "Yakıt Tüketimi: 5.5-7.8L/100km",
          "Bagaj Hacmi: 473-523 litre",
          "Ağırlık: 1.441-1.614 kg",
          "Depo Kapasitesi: 56 litre"
        ],
        problems: [
          "1.5L Turbo motor karbon birikimi sorunu",
          "10 ileri otomatik şanzıman sarsıntı",
          "Kabin yalıtım yetersizliği rüzgar sesi",
          "Infotainment sistemi donma ve yavaşlık"
        ]
      },
      "CR-V": {
        specs: [
          "Motor Tipi: 1.5L VTEC Turbo/2.0L e:HEV Hybrid",
          "Beygir Gücü: 190-204 HP",
          "Tork: 243-335 Nm",
          "0-100 km/s: 8.2-9.4 saniye",
          "Maksimum Hız: 190-200 km/h",
          "Şanzıman: CVT Otomatik/e-CVT",
          "Yakıt Tüketimi: 6.4-7.8L/100km",
          "Bagaj Hacmi: 497-589 litre",
          "Ağırlık: 1.509-1.694 kg",
          "Depo Kapasitesi: 53-57 litre"
        ],
        problems: [
          "1.5L Turbo motor soğutma sistemi yetersizliği",
          "CVT şanzıman geç tepki ve adaptasyon",
          "AWD sistem elektronik kontrol arızası",
          "Panoramik tavan sızıntı riski"
        ]
      },
      "HR-V": {
        specs: [
          "Motor Tipi: 1.8L i-VTEC/2.0L e:HEV Hybrid",
          "Beygir Gücü: 141-184 HP",
          "Tork: 172-315 Nm",
          "0-100 km/s: 8.2-10.7 saniye",
          "Maksimum Hız: 180-190 km/h",
          "Şanzıman: CVT Otomatik/e-CVT",
          "Yakıt Tüketimi: 5.4-6.8L/100km",
          "Bagaj Hacmi: 335-393 litre",
          "Ağırlık: 1.330-1.435 kg",
          "Depo Kapasitesi: 40-50 litre"
        ],
        problems: [
          "CVT şanzıman sarsıntı ve ses sorunu",
          "Klima kompresörü erken arızası",
          "Boya kalitesi inceliği ve solma",
          "Kabin yalıtım eksikliği motor sesi"
        ]
      },
      "Pilot": {
        specs: [
          "Motor Tipi: 3.5L V6 i-VTEC",
          "Beygir Gücü: 280 HP",
          "Tork: 355 Nm",
          "0-100 km/s: 7.3 saniye",
          "Maksimum Hız: 200 km/h",
          "Şanzıman: 9 İleri Otomatik",
          "Yakıt Tüketimi: 9.4-11.2L/100km",
          "Bagaj Hacmi: 478-1583 litre",
          "Ağırlık: 1.947-2.032 kg",
          "Depo Kapasitesi: 73 litre"
        ],
        problems: [
          "V6 motor zamanlama kayışı erken aşınması",
          "9 ileri otomatik şanzıman adaptasyon sorunu",
          "AWD sistem kavrama disk aşınması",
          "Üçüncü sıra koltuk mekanizması arızası"
        ]
      },
      "Passport": {
        specs: [
          "Motor Tipi: 3.5L V6 i-VTEC",
          "Beygir Gücü: 280 HP",
          "Tork: 355 Nm",
          "0-100 km/s: 6.8 saniye",
          "Maksimum Hız: 200 km/h",
          "Şanzıman: 9 İleri Otomatik",
          "Yakıt Tüketimi: 9.1-10.7L/100km",
          "Bagaj Hacmi: 1141 litre",
          "Ağırlık: 1.838-1.925 kg",
          "Depo Kapasitesi: 70 litre"
        ],
        problems: [
          "V6 motor VCM sistemi titreşim arızası",
          "AWD sistem elektronik kontrol hatası",
          "Boya kalitesi UV dayanıksızlığı",
          "Infotainment sistemi yazılım donması"
        ]
      },
      "Ridgeline": {
        specs: [
          "Motor Tipi: 3.5L V6 i-VTEC",
          "Beygir Gücü: 280 HP",
          "Tork: 355 Nm",
          "0-100 km/s: 7.0 saniye",
          "Maksimum Hız: 180 km/h",
          "Şanzıman: 9 İleri Otomatik",
          "Yakıt Tüketimi: 10.2-12.4L/100km",
          "Bagaj Hacmi: 1583 litre (kasa)",
          "Ağırlık: 1.995-2.073 kg",
          "Depo Kapasitesi: 73 litre"
        ],
        problems: [
          "V6 motor yağ tüketimi artış sorunu",
          "AWD sistem kavrama aşınması",
          "Kasa kapağı hidrolik sistem sızıntısı",
          "Kabin yalıtım yetersizliği rüzgar gürültüsü"
        ]
      },
      "Insight": {
        specs: [
          "Motor Tipi: 1.5L Atkinson + Elektrik Motor",
          "Beygir Gücü: 151 HP (toplam)",
          "Tork: 267 Nm",
          "0-100 km/s: 8.7 saniye",
          "Maksimum Hız: 180 km/h",
          "Şanzıman: e-CVT Otomatik",
          "Yakıt Tüketimi: 4.2-4.9L/100km",
          "Bagaj Hacmi: 428 litre",
          "Ağırlık: 1.340 kg",
          "Depo Kapasitesi: 40 litre"
        ],
        problems: [
          "Hibrit batarya soğutma sistemi arızası",
          "e-CVT şanzıman yazılım güncelleme ihtiyacı",
          "Boya kalitesi inceliği ve çizik hassasiyeti",
          "Klima sistemi hibrit koordinasyon sorunu"
        ]
      },
      "Clarity": {
        specs: [
          "Motor Tipi: 1.5L Atkinson + Plug-in Hybrid",
          "Beygir Gücü: 212 HP (toplam)",
          "Tork: 315 Nm",
          "0-100 km/s: 7.7 saniye",
          "Maksimum Hız: 180 km/h",
          "Şanzıman: e-CVT Otomatik",
          "Yakıt Tüketimi: 2.5L/100km (hibrit)",
          "Bagaj Hacmi: 439 litre",
          "Ağırlık: 1.715 kg",
          "Depo Kapasitesi: 26 litre"
        ],
        problems: [
          "Plug-in hibrit sistem koordinasyon hatası",
          "Batarya termal yönetim sorunu",
          "Şarj portu kapağı mekanizması arızası",
          "Kabin yalıtım eksikliği elektrik motor sesi"
        ]
      },
      "NSX": {
        specs: [
          "Motor Tipi: 3.5L V6 Twin-Turbo + 3 Elektrik Motor",
          "Beygir Gücü: 573 HP (toplam)",
          "Tork: 645 Nm",
          "0-100 km/s: 3.1 saniye",
          "Maksimum Hız: 307 km/h",
          "Şanzıman: 9 İleri Çift Kavramalı",
          "Yakıt Tüketimi: 10.5-12.7L/100km",
          "Bagaj Hacmi: 122 litre",
          "Ağırlık: 1.725 kg",
          "Depo Kapasitesi: 59 litre"
        ],
        problems: [
          "Hibrit sistem karmaşık elektronik arızaları",
          "Karbon fiber parça dayanıklılık sorunu",
          "Çift kavramalı şanzıman yüksek sıcaklık",
          "Süspansiyon adaptif sistem kalibrasyon"
        ]
      }
    }
  },
  "Opel": {
    logo: "https://www.carlogos.org/car-logos/opel-logo.png",
    models: [
      { name: "Corsa", year: "2019-2024", description: "Subcompact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Opel_logo_2020.svg/2560px-Opel_logo_2020.svg.png", prices: { new: "-", used: "650.000 - 1.200.000 TL" } },
      { name: "Astra", year: "2021-2024", description: "Compact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Opel_logo_2020.svg/2560px-Opel_logo_2020.svg.png", prices: { new: "1.890.000 - 2.148.000 TL", used: "1.100.000 - 1.800.000 TL" } },
      { name: "Insignia", year: "2017-2024", description: "Mid-size sedan/wagon", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Opel_logo_2020.svg/2560px-Opel_logo_2020.svg.png", prices: { new: "-", used: "900.000 - 1.600.000 TL" } },
      { name: "Crossland", year: "2017-2024", description: "Subcompact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Opel_logo_2020.svg/2560px-Opel_logo_2020.svg.png", prices: { new: "1.650.000 TL", used: "800.000 - 1.400.000 TL" } },
      { name: "Grandland", year: "2017-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Opel_logo_2020.svg/2560px-Opel_logo_2020.svg.png", prices: { new: "2.800.000 - 3.500.000 TL", used: "1.400.000 - 2.200.000 TL" } },
      { name: "Mokka", year: "2020-2024", description: "Subcompact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Opel_logo_2020.svg/2560px-Opel_logo_2020.svg.png", prices: { new: "1.750.000 - 2.100.000 TL", used: "1.000.000 - 1.700.000 TL" } },
      { name: "Combo", year: "2018-2024", description: "Compact van/MPV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Opel_logo_2020.svg/2560px-Opel_logo_2020.svg.png", prices: { new: "1.400.000 - 1.600.000 TL", used: "800.000 - 1.300.000 TL" } },
      { name: "Vivaro", year: "2019-2024", description: "Mid-size van", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Opel_logo_2020.svg/2560px-Opel_logo_2020.svg.png", prices: { new: "1.800.000 - 2.200.000 TL", used: "1.200.000 - 1.900.000 TL" } },
      { name: "Movano", year: "2021-2024", description: "Large van", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Opel_logo_2020.svg/2560px-Opel_logo_2020.svg.png", prices: { new: "2.200.000 - 2.800.000 TL", used: "1.500.000 - 2.300.000 TL" } },
      { name: "Zafira Life", year: "2019-2024", description: "Large MPV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Opel_logo_2020.svg/2560px-Opel_logo_2020.svg.png", prices: { new: "2.400.000 - 3.000.000 TL", used: "1.600.000 - 2.400.000 TL" } }
    ],
    details: {
      "Corsa": {
        specs: [
          "Motor Tipi: 1.2L PureTech Turbo/1.2L Elektrik",
          "Beygir Gücü: 75-136 HP",
          "Tork: 205-260 Nm",
          "0-100 km/s: 8.7-10.9 saniye",
          "Maksimum Hız: 150-180 km/h",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "Yakıt Tüketimi: 4.2-5.8L/100km",
          "Bagaj Hacmi: 309 litre",
          "Ağırlık: 1.090-1.455 kg",
          "Depo Kapasitesi: 44 litre"
        ],
        problems: [
          "1.2 PureTech motor zamanlama zinciri erken aşınması",
          "Elektrikli versiyonda şarj portu kapağı arızası",
          "Elektronik park freni kalibrasyon sorunu",
          "IntelliLink multimedya sistemi donma problemi"
        ]
      },
      "Astra": {
        specs: [
          "Motor Tipi: 1.2L PureTech Turbo/1.6L Hybrid",
          "Beygir Gücü: 110-225 HP",
          "Tork: 230-360 Nm",
          "0-100 km/s: 7.9-10.9 saniye",
          "Maksimum Hız: 190-230 km/h",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "Yakıt Tüketimi: 4.8-6.5L/100km",
          "Bagaj Hacmi: 422 litre",
          "Ağırlık: 1.245-1.530 kg",
          "Depo Kapasitesi: 54 litre"
        ],
        problems: [
          "1.2 PureTech motor yağ seyreltme sorunu",
          "8 ileri otomatik şanzıman adaptasyon gecikmesi",
          "Hibrit sistem koordinasyon hatası",
          "LED far elektronik kontrol arızası"
        ]
      },
      "Insignia": {
        specs: [
          "Motor Tipi: 1.5L Turbo/2.0L Turbo/2.0L BiTurbo",
          "Beygir Gücü: 140-260 HP",
          "Tork: 240-400 Nm",
          "0-100 km/s: 7.3-10.5 saniye",
          "Maksimum Hız: 205-250 km/h",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "Yakıt Tüketimi: 5.4-7.8L/100km",
          "Bagaj Hacmi: 490-560 litre",
          "Ağırlık: 1.450-1.730 kg",
          "Depo Kapasitesi: 62 litre"
        ],
        problems: [
          "1.5L Turbo motor intercooler sızıntı sorunu",
          "8 ileri otomatik şanzıman sarsıntı",
          "AWD sistem elektronik kontrol hatası",
          "Adaptif süspansiyon hava yastığı sızıntısı"
        ]
      },
      "Crossland": {
        specs: [
          "Motor Tipi: 1.2L PureTech Turbo/1.5L BlueHDi",
          "Beygir Gücü: 110-130 HP",
          "Tork: 205-300 Nm",
          "0-100 km/s: 9.1-11.2 saniye",
          "Maksimum Hız: 180-188 km/h",
          "Şanzıman: 5-6 İleri Manuel/6 İleri Otomatik",
          "Yakıt Tüketimi: 4.1-5.9L/100km",
          "Bagaj Hacmi: 410 litre",
          "Ağırlık: 1.205-1.355 kg",
          "Depo Kapasitesi: 45 litre"
        ],
        problems: [
          "1.2 PureTech motor karbon birikimi sorunu",
          "6 ileri otomatik şanzıman geç tepki",
          "1.5 BlueHDi motor DPF rejenerasyon sıklığı",
          "Klima kompresörü erken arıza eğilimi"
        ]
      },
      "Grandland": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.6L Hybrid/Elektrik",
          "Beygir Gücü: 130-300 HP",
          "Tork: 230-520 Nm",
          "0-100 km/s: 6.1-9.8 saniye",
          "Maksimum Hız: 170-213 km/h",
          "Şanzıman: 6-8 İleri Otomatik/e-CVT",
          "Yakıt Tüketimi: 1.3-6.8L/100km",
          "Bagaj Hacmi: 520-550 litre",
          "Ağırlık: 1.455-2.110 kg",
          "Depo Kapasitesi: 53 litre"
        ],
        problems: [
          "Plug-in hibrit sistem şarj koordinasyon sorunu",
          "AWD sistem elektronik kontrol arızası",
          "Intelli-Lux LED far kalibrasyon hatası",
          "Elektrikli versiyonda batarya termal yönetimi"
        ]
      },
      "Mokka": {
        specs: [
          "Motor Tipi: 1.2L PureTech Turbo/1.2L Elektrik",
          "Beygir Gücü: 100-136 HP",
          "Tork: 205-260 Nm",
          "0-100 km/s: 8.5-10.1 saniye",
          "Maksimum Hız: 150-180 km/h",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "Yakıt Tüketimi: 5.1-5.8L/100km",
          "Bagaj Hacmi: 350 litre",
          "Ağırlık: 1.154-1.530 kg",
          "Depo Kapasitesi: 44 litre"
        ],
        problems: [
          "1.2 PureTech motor zamanlama kayışı sorunu",
          "Elektrikli versiyonda batarya soğutma sistemi",
          "Vizor LED far elektronik arıza",
          "Multimedya sistemi yazılım donması"
        ]
      },
      "Combo": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.5L BlueHDi/Elektrik",
          "Beygir Gücü: 75-136 HP",
          "Tork: 190-300 Nm",
          "0-100 km/s: 10.7-14.2 saniye",
          "Maksimum Hız: 160-175 km/h",
          "Şanzıman: 5-6 İleri Manuel/8 İleri Otomatik",
          "Yakıt Tüketimi: 4.4-6.2L/100km",
          "Yük Hacmi: 3.3-4.4 m³",
          "Ağırlık: 1.310-1.920 kg",
          "Depo Kapasitesi: 50 litre"
        ],
        problems: [
          "1.5 BlueHDi motor DPF rejenerasyon sorunu",
          "Elektrikli versiyonda şarj hızı düşüklüğü",
          "Sürgülü kapı ray sistemi aşınması",
          "AdBlue sistemi kalibrasyon hatası"
        ]
      },
      "Vivaro": {
        specs: [
          "Motor Tipi: 2.0L BlueHDi Turbo/Elektrik",
          "Beygir Gücü: 120-180 HP",
          "Tork: 300-400 Nm",
          "0-100 km/s: 10.2-13.1 saniye",
          "Maksimum Hız: 170-180 km/h",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "Yakıt Tüketimi: 6.1-7.8L/100km",
          "Yük Hacmi: 5.1-6.6 m³",
          "Ağırlık: 1.845-2.500 kg",
          "Depo Kapasitesi: 80 litre"
        ],
        problems: [
          "2.0 BlueHDi motor EGR valfi karbon birikimi",
          "Elektrikli versiyonda menzil düşüklüğü soğukta",
          "8 ileri otomatik şanzıman adaptasyon sorunu",
          "AdBlue sistemi donma ve kalibrasyon"
        ]
      },
      "Movano": {
        specs: [
          "Motor Tipi: 2.2L BlueHDi Turbo/Elektrik",
          "Beygir Gücü: 120-180 HP",
          "Tork: 300-400 Nm",
          "0-100 km/s: 11.8-15.2 saniye",
          "Maksimum Hız: 160-170 km/h",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "Yakıt Tüketimi: 7.2-9.1L/100km",
          "Yük Hacmi: 8.0-17.0 m³",
          "Ağırlık: 2.080-3.500 kg",
          "Depo Kapasitesi: 105 litre"
        ],
        problems: [
          "2.2 BlueHDi motor turbo intercooler sızıntısı",
          "AdBlue sistemi kalibrasyon ve donma sorunu",
          "DPF rejenerasyon sıklığı artışı",
          "Elektrikli versiyonda şarj altyapısı uyumsuzluğu"
        ]
      },
      "Zafira Life": {
        specs: [
          "Motor Tipi: 2.0L BlueHDi Turbo/Elektrik",
          "Beygir Gücü: 120-180 HP",
          "Tork: 300-400 Nm",
          "0-100 km/s: 10.5-12.8 saniye",
          "Maksimum Hız: 175-185 km/h",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "Yakıt Tüketimi: 6.8-8.2L/100km",
          "Bagaj Hacmi: 1.043-4.000 litre",
          "Ağırlık: 1.980-2.350 kg",
          "Depo Kapasitesi: 75 litre"
        ],
        problems: [
          "2.0 BlueHDi motor yakıt sistemi arızası",
          "8 ileri otomatik şanzıman adaptasyon gecikmesi",
          "Elektrikli sürgülü kapı mekanizması",
          "AdBlue sistemi sensör kalibrasyon hatası"
        ]
      }
    }
  },
  "Hyundai": {
    logo: "https://www.carlogos.org/car-logos/hyundai-logo.png",
    models: [
      { name: "i10", year: "2019-2024", description: "City car", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png", prices: { new: "-", used: "550.000 - 900.000 TL" } },
      { name: "i20", year: "2020-2024", description: "Subcompact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png", prices: { new: "1.334.500 TL", used: "800.000 - 1.300.000 TL" } },
      { name: "i30", year: "2017-2024", description: "Compact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png", prices: { new: "-", used: "900.000 - 1.600.000 TL" } },
      { name: "Elantra", year: "2020-2024", description: "Compact sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png", prices: { new: "-", used: "1.100.000 - 1.800.000 TL" } },
      { name: "Sonata", year: "2019-2024", description: "Mid-size sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png", prices: { new: "-", used: "1.400.000 - 2.200.000 TL" } },
      { name: "Kona", year: "2017-2024", description: "Subcompact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png", prices: { new: "2.184.000 - 2.231.000 TL", used: "1.200.000 - 1.900.000 TL" } },
      { name: "Tucson", year: "2021-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png", prices: { new: "2.384.000 - 3.437.000 TL", used: "1.600.000 - 2.800.000 TL" } },
      { name: "Santa Fe", year: "2018-2024", description: "Mid-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png", prices: { new: "-", used: "2.000.000 - 3.200.000 TL" } },
      { name: "Ioniq 5", year: "2021-2024", description: "Electric compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png", prices: { new: "-", used: "2.200.000 - 3.500.000 TL" } },
      { name: "Genesis G90", year: "2022-2024", description: "Luxury sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png", prices: { new: "-", used: "4.500.000 - 7.000.000 TL" } }
    ],
    details: {
      "i10": {
        specs: [
          "Motor Tipi: 1.0L MPI/1.2L MPI",
          "Beygir Gücü: 67-84 HP",
          "Tork: 95-118 Nm",
          "0-100 km/s: 11.2-14.7 saniye",
          "Maksimum Hız: 160-171 km/h",
          "Şanzıman: 5 İleri Manuel/AMT Otomatik",
          "Yakıt Tüketimi: 4.7-5.8L/100km",
          "Bagaj Hacmi: 252 litre",
          "Ağırlık: 1.040-1.120 kg",
          "Depo Kapasitesi: 36 litre"
        ],
        problems: [
          "1.0 MPI motor karbon birikimi sorunu",
          "Manuel şanzıman debriyaj erken aşınması",
          "EPS elektrikli direksiyon pompa sesi",
          "İç trim plastik parça gevşeme sesleri"
        ]
      },
      "i20": {
        specs: [
          "Motor Tipi: 1.0L T-GDi/1.4L MPI",
          "Beygir Gücü: 84-120 HP",
          "Tork: 172-200 Nm",
          "0-100 km/s: 9.4-12.8 saniye",
          "Maksimum Hız: 180-190 km/h",
          "Şanzıman: 5-6 İleri Manuel/7 İleri DCT",
          "Yakıt Tüketimi: 4.9-6.2L/100km",
          "Bagaj Hacmi: 311 litre",
          "Ağırlık: 1.190-1.295 kg",
          "Depo Kapasitesi: 40 litre"
        ],
        problems: [
          "1.0 T-GDi motor turbo actuator arızası",
          "7 İleri DCT şanzıman ısınma ve sarsıntı",
          "Elektronik park freni sensör hatası",
          "Multimedya sistemi donma problemi"
        ]
      },
      "i30": {
        specs: [
          "Motor Tipi: 1.0L T-GDi/1.4L T-GDi/2.0L T-GDi",
          "Beygir Gücü: 120-275 HP",
          "Tork: 200-378 Nm",
          "0-100 km/s: 5.9-10.4 saniye",
          "Maksimum Hız: 190-250 km/h",
          "Şanzıman: 6 İleri Manuel/7 İleri DCT",
          "Yakıt Tüketimi: 5.4-8.4L/100km",
          "Bagaj Hacmi: 395 litre",
          "Ağırlık: 1.275-1.429 kg",
          "Depo Kapasitesi: 50 litre"
        ],
        problems: [
          "1.4 T-GDi motor zamanlama zinciri gürültüsü",
          "DCT şanzıman adaptasyon ve ısınma sorunu",
          "EPS direksiyon kolonunda çıtırtı sesi",
          "Klima evaporatör sızıntı problemi"
        ]
      },
      "Elantra": {
        specs: [
          "Motor Tipi: 1.6L GDi/2.0L MPI/1.6L Hybrid",
          "Beygir Gücü: 128-201 HP",
          "Tork: 154-265 Nm",
          "0-100 km/s: 8.0-11.2 saniye",
          "Maksimum Hız: 190-205 km/h",
          "Şanzıman: 6 İleri Manuel/CVT/6 İleri Otomatik",
          "Yakıt Tüketimi: 4.2-7.1L/100km",
          "Bagaj Hacmi: 458 litre",
          "Ağırlık: 1.295-1.415 kg",
          "Depo Kapasitesi: 50 litre"
        ],
        problems: [
          "1.6 GDi motor karbon birikimi sorunu",
          "CVT şanzıman geç tepki ve titreşim",
          "Hibrit sistem koordinasyon hatası",
          "Elektronik sensör kalibrasyon sorunları"
        ]
      },
      "Sonata": {
        specs: [
          "Motor Tipi: 1.6L T-GDi/2.5L GDi/2.0L Hybrid",
          "Beygir Gücü: 180-290 HP",
          "Tork: 265-422 Nm",
          "0-100 km/s: 7.4-9.6 saniye",
          "Maksimum Hız: 200-230 km/h",
          "Şanzıman: 8 İleri Otomatik/6 İleri Otomatik",
          "Yakıt Tüketimi: 5.1-8.2L/100km",
          "Bagaj Hacmi: 510 litre",
          "Ağırlık: 1.470-1.685 kg",
          "Depo Kapasitesi: 67 litre"
        ],
        problems: [
          "2.5 T-GDi motor intercooler sızıntı sorunu",
          "8 ileri otomatik şanzıman sarsıntı",
          "Hibrit batarya soğutma sistemi arızası",
          "Adaptif süspansiyon elektronik kontrol"
        ]
      },
      "Kona": {
        specs: [
          "Motor Tipi: 1.0L T-GDi/1.6L T-GDi/Elektrik Motor",
          "Beygir Gücü: 120-204 HP",
          "Tork: 172-395 Nm",
          "0-100 km/s: 7.6-11.2 saniye",
          "Maksimum Hız: 165-185 km/h",
          "Şanzıman: 6 İleri Manuel/7 İleri DCT/Tek Vitesli",
          "Yakıt Tüketimi: 5.5-6.8L/100km",
          "Bagaj Hacmi: 332-361 litre",
          "Ağırlık: 1.240-1.685 kg",
          "Depo/Batarya Kapasitesi: 45L/64 kWh"
        ],
        problems: [
          "1.6 T-GDi motor turbo intercooler sızıntısı",
          "Elektrikli versiyonda batarya soğutma sistemi",
          "DCT şanzıman ısınma ve titreşim sorunu",
          "12V batarya erken tükenme problemi"
        ]
      },
      "Tucson": {
        specs: [
          "Motor Tipi: 1.6L T-GDi/2.5L GDi/1.6L Hybrid",
          "Beygir Gücü: 150-265 HP",
          "Tork: 253-421 Nm",
          "0-100 km/s: 7.8-10.5 saniye",
          "Maksimum Hız: 190-210 km/h",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "Yakıt Tüketimi: 5.7-8.1L/100km",
          "Bagaj Hacmi: 539 litre",
          "Ağırlık: 1.570-1.734 kg",
          "Depo Kapasitesi: 62 litre"
        ],
        problems: [
          "1.6 T-GDi motor zamanlama zinciri sorunu",
          "8 ileri otomatik şanzıman adaptasyon gecikmesi",
          "AWD sistem elektronik kontrol arızası",
          "Panoramik tavan sızıntı riski"
        ]
      },
      "Santa Fe": {
        specs: [
          "Motor Tipi: 2.5L T-GDi/2.2L CRDi/1.6L Hybrid",
          "Beygir Gücü: 191-277 HP",
          "Tork: 332-422 Nm",
          "0-100 km/s: 7.8-9.4 saniye",
          "Maksimum Hız: 190-210 km/h",
          "Şanzıman: 8 İleri Otomatik/6 İleri Otomatik",
          "Yakıt Tüketimi: 6.1-8.9L/100km",
          "Bagaj Hacmi: 571-625 litre",
          "Ağırlık: 1.755-1.915 kg",
          "Depo Kapasitesi: 71 litre"
        ],
        problems: [
          "2.5 T-GDi motor intercooler sızıntı sorunu",
          "8 ileri otomatik şanzıman geç tepki",
          "Hibrit sistem koordinasyon hatası",
          "Üçüncü sıra koltuk elektrikli mekanizma"
        ]
      },
      "Ioniq 5": {
        specs: [
          "Motor Tipi: Tek/Çift Elektrik Motor",
          "Beygir Gücü: 170-325 HP",
          "Tork: 350-605 Nm",
          "0-100 km/s: 5.2-8.5 saniye",
          "Maksimum Hız: 185 km/h",
          "Şanzıman: Tek Vitesli Otomatik",
          "Enerji Tüketimi: 16.8-19.5 kWh/100km",
          "Bagaj Hacmi: 527 litre",
          "Ağırlık: 1.830-2.200 kg",
          "Batarya Kapasitesi: 58-77.4 kWh"
        ],
        problems: [
          "800V batarya şarj sistemi kalibrasyon hatası",
          "Yazılım güncelleme bağlantı kopma sorunu",
          "12V batarya erken tükenme problemi",
          "Elektrikli kapı kolu donma riski"
        ]
      },
      "Genesis G90": {
        specs: [
          "Motor Tipi: 3.5L V6 Twin-Turbo/5.0L V8",
          "Beygir Gücü: 409-420 HP",
          "Tork: 530-520 Nm",
          "0-100 km/s: 5.7-6.2 saniye",
          "Maksimum Hız: 240-250 km/h",
          "Şanzıman: 8 İleri Otomatik",
          "Yakıt Tüketimi: 9.8-12.5L/100km",
          "Bagaj Hacmi: 330 litre",
          "Ağırlık: 2.060-2.180 kg",
          "Depo Kapasitesi: 77 litre"
        ],
        problems: [
          "V6 BiTurbo intercooler sızıntı sorunu",
          "Hava süspansiyonu kompresörü arızası",
          "Elektronik kontrol ünitesi yazılım hatası",
          "Lüks trim parça gevşeme ve ses sorunu"
        ]
      }
    }
  },
  "Volvo": {
    logo: "https://www.carlogos.org/car-logos/volvo-logo.png",
    models: [
      { name: "XC40", year: "2017-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo_Iron_Mark.svg/2560px-Volvo_Iron_Mark.svg.png", prices: { new: "-", used: "1.800.000 - 2.800.000 TL" } },
      { name: "XC60", year: "2017-2024", description: "Mid-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo_Iron_Mark.svg/2560px-Volvo_Iron_Mark.svg.png", prices: { new: "4.294.150 - 5.401.750 TL", used: "2.400.000 - 3.800.000 TL" } },
      { name: "XC90", year: "2015-2024", description: "Full-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo_Iron_Mark.svg/2560px-Volvo_Iron_Mark.svg.png", prices: { new: "5.849.260 - 6.518.200 TL", used: "3.200.000 - 4.800.000 TL" } },
      { name: "S60", year: "2018-2024", description: "Compact executive sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo_Iron_Mark.svg/2560px-Volvo_Iron_Mark.svg.png", prices: { new: "-", used: "1.800.000 - 2.800.000 TL" } },
      { name: "S90", year: "2016-2024", description: "Executive sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo_Iron_Mark.svg/2560px-Volvo_Iron_Mark.svg.png", prices: { new: "4.347.400 - 5.096.830 TL", used: "2.600.000 - 3.800.000 TL" } },
      { name: "V60", year: "2018-2024", description: "Compact executive wagon", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo_Iron_Mark.svg/2560px-Volvo_Iron_Mark.svg.png", prices: { new: "3.329.140 - 3.656.680 TL", used: "2.200.000 - 3.200.000 TL" } },
      { name: "V90", year: "2016-2024", description: "Executive wagon", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo_Iron_Mark.svg/2560px-Volvo_Iron_Mark.svg.png", prices: { new: "4.698.280 - 5.091.000 TL", used: "2.800.000 - 4.000.000 TL" } },
      { name: "C40", year: "2021-2024", description: "Compact electric SUV coupe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo_Iron_Mark.svg/2560px-Volvo_Iron_Mark.svg.png", prices: { new: "-", used: "2.800.000 - 3.600.000 TL" } },
      { name: "EX30", year: "2023-2024", description: "Subcompact electric SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo_Iron_Mark.svg/2560px-Volvo_Iron_Mark.svg.png", prices: { new: "-", used: "2.400.000 - 3.000.000 TL" } },
      { name: "EX90", year: "2024-2024", description: "Full-size electric SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo_Iron_Mark.svg/2560px-Volvo_Iron_Mark.svg.png", prices: { new: "-", used: "5.500.000 - 7.000.000 TL" } }
    ],
    details: {
      "XC40": {
        specs: [
          "Motor Tipi: 1.5L T3/2.0L T4/T5 + Elektrik",
          "Beygir Gücü: 163-408 HP",
          "Tork: 265-660 Nm",
          "0-100 km/s: 4.9-8.4 saniye",
          "Maksimum Hız: 180-210 km/h",
          "Şanzıman: 8 İleri Otomatik/Tek Vitesli",
          "Yakıt Tüketimi/Menzil: 6.2-8.1L/100km",
          "Bagaj Hacmi: 460 litre",
          "Ağırlık: 1.660-2.188 kg",
          "Batarya/Depo Kapasitesi: 78 kWh/54 litre"
        ],
        problems: [
          "Android Automotive yazılım donma ve güncelleme hataları",
          "Fren disklerinde erken aşınma sorunu",
          "Panoramik sunroof su sızıntısı problemi",
          "Elektronik bagaj kapağı sensör arızası"
        ]
      },
      "XC60": {
        specs: [
          "Motor Tipi: 2.0L T4/T5/T6/T8 Mild/Plug-in Hybrid",
          "Beygir Gücü: 190-455 HP",
          "Tork: 300-709 Nm",
          "0-100 km/s: 4.9-8.4 saniye",
          "Maksimum Hız: 180-230 km/h",
          "Şanzıman: 8 İleri Otomatik",
          "Yakıt Tüketimi: 1.7-7.8L/100km",
          "Bagaj Hacmi: 505-635 litre",
          "Ağırlık: 1.797-2.188 kg",
          "Batarya/Depo Kapasitesi: 18.8 kWh/71 litre"
        ],
        problems: [
          "2.0L T5 motor turbo intercooler sızıntısı",
          "8 ileri otomatik şanzıman adaptasyon gecikmesi",
          "Pilot Assist kamera kalibrasyon hatası",
          "Bowers & Wilkins ses sistemi amplifikatör arızası"
        ]
      },
      "XC90": {
        specs: [
          "Motor Tipi: 2.0L T5/T6/T8 Mild/Plug-in Hybrid",
          "Beygir Gücü: 250-455 HP",
          "Tork: 350-709 Nm",
          "0-100 km/s: 4.9-7.7 saniye",
          "Maksimum Hız: 180-230 km/h",
          "Şanzıman: 8 İleri Otomatik",
          "Yakıt Tüketimi: 2.1-8.7L/100km",
          "Bagaj Hacmi: 314-1816 litre",
          "Ağırlık: 2.067-2.334 kg",
          "Batarya/Depo Kapasitesi: 18.8 kWh/71 litre"
        ],
        problems: [
          "T8 hibrit sistem koordinasyon ve şarj sorunu",
          "Hava süspansiyonu kompresörü erken arızası",
          "Üçüncü sıra koltuk elektrikli mekanizma",
          "Android Automotive Google servisleri bağlantı kopması"
        ]
      },
      "S60": {
        specs: [
          "Motor Tipi: 2.0L T4/T5/T6/T8 Mild/Plug-in Hybrid",
          "Beygir Gücü: 190-415 HP",
          "Tork: 300-670 Nm",
          "0-100 km/s: 4.4-7.3 saniye",
          "Maksimum Hız: 180-250 km/h",
          "Şanzıman: 8 İleri Otomatik",
          "Yakıt Tüketimi: 1.6-7.4L/100km",
          "Bagaj Hacmi: 442 litre",
          "Ağırlık: 1.659-1.991 kg",
          "Batarya/Depo Kapasitesi: 18.8 kWh/60 litre"
        ],
        problems: [
          "2.0L T4 motor karbon birikimi sorunu",
          "Polestar optimizasyon yazılım çakışması",
          "Elektronik park freni kalibrasyon hatası",
          "Sensus Connect multimedya sistemi donma"
        ]
      },
      "S90": {
        specs: [
          "Motor Tipi: 2.0L T4/T5/T6/T8 Mild/Plug-in Hybrid",
          "Beygir Gücü: 190-415 HP",
          "Tork: 300-670 Nm",
          "0-100 km/s: 4.7-8.2 saniye",
          "Maksimum Hız: 180-250 km/h",
          "Şanzıman: 8 İleri Otomatik",
          "Yakıt Tüketimi: 1.7-7.8L/100km",
          "Bagaj Hacmi: 500 litre",
          "Ağırlık: 1.751-2.070 kg",
          "Batarya/Depo Kapasitesi: 18.8 kWh/67 litre"
        ],
        problems: [
          "T6 motor intercooler sızıntı ve basınç kaybı",
          "Pilot Assist radar kalibrasyon sorunu",
          "Hava süspansiyonu seviye sensörü arızası",
          "Android Automotive uygulama çökme problemi"
        ]
      },
      "V60": {
        specs: [
          "Motor Tipi: 2.0L T4/T5/T6/T8 Mild/Plug-in Hybrid",
          "Beygir Gücü: 190-415 HP",
          "Tork: 300-670 Nm",
          "0-100 km/s: 4.4-7.8 saniye",
          "Maksimum Hız: 180-250 km/h",
          "Şanzıman: 8 İleri Otomatik",
          "Yakıt Tüketimi: 1.6-7.4L/100km",
          "Bagaj Hacmi: 529-1441 litre",
          "Ağırlık: 1.693-2.025 kg",
          "Batarya/Depo Kapasitesi: 18.8 kWh/60 litre"
        ],
        problems: [
          "2.0L T5 motor zamanlama zinciri gürültüsü",
          "AWD sistem elektronik kontrol hatası",
          "Elektrikli bagaj kapağı sensör arızası",
          "Cross Country yükseklik ayar sistemi"
        ]
      },
      "V90": {
        specs: [
          "Motor Tipi: 2.0L T4/T5/T6/T8 Mild/Plug-in Hybrid",
          "Beygir Gücü: 190-415 HP",
          "Tork: 300-670 Nm",
          "0-100 km/s: 4.7-8.5 saniye",
          "Maksimum Hız: 180-250 km/h",
          "Şanzıman: 8 İleri Otomatik",
          "Yakıt Tüketimi: 1.7-7.8L/100km",
          "Bagaj Hacmi: 560-1526 litre",
          "Ağırlık: 1.751-2.070 kg",
          "Batarya/Depo Kapasitesi: 18.8 kWh/67 litre"
        ],
        problems: [
          "T6 hibrit sistem yazılım güncelleme hatası",
          "Hava süspansiyonu kalibrasyon sorunu",
          "Panoramik cam tavan su sızıntısı",
          "Android Automotive navigasyon donma"
        ]
      },
      "C40": {
        specs: [
          "Motor Tipi: Çift Elektrik Motor AWD",
          "Beygir Gücü: 408 HP",
          "Tork: 660 Nm",
          "0-100 km/s: 4.7 saniye",
          "Maksimum Hız: 180 km/h",
          "Şanzıman: Tek Vitesli Otomatik",
          "Menzil: 434 km",
          "Bagaj Hacmi: 413 litre",
          "Ağırlık: 2.188 kg",
          "Batarya Kapasitesi: 78 kWh"
        ],
        problems: [
          "Batarya termal yönetim sistemi arızası",
          "Google tabanlı infotainment donma sorunu",
          "DC hızlı şarj protokol uyumsuzluğu",
          "Elektrikli ısıtma sistemi enerji tüketimi"
        ]
      },
      "EX30": {
        specs: [
          "Motor Tipi: Tek/Çift Elektrik Motor",
          "Beygir Gücü: 272-428 HP",
          "Tork: 343-543 Nm",
          "0-100 km/s: 3.6-5.7 saniye",
          "Maksimum Hız: 180 km/h",
          "Şanzıman: Tek Vitesli Otomatik",
          "Menzil: 344-476 km",
          "Bagaj Hacmi: 318 litre",
          "Ağırlık: 1.755-1.900 kg",
          "Batarya Kapasitesi: 51-69 kWh"
        ],
        problems: [
          "LFP batarya soğuk hava performans düşüşü",
          "Minimalist iç mekan ergonomi eksiklikleri",
          "Android Automotive başlangıç gecikmesi",
          "Tek ekran kontrol sistemi karmaşıklığı"
        ]
      },
      "EX90": {
        specs: [
          "Motor Tipi: Çift Elektrik Motor AWD",
          "Beygir Gücü: 408-517 HP",
          "Tork: 770-910 Nm",
          "0-100 km/s: 4.9-5.9 saniye",
          "Maksimum Hız: 180 km/h",
          "Şanzıman: Tek Vitesli Otomatik",
          "Menzil: 600 km",
          "Bagaj Hacmi: 655-1915 litre",
          "Ağırlık: 2.818-2.900 kg",
          "Batarya Kapasitesi: 111 kWh"
        ],
        problems: [
          "Yeni SPA2 platform yazılım sorunları",
          "Lidar sensör kalibrasyon ve temizlik sorunu",
          "22kW AC şarj sistemi ısınma problemi",
          "Hava süspansiyonu yük dağılım hatası"
        ]
      }
    }
  },
  "Peugeot": {
    logo: "https://www.carlogos.org/car-logos/peugeot-logo.png",
    models: [
      { name: "108", year: "2014-2022", description: "City car", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/2560px-Peugeot_Logo.svg.png", prices: { new: "-", used: "450.000 - 750.000 TL" } },
      { name: "208", year: "2019-2024", description: "Subcompact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/2560px-Peugeot_Logo.svg.png", prices: { new: "-", used: "800.000 - 1.400.000 TL" } },
      { name: "308", year: "2021-2024", description: "Compact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/2560px-Peugeot_Logo.svg.png", prices: { new: "-", used: "1.200.000 - 2.000.000 TL" } },
      { name: "408", year: "2022-2024", description: "Compact fastback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/2560px-Peugeot_Logo.svg.png", prices: { new: "-", used: "1.400.000 - 2.200.000 TL" } },
      { name: "508", year: "2018-2024", description: "Mid-size sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/2560px-Peugeot_Logo.svg.png", prices: { new: "-", used: "1.600.000 - 2.600.000 TL" } },
      { name: "2008", year: "2019-2024", description: "Subcompact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/2560px-Peugeot_Logo.svg.png", prices: { new: "-", used: "1.000.000 - 1.700.000 TL" } },
      { name: "3008", year: "2016-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/2560px-Peugeot_Logo.svg.png", prices: { new: "1.996.000 - 2.345.000 TL", used: "1.400.000 - 2.200.000 TL" } },
      { name: "5008", year: "2017-2024", description: "Mid-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/2560px-Peugeot_Logo.svg.png", prices: { new: "-", used: "1.600.000 - 2.400.000 TL" } },
      { name: "Partner", year: "2018-2024", description: "Compact van", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/2560px-Peugeot_Logo.svg.png", prices: { new: "-", used: "800.000 - 1.400.000 TL" } },
      { name: "Expert", year: "2016-2024", description: "Mid-size van", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/2560px-Peugeot_Logo.svg.png", prices: { new: "-", used: "1.200.000 - 2.000.000 TL" } }
    ],
    details: {
      "108": {
        specs: [
          "Motor Tipi: 1.0L VTi/1.2L PureTech",
          "Beygir Gücü: 68-82 HP",
          "Tork: 93-118 Nm",
          "0-100 km/s: 11.9-14.2 saniye",
          "Maksimum Hız: 160-171 km/h",
          "Şanzıman: 5 İleri Manuel/ETG5 Otomatik",
          "Yakıt Tüketimi: 4.1-5.2L/100km",
          "Bagaj Hacmi: 196 litre",
          "Ağırlık: 840-925 kg",
          "Depo Kapasitesi: 35 litre"
        ],
        problems: [
          "1.0 VTi motor karbon birikimi sorunu",
          "5 ileri manuel şanzıman senkronizasyon aşınması",
          "ETG5 otomatik şanzıman adaptasyon gecikmesi",
          "Multimedya ekran dokunmatik hassasiyet kaybı"
        ]
      },
      "208": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.5L BlueHDi/Elektrik",
          "Beygir Gücü: 75-136 HP",
          "Tork: 118-260 Nm",
          "0-100 km/s: 8.2-11.2 saniye",
          "Maksimum Hız: 150-180 km/h",
          "Şanzıman: 5-6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 4.1-5.8L/100km",
          "Bagaj Hacmi: 311 litre",
          "Ağırlık: 1.090-1.455 kg",
          "Depo/Batarya Kapasitesi: 44L/50 kWh"
        ],
        problems: [
          "1.2 PureTech motor zamanlama kayışı erken kopması",
          "Elektrikli versiyonda şarj portu kapağı arızası",
          "i-Cockpit multimedya sistemi donma sorunu",
          "Elektronik park freni kalibrasyon hatası"
        ]
      },
      "308": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.5L BlueHDi/1.6L Hybrid",
          "Beygir Gücü: 110-225 HP",
          "Tork: 205-360 Nm",
          "0-100 km/s: 7.9-10.7 saniye",
          "Maksimum Hız: 190-230 km/h",
          "Şanzıman: 6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 4.2-6.8L/100km",
          "Bagaj Hacmi: 412 litre",
          "Ağırlık: 1.245-1.520 kg",
          "Depo Kapasitesi: 53 litre"
        ],
        problems: [
          "1.2 PureTech motor yağ seyreltme sorunu",
          "EAT8 otomatik şanzıman adaptasyon gecikmesi",
          "Hibrit sistem koordinasyon yazılım hatası",
          "LED far elektronik kontrol arızası"
        ]
      },
      "408": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.6L Hybrid/Elektrik",
          "Beygir Gücü: 130-225 HP",
          "Tork: 230-360 Nm",
          "0-100 km/s: 7.7-9.5 saniye",
          "Maksimum Hız: 190-220 km/h",
          "Şanzıman: 6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 1.0-5.8L/100km",
          "Bagaj Hacmi: 536 litre",
          "Ağırlık: 1.330-1.650 kg",
          "Depo/Batarya Kapasitesi: 50L/58.2 kWh"
        ],
        problems: [
          "Hibrit sistem koordinasyon ve şarj sorunu",
          "i-Cockpit ergonomi adaptasyon zorluğu",
          "Elektrikli versiyonda batarya termal yönetimi",
          "Multimedya sistemi yazılım güncelleme hatası"
        ]
      },
      "508": {
        specs: [
          "Motor Tipi: 1.5L BlueHDi/1.6L PureTech/Hybrid",
          "Beygir Gücü: 130-225 HP",
          "Tork: 300-360 Nm",
          "0-100 km/s: 7.3-9.7 saniye",
          "Maksimum Hız: 200-233 km/h",
          "Şanzıman: 6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 1.4-5.2L/100km",
          "Bagaj Hacmi: 487 litre",
          "Ağırlık: 1.395-1.680 kg",
          "Depo Kapasitesi: 62 litre"
        ],
        problems: [
          "1.6 PureTech motor intercooler sızıntı sorunu",
          "EAT8 otomatik şanzıman sarsıntı ve titreşim",
          "AdBlue depo sensörü ve enjektör arızası",
          "Frameless kapı cam mekanizması aşınması"
        ]
      },
      "2008": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.5L BlueHDi/Elektrik",
          "Beygir Gücü: 100-136 HP",
          "Tork: 205-260 Nm",
          "0-100 km/s: 8.7-10.1 saniye",
          "Maksimum Hız: 150-180 km/h",
          "Şanzıman: 6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 4.3-5.9L/100km",
          "Bagaj Hacmi: 360 litre",
          "Ağırlık: 1.204-1.555 kg",
          "Depo/Batarya Kapasitesi: 44L/50 kWh"
        ],
        problems: [
          "1.2 PureTech motor karbon birikimi sorunu",
          "Elektrikli versiyonda batarya soğutma sistemi",
          "i-Cockpit 3D dijital gösterge arızası",
          "Grip Control sistemi elektronik kontrol"
        ]
      },
      "3008": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.5L BlueHDi/1.6L Hybrid",
          "Beygir Gücü: 130-300 HP",
          "Tork: 230-520 Nm",
          "0-100 km/s: 6.1-9.8 saniye",
          "Maksimum Hız: 190-235 km/h",
          "Şanzıman: 6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 1.3-6.2L/100km",
          "Bagaj Hacmi: 520 litre",
          "Ağırlık: 1.395-1.975 kg",
          "Depo/Batarya Kapasitesi: 53L/13.2 kWh"
        ],
        problems: [
          "1.6 PureTech motor zamanlama zinciri gürültüsü",
          "EAT8 otomatik şanzıman geç tepki sorunu",
          "Plug-in hibrit sistem şarj koordinasyon hatası",
          "Panoramik tavan elektrikli perde mekanizması"
        ]
      },
      "5008": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.5L BlueHDi/1.6L Hybrid",
          "Beygir Gücü: 130-225 HP",
          "Tork: 230-400 Nm",
          "0-100 km/s: 8.7-10.3 saniye",
          "Maksimum Hız: 190-215 km/h",
          "Şanzıman: 6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 1.4-6.8L/100km",
          "Bagaj Hacmi: 780-1940 litre",
          "Ağırlık: 1.470-1.975 kg",
          "Depo/Batarya Kapasitesi: 56L/13.2 kWh"
        ],
        problems: [
          "Hibrit sistem yazılım güncelleme sorunları",
          "Üçüncü sıra koltuk elektrikli mekanizma arızası",
          "AdBlue sistemi donma ve kalibrasyon hatası",
          "Multimedya ekran dokunmatik yanıt gecikmesi"
        ]
      },
      "Partner": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.5L BlueHDi/Elektrik",
          "Beygir Gücü: 75-130 HP",
          "Tork: 118-300 Nm",
          "0-100 km/s: 10.7-16.1 saniye",
          "Maksimum Hız: 160-175 km/h",
          "Şanzıman: 5-6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 4.4-6.0L/100km",
          "Yük Hacmi: 3.3-4.4 m³",
          "Ağırlık: 1.310-1.920 kg",
          "Depo/Batarya Kapasitesi: 50L/50 kWh"
        ],
        problems: [
          "1.5 BlueHDi motor DPF rejenerasyon sıklığı",
          "Elektrikli versiyonda şarj hızı düşüklüğü",
          "Sürgülü kapı ray sistemi aşınması",
          "Elektronik aksam nem ve korozyon sorunu"
        ]
      },
      "Expert": {
        specs: [
          "Motor Tipi: 2.0L BlueHDi/Elektrik",
          "Beygir Gücü: 120-180 HP",
          "Tork: 300-400 Nm",
          "0-100 km/s: 10.2-13.1 saniye",
          "Maksimum Hız: 170-180 km/h",
          "Şanzıman: 6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 6.1-7.8L/100km",
          "Yük Hacmi: 5.1-6.6 m³",
          "Ağırlık: 1.845-2.500 kg",
          "Depo/Batarya Kapasitesi: 80L/75 kWh"
        ],
        problems: [
          "2.0 BlueHDi motor EGR valfi karbon birikimi",
          "6 ileri manuel şanzıman debriyaj aşınması",
          "AdBlue depo ve enjektör sistemi arızası",
          "Elektrikli versiyonda menzil düşüklüğü soğukta"
        ]
      }
    }
  },
  "Nissan": {
    logo: "https://www.carlogos.org/car-logos/nissan-logo.png",
    models: [
      { name: "Micra", year: "2017-2024", description: "Subcompact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nissan_2020_logo.svg/2560px-Nissan_2020_logo.svg.png", prices: { new: "-", used: "350.000 - 650.000 TL" } },
      { name: "Note", year: "2020-2024", description: "Subcompact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nissan_2020_logo.svg/2560px-Nissan_2020_logo.svg.png", prices: { new: "-", used: "450.000 - 750.000 TL" } },
      { name: "Sentra", year: "2019-2024", description: "Compact sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nissan_2020_logo.svg/2560px-Nissan_2020_logo.svg.png", prices: { new: "-", used: "550.000 - 900.000 TL" } },
      { name: "Altima", year: "2019-2024", description: "Mid-size sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nissan_2020_logo.svg/2560px-Nissan_2020_logo.svg.png", prices: { new: "-", used: "750.000 - 1.300.000 TL" } },
      { name: "Maxima", year: "2016-2023", description: "Full-size sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nissan_2020_logo.svg/2560px-Nissan_2020_logo.svg.png", prices: { new: "-", used: "900.000 - 1.500.000 TL" } },
      { name: "Juke", year: "2019-2024", description: "Subcompact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nissan_2020_logo.svg/2560px-Nissan_2020_logo.svg.png", prices: { new: "1.616.400 - 2.265.600 TL", used: "500.000 - 950.000 TL" } },
      { name: "Qashqai", year: "2021-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nissan_2020_logo.svg/2560px-Nissan_2020_logo.svg.png", prices: { new: "2.149.000 - 3.685.900 TL", used: "700.000 - 1.400.000 TL" } },
      { name: "X-Trail", year: "2022-2024", description: "Mid-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nissan_2020_logo.svg/2560px-Nissan_2020_logo.svg.png", prices: { new: "4.243.000 - 4.683.500 TL", used: "950.000 - 1.800.000 TL" } },
      { name: "Ariya", year: "2022-2024", description: "Mid-size electric SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nissan_2020_logo.svg/2560px-Nissan_2020_logo.svg.png", prices: { new: "-", used: "1.400.000 - 2.200.000 TL" } },
      { name: "Leaf", year: "2017-2024", description: "Compact electric hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nissan_2020_logo.svg/2560px-Nissan_2020_logo.svg.png", prices: { new: "-", used: "700.000 - 1.400.000 TL" } }
    ],
    details: {
      "Micra": {
        specs: [
          "Motor Tipi: 1.0L IG-T Turbo/1.5L e-Power",
          "Beygir Gücü: 71-117 HP",
          "Tork: 95-180 Nm",
          "0-100 km/s: 9.9-13.1 saniye",
          "Maksimum Hız: 160-180 km/h",
          "Şanzıman: 5 İleri Manuel/X-Tronic CVT",
          "Yakıt Tüketimi: 4.1-5.2L/100km",
          "Bagaj Hacmi: 300 litre",
          "Ağırlık: 1.020-1.180 kg",
          "Depo Kapasitesi: 41 litre"
        ],
        problems: [
          "1.0 IG-T turbo actuator elektronik arızası",
          "CVT şanzıman titreme ve ısınma sorunu",
          "Start/Stop sistemi batarya boşalması",
          "Multimedya ekran dokunmatik yanıt gecikmesi"
        ]
      },
      "Note": {
        specs: [
          "Motor Tipi: 1.2L e-Power Hibrit",
          "Beygir Gücü: 82 HP (Benzin) + 109 HP (Elektrik)",
          "Tork: 103 Nm (Benzin) + 254 Nm (Elektrik)",
          "0-100 km/s: 9.7 saniye",
          "Maksimum Hız: 175 km/h",
          "Şanzıman: e-Power Tek Hız Redüktör",
          "Yakıt Tüketimi: 3.9L/100km",
          "Bagaj Hacmi: 340 litre",
          "Ağırlık: 1.220 kg",
          "Depo Kapasitesi: 36 litre"
        ],
        problems: [
          "e-Power sistem koordinasyon yazılım hatası",
          "Elektrik motor inverter aşırı ısınma",
          "Hibrit batarya soğutma fan arızası",
          "Regeneratif fren sistemi kalibrasyon sorunu"
        ]
      },
      "Sentra": {
        specs: [
          "Motor Tipi: 2.0L MR20DE Doğal Emişli",
          "Beygir Gücü: 149 HP",
          "Tork: 198 Nm",
          "0-100 km/s: 9.2 saniye",
          "Maksimum Hız: 190 km/h",
          "Şanzıman: X-Tronic CVT",
          "Yakıt Tüketimi: 6.7L/100km",
          "Bagaj Hacmi: 508 litre",
          "Ağırlık: 1.295 kg",
          "Depo Kapasitesi: 50 litre"
        ],
        problems: [
          "MR20 motor zamanlama zinciri gürültüsü",
          "CVT şanzıman erken aşınma ve sarsıntı",
          "Klima kompresörü kavrama arızası",
          "Arka fren disk erken aşınma sorunu"
        ]
      },
      "Altima": {
        specs: [
          "Motor Tipi: 2.5L QR25DE/2.0L VC-Turbo",
          "Beygir Gücü: 188-248 HP",
          "Tork: 244-370 Nm",
          "0-100 km/s: 6.9-8.4 saniye",
          "Maksimum Hız: 210-230 km/h",
          "Şanzıman: X-Tronic CVT",
          "Yakıt Tüketimi: 7.1-8.9L/100km",
          "Bagaj Hacmi: 444 litre",
          "Ağırlık: 1.450-1.520 kg",
          "Depo Kapasitesi: 60 litre"
        ],
        problems: [
          "VC-Turbo motor karmaşık mekanik yapı arızası",
          "CVT şanzıman adaptasyon ve titreme sorunu",
          "Turbo intercooler boru çatlağı",
          "ProPILOT Assist radar kalibrasyon hatası"
        ]
      },
      "Maxima": {
        specs: [
          "Motor Tipi: 3.5L VQ35DE V6",
          "Beygir Gücü: 300 HP",
          "Tork: 354 Nm",
          "0-100 km/s: 5.8 saniye",
          "Maksimum Hız: 230 km/h",
          "Şanzıman: X-Tronic CVT",
          "Yakıt Tüketimi: 9.8L/100km",
          "Bagaj Hacmi: 417 litre",
          "Ağırlık: 1.665 kg",
          "Depo Kapasitesi: 68 litre"
        ],
        problems: [
          "VQ35 V6 motor aşırı yağ tüketimi",
          "CVT şanzıman aşırı ısınma ve titreme",
          "Hava süspansiyonu kompresör arızası",
          "Bose ses sistemi amplifikatör arızası"
        ]
      },
      "Juke": {
        specs: [
          "Motor Tipi: 1.0L DIG-T Turbo",
          "Beygir Gücü: 114 HP",
          "Tork: 180 Nm",
          "0-100 km/s: 10.4 saniye",
          "Maksimum Hız: 180 km/h",
          "Şanzıman: 6 İleri Manuel/7 İleri DCT",
          "Yakıt Tüketimi: 5.6L/100km",
          "Bagaj Hacmi: 422 litre",
          "Ağırlık: 1.235 kg",
          "Depo Kapasitesi: 46 litre"
        ],
        problems: [
          "1.0 DIG-T turbo intercooler boru çatlağı",
          "7 ileri DCT şanzıman kavrama aşınması",
          "Start/Stop sistemi batarya ve alternatör arızası",
          "NissanConnect multimedya ekran donma sorunu"
        ]
      },
      "Qashqai": {
        specs: [
          "Motor Tipi: 1.3L DIG-T Mild Hybrid/e-Power",
          "Beygir Gücü: 140-190 HP",
          "Tork: 240-330 Nm",
          "0-100 km/s: 8.4-9.3 saniye",
          "Maksimum Hız: 190-200 km/h",
          "Şanzıman: 6 İleri Manuel/X-Tronic CVT",
          "Yakıt Tüketimi: 5.1-6.1L/100km",
          "Bagaj Hacmi: 504 litre",
          "Ağırlık: 1.415-1.680 kg",
          "Depo Kapasitesi: 55 litre"
        ],
        problems: [
          "1.3 DIG-T motor zamanlama zinciri gürültüsü",
          "e-Power sistem yazılım güncelleme sorunları",
          "ProPILOT Assist kamera kalibrasyon hatası",
          "Panoramik tavan elektrikli perde arızası"
        ]
      },
      "X-Trail": {
        specs: [
          "Motor Tipi: 1.5L VC-Turbo e-Power",
          "Beygir Gücü: 204 HP (Sistem Toplam)",
          "Tork: 330 Nm",
          "0-100 km/s: 7.1 saniye",
          "Maksimum Hız: 200 km/h",
          "Şanzıman: e-Power Tek Hız Redüktör",
          "Yakıt Tüketimi: 5.8L/100km",
          "Bagaj Hacmi: 575-1.396 litre",
          "Ağırlık: 1.705-1.955 kg",
          "Depo Kapasitesi: 55 litre"
        ],
        problems: [
          "VC-Turbo motor karmaşık yapı bakım zorluğu",
          "e-Power sistem koordinasyon gecikmesi",
          "AWD sistem elektronik kontrol arızası",
          "Üçüncü sıra koltuk elektrikli katlanma mekanizması"
        ]
      },
      "Ariya": {
        specs: [
          "Motor Tipi: Tek/Çift Elektrik Motor",
          "Beygir Gücü: 218-389 HP",
          "Tork: 300-600 Nm",
          "0-100 km/s: 5.1-7.5 saniye",
          "Maksimum Hız: 160-200 km/h",
          "Şanzıman: Tek Hız Redüktör",
          "Menzil: 403-500 km (WLTP)",
          "Bagaj Hacmi: 468 litre",
          "Ağırlık: 1.955-2.300 kg",
          "Batarya Kapasitesi: 63-87 kWh"
        ],
        problems: [
          "Batarya termal yönetim sistemi arızası",
          "ProPILOT 2.0 hands-off kalibrasyon sorunu",
          "CHAdeMO şarj portu uyumluluk problemi",
          "e-4ORCE AWD sistem yazılım hatası"
        ]
      },
      "Leaf": {
        specs: [
          "Motor Tipi: Senkron Elektrik Motor",
          "Beygir Gücü: 150-217 HP",
          "Tork: 320-340 Nm",
          "0-100 km/s: 6.9-7.9 saniye",
          "Maksimum Hız: 144-157 km/h",
          "Şanzıman: Tek Hız Redüktör",
          "Menzil: 270-385 km (WLTP)",
          "Bagaj Hacmi: 435 litre",
          "Ağırlık: 1.580-1.725 kg",
          "Batarya Kapasitesi: 40-62 kWh"
        ],
        problems: [
          "Batarya kapasitesi düşüşü ve termal yönetim",
          "CHAdeMO şarj portu eski teknoloji uyumsuzluğu",
          "e-Pedal sistemi kalibrasyon hatası",
          "NissanConnect EV app bağlantı sorunları"
        ]
      }
    }
  },
  "Skoda": {
    logo: "https://www.carlogos.org/car-logos/skoda-logo.png",
    models: [
      { name: "Citigo", year: "2017-2020", description: "City car", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Skoda_Auto_Logo_2023.svg/2560px-Skoda_Auto_Logo_2023.svg.png", prices: { new: "-", used: "250.000 - 450.000 TL" } },
      { name: "Fabia", year: "2021-2024", description: "Subcompact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Skoda_Auto_Logo_2023.svg/2560px-Skoda_Auto_Logo_2023.svg.png", prices: { new: "1.733.700 - 2.103.100 TL", used: "400.000 - 750.000 TL" } },
      { name: "Scala", year: "2019-2024", description: "Compact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Skoda_Auto_Logo_2023.svg/2560px-Skoda_Auto_Logo_2023.svg.png", prices: { new: "1.785.900 - 2.255.000 TL", used: "550.000 - 900.000 TL" } },
      { name: "Octavia", year: "2019-2024", description: "Compact sedan/wagon", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Skoda_Auto_Logo_2023.svg/2560px-Skoda_Auto_Logo_2023.svg.png", prices: { new: "2.552.900 - 4.973.900 TL", used: "650.000 - 1.200.000 TL" } },
      { name: "Superb", year: "2019-2024", description: "Executive sedan/wagon", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Skoda_Auto_Logo_2023.svg/2560px-Skoda_Auto_Logo_2023.svg.png", prices: { new: "3.530.400 - 6.675.900 TL", used: "850.000 - 1.500.000 TL" } },
      { name: "Kamiq", year: "2019-2024", description: "Subcompact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Skoda_Auto_Logo_2023.svg/2560px-Skoda_Auto_Logo_2023.svg.png", prices: { new: "1.796.600 - 2.374.400 TL", used: "550.000 - 950.000 TL" } },
      { name: "Karoq", year: "2017-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Skoda_Auto_Logo_2023.svg/2560px-Skoda_Auto_Logo_2023.svg.png", prices: { new: "3.032.900 - 3.334.500 TL", used: "700.000 - 1.300.000 TL" } },
      { name: "Kodiaq", year: "2016-2024", description: "Mid-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Skoda_Auto_Logo_2023.svg/2560px-Skoda_Auto_Logo_2023.svg.png", prices: { new: "3.586.400 - 7.004.900 TL", used: "900.000 - 1.600.000 TL" } },
      { name: "Enyaq", year: "2021-2024", description: "Mid-size electric SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Skoda_Auto_Logo_2023.svg/2560px-Skoda_Auto_Logo_2023.svg.png", prices: { new: "3.382.500 - 4.399.900 TL", used: "1.300.000 - 2.000.000 TL" } },
      { name: "Roomster", year: "2015-2020", description: "Compact MPV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Skoda_Auto_Logo_2023.svg/2560px-Skoda_Auto_Logo_2023.svg.png", prices: { new: "-", used: "350.000 - 650.000 TL" } }
    ],
    details: {
      "Citigo": {
        specs: [
          "Motor Tipi: 1.0L MPI/1.0L CNG/Elektrik",
          "Beygir Gücü: 60-83 HP",
          "Tork: 93-212 Nm",
          "0-100 km/s: 12.3-14.1 saniye",
          "Maksimum Hız: 160-170 km/h",
          "Şanzıman: 5 İleri Manuel/ASG Otomatik",
          "Yakıt Tüketimi: 4.1-4.7L/100km",
          "Bagaj Hacmi: 251 litre",
          "Ağırlık: 929-1.165 kg",
          "Depo/Batarya Kapasitesi: 35L/36.8 kWh"
        ],
        problems: [
          "1.0 MPI motor karbon birikimi sorunu",
          "ASG otomatik şanzıman adaptasyon gecikmesi",
          "Elektrikli versiyonda şarj portu kapağı arızası",
          "İç trim plastik parça gıcırdama sesleri"
        ]
      },
      "Fabia": {
        specs: [
          "Motor Tipi: 1.0L TSI/1.5L TSI",
          "Beygir Gücü: 95-150 HP",
          "Tork: 175-250 Nm",
          "0-100 km/s: 7.9-10.9 saniye",
          "Maksimum Hız: 185-220 km/h",
          "Şanzıman: 5-6 İleri Manuel/7 İleri DSG",
          "Yakıt Tüketimi: 4.9-5.8L/100km",
          "Bagaj Hacmi: 380 litre",
          "Ağırlık: 1.145-1.280 kg",
          "Depo Kapasitesi: 40 litre"
        ],
        problems: [
          "1.0 TSI motor zamanlama kayışı erken kopması",
          "DSG şanzıman mekatronik ünitesi arızası",
          "Su pompası plastik çark kırılması",
          "Start/Stop sistemi batarya boşalma sorunu"
        ]
      },
      "Scala": {
        specs: [
          "Motor Tipi: 1.0L TSI/1.5L TSI",
          "Beygir Gücü: 95-150 HP",
          "Tork: 175-250 Nm",
          "0-100 km/s: 7.8-10.7 saniye",
          "Maksimum Hız: 190-220 km/h",
          "Şanzıman: 5-6 İleri Manuel/7 İleri DSG",
          "Yakıt Tüketimi: 4.9-6.0L/100km",
          "Bagaj Hacmi: 467 litre",
          "Ağırlık: 1.205-1.335 kg",
          "Depo Kapasitesi: 45 litre"
        ],
        problems: [
          "1.0 TSI motor turbo actuator elektronik arızası",
          "DSG şanzıman sarsıntı ve adaptasyon sorunu",
          "Klima evaporatör sızıntı ve koku sorunu",
          "Multimedya ekran dokunmatik yanıt gecikmesi"
        ]
      },
      "Octavia": {
        specs: [
          "Motor Tipi: 1.5L TSI mHEV/2.0L TSI/2.0L TDI",
          "Beygir Gücü: 150-265 HP",
          "Tork: 250-370 Nm",
          "0-100 km/s: 6.7-8.5 saniye",
          "Maksimum Hız: 215-250 km/h",
          "Şanzıman: 6 İleri Manuel/7 İleri DSG",
          "Yakıt Tüketimi: 4.8-7.4L/100km",
          "Bagaj Hacmi: 600-640 litre",
          "Ağırlık: 1.365-1.565 kg",
          "Depo Kapasitesi: 50 litre"
        ],
        problems: [
          "1.5 TSI motor zamanlama zinciri gürültüsü",
          "DSG şanzıman mekatronik kontrol ünitesi",
          "mHEV mild hibrit sistem koordinasyon hatası",
          "LED far balast elektronik arızası"
        ]
      },
      "Superb": {
        specs: [
          "Motor Tipi: 1.5L TSI mHEV/2.0L TSI/2.0L TDI/PHEV",
          "Beygir Gücü: 150-265 HP",
          "Tork: 250-370 Nm",
          "0-100 km/s: 6.5-8.7 saniye",
          "Maksimum Hız: 215-250 km/h",
          "Şanzıman: 6 İleri Manuel/7 İleri DSG",
          "Yakıt Tüketimi: 1.0-6.8L/100km",
          "Bagaj Hacmi: 645-660 litre",
          "Ağırlık: 1.470-1.815 kg",
          "Depo/Batarya Kapasitesi: 66L/13 kWh"
        ],
        problems: [
          "2.0 TSI motor intercooler sızıntı sorunu",
          "DSG şanzıman geç tepki ve sarsıntı",
          "PHEV hibrit sistem şarj koordinasyon hatası",
          "Hava süspansiyonu kompresör arızası"
        ]
      },
      "Kamiq": {
        specs: [
          "Motor Tipi: 1.0L TSI/1.5L TSI",
          "Beygir Gücü: 95-150 HP",
          "Tork: 175-250 Nm",
          "0-100 km/s: 8.4-10.4 saniye",
          "Maksimum Hız: 185-215 km/h",
          "Şanzıman: 5-6 İleri Manuel/7 İleri DSG",
          "Yakıt Tüketimi: 5.2-6.1L/100km",
          "Bagaj Hacmi: 400 litre",
          "Ağırlık: 1.235-1.365 kg",
          "Depo Kapasitesi: 45 litre"
        ],
        problems: [
          "1.0 TSI motor karbon birikimi sorunu",
          "DSG şanzıman mekatronik adaptasyon gecikmesi",
          "Park asistanı sensör kalibrasyon hatası",
          "Panoramik tavan su sızıntısı sorunu"
        ]
      },
      "Karoq": {
        specs: [
          "Motor Tipi: 1.5L TSI/2.0L TSI/2.0L TDI",
          "Beygir Gücü: 150-190 HP",
          "Tork: 250-320 Nm",
          "0-100 km/s: 7.9-9.1 saniye",
          "Maksimum Hız: 200-215 km/h",
          "Şanzıman: 6 İleri Manuel/7 İleri DSG",
          "Yakıt Tüketimi: 5.6-7.2L/100km",
          "Bagaj Hacmi: 521 litre",
          "Ağırlık: 1.410-1.605 kg",
          "Depo Kapasitesi: 58 litre"
        ],
        problems: [
          "1.5 TSI motor zamanlama zinciri sorunu",
          "4Motion AWD sistem elektronik kontrol arızası",
          "DSG şanzıman sıcaklık sensörü hatası",
          "Elektrikli bagaj kapağı mekanizma arızası"
        ]
      },
      "Kodiaq": {
        specs: [
          "Motor Tipi: 1.5L TSI mHEV/2.0L TSI/2.0L TDI",
          "Beygir Gücü: 150-265 HP",
          "Tork: 250-370 Nm",
          "0-100 km/s: 7.8-9.8 saniye",
          "Maksimum Hız: 200-230 km/h",
          "Şanzıman: 6 İleri Manuel/7 İleri DSG",
          "Yakıt Tüketimi: 6.2-8.1L/100km",
          "Bagaj Hacmi: 270-2065 litre",
          "Ağırlık: 1.665-1.955 kg",
          "Depo Kapasitesi: 60 litre"
        ],
        problems: [
          "2.0 TDI motor DPF rejenerasyon sıklığı",
          "DSG şanzıman mekatronik soğutma sorunu",
          "Üçüncü sıra koltuk elektrikli mekanizma",
          "AdBlue depo sensörü ve enjektör arızası"
        ]
      },
      "Enyaq": {
        specs: [
          "Motor Tipi: Tek/Çift Elektrik Motor",
          "Beygir Gücü: 179-340 HP",
          "Tork: 310-679 Nm",
          "0-100 km/s: 6.2-8.5 saniye",
          "Maksimum Hız: 160-180 km/h",
          "Şanzıman: Tek Hız Redüktör",
          "Menzil: 412-537 km (WLTP)",
          "Bagaj Hacmi: 585 litre",
          "Ağırlık: 2.050-2.335 kg",
          "Batarya Kapasitesi: 58-82 kWh"
        ],
        problems: [
          "MEB platform yazılım güncelleme sorunları",
          "Batarya termal yönetim sistemi arızası",
          "DC şarj portu soğutma fan arızası",
          "Multimedya sistemi donma ve yeniden başlatma"
        ]
      },
      "Roomster": {
        specs: [
          "Motor Tipi: 1.2L TSI/1.4L TDI/1.6L TDI",
          "Beygir Gücü: 86-105 HP",
          "Tork: 160-250 Nm",
          "0-100 km/s: 10.9-13.2 saniye",
          "Maksimum Hız: 170-185 km/h",
          "Şanzıman: 5-6 İleri Manuel/7 İleri DSG",
          "Yakıt Tüketimi: 4.2-6.8L/100km",
          "Bagaj Hacmi: 450-1810 litre",
          "Ağırlık: 1.245-1.395 kg",
          "Depo Kapasitesi: 45 litre"
        ],
        problems: [
          "1.2 TSI motor zamanlama zinciri gürültüsü",
          "Manuel şanzıman senkronizasyon aşınması",
          "DPF dizel partikül filtresi tıkanma",
          "Sürgülü kapı ray sistemi aşınma sorunu"
        ]
      }
    }
  },
  "Citroen": {
    logo: "https://www.carlogos.org/car-logos/citroen-logo.png",
    models: [
      { name: "C1", year: "2014-2022", description: "City car", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Citroen_Logo_2022.svg/2560px-Citroen_Logo_2022.svg.png", prices: { new: "-", used: "300.000 - 550.000 TL" } },
      { name: "C3", year: "2016-2024", description: "Subcompact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Citroen_Logo_2022.svg/2560px-Citroen_Logo_2022.svg.png", prices: { new: "1.450.000 - 1.850.000 TL", used: "400.000 - 750.000 TL" } },
      { name: "C4", year: "2020-2024", description: "Compact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Citroen_Logo_2022.svg/2560px-Citroen_Logo_2022.svg.png", prices: { new: "1.750.000 - 2.350.000 TL", used: "550.000 - 950.000 TL" } },
      { name: "C5 X", year: "2022-2024", description: "Mid-size fastback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Citroen_Logo_2022.svg/2560px-Citroen_Logo_2022.svg.png", prices: { new: "-", used: "850.000 - 1.350.000 TL" } },
      { name: "Berlingo", year: "2018-2024", description: "Compact MPV/van", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Citroen_Logo_2022.svg/2560px-Citroen_Logo_2022.svg.png", prices: { new: "1.650.000 - 2.150.000 TL", used: "450.000 - 850.000 TL" } },
      { name: "C3 Aircross", year: "2017-2024", description: "Subcompact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Citroen_Logo_2022.svg/2560px-Citroen_Logo_2022.svg.png", prices: { new: "1.550.000 - 2.050.000 TL", used: "500.000 - 900.000 TL" } },
      { name: "C5 Aircross", year: "2018-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Citroen_Logo_2022.svg/2560px-Citroen_Logo_2022.svg.png", prices: { new: "-", used: "700.000 - 1.250.000 TL" } },
      { name: "SpaceTourer", year: "2016-2024", description: "Large MPV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Citroen_Logo_2022.svg/2560px-Citroen_Logo_2022.svg.png", prices: { new: "-", used: "800.000 - 1.450.000 TL" } },
      { name: "Jumpy", year: "2016-2024", description: "Mid-size van", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Citroen_Logo_2022.svg/2560px-Citroen_Logo_2022.svg.png", prices: { new: "2.250.000 - 2.850.000 TL", used: "700.000 - 1.350.000 TL" } },
      { name: "Jumper", year: "2014-2024", description: "Large van", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Citroen_Logo_2022.svg/2560px-Citroen_Logo_2022.svg.png", prices: { new: "2.650.000 - 3.450.000 TL", used: "800.000 - 1.600.000 TL" } }
    ],
    details: {
      "C1": {
        specs: [
          "Motor Tipi: 1.0L VTi/1.2L PureTech",
          "Beygir Gücü: 68-82 HP",
          "Tork: 93-118 Nm",
          "0-100 km/s: 11.9-14.2 saniye",
          "Maksimum Hız: 160-171 km/h",
          "Şanzıman: 5 İleri Manuel/ETG5 Otomatik",
          "Yakıt Tüketimi: 4.1-5.2L/100km",
          "Bagaj Hacmi: 196 litre",
          "Ağırlık: 840-925 kg",
          "Depo Kapasitesi: 35 litre"
        ],
        problems: [
          "1.0 VTi motor karbon birikimi sorunu",
          "ETG5 otomatik şanzıman adaptasyon gecikmesi",
          "5 ileri manuel şanzıman senkronizasyon aşınması",
          "Multimedya ekran dokunmatik hassasiyet kaybı"
        ]
      },
      "C3": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.5L BlueHDi",
          "Beygir Gücü: 75-130 HP",
          "Tork: 118-230 Nm",
          "0-100 km/s: 8.7-11.2 saniye",
          "Maksimum Hız: 165-185 km/h",
          "Şanzıman: 5-6 İleri Manuel/EAT6 Otomatik",
          "Yakıt Tüketimi: 4.3-5.8L/100km",
          "Bagaj Hacmi: 300 litre",
          "Ağırlık: 1.090-1.205 kg",
          "Depo Kapasitesi: 45 litre"
        ],
        problems: [
          "1.2 PureTech motor yağ seyreltme sorunu",
          "EAT6 otomatik şanzıman sarsıntı ve geç tepki",
          "Airbump yan koruma şişme ve soyulma",
          "Multimedya ekran donma ve yeniden başlatma"
        ]
      },
      "C4": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.5L BlueHDi/Elektrik",
          "Beygir Gücü: 100-136 HP",
          "Tork: 205-260 Nm",
          "0-100 km/s: 8.2-10.5 saniye",
          "Maksimum Hız: 150-180 km/h",
          "Şanzıman: 6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 4.4-6.2L/100km",
          "Bagaj Hacmi: 380 litre",
          "Ağırlık: 1.240-1.674 kg",
          "Depo/Batarya Kapasitesi: 50L/50 kWh"
        ],
        problems: [
          "1.2 PureTech motor zamanlama kayışı erken kopması",
          "Elektrikli versiyonda şarj portu kapağı arızası",
          "Progressive Hydraulic Cushions süspansiyon sızıntısı",
          "10 inç dokunmatik ekran yazılım donması"
        ]
      },
      "C5 X": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.6L Hybrid/Elektrik",
          "Beygir Gücü: 130-225 HP",
          "Tork: 230-360 Nm",
          "0-100 km/s: 7.7-9.5 saniye",
          "Maksimum Hız: 190-220 km/h",
          "Şanzıman: 6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 1.0-5.8L/100km",
          "Bagaj Hacmi: 545 litre",
          "Ağırlık: 1.330-1.650 kg",
          "Depo/Batarya Kapasitesi: 53L/58.2 kWh"
        ],
        problems: [
          "Hibrit sistem koordinasyon ve şarj sorunu",
          "Advanced Comfort koltuk elektronik ayar arızası",
          "Elektrikli versiyonda batarya termal yönetimi",
          "12 inç HD ekran dokunmatik yanıt gecikmesi"
        ]
      },
      "Berlingo": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.5L BlueHDi/Elektrik",
          "Beygir Gücü: 75-130 HP",
          "Tork: 118-300 Nm",
          "0-100 km/s: 10.7-16.1 saniye",
          "Maksimum Hız: 160-175 km/h",
          "Şanzıman: 5-6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 4.4-6.0L/100km",
          "Yük/Bagaj Hacmi: 775-4000 litre",
          "Ağırlık: 1.310-1.920 kg",
          "Depo/Batarya Kapasitesi: 50L/50 kWh"
        ],
        problems: [
          "1.5 BlueHDi motor DPF rejenerasyon sıklığı",
          "Elektrikli versiyonda şarj hızı düşüklüğü",
          "Sürgülü kapı ray sistemi aşınması",
          "Modüler koltuk mekanizması kilit arızası"
        ]
      },
      "C3 Aircross": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.5L BlueHDi",
          "Beygir Gücü: 110-130 HP",
          "Tork: 205-300 Nm",
          "0-100 km/s: 8.9-10.1 saniye",
          "Maksimum Hız: 175-185 km/h",
          "Şanzıman: 6 İleri Manuel/EAT6 Otomatik",
          "Yakıt Tüketimi: 4.5-5.9L/100km",
          "Bagaj Hacmi: 410 litre",
          "Ağırlık: 1.204-1.355 kg",
          "Depo Kapasitesi: 45 litre"
        ],
        problems: [
          "1.2 PureTech motor karbon birikimi sorunu",
          "Grip Control sistemi elektronik kontrol arızası",
          "EAT6 otomatik şanzıman adaptasyon gecikmesi",
          "Airbump yan koruma malzeme aşınması"
        ]
      },
      "C5 Aircross": {
        specs: [
          "Motor Tipi: 1.2L PureTech/1.5L BlueHDi/1.6L Hybrid",
          "Beygir Gücü: 130-225 HP",
          "Tork: 230-400 Nm",
          "0-100 km/s: 8.7-10.3 saniye",
          "Maksimum Hız: 190-215 km/h",
          "Şanzıman: 6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 1.4-6.8L/100km",
          "Bagaj Hacmi: 580 litre",
          "Ağırlık: 1.470-1.975 kg",
          "Depo/Batarya Kapasitesi: 53L/13.2 kWh"
        ],
        problems: [
          "1.6 PureTech motor zamanlama zinciri gürültüsü",
          "Progressive Hydraulic Cushions süspansiyon sızıntısı",
          "Plug-in hibrit sistem şarj koordinasyon hatası",
          "Panoramik tavan elektrikli perde mekanizması"
        ]
      },
      "SpaceTourer": {
        specs: [
          "Motor Tipi: 2.0L BlueHDi",
          "Beygir Gücü: 120-180 HP",
          "Tork: 300-400 Nm",
          "0-100 km/s: 10.2-13.1 saniye",
          "Maksimum Hız: 170-180 km/h",
          "Şanzıman: 6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 6.1-7.8L/100km",
          "Yolcu Kapasitesi: 4-9 kişi",
          "Ağırlık: 1.845-2.200 kg",
          "Depo Kapasitesi: 70 litre"
        ],
        problems: [
          "2.0 BlueHDi motor EGR valfi karbon birikimi",
          "AdBlue depo sensörü ve enjektör arızası",
          "EAT8 otomatik şanzıman adaptasyon gecikmesi",
          "Elektrikli sürgülü kapı mekanizma arızası"
        ]
      },
      "Jumpy": {
        specs: [
          "Motor Tipi: 2.0L BlueHDi/Elektrik",
          "Beygir Gücü: 120-180 HP",
          "Tork: 300-400 Nm",
          "0-100 km/s: 10.2-13.1 saniye",
          "Maksimum Hız: 170-180 km/h",
          "Şanzıman: 6 İleri Manuel/EAT8 Otomatik",
          "Yakıt Tüketimi: 6.1-7.8L/100km",
          "Yük Hacmi: 5.1-6.6 m³",
          "Ağırlık: 1.845-2.500 kg",
          "Depo/Batarya Kapasitesi: 80L/75 kWh"
        ],
        problems: [
          "2.0 BlueHDi motor DPF rejenerasyon sıklığı",
          "AdBlue sistemi donma ve kalibrasyon hatası",
          "6 ileri manuel şanzıman debriyaj aşınması",
          "Elektrikli versiyonda menzil düşüklüğü soğukta"
        ]
      },
      "Jumper": {
        specs: [
          "Motor Tipi: 2.2L BlueHDi",
          "Beygir Gücü: 120-180 HP",
          "Tork: 300-400 Nm",
          "0-100 km/s: 11.5-14.2 saniye",
          "Maksimum Hız: 160-175 km/h",
          "Şanzıman: 6 İleri Manuel/EAT9 Otomatik",
          "Yakıt Tüketimi: 7.2-8.8L/100km",
          "Yük Hacmi: 8.0-17.0 m³",
          "Ağırlık: 2.100-3.500 kg",
          "Depo Kapasitesi: 90 litre"
        ],
        problems: [
          "2.2 BlueHDi motor turbo intercooler sızıntısı",
          "AdBlue depo ve enjektör sistemi arızası",
          "EAT9 otomatik şanzıman elektronik kontrol",
          "Yük bölümü LED aydınlatma elektronik arızası"
        ]
      }
    }
  },
  "Kia": {
    logo: "https://www.carlogos.org/car-logos/kia-logo.png",
    models: [
      { name: "Picanto", year: "2017-2024", description: "City car", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg.png", prices: { new: "1.290.000 - 1.335.000 TL", used: "350.000 - 650.000 TL" } },
      { name: "Rio", year: "2017-2024", description: "Subcompact hatchback/sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg.png", prices: { new: "-", used: "450.000 - 800.000 TL" } },
      { name: "Ceed", year: "2018-2024", description: "Compact hatchback/wagon", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg.png", prices: { new: "2.070.000 TL", used: "550.000 - 1.100.000 TL" } },
      { name: "Forte", year: "2018-2024", description: "Compact sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg.png", prices: { new: "-", used: "600.000 - 1.050.000 TL" } },
      { name: "Optima", year: "2020-2024", description: "Mid-size sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg.png", prices: { new: "-", used: "750.000 - 1.350.000 TL" } },
      { name: "Stonic", year: "2017-2024", description: "Subcompact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg.png", prices: { new: "1.740.000 - 1.800.000 TL", used: "500.000 - 950.000 TL" } },
      { name: "Sportage", year: "2022-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg.png", prices: { new: "2.370.000 - 3.325.000 TL", used: "850.000 - 1.600.000 TL" } },
      { name: "Sorento", year: "2020-2024", description: "Mid-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg.png", prices: { new: "-", used: "1.100.000 - 2.000.000 TL" } },
      { name: "EV6", year: "2021-2024", description: "Mid-size electric SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg.png", prices: { new: "-", used: "1.500.000 - 2.200.000 TL" } },
      { name: "Niro", year: "2022-2024", description: "Compact SUV hybrid/electric", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg.png", prices: { new: "2.260.000 TL", used: "950.000 - 1.600.000 TL" } }
    ],
    details: {
      "Picanto": {
        specs: [
          "Motor Tipi: 1.0L MPI/1.2L MPI",
          "Beygir Gücü: 67-84 HP",
          "Tork: 96-122 Nm",
          "0-100 km/s: 11.6-14.2 saniye",
          "Maksimum Hız: 160-171 km/h",
          "Şanzıman: 5 İleri Manuel/4 İleri Otomatik",
          "Yakıt Tüketimi: 4.7-5.8L/100km",
          "Bagaj Hacmi: 255 litre",
          "Ağırlık: 1.015-1.095 kg",
          "Depo Kapasitesi: 35 litre"
        ],
        problems: [
          "1.0 MPI motor karbon birikimi sorunu",
          "Manuel şanzıman debriyaj erken aşınması",
          "Direksiyon mafsalı ve rotil sesi",
          "Multimedya ekran dokunmatik hassasiyet kaybı"
        ]
      },
      "Rio": {
        specs: [
          "Motor Tipi: 1.0L T-GDi/1.4L MPI",
          "Beygir Gücü: 100-140 HP",
          "Tork: 172-175 Nm",
          "0-100 km/s: 9.4-11.9 saniye",
          "Maksimum Hız: 175-185 km/h",
          "Şanzıman: 5-6 İleri Manuel/CVT",
          "Yakıt Tüketimi: 5.2-6.8L/100km",
          "Bagaj Hacmi: 325 litre",
          "Ağırlık: 1.160-1.240 kg",
          "Depo Kapasitesi: 45 litre"
        ],
        problems: [
          "1.0 T-GDi motor turbo actuator arızası",
          "CVT şanzıman sarsıntı ve geç tepki sorunu",
          "Klima kompresörü kavrama arızası",
          "Arka fren balata erken aşınma"
        ]
      },
      "Ceed": {
        specs: [
          "Motor Tipi: 1.0L T-GDi/1.4L T-GDi/1.6L CRDi",
          "Beygir Gücü: 120-204 HP",
          "Tork: 172-378 Nm",
          "0-100 km/s: 7.4-10.4 saniye",
          "Maksimum Hız: 190-230 km/h",
          "Şanzıman: 6 İleri Manuel/7 İleri DCT",
          "Yakıt Tüketimi: 4.5-6.8L/100km",
          "Bagaj Hacmi: 395-625 litre",
          "Ağırlık: 1.270-1.485 kg",
          "Depo Kapasitesi: 50 litre"
        ],
        problems: [
          "1.4 T-GDi motor zamanlama zinciri gürültüsü",
          "7 ileri DCT şanzıman ısınma ve titreme",
          "1.6 CRDi motor DPF tıkanıklığı sorunu",
          "LED far balast elektronik arızası"
        ]
      },
      "Forte": {
        specs: [
          "Motor Tipi: 1.6L GDi/2.0L MPI",
          "Beygir Gücü: 147-201 HP",
          "Tork: 179-195 Nm",
          "0-100 km/s: 8.4-9.7 saniye",
          "Maksimum Hız: 190-210 km/h",
          "Şanzıman: 6 İleri Manuel/CVT",
          "Yakıt Tüketimi: 6.2-7.8L/100km",
          "Bagaj Hacmi: 502 litre",
          "Ağırlık: 1.295-1.385 kg",
          "Depo Kapasitesi: 50 litre"
        ],
        problems: [
          "1.6 GDi motor karbon birikimi sorunu",
          "CVT şanzıman geç tepki ve sarsıntı",
          "Direksiyon EPS sistemi elektronik arızası",
          "Arka süspansiyon amortisör sızıntısı"
        ]
      },
      "Optima": {
        specs: [
          "Motor Tipi: 1.6L T-GDi/2.0L T-GDi/2.5L GDi",
          "Beygir Gücü: 180-290 HP",
          "Tork: 265-422 Nm",
          "0-100 km/s: 6.6-8.4 saniye",
          "Maksimum Hız: 210-240 km/h",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "Yakıt Tüketimi: 7.1-9.2L/100km",
          "Bagaj Hacmi: 510 litre",
          "Ağırlık: 1.515-1.685 kg",
          "Depo Kapasitesi: 70 litre"
        ],
        problems: [
          "2.0 T-GDi motor intercooler sızıntı sorunu",
          "8 ileri otomatik şanzıman sarsıntı ve geç tepki",
          "Panoramik tavan su sızıntısı",
          "Multimedya ekran donma ve yeniden başlatma"
        ]
      },
      "Stonic": {
        specs: [
          "Motor Tipi: 1.0L T-GDi/1.4L MPI",
          "Beygir Gücü: 100-140 HP",
          "Tork: 172-175 Nm",
          "0-100 km/s: 9.4-11.2 saniye",
          "Maksimum Hız: 175-185 km/h",
          "Şanzıman: 5-6 İleri Manuel/7 İleri DCT",
          "Yakıt Tüketimi: 5.4-6.2L/100km",
          "Bagaj Hacmi: 352 litre",
          "Ağırlık: 1.205-1.285 kg",
          "Depo Kapasitesi: 45 litre"
        ],
        problems: [
          "1.0 T-GDi motor turbo intercooler sızıntısı",
          "7 ileri DCT şanzıman kavrama aşınması",
          "Park asistanı sensör kalibrasyon hatası",
          "Klima evaporatör sızıntı ve koku sorunu"
        ]
      },
      "Sportage": {
        specs: [
          "Motor Tipi: 1.6L T-GDi/2.5L T-GDi Hibrit",
          "Beygir Gücü: 150-265 HP",
          "Tork: 253-422 Nm",
          "0-100 km/s: 8.1-9.1 saniye",
          "Maksimum Hız: 190-210 km/h",
          "Şanzıman: 6 İleri Manuel/8 İleri Otomatik",
          "Yakıt Tüketimi: 6.1-7.8L/100km",
          "Bagaj Hacmi: 591 litre",
          "Ağırlık: 1.595-1.815 kg",
          "Depo Kapasitesi: 54 litre"
        ],
        problems: [
          "1.6 T-GDi motor zamanlama zinciri gürültüsü",
          "8 ileri otomatik şanzıman adaptasyon gecikmesi",
          "Hibrit sistem koordinasyon yazılım hatası",
          "Elektrikli bagaj kapağı sensör arızası"
        ]
      },
      "Sorento": {
        specs: [
          "Motor Tipi: 2.5L T-GDi/2.5L T-GDi Hibrit",
          "Beygir Gücü: 191-277 HP",
          "Tork: 332-422 Nm",
          "0-100 km/s: 8.0-8.8 saniye",
          "Maksimum Hız: 200-210 km/h",
          "Şanzıman: 8 İleri Otomatik",
          "Yakıt Tüketimi: 7.8-9.2L/100km",
          "Bagaj Hacmi: 821-2011 litre",
          "Ağırlık: 1.815-2.005 kg",
          "Depo Kapasitesi: 67 litre"
        ],
        problems: [
          "2.5 T-GDi motor intercooler sızıntı sorunu",
          "8 ileri otomatik şanzıman geç tepki ve sarsıntı",
          "Üçüncü sıra koltuk elektrikli katlanma arızası",
          "AWD sistem elektronik kontrol hatası"
        ]
      },
      "EV6": {
        specs: [
          "Motor Tipi: Tek/Çift Elektrik Motor",
          "Beygir Gücü: 170-585 HP",
          "Tork: 350-740 Nm",
          "0-100 km/s: 3.5-7.3 saniye",
          "Maksimum Hız: 185-260 km/h",
          "Şanzıman: Tek Hız Redüktör",
          "Menzil: 394-528 km (WLTP)",
          "Bagaj Hacmi: 520 litre",
          "Ağırlık: 2.055-2.200 kg",
          "Batarya Kapasitesi: 58-77.4 kWh"
        ],
        problems: [
          "800V batarya şarj sistemi elektronik arızası",
          "Yazılım güncelleme bağlantı ve donma sorunu",
          "Regeneratif fren sistemi kalibrasyon hatası",
          "12V yardımcı batarya erken boşalma"
        ]
      },
      "Niro": {
        specs: [
          "Motor Tipi: 1.6L GDi Hibrit/Elektrik Motor",
          "Beygir Gücü: 105-204 HP",
          "Tork: 147-255 Nm",
          "0-100 km/s: 7.8-11.5 saniye",
          "Maksimum Hız: 165-167 km/h",
          "Şanzıman: 6 İleri DCT/Tek Hız Redüktör",
          "Yakıt Tüketimi/Menzil: 3.8L/100km - 463 km",
          "Bagaj Hacmi: 451 litre",
          "Ağırlık: 1.425-1.737 kg",
          "Depo/Batarya Kapasitesi: 42L/64.8 kWh"
        ],
        problems: [
          "Hibrit sistem koordinasyon ve şarj sorunu",
          "6 ileri DCT şanzıman ısınma ve titreme",
          "Elektrikli versiyonda batarya soğutma fan arızası",
          "Multimedya ekran yazılım donma ve güncelleme"
        ]
      }
    }
  },
  "Lexus": {
    logo: "https://www.carlogos.org/car-logos/lexus-logo.png",
    models: [
      { name: "UX", year: "2018-2024", description: "Compact luxury SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lexus_logo.svg/2560px-Lexus_logo.svg.png", prices: { new: "-", used: "1.000.000 - 1.650.000 TL" } },
      { name: "NX", year: "2021-2024", description: "Compact luxury SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lexus_logo.svg/2560px-Lexus_logo.svg.png", prices: { new: "-", used: "1.300.000 - 2.100.000 TL" } },
      { name: "RX", year: "2022-2024", description: "Mid-size luxury SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lexus_logo.svg/2560px-Lexus_logo.svg.png", prices: { new: "4.850.000 - 6.250.000 TL", used: "1.700.000 - 2.800.000 TL" } },
      { name: "GX", year: "2023-2024", description: "Mid-size luxury SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lexus_logo.svg/2560px-Lexus_logo.svg.png", prices: { new: "-", used: "2.200.000 - 3.200.000 TL" } },
      { name: "LX", year: "2021-2024", description: "Full-size luxury SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lexus_logo.svg/2560px-Lexus_logo.svg.png", prices: { new: "-", used: "3.200.000 - 4.500.000 TL" } },
      { name: "IS", year: "2020-2024", description: "Compact luxury sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lexus_logo.svg/2560px-Lexus_logo.svg.png", prices: { new: "-", used: "1.100.000 - 1.900.000 TL" } },
      { name: "ES", year: "2018-2024", description: "Mid-size luxury sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lexus_logo.svg/2560px-Lexus_logo.svg.png", prices: { new: "-", used: "1.300.000 - 2.200.000 TL" } },
      { name: "LS", year: "2017-2024", description: "Full-size luxury sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lexus_logo.svg/2560px-Lexus_logo.svg.png", prices: { new: "-", used: "2.500.000 - 3.800.000 TL" } },
      { name: "LC", year: "2017-2024", description: "Luxury grand tourer coupe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lexus_logo.svg/2560px-Lexus_logo.svg.png", prices: { new: "-", used: "2.800.000 - 4.200.000 TL" } },
      { name: "RZ", year: "2022-2024", description: "Mid-size electric SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lexus_logo.svg/2560px-Lexus_logo.svg.png", prices: { new: "-", used: "2.100.000 - 2.900.000 TL" } }
    ],
    details: {
      "UX": {
        specs: [
          "Motor Tipi: 2.0L Atkinson + Hibrit Sistem",
          "Sistem Gücü: 181-196 HP",
          "Tork: 188-206 Nm",
          "0-100 km/s: 8.5-8.9 saniye",
          "Maksimum Hız: 180 km/h",
          "Şanzıman: E-CVT Hibrit",
          "Yakıt Tüketimi: 4.3-4.8L/100km",
          "Bagaj Hacmi: 320 litre",
          "Ağırlık: 1.540-1.605 kg",
          "Batarya Kapasitesi: 1.1 kWh (Ni-MH)"
        ],
        problems: [
          "Remote Touch bilgi-eğlence sistemi kullanım zorluğu",
          "Run-flat lastik yol gürültüsü ve sert sürüş",
          "Hibrit fren sistemi hissizlik ve adaptasyon",
          "Arka koltuk alan kısıtlılığı ve ergonomi"
        ]
      },
      "NX": {
        specs: [
          "Motor Tipi: 2.4L Turbo/2.5L Hibrit/PHEV",
          "Sistem Gücü: 275-367 HP",
          "Tork: 430-648 Nm",
          "0-100 km/s: 6.0-7.7 saniye",
          "Maksimum Hız: 200-210 km/h",
          "Şanzıman: 8 İleri Otomatik/E-CVT",
          "Yakıt Tüketimi: 1.4-7.8L/100km",
          "Bagaj Hacmi: 520 litre",
          "Ağırlık: 1.750-2.145 kg",
          "Depo/Batarya Kapasitesi: 55L/18.1 kWh"
        ],
        problems: [
          "2.4L Turbo motor intercooler sızıntı sorunu",
          "PHEV şarj sistemi koordinasyon gecikmesi",
          "Lexus Safety System+ kalibrasyon hassasiyeti",
          "Premium ses sistemi amplifikatör arızası"
        ]
      },
      "RX": {
        specs: [
          "Motor Tipi: 2.4L Turbo/2.5L Hibrit",
          "Sistem Gücü: 275-366 HP",
          "Tork: 430-648 Nm",
          "0-100 km/s: 6.2-7.9 saniye",
          "Maksimum Hız: 200-210 km/h",
          "Şanzıman: 8 İleri Otomatik/E-CVT",
          "Yakıt Tüketimi: 6.4-8.1L/100km",
          "Bagaj Hacmi: 612 litre",
          "Ağırlık: 1.995-2.240 kg",
          "Depo Kapasitesi: 72 litre"
        ],
        problems: [
          "Hava süspansiyonu kompresör erken aşınması",
          "Hibrit inverter soğutma sistemi arızası",
          "Panoramik tavan motor mekanizması arızası",
          "AWD sistem elektronik kontrol sensör hatası"
        ]
      },
      "GX": {
        specs: [
          "Motor Tipi: 3.4L V6 Twin-Turbo",
          "Sistem Gücü: 349 HP",
          "Tork: 479 Nm",
          "0-100 km/s: 6.7 saniye",
          "Maksimum Hız: 200 km/h",
          "Şanzıman: 10 İleri Otomatik",
          "Yakıt Tüketimi: 11.2-12.8L/100km",
          "Bagaj Hacmi: 560-1870 litre",
          "Ağırlık: 2.570 kg",
          "Depo Kapasitesi: 87 litre"
        ],
        problems: [
          "V6 BiTurbo intercooler sızıntı ve aşırı ısınma",
          "10 ileri otomatik şanzıman adaptasyon gecikmesi",
          "Multi-terrain sistemi kalibrasyon hatası",
          "Yüksek yakıt tüketimi ve emisyon sorunları"
        ]
      },
      "LX": {
        specs: [
          "Motor Tipi: 3.4L V6 Twin-Turbo",
          "Sistem Gücü: 409 HP",
          "Tork: 650 Nm",
          "0-100 km/s: 6.9 saniye",
          "Maksimum Hız: 210 km/h",
          "Şanzıman: 10 İleri Otomatik",
          "Yakıt Tüketimi: 12.1-13.8L/100km",
          "Bagaj Hacmi: 200-1930 litre",
          "Ağırlık: 2.890 kg",
          "Depo Kapasitesi: 110 litre"
        ],
        problems: [
          "V6 twin-turbo motor aşırı yakıt tüketimi",
          "Hava süspansiyonu kompresör ve valf arızası",
          "Üçüncü sıra koltuk elektrikli mekanizma",
          "Crawl Control sistemi elektronik sensör hatası"
        ]
      },
      "IS": {
        specs: [
          "Motor Tipi: 2.0L Turbo/3.5L V6",
          "Sistem Gücü: 241-472 HP",
          "Tork: 350-530 Nm",
          "0-100 km/s: 4.3-7.0 saniye",
          "Maksimum Hız: 230-270 km/h",
          "Şanzıman: 8 İleri Otomatik",
          "Yakıt Tüketimi: 7.8-11.2L/100km",
          "Bagaj Hacmi: 480 litre",
          "Ağırlık: 1.680-1.765 kg",
          "Depo Kapasitesi: 66 litre"
        ],
        problems: [
          "2.0L Turbo motor karbon birikimi sorunu",
          "8 ileri otomatik şanzıman sarsıntı ve geç tepki",
          "Run-flat lastik erken aşınma ve gürültü",
          "Remote Touch pad kullanım zorluğu ve hassasiyet"
        ]
      },
      "ES": {
        specs: [
          "Motor Tipi: 2.5L Atkinson + Hibrit",
          "Sistem Gücü: 203-215 HP",
          "Tork: 221-221 Nm",
          "0-100 km/s: 8.9 saniye",
          "Maksimum Hız: 180 km/h",
          "Şanzıman: E-CVT Hibrit",
          "Yakıt Tüketimi: 4.6-5.2L/100km",
          "Bagaj Hacmi: 473 litre",
          "Ağırlık: 1.650-1.715 kg",
          "Batarya Kapasitesi: 1.3 kWh (Ni-MH)"
        ],
        problems: [
          "E-CVT şanzıman geç tepki ve motor gürültüsü",
          "Hibrit sistem inverter soğutma fan arızası",
          "Lexus Safety System+ radar kalibrasyon",
          "Premium ses sistemi elektronik kontrol arızası"
        ]
      },
      "LS": {
        specs: [
          "Motor Tipi: 3.5L V6 Hibrit/5.0L V8",
          "Sistem Gücü: 354-471 HP",
          "Tork: 500-530 Nm",
          "0-100 km/s: 4.6-5.4 saniye",
          "Maksimum Hız: 250 km/h",
          "Şanzıman: Multi-Stage Hibrit/10 İleri Otomatik",
          "Yakıt Tüketimi: 7.8-12.5L/100km",
          "Bagaj Hacmi: 430 litre",
          "Ağırlık: 2.220-2.340 kg",
          "Depo Kapasitesi: 82 litre"
        ],
        problems: [
          "Multi-Stage hibrit sistem karmaşık arıza teşhisi",
          "Hava süspansiyonu kalibrasyon ve sızıntı",
          "5.0L V8 motor aşırı yakıt tüketimi",
          "Lexus Interface multimedya sistemi donma"
        ]
      },
      "LC": {
        specs: [
          "Motor Tipi: 3.5L V6 Hibrit/5.0L V8",
          "Sistem Gücü: 354-471 HP",
          "Tork: 500-530 Nm",
          "0-100 km/s: 4.7-5.0 saniye",
          "Maksimum Hız: 250-270 km/h",
          "Şanzıman: Multi-Stage Hibrit/10 İleri Otomatik",
          "Yakıt Tüketimi: 8.1-12.8L/100km",
          "Bagaj Hacmi: 197 litre",
          "Ağırlık: 1.935-2.110 kg",
          "Depo Kapasitesi: 82 litre"
        ],
        problems: [
          "5.0L V8 motor yağ tüketimi ve emisyon",
          "10 ileri otomatik şanzıman adaptasyon sorunu",
          "Aktif süspansiyon elektronik kontrol arızası",
          "Üstü açılır tavan mekanizması motor arızası"
        ]
      },
      "RZ": {
        specs: [
          "Motor Tipi: Çift Elektrik Motor AWD",
          "Sistem Gücü: 313 HP",
          "Tork: 435 Nm",
          "0-100 km/s: 5.3 saniye",
          "Maksimum Hız: 160 km/h",
          "Şanzıman: Tek Hız Redüktör",
          "Menzil: 440 km (WLTP)",
          "Bagaj Hacmi: 522 litre",
          "Ağırlık: 2.330 kg",
          "Batarya Kapasitesi: 71.4 kWh"
        ],
        problems: [
          "Batarya termal yönetim sistemi arızası",
          "DC şarj hızı düşüklüğü ve uyumluluk",
          "Lexus Safety System+ elektrikli araç kalibrasyonu",
          "Regeneratif fren sistemi hissizlik ve adaptasyon"
        ]
      }
    }
  },
  "Seat": {
    logo: "https://www.carlogos.org/car-logos/seat-logo.png",
    models: [
      { name: "Ibiza", year: "2017-2024", description: "Subcompact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Seat_Logo.svg/2560px-Seat_Logo.svg.png", prices: { new: "-", used: "400.000 - 750.000 TL" } },
      { name: "Leon", year: "2020-2024", description: "Compact hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Seat_Logo.svg/2560px-Seat_Logo.svg.png", prices: { new: "-", used: "600.000 - 1.100.000 TL" } },
      { name: "Toledo", year: "2016-2019", description: "Compact sedan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Seat_Logo.svg/2560px-Seat_Logo.svg.png", prices: { new: "-", used: "400.000 - 800.000 TL" } },
      { name: "Arona", year: "2017-2024", description: "Subcompact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Seat_Logo.svg/2560px-Seat_Logo.svg.png", prices: { new: "-", used: "500.000 - 950.000 TL" } },
      { name: "Ateca", year: "2016-2024", description: "Compact SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Seat_Logo.svg/2560px-Seat_Logo.svg.png", prices: { new: "-", used: "700.000 - 1.250.000 TL" } },
      { name: "Tarraco", year: "2018-2024", description: "Mid-size SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Seat_Logo.svg/2560px-Seat_Logo.svg.png", prices: { new: "-", used: "900.000 - 1.600.000 TL" } },
      { name: "Mii", year: "2016-2020", description: "City car", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Seat_Logo.svg/2560px-Seat_Logo.svg.png", prices: { new: "-", used: "250.000 - 500.000 TL" } },
      { name: "Alhambra", year: "2015-2020", description: "Large MPV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Seat_Logo.svg/2560px-Seat_Logo.svg.png", prices: { new: "-", used: "700.000 - 1.350.000 TL" } },
      { name: "Born", year: "2021-2024", description: "Compact electric hatchback", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Seat_Logo.svg/2560px-Seat_Logo.svg.png", prices: { new: "-", used: "1.100.000 - 1.650.000 TL" } },
      { name: "Cupra Formentor", year: "2020-2024", description: "Compact performance SUV", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Seat_Logo.svg/2560px-Seat_Logo.svg.png", prices: { new: "-", used: "1.200.000 - 1.900.000 TL" } }
    ],
    details: {
      "Ibiza": {
        specs: [
          "Motor Tipi: 1.0L TSI/1.5L TSI",
          "Beygir Gücü: 80-150 HP",
          "Tork: 175-250 Nm",
          "0-100 km/s: 7.9-11.4 saniye",
          "Maksimum Hız: 185-220 km/h",
          "Şanzıman: 5-7 İleri Manuel/DSG",
          "Yakıt Tüketimi: 4.7-5.9L/100km",
          "Bagaj Hacmi: 355 litre",
          "Ağırlık: 1.145-1.280 kg",
          "Depo Kapasitesi: 40 litre"
        ],
        problems: [
          "1.0 TSI motor zamanlama kayışı erken kopması",
          "DSG şanzıman mekatronik ünitesi arızası",
          "Termostat ve devirdaim su kaçağı sorunu",
          "Kapı kilit mekanizması elektronik arızası"
        ]
      },
      "Leon": {
        specs: [
          "Motor Tipi: 1.0L TSI/1.5L TSI/2.0L TSI/e-Hybrid",
          "Beygir Gücü: 90-310 HP",
          "Tork: 175-400 Nm",
          "0-100 km/s: 4.9-10.7 saniye",
          "Maksimum Hız: 180-250 km/h",
          "Şanzıman: 6-7 İleri Manuel/DSG",
          "Yakıt Tüketimi: 1.4-6.8L/100km",
          "Bagaj Hacmi: 380 litre",
          "Ağırlık: 1.270-1.595 kg",
          "Depo/Batarya Kapasitesi: 50L/13 kWh"
        ],
        problems: [
          "1.5 TSI motor zamanlama zinciri gürültüsü",
          "DSG şanzıman sarsıntı ve adaptasyon gecikmesi",
          "e-Hybrid sistem koordinasyon yazılım hatası",
          "İç trim plastik parça gıcırdama sesleri"
        ]
      },
      "Toledo": {
        specs: [
          "Motor Tipi: 1.0L TSI/1.2L TSI/1.6L TDI",
          "Beygir Gücü: 90-115 HP",
          "Tork: 160-250 Nm",
          "0-100 km/s: 9.4-11.9 saniye",
          "Maksimum Hız: 180-195 km/h",
          "Şanzıman: 5-6 İleri Manuel/DSG",
          "Yakıt Tüketimi: 4.1-5.8L/100km",
          "Bagaj Hacmi: 550 litre",
          "Ağırlık: 1.175-1.315 kg",
          "Depo Kapasitesi: 55 litre"
        ],
        problems: [
          "1.2 TSI motor zamanlama zinciri sorunu",
          "1.6 TDI motor DPF rejenerasyon sıklığı",
          "DSG şanzıman mekatronik soğutma arızası",
          "Elektrikli cam mekanizması motor arızası"
        ]
      },
      "Arona": {
        specs: [
          "Motor Tipi: 1.0L TSI/1.5L TSI",
          "Beygir Gücü: 95-150 HP",
          "Tork: 175-250 Nm",
          "0-100 km/s: 8.4-10.9 saniye",
          "Maksimum Hız: 185-215 km/h",
          "Şanzıman: 5-6 İleri Manuel/7 İleri DSG",
          "Yakıt Tüketimi: 5.2-6.1L/100km",
          "Bagaj Hacmi: 400 litre",
          "Ağırlık: 1.235-1.365 kg",
          "Depo Kapasitesi: 45 litre"
        ],
        problems: [
          "1.0 TSI motor turbo actuator elektronik arızası",
          "DSG şanzıman kavrama aşınması ve titreme",
          "Su pompası plastik çark kırılması",
          "Multimedya ekran dokunmatik yanıt gecikmesi"
        ]
      },
      "Ateca": {
        specs: [
          "Motor Tipi: 1.0L TSI/1.4L TSI/2.0L TSI/2.0L TDI",
          "Beygir Gücü: 115-300 HP",
          "Tork: 200-400 Nm",
          "0-100 km/s: 6.5-10.2 saniye",
          "Maksimum Hız: 190-247 km/h",
          "Şanzıman: 6 İleri Manuel/7 İleri DSG",
          "Yakıt Tüketimi: 5.6-8.1L/100km",
          "Bagaj Hacmi: 510 litre",
          "Ağırlık: 1.410-1.625 kg",
          "Depo Kapasitesi: 58 litre"
        ],
        problems: [
          "1.4 TSI motor zamanlama zinciri gürültüsü",
          "4Drive AWD sistem elektronik kontrol arızası",
          "DSG şanzıman sıcaklık sensörü hatası",
          "Panoramik tavan su sızıntısı sorunu"
        ]
      },
      "Tarraco": {
        specs: [
          "Motor Tipi: 1.4L TSI/2.0L TSI/2.0L TDI",
          "Beygir Gücü: 150-245 HP",
          "Tork: 250-370 Nm",
          "0-100 km/s: 7.8-9.8 saniye",
          "Maksimum Hız: 200-215 km/h",
          "Şanzıman: 6 İleri Manuel/7 İleri DSG",
          "Yakıt Tüketimi: 6.2-8.1L/100km",
          "Bagaj Hacmi: 270-1775 litre",
          "Ağırlık: 1.665-1.955 kg",
          "Depo Kapasitesi: 60 litre"
        ],
        problems: [
          "2.0 TDI motor DPF rejenerasyon sıklığı",
          "DSG şanzıman mekatronik soğutma sorunu",
          "Üçüncü sıra koltuk elektrikli katlanma arızası",
          "Elektrikli bagaj kapağı sensör kalibrasyon"
        ]
      },
      "Mii": {
        specs: [
          "Motor Tipi: 1.0L MPI/Elektrik",
          "Beygir Gücü: 60-83 HP",
          "Tork: 93-212 Nm",
          "0-100 km/s: 12.3-14.1 saniye",
          "Maksimum Hız: 160-170 km/h",
          "Şanzıman: 5 İleri Manuel/ASG Otomatik",
          "Yakıt Tüketimi: 4.1-4.7L/100km",
          "Bagaj Hacmi: 251 litre",
          "Ağırlık: 929-1.235 kg",
          "Depo/Batarya Kapasitesi: 35L/36.8 kWh"
        ],
        problems: [
          "1.0 MPI motor karbon birikimi sorunu",
          "ASG otomatik şanzıman adaptasyon gecikmesi",
          "Elektrikli versiyonda şarj portu kapağı arızası",
          "Kapı kilit merkezi kilitleme sistemi arızası"
        ]
      },
      "Alhambra": {
        specs: [
          "Motor Tipi: 1.4L TSI/2.0L TSI/2.0L TDI",
          "Beygir Gücü: 150-220 HP",
          "Tork: 250-350 Nm",
          "0-100 km/s: 8.3-10.4 saniye",
          "Maksimum Hız: 200-215 km/h",
          "Şanzıman: 6 İleri Manuel/6 İleri DSG",
          "Yakıt Tüketimi: 5.7-8.2L/100km",
          "Yolcu Kapasitesi: 7 kişi",
          "Ağırlık: 1.715-1.845 kg",
          "Depo Kapasitesi: 70 litre"
        ],
        problems: [
          "2.0 TDI motor EGR valfi karbon birikimi",
          "DSG şanzıman elektronik kontrol ünitesi arızası",
          "Sürgülü kapı ray sistemi aşınması",
          "İkinci ve üçüncü sıra koltuk mekanizma arızası"
        ]
      },
      "Born": {
        specs: [
          "Motor Tipi: Tek Elektrik Motor",
          "Beygir Gücü: 150-231 HP",
          "Tork: 310 Nm",
          "0-100 km/s: 6.6-8.5 saniye",
          "Maksimum Hız: 160 km/h",
          "Şanzıman: Tek Hız Redüktör",
          "Menzil: 424-548 km (WLTP)",
          "Bagaj Hacmi: 385 litre",
          "Ağırlık: 1.845-1.920 kg",
          "Batarya Kapasitesi: 58-77 kWh"
        ],
        problems: [
          "MEB platform yazılım güncelleme sorunları",
          "DC şarj hızı düşüklüğü ve uyumluluk",
          "Batarya termal yönetim sistemi arızası",
          "Multimedya sistemi donma ve yeniden başlatma"
        ]
      },
      "Cupra Formentor": {
        specs: [
          "Motor Tipi: 1.4L TSI e-Hybrid/2.0L TSI/2.5L TFSI",
          "Beygir Gücü: 150-390 HP",
          "Tork: 250-480 Nm",
          "0-100 km/s: 4.9-8.9 saniye",
          "Maksimum Hız: 205-250 km/h",
          "Şanzıman: 6 İleri Manuel/7 İleri DSG",
          "Yakıt Tüketimi: 1.4-7.8L/100km",
          "Bagaj Hacmi: 420 litre",
          "Ağırlık: 1.470-1.715 kg",
          "Depo/Batarya Kapasitesi: 55L/13 kWh"
        ],
        problems: [
          "2.5 TFSI motor intercooler sızıntı sorunu",
          "e-Hybrid sistem koordinasyon yazılım hatası",
          "DSG şanzıman performans modu adaptasyon",
          "Cupra Drive Profile elektronik kontrol arızası"
        ]
      }
    }
  }
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedModel, setSelectedModel] = useState(null)
  const { compareList, toggleCompare, isInCompareList, canAddMore } = useCompare()

  // Arama fonksiyonu
  const filteredBrands = Object.keys(carData).filter(brand =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Model seçimi
  const handleModelSelect = (brand, modelName) => {
    setSelectedBrand(brand)
    setSelectedModel(modelName)
  }

  // Ana sayfaya dön
  const handleBackToHome = () => {
    setSelectedBrand(null)
    setSelectedModel(null)
    setSearchTerm('')
  }
  // Model detayları
  if (selectedBrand && selectedModel) {
    const modelDetails = carData[selectedBrand].details[selectedModel]
    
    return (
      <>
        <NavigationBar 
          showBackButton={true}
          onBackClick={handleBackToHome}
          backText="← Ana Sayfaya Dön"
          title={`${selectedBrand} ${selectedModel}`}
        />
        <div className="container">
          <div className="model-details">
          <h2>{selectedBrand} {selectedModel}</h2>
          
          <div className="details-section">
            <h3>🔧 Teknik Özellikler</h3>
            <ul className="details-list">
              {modelDetails.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className="details-section">
            <h3>⚠️ Bilinen Sorunlar</h3>
            <ul className="problems-list">
              {modelDetails.problems.map((problem, index) => (
                <li key={index}>{problem}</li>
              ))}
            </ul>
          </div>

          {/* Yorumlar ve Değerlendirmeler Bölümü */}
          <CommentSection modelName={`${selectedBrand} ${selectedModel}`} />
        </div>
        </div>
      </>
    )
  }

  return (
    <>
    <NavigationBar 
      showBackButton={false}
      title="🚗 Araba Rehberi"
    />
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Araba markası ara... (BMW, Mercedes, Audi, Volkswagen, Toyota, Tesla, Ford, BYD, MG, Fiat, Renault, Alfa Romeo, Honda, Opel, Hyundai, Volvo, Peugeot, Nissan, Skoda, Citroen, Kia, Lexus, Seat)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm && (
        <div>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <button 
              className="floating-back-button"
              onClick={() => setSearchTerm('')}
              style={{ position: 'relative', margin: '0 auto 20px auto', display: 'inline-block' }}
            >
              ← Aramayı Temizle
            </button>
          </div>
          {filteredBrands.length > 0 ? (
            filteredBrands.map(brand => (
              <div key={brand}>
                <h2 style={{ color: 'white', marginBottom: '20px', textAlign: 'center', fontWeight: '700' }}>
                  {brand} Modelleri
                </h2>
                <div className="models-grid">
                  {carData[brand].models.map((model, index) => (
                    <div 
                      key={index}
                      className="model-card"
                      style={{
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      {/* İçerik (Logo, Yazılar, Fiyat) */}
                      <div 
                        className="model-card-content" 
                        style={{ 
                          position: 'relative', 
                          zIndex: 10
                        }}
                      >
                        <div style={{ position: 'relative', marginBottom: '15px' }}>
                          <img 
                            src={carData[brand].logo} 
                            alt={`${brand} logo`} 
                            className="brand-logo"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div 
                            style={{
                              display: 'none',
                              width: '48px',
                              height: '48px',
                              backgroundColor: brandColors[brand] || '#333',
                              color: 'white',
                              borderRadius: '8px',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '18px',
                              fontWeight: 'bold',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}
                          >
                            {brand.charAt(0)}
                          </div>
                        </div>
                        <h3>{model.name}</h3>
                        <p><strong>Yıl:</strong> {model.year}</p>
                        <p>{model.description}</p>
                        {model.prices && (
                          <div style={{ marginTop: '10px', fontSize: '0.9rem', fontWeight: '600' }}>
                            <p><strong>Sıfır:</strong> {model.prices.new}</p>
                            <p><strong>İkinci El:</strong> {model.prices.used}</p>
                          </div>
                        )}
                        
                        {/* Butonlar */}
                        <div className="card-buttons">
                          <button 
                            className="detail-btn"
                            onClick={() => handleModelSelect(brand, model.name)}
                          >
                            📋 Detaylar
                          </button>
                          <button 
                            className={`compare-btn ${isInCompareList({brand, name: model.name, ...model}) ? 'selected' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleCompare({brand, name: model.name, ...model})
                            }}
                            disabled={!canAddMore && !isInCompareList({brand, name: model.name, ...model})}
                          >
                            {isInCompareList({brand, name: model.name, ...model}) ? '✓ Seçildi' : '⚖️ Karşılaştır'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>"{searchTerm}" için sonuç bulunamadı</p>
              <p>Mevcut markalar: BMW, Mercedes, Audi, Volkswagen, Toyota, Tesla, Ford, BYD, MG, Fiat, Renault, Alfa Romeo, Honda, Opel, Hyundai, Volvo, Peugeot, Nissan, Skoda, Citroen, Kia, Lexus, Seat</p>
            </div>
          )}
        </div>
      )}

      {!searchTerm && (
          <div style={{ textAlign: 'center', color: 'white', marginTop: '40px' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: '600' }}>
              Başlamak için yukarıdaki arama çubuğuna bir marka adı yazın
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {Object.keys(carData).map(brand => (
                <button
                  key={brand}
                  onClick={() => setSearchTerm(brand)}
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    border: '2px solid rgba(255,255,255,0.3)',
                    padding: '15px 25px',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <img 
                      src={carData[brand].logo} 
                      alt={`${brand} logo`}
                      style={{
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain',
                        marginRight: '8px',
                        background: 'white',
                        borderRadius: '4px',
                        padding: '2px'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      style={{
                        display: 'none',
                        width: '32px',
                        height: '32px',
                        backgroundColor: brandColors[brand] || '#333',
                        color: 'white',
                        borderRadius: '4px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        marginRight: '8px'
                      }}
                    >
                      {brand.charAt(0)}
                    </div>
                  </div>
                  {brand}
                </button>
              ))}
            </div>
          </div>
      )}
      </div>
      <CompareBar carData={carData} />
    </>
  )
}

export default App