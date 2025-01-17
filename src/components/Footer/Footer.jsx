import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faInstagram ,faTwitter , faYoutube} from '@fortawesome/free-brands-svg-icons'
import './footer.css'


const Footer = () => {
   return(
    <footer className='footer'>
        <div className="footer-parts">
            <div className="icons-part">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <FontAwesomeIcon icon={faInstagram} className="icon" />
                <FontAwesomeIcon icon={faTwitter} className="icon" />
                <FontAwesomeIcon icon={faYoutube} className="icon" />
            </div>
            <div className='footer-list'>
                    <ul>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notices</li>
                    <li>Service Code</li>
                    </ul>
            </div>
        </div>
        <div className="footer-parts">
        <div className='footer-list'>
            <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookies Preferences</li>
            <li>&copy; 1997-2023 Netflix, Inc.</li>
            </ul>
        </div>
        </div>
        <div className="footer-parts">
        <div className='footer-list'>
            <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            </ul>
        </div>

        </div>
        <div className="footer-parts">
        <div className='footer-list'>
           <ul>
           <li>Media Centre</li>
            <li>Contact Us</li>
            <li>Privacy</li>
           </ul>
        </div>

        </div>
  </footer>
   )
}

export default Footer