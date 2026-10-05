import { Search, Bell, ChevronDown } from 'lucide-react'

export function AdminTopBar() {
  return (
    <header className="admin-topbar">
      <div className="admin-topbar__search">
        <Search size={18} />
        <input type="search" placeholder="Search orders, products, customers..." />
      </div>
      <div className="admin-topbar__actions">
        <button type="button" className="admin-topbar__bell" aria-label="Notifications">
          <Bell size={20} />
          <span className="admin-topbar__badge">3</span>
        </button>
        <div className="admin-topbar__user">
          <div className="admin-topbar__avatar">AD</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.8125rem' }}>Admin</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Administrator</div>
          </div>
          <ChevronDown size={16} color="var(--text-muted)" />
        </div>
      </div>
    </header>
  )
}
