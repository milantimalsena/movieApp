import ApiStatus from './ApiStatus'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3><i className="fas fa-film"></i> MovieFlix</h3>
            <p>Your ultimate destination for streaming the best movies and TV shows.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <ApiStatus />
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/favorites">My Favorites</a></li>
              <li><a href="#">New Releases</a></li>
              <li><a href="#">Top Rated</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Genres</h4>
            <ul>
              <li><a href="#">Action</a></li>
              <li><a href="#">Comedy</a></li>
              <li><a href="#">Drama</a></li>
              <li><a href="#">Horror</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 MovieFlix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer