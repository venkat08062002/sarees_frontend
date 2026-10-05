import { Link, NavLink, Outlet } from 'react-router-dom'
import { Heart, ShoppingBag, User } from 'lucide-react'
import { navLinks } from '../data/mockData.js'
import '../styles/user.css'

export function UserLayout() {
  return (
    <div className="user-layout">
      <header className="user-header">
        <div className="user-header__top">
          <Link to="/" className="user-brand">
            <span>🪷</span> SareeStore
          </Link>
          <div className="user-search">
            <input type="search" placeholder="Search sarees, collections..." />
          </div>
          <div className="user-header__icons">
            <Link to="/account/wishlist">
              <Heart size={20} />
              Wishlist
            </Link>
            <Link to="/cart">
              <ShoppingBag size={20} />
              Cart
              <span className="user-cart-badge">2</span>
            </Link>
            <Link to="/login">
              <User size={20} />
              Login
            </Link>
          </div>
        </div>
        <nav className="user-nav">
          <div className="user-nav__inner">
            {navLinks.map((l) => (
              <NavLink key={l.label} to={l.to} end={l.to === '/'}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <main className="user-main">
        <Outlet />
      </main>
      <footer className="user-footer">
        © 2026 SareeStore — Tradition in Every Drape
      </footer>
      <Link to="/admin" className="user-admin-link">
        Admin Panel
      </Link>
    </div>
  )
}
