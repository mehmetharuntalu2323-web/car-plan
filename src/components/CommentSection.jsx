import React, { useState, useEffect } from 'react'

const CommentSection = ({ modelName }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState({
    name: '',
    comment: '',
    rating: 5,
    image: null
  })

  // localStorage anahtarı
  const storageKey = `comments_${modelName.replace(/\s+/g, '_')}`

  // Yorumları localStorage'dan yükle
  useEffect(() => {
    const savedComments = localStorage.getItem(storageKey)
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    }
  }, [storageKey])

  // Fotoğraf seçme ve işleme fonksiyonu
  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Dosya boyutu kontrolü (500KB = 512000 bytes)
    if (file.size > 512000) {
      alert('Lütfen daha küçük boyutlu bir resim seçin (maksimum 500KB)')
      e.target.value = '' // Input'u temizle
      return
    }

    // Dosya tipini kontrol et
    if (!file.type.startsWith('image/')) {
      alert('Lütfen sadece resim dosyası seçin')
      e.target.value = ''
      return
    }

    // FileReader ile Base64'e çevir
    const reader = new FileReader()
    reader.onload = (event) => {
      setNewComment({...newComment, image: event.target.result})
    }
    reader.readAsDataURL(file)
  }

  // Fotoğraf kaldırma fonksiyonu
  const removeImage = () => {
    setNewComment({...newComment, image: null})
    // File input'u temizle
    const fileInput = document.getElementById('image-input')
    if (fileInput) fileInput.value = ''
  }

  // Yorum kaydetme fonksiyonu
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!newComment.name.trim() || !newComment.comment.trim()) {
      alert('Lütfen ad ve yorum alanlarını doldurun!')
      return
    }

    const comment = {
      id: Date.now(),
      name: newComment.name.trim(),
      comment: newComment.comment.trim(),
      rating: newComment.rating,
      image: newComment.image,
      date: new Date().toLocaleDateString('tr-TR')
    }

    const updatedComments = [comment, ...comments]
    setComments(updatedComments)
    localStorage.setItem(storageKey, JSON.stringify(updatedComments))

    // Formu temizle
    setNewComment({
      name: '',
      comment: '',
      rating: 5,
      image: null
    })
    
    // File input'u temizle
    const fileInput = document.getElementById('image-input')
    if (fileInput) fileInput.value = ''
  }

  // Yıldız render fonksiyonu
  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    return (
      <div className="stars-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'filled' : 'empty'} ${interactive ? 'interactive' : ''}`}
            onClick={interactive ? () => onRatingChange(star) : undefined}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  // Yorum silme fonksiyonu (isteğe bağlı)
  const handleDeleteComment = (commentId) => {
    if (window.confirm('Bu yorumu silmek istediğinizden emin misiniz?')) {
      const updatedComments = comments.filter(comment => comment.id !== commentId)
      setComments(updatedComments)
      localStorage.setItem(storageKey, JSON.stringify(updatedComments))
    }
  }
  const averageRating = comments.length > 0 
    ? (comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length).toFixed(1)
    : 0

  return (
    <div className="comment-section">
      <div className="comment-header">
        <h3>Yorumlar ve Değerlendirmeler</h3>
        {comments.length > 0 && (
          <div className="rating-summary">
            <div className="average-rating">
              {renderStars(Math.round(averageRating))}
              <span className="rating-text">{averageRating}/5 ({comments.length} yorum)</span>
            </div>
          </div>
        )}
      </div>

      {/* Yorum Formu */}
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input
              type="text"
              id="name"
              value={newComment.name}
              onChange={(e) => setNewComment({...newComment, name: e.target.value})}
              placeholder="Adınızı yazın..."
              maxLength={50}
            />
          </div>
          <div className="form-group rating-group">
            <label>Puanınız</label>
            {renderStars(newComment.rating, true, (rating) => 
              setNewComment({...newComment, rating})
            )}
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="comment">Yorumunuz</label>
          <textarea
            id="comment"
            value={newComment.comment}
            onChange={(e) => setNewComment({...newComment, comment: e.target.value})}
            placeholder="Bu araç hakkındaki deneyimlerinizi paylaşın..."
            rows={4}
            maxLength={500}
          />
          <div className="char-count">{newComment.comment.length}/500</div>
        </div>

        {/* Fotoğraf Ekleme Bölümü */}
        <div className="form-group">
          <label>Fotoğraf Ekle (İsteğe Bağlı)</label>
          <div className="image-upload-container">
            <input
              type="file"
              id="image-input"
              accept="image/*"
              onChange={handleImageSelect}
              style={{ display: 'none' }}
            />
            <label htmlFor="image-input" className="image-upload-btn">
              📷 Fotoğraf Seç
            </label>
            <span className="image-info">Maksimum 500KB</span>
          </div>
          
          {/* Seçilen fotoğrafın önizlemesi */}
          {newComment.image && (
            <div className="image-preview">
              <img 
                src={newComment.image} 
                alt="Seçilen fotoğraf" 
                className="preview-image"
              />
              <button 
                type="button" 
                onClick={removeImage}
                className="remove-image-btn"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Yorumu Gönder
        </button>
      </form>

      {/* Yorumlar Listesi */}
      <div className="comments-list">
        {comments.length === 0 ? (
          <div className="no-comments">
            <p>Henüz yorum yapılmamış. İlk yorumu siz yapın!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <div className="comment-header-info">
                <div className="comment-author">
                  <span className="author-name">{comment.name}</span>
                  <span className="comment-date">{comment.date}</span>
                </div>
                {renderStars(comment.rating)}
              </div>
              <div className="comment-text">
                {comment.comment}
              </div>
              
              {/* Yorum fotoğrafı */}
              {comment.image && (
                <div className="comment-image">
                  <img 
                    src={comment.image} 
                    alt="Yorum fotoğrafı" 
                    className="comment-photo"
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default CommentSection