import { useState } from 'react'
import { Download, X, Ban } from 'lucide-react'
import { PageHeader } from '../components/PageHeader.jsx'
import { Pagination } from '../components/Pagination.jsx'
import { StatusBadge } from '../utils/statusBadge.jsx'
import { customers, recentOrders, IMG } from '../data/mockData.js'

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
}

export function CustomersPage() {
  const [selected, setSelected] = useState(customers[0])

  return (
    <>
      <PageHeader title="Customers" subtitle="Manage registered customers and their activity." />
      <div className="admin-stats">
        {[
          { label: 'Total Customers', value: '892', change: '+12.5%' },
          { label: 'Active Customers', value: '824', change: '+8.3%' },
          { label: 'New This Month', value: '76', change: '+25.0%' },
          { label: 'Blocked Customers', value: '12', change: '+2.1%' },
        ].map((s) => (
          <div key={s.label} className="admin-stat-card">
            <div className="admin-stat-card__label">{s.label}</div>
            <div className="admin-stat-card__row">
              <span className="admin-stat-card__value">{s.value}</span>
              <span className="admin-stat-card__change">{s.change}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="admin-filters">
        <input type="search" placeholder="Search by name, email, or phone..." style={{ flex: 1, maxWidth: 320 }} />
        <select>
          <option>All Status</option>
        </select>
        <select>
          <option>Date Joined</option>
        </select>
        <button type="button" className="admin-btn admin-btn--outline">
          <Download size={16} /> Export
        </button>
      </div>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Orders</th>
              <th>Total Spent</th>
              <th>Last Login</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <tr
                key={c.id}
                className={selected?.id === c.id ? 'selected' : ''}
                onClick={() => setSelected(c)}
                style={{ cursor: 'pointer' }}
              >
                <td>{i + 1}</td>
                <td>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      className="admin-topbar__avatar"
                      style={{ width: 28, height: 28, fontSize: '0.65rem' }}
                    >
                      {initials(c.name)}
                    </span>
                    {c.name}
                  </span>
                </td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.orders}</td>
                <td>{c.spent}</td>
                <td>{c.lastLogin}</td>
                <td>
                  <StatusBadge status={c.status} />
                </td>
                <td>
                  <span className="admin-link" onClick={(e) => { e.stopPropagation(); setSelected(c) }}>
                    View
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination showing="Showing 1 to 8 of 892 customers" />
      </div>

      {selected && (
        <>
          <div className="admin-drawer-overlay" onClick={() => setSelected(null)} aria-hidden />
          <aside className="admin-drawer">
            <div className="admin-drawer__header">
              <h2 style={{ fontSize: '1rem' }}>Customer Details</h2>
              <button type="button" className="admin-icon-btn" onClick={() => setSelected(null)} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="admin-avatar-lg">{initials(selected.name)}</div>
            <div style={{ textAlign: 'center' }}>
              <h3>{selected.name}</h3>
              <StatusBadge status={selected.status} />
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                #{selected.id}
              </p>
            </div>
            <div className="admin-tabs" style={{ marginTop: '1rem' }}>
              {['Overview', 'Orders', 'Addresses', 'Activity'].map((t, i) => (
                <button key={t} type="button" className={i === 0 ? 'active' : ''}>
                  {t}
                </button>
              ))}
            </div>
            <div style={{ fontSize: '0.8125rem', marginBottom: '1rem' }}>
              <p>
                <strong>Email:</strong> {selected.email}
              </p>
              <p>
                <strong>Phone:</strong> {selected.phone}
              </p>
              <p>
                <strong>Joined:</strong> {selected.joined}
              </p>
              <p>
                <strong>Location:</strong> {selected.location}
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
              <div className="admin-stat-card" style={{ padding: '0.65rem' }}>
                <div className="admin-stat-card__label">Total Orders</div>
                <div className="admin-stat-card__value" style={{ fontSize: '1.1rem' }}>
                  {selected.orders}
                </div>
              </div>
              <div className="admin-stat-card" style={{ padding: '0.65rem' }}>
                <div className="admin-stat-card__label">Total Spent</div>
                <div className="admin-stat-card__value" style={{ fontSize: '1.1rem' }}>
                  {selected.spent}
                </div>
              </div>
            </div>
            <div className="admin-card__title">Recent Orders</div>
            {recentOrders.slice(0, 3).map((o) => (
              <div key={o.id} className="admin-low-stock-item">
                <img src={IMG.saree1} alt="" className="admin-thumb" />
                <div style={{ flex: 1, fontSize: '0.75rem' }}>
                  <div>{o.id}</div>
                  <div style={{ color: 'var(--text-muted)' }}>{o.date}</div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.75rem' }}>
                  <div>{o.amount}</div>
                  <StatusBadge status={o.status} />
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              <button type="button" className="admin-btn admin-btn--primary">
                View Profile
              </button>
              <button type="button" className="admin-btn admin-btn--danger-outline">
                <Ban size={16} /> Block Customer
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  )
}
