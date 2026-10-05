import { Plus } from 'lucide-react'
import { PageHeader } from '../components/PageHeader.jsx'
import { StatusBadge } from '../utils/statusBadge.jsx'

const categories = [
  { name: 'Silk Sarees', products: 86, status: 'Active' },
  { name: 'Cotton Sarees', products: 124, status: 'Active' },
  { name: 'Designer Sarees', products: 45, status: 'Active' },
  { name: 'Wedding Collection', products: 32, status: 'Active' },
]

export function CategoriesPage() {
  return (
    <>
      <PageHeader
        title="Categories"
        subtitle="Organize products by saree type and collection."
        actions={
          <button type="button" className="admin-btn admin-btn--primary">
            <Plus size={18} /> Add Category
          </button>
        }
      />
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Products</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c, i) => (
              <tr key={c.name}>
                <td>{i + 1}</td>
                <td>{c.name}</td>
                <td>{c.products}</td>
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
      </div>
    </>
  )
}
