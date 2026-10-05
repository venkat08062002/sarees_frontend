import { Eye, Pencil, Trash2, Filter } from 'lucide-react'
import { PageHeader } from '../components/PageHeader.jsx'
import { Pagination } from '../components/Pagination.jsx'
import { StatusBadge } from '../utils/statusBadge.jsx'
import { reviews } from '../data/mockData.js'

function Stars({ n }) {
  return <span className="admin-stars">{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>
}

export function ReviewsPage() {
  return (
    <>
      <PageHeader title="Reviews" subtitle="Manage customer reviews and ratings for your products." />
      <div className="admin-filters">
        <select>
          <option>All Ratings</option>
        </select>
        <select>
          <option>All Status</option>
        </select>
        <input type="search" placeholder="Search reviews..." />
        <button type="button" className="admin-btn admin-btn--outline">
          <Filter size={16} /> Filter
        </button>
      </div>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r, i) => (
              <tr key={r.id}>
                <td>{i + 1}</td>
                <td>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src={r.img} alt="" className="admin-thumb" />
                    {r.product}
                  </span>
                </td>
                <td>{r.customer}</td>
                <td>
                  <Stars n={r.rating} />
                </td>
                <td style={{ maxWidth: 200, whiteSpace: 'normal' }}>{r.comment}</td>
                <td>{r.date}</td>
                <td>
                  <StatusBadge status={r.status} />
                </td>
                <td>
                  <button type="button" className="admin-icon-btn">
                    <Eye size={16} />
                  </button>
                  <button type="button" className="admin-icon-btn">
                    <Pencil size={16} />
                  </button>
                  <button type="button" className="admin-icon-btn">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </>
  )
}
