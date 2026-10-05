import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Package,
  FolderTree,
  ShoppingCart,
  Users,
  Image,
  Ticket,
  Star,
  BarChart3,
  Settings,
} from 'lucide-react'

const links = [
  { to: '/admin', end: true, icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/admin/products', icon: Package, label: 'Products' },
  { to: '/admin/categories', icon: FolderTree, label: 'Categories' },
  { to: '/admin/orders', icon: ShoppingCart, label: 'Orders' },
  { to: '/admin/customers', icon: Users, label: 'Customers' },
  { to: '/admin/banners', icon: Image, label: 'Banners' },
  { to: '/admin/coupons', icon: Ticket, label: 'Coupons' },
  { to: '/admin/reviews', icon: Star, label: 'Reviews' },
  { to: '/admin/reports', icon: BarChart3, label: 'Reports' },
  { to: '/admin/settings', icon: Settings, label: 'Settings' },
]

export function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__brand">
        <div className="admin-sidebar__logo">🪷</div>
        <div>
          <div className="admin-sidebar__title">SareeStore</div>
          <div className="admin-sidebar__tagline">Tradition in Every Drape</div>
        </div>
      </div>
      <nav>
        <ul className="admin-nav">
          {links.map(({ to, end, icon: Icon, label }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={({ isActive }) => (isActive ? 'active' : '')}>
                <Icon size={18} strokeWidth={1.75} />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="admin-sidebar__footer">
        Beautiful Sarees
        <br />
        Happier Generations
        <br />
        <NavLink to="/" style={{ color: '#fff', marginTop: '0.5rem', display: 'inline-block', opacity: 0.9 }}>
          ← Storefront
        </NavLink>
      </div>
    </aside>
  )
}
