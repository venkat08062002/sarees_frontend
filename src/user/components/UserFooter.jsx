import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

export function UserFooter() {
  return (
    <footer className="user-footer" id="contact">
      <div className="user-footer__grid">
        <div className="user-footer__brand">
          <div className="user-footer__logo">
            <span aria-hidden>🪷</span> SareeStore
          </div>
          <p className="user-footer__tagline">Tradition in Every Drape</p>
          <p className="user-footer__about">
            Curated silk, cotton, and designer sarees from master weavers across India. Celebrating
            craftsmanship since 2018.
          </p>
          <div className="user-footer__social">
            <a href="#facebook" aria-label="Facebook">
              f
            </a>
            <a href="#instagram" aria-label="Instagram">
              ig
            </a>
            <a href="#youtube" aria-label="YouTube">
              yt
            </a>
          </div>
        </div>

        <div>
          <h4 className="user-footer__heading">Shop</h4>
          <ul className="user-footer__links">
            <li>
              <Link to="/sarees/silk">Silk Sarees</Link>
            </li>
            <li>
              <Link to="/sarees/cotton">Cotton Sarees</Link>
            </li>
            <li>
              <Link to="/sarees/wedding">Wedding Collection</Link>
            </li>
            <li>
              <Link to="/sarees">New Arrivals</Link>
            </li>
            <li>
              <Link to="/sarees">Offers</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="user-footer__heading">Customer Care</h4>
          <ul className="user-footer__links">
            <li>
              <a href="#shipping">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#returns">Returns & Exchanges</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
            <li>
              <Link to="/account/orders">Track Order</Link>
            </li>
            <li>
              <Link to="/login">My Account</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="user-footer__heading">Contact Us</h4>
          <ul className="user-footer__contact">
            <li>
              <MapPin size={16} />
              Hyderabad, Telangana, India
            </li>
            <li>
              <Phone size={16} />
              +91 98765 43210
            </li>
            <li>
              <Mail size={16} />
              hello@sareestore.com
            </li>
          </ul>
          <div className="user-footer__newsletter">
            <p>Subscribe for offers & new collections</p>
            <form className="user-footer__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" aria-label="Email" />
              <button type="submit" className="user-btn user-btn--primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="user-footer__bottom">
        <span>© 2026 SareeStore. All rights reserved.</span>
        <span className="user-footer__payments">COD · UPI · Razorpay · Visa · Mastercard</span>
      </div>
    </footer>
  )
}
