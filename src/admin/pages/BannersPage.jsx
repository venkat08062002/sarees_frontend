import { Link } from 'react-router-dom'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { PageHeader } from '../components/PageHeader.jsx'
import { Pagination } from '../components/Pagination.jsx'
import { StatusBadge } from '../utils/statusBadge.jsx'
import { banners } from '../data/mockData.js'

export function BannersPage() {
  return (
    <>
      <PageHeader
        title="Banners"
        subtitle="Create and manage homepage banners, offers and promotional images."
        actions={
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Link to="/admin/banners/preview" className="admin-btn admin-btn--outline">
              Preview
            </Link>
            <button type="button" className="admin-btn admin-btn--primary">
              <Plus size={18} /> Add Banner
            </button>
          </div>
        }
      />
      <div className="admin-filters">
        <select>
          <option>All Positions</option>
        </select>
        <select>
          <option>All Status</option>
        </select>
        <input type="search" placeholder="Search by title..." />
      </div>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Banner Image</th>
              <th>Title</th>
              <th>Position</th>
              <th>Link</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {banners.map((b, i) => (
              <tr key={b.id}>
                <td>{i + 1}</td>
                <td>
                  <img src={b.img} alt="" className="admin-thumb" style={{ width: 72, height: 40 }} />
                </td>
                <td>{b.title}</td>
                <td>{b.position}</td>
                <td>{b.link}</td>
                <td>
                  <StatusBadge status={b.status} />
                </td>
                <td>{b.start}</td>
                <td>{b.end}</td>
                <td>
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
        <Pagination showing="Page 1 of 5" pages={[1, 2, 3, 4, 5]} />
      </div>
    </>
  )
}
