import { Link } from 'react-router-dom'
import { Plus, Pencil, Trash2, MoreHorizontal, Filter } from 'lucide-react'
import { PageHeader } from '../components/PageHeader.jsx'
import { Pagination } from '../components/Pagination.jsx'
import { StatusBadge } from '../utils/statusBadge.jsx'
import { products } from '../data/mockData.js'

export function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Products"
        actions={
          <Link to="/admin/products/new" className="admin-btn admin-btn--primary">
            <Plus size={18} /> Add Product
          </Link>
        }
      />
      <div className="admin-filters">
        <select defaultValue="">
          <option value="">All Categories</option>
          <option>Silk Sarees</option>
          <option>Cotton Sarees</option>
        </select>
        <select defaultValue="">
          <option value="">All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <input type="search" placeholder="Search by name or SKU..." />
        <button type="button" className="admin-btn admin-btn--outline">
          <Filter size={16} /> Filter
        </button>
      </div>
      <div className="admin-card">
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.id}>
                  <td>{i + 1}</td>
                  <td>
                    <img src={p.img} alt="" className="admin-thumb" />
                  </td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.price}</td>
                  <td>{p.stock}</td>
                  <td>
                    <StatusBadge status={p.status} />
                  </td>
                  <td>
                    <button type="button" className="admin-icon-btn" aria-label="Edit">
                      <Pencil size={16} />
                    </button>
                    <button type="button" className="admin-icon-btn" aria-label="Delete">
                      <Trash2 size={16} />
                    </button>
                    <button type="button" className="admin-icon-btn" aria-label="More">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination showing="Showing 1 to 4 of 356 products" />
      </div>
    </>
  )
}
