import { useState, useEffect } from 'react'

function ApiNotification({ message, type = 'info', duration = 3000 }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration])

  if (!visible) return null

  const getNotificationClass = () => {
    switch (type) {
      case 'success': return 'api-notification success'
      case 'error': return 'api-notification error'
      case 'warning': return 'api-notification warning'
      default: return 'api-notification info'
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'success': return 'fas fa-check-circle'
      case 'error': return 'fas fa-exclamation-circle'
      case 'warning': return 'fas fa-exclamation-triangle'
      default: return 'fas fa-info-circle'
    }
  }

  return (
    <div className={getNotificationClass()}>
      <div className="notification-content">
        <i className={getIcon()}></i>
        <span>{message}</span>
      </div>
      <button 
        onClick={() => setVisible(false)}
        className="notification-close"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}

export default ApiNotification