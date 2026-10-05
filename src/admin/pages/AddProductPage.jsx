import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader.jsx'
import { IMG } from '../data/mockData.js'

const tabs = ['Basic Information', 'Images & Videos', 'Inventory & Pricing', 'Description', 'SEO']

export function AddProductPage() {
  return (
    <>
      <PageHeader
        title="Add New Product"
        actions={
          <button type="button" className="admin-btn admin-btn--primary">
            Save Product
          </button>
        }
      />
      <div className="admin-tabs">
        {tabs.map((t, i) => (
          <button key={t} type="button" className={i === 0 ? 'active' : ''}>
            {t}
          </button>
        ))}
      </div>
      <div className="admin-form-grid">
        <div className="admin-card">
          <div className="admin-form-group">
            <label htmlFor="productName">Product Name</label>
            <input id="productName" defaultValue="Kanchipuram Silk Saree" />
          </div>
          <div className="admin-form-group">
            <label htmlFor="sku">SKU</label>
            <input id="sku" defaultValue="KS-001" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div className="admin-form-group">
              <label htmlFor="category">Category</label>
              <select id="category">
                <option>Silk Sarees</option>
                <option>Cotton Sarees</option>
              </select>
            </div>
            <div className="admin-form-group">
              <label htmlFor="fabric">Fabric</label>
              <select id="fabric">
                <option>Silk</option>
                <option>Cotton</option>
              </select>
            </div>
            <div className="admin-form-group">
              <label htmlFor="color">Color</label>
              <select id="color">
                <option>Maroon</option>
                <option>Gold</option>
              </select>
            </div>
            <div className="admin-form-group">
              <label htmlFor="blouse">Blouse Piece</label>
              <select id="blouse">
                <option>Included</option>
                <option>Not Included</option>
              </select>
            </div>
            <div className="admin-form-group">
              <label htmlFor="design">Design Type</label>
              <select id="design">
                <option>Traditional</option>
                <option>Designer</option>
              </select>
            </div>
            <div className="admin-form-group">
              <label htmlFor="status">Status</label>
              <select id="status">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          <div className="admin-form-group">
            <label htmlFor="length">Saree Length (meters)</label>
            <input id="length" type="number" defaultValue={5.5} />
          </div>
          <Link to="/admin/products" className="admin-link">
            ← Back to products
          </Link>
        </div>
        <div className="admin-card">
          <div className="admin-card__title">Product Preview</div>
          <img
            src={IMG.saree1}
            alt="Preview"
            style={{ width: '100%', borderRadius: 8, marginBottom: '0.75rem' }}
          />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[IMG.saree1, IMG.saree2, IMG.saree3].map((src, i) => (
              <img key={i} src={src} alt="" className="admin-thumb" style={{ width: 56, height: 56 }} />
            ))}
            <button
              type="button"
              className="admin-thumb"
              style={{
                width: 56,
                height: 56,
                border: '2px dashed var(--border)',
                background: '#fafafa',
                cursor: 'pointer',
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
