import { useState, useEffect } from 'react'
import net20Api from '../services/net20Api'

function ApiStatus() {
  const [apiStatus, setApiStatus] = useState({
    net20: 'checking',
    omdb: 'available'
  })

  useEffect(() => {
    checkApiStatus()
  }, [])

  const checkApiStatus = async () => {
    try {
      const net20Health = await net20Api.checkApiHealth()
      setApiStatus(prev => ({
        ...prev,
        net20: net20Health ? 'available' : 'unavailable'
      }))
    } catch (error) {
      setApiStatus(prev => ({
        ...prev,
        net20: 'unavailable'
      }))
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return '#10b981'
      case 'unavailable': return '#ef4444'
      case 'checking': return '#f59e0b'
      default: return '#6b7280'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'available': return 'Online'
      case 'unavailable': return 'Offline'
      case 'checking': return 'Checking...'
      default: return 'Unknown'
    }
  }

  return (
    <div className="api-status">
      <div className="api-status-header">
        <i className="fas fa-server"></i>
        <span>API Status</span>
      </div>
      
      <div className="api-status-list">
        <div className="api-status-item">
          <div 
            className="status-indicator"
            style={{ backgroundColor: getStatusColor(apiStatus.net20) }}
          ></div>
          <span className="api-name">Net20.cc</span>
          <span className="status-text">{getStatusText(apiStatus.net20)}</span>
        </div>
        
        <div className="api-status-item">
          <div 
            className="status-indicator"
            style={{ backgroundColor: getStatusColor(apiStatus.omdb) }}
          ></div>
          <span className="api-name">OMDB</span>
          <span className="status-text">{getStatusText(apiStatus.omdb)}</span>
        </div>
      </div>
      
      <button 
        onClick={checkApiStatus}
        className="refresh-status-btn"
        title="Refresh API Status"
      >
        <i className="fas fa-sync-alt"></i>
      </button>
    </div>
  )
}

export default ApiStatus