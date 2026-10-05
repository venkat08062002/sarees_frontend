import { NavLink } from 'react-router-dom'
import { StatusBadge } from '../../admin/utils/statusBadge.jsx'
import { userOrders } from '../data/mockData.js'

export function MyOrdersPage() {
  return (
    <div className="user-account-layout">
      <nav className="user-account-nav">
        <NavLink to="/account/orders" className={({ isActive }) => (isActive ? 'active' : '')}>
          My Orders
        </NavLink>
        <NavLink to="/account/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
          My Profile
        </NavLink>
        <NavLink to="/account/wishlist" className={({ isActive }) => (isActive ? 'active' : '')}>
          Wishlist
        </NavLink>
      </nav>
      <div>
        <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--maroon)', marginBottom: '1rem' }}>My Orders</h1>
        <div className="user-order-tabs">
          {['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((t, i) => (
            <button key={t} type="button" className={i === 0 ? 'active' : ''}>
              {t}
            </button>
          ))}
        </div>
        {userOrders.map((o) => (
          <div key={o.id} className="user-order-card">
            <div style={{ minWidth: 120 }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{o.id}</div>
              <div style={{ fontSize: '0.8125rem' }}>{o.date}</div>
            </div>
            <img src={o.img} alt="" />
            <div style={{ flex: 1, minWidth: 160 }}>
              <div style={{ fontWeight: 500 }}>{o.name}</div>
              <div style={{ color: 'var(--maroon)', fontWeight: 600 }}>₹{o.amount.toLocaleString('en-IN')}</div>
            </div>
            <StatusBadge status={o.status} />
            <button type="button" className="user-btn user-btn--outline">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
