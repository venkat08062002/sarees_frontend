import { NavLink } from 'react-router-dom'

export function ProfilePage() {
  return (
    <div className="user-account-layout">
      <nav className="user-account-nav">
        <NavLink to="/account/orders">My Orders</NavLink>
        <NavLink to="/account/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
          My Profile
        </NavLink>
        <NavLink to="/account/wishlist">Wishlist</NavLink>
      </nav>
      <div className="user-summary" style={{ background: 'var(--white)' }}>
        <div className="user-profile-avatar">PS</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--maroon)' }}>My Profile</h2>
        <div className="user-form-group">
          <label>Full Name</label>
          <input defaultValue="Priya Sharma" />
        </div>
        <div className="user-form-group">
          <label>Email</label>
          <input defaultValue="priya@email.com" />
        </div>
        <div className="user-form-group">
          <label>Phone</label>
          <input defaultValue="+91 98765 43210" />
        </div>
        <div className="user-form-group">
          <label>Date of Birth</label>
          <input type="date" defaultValue="1995-06-15" />
        </div>
        <button type="button" className="user-btn user-btn--primary">
          Update Profile
        </button>
      </div>
    </div>
  )
}
