import { NavLink } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard.jsx'
import { products } from '../data/mockData.js'

const items = products.slice(0, 2).map((p) => ({
  ...p,
  price: parseInt(p.price.replace(/\D/g, ''), 10),
  mrp: parseInt(p.price.replace(/\D/g, ''), 10) + 4000,
}))

export function WishlistPage() {
  return (
    <div className="user-account-layout">
      <nav className="user-account-nav">
        <NavLink to="/account/orders">My Orders</NavLink>
        <NavLink to="/account/profile">My Profile</NavLink>
        <NavLink to="/account/wishlist" className={({ isActive }) => (isActive ? 'active' : '')}>
          Wishlist
        </NavLink>
      </nav>
      <div>
        <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--maroon)', marginBottom: '1rem' }}>Wishlist</h1>
        <div className="user-product-grid">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
