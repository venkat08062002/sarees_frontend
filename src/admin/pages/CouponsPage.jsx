import { Plus, Filter } from 'lucide-react'
import { PageHeader } from '../components/PageHeader.jsx'
import { Pagination } from '../components/Pagination.jsx'
import { StatusBadge } from '../utils/statusBadge.jsx'
import { coupons } from '../data/mockData.js'

export function CouponsPage() {
  return (
    <>
      <PageHeader
        title="Coupons"
        subtitle="Create and manage discount coupons for your customers."
        actions={
          <button type="button" className="admin-btn admin-btn--primary">
            <Plus size={18} /> Add Coupon
          </button>
        }
      />
      <div className="admin-filters">
        <select>
          <option>All Types</option>
        </select>
        <select>
          <option>All Status</option>
        </select>
        <input type="search" placeholder="Search coupon codes..." />
        <button type="button" className="admin-btn admin-btn--outline">
          <Filter size={16} /> Filter
        </button>
      </div>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Coupon Code</th>
              <th>Name</th>
              <th>Type</th>
              <th>Discount</th>
              <th>Min Order</th>
              <th>Usage</th>
              <th>Valid From</th>
              <th>Valid To</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((c, i) => (
              <tr key={c.code}>
                <td>{i + 1}</td>
                <td>
                  <strong>{c.code}</strong>
                </td>
                <td>{c.name}</td>
                <td>{c.type}</td>
                <td>{c.discount}</td>
                <td>{c.minOrder}</td>
                <td>{c.usage}</td>
                <td>{c.from}</td>
                <td>{c.to}</td>
                <td>
                  <StatusBadge status={c.status} />
                </td>
                <td>
                  <span className="admin-link">Edit</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
        <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Coupon types: Percentage discount · Fixed amount · Free shipping
        </p>
      </div>
    </>
  )
}
