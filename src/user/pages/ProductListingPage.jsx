import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard.jsx'
import { products } from '../data/mockData.js'

const shopProducts = products.map((p) => ({
  ...p,
  price: parseInt(p.price.replace(/\D/g, ''), 10),
  mrp: parseInt(p.price.replace(/\D/g, ''), 10) + 4000,
}))

export function ProductListingPage() {
  return (
    <div className="user-shop-layout">
      <aside className="user-filters">
        <h3>Filters</h3>
        <div className="user-filter-block">
          <strong>Category</strong>
          {['Silk Sarees', 'Cotton Sarees', 'Designer', 'Wedding'].map((c) => (
            <label key={c}>
              <input type="checkbox" /> {c}
            </label>
          ))}
        </div>
        <div className="user-filter-block">
          <strong>Price Range</strong>
          <input type="range" min={500} max={15000} defaultValue={8000} style={{ width: '100%' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>₹500 – ₹15,000</span>
        </div>
        <div className="user-filter-block">
          <strong>Color</strong>
          {['#5d1725', '#c9a227', '#1e3a5f', '#166534'].map((c) => (
            <label key={c}>
              <span className="user-color-swatch" style={{ background: c }} /> Color
            </label>
          ))}
        </div>
        <div className="user-filter-block">
          <strong>Fabric</strong>
          {['Silk', 'Cotton', 'Georgette', 'Tissue'].map((f) => (
            <label key={f}>
              <input type="checkbox" /> {f}
            </label>
          ))}
        </div>
      </aside>
      <div>
        <div className="user-breadcrumb">
          <Link to="/">Home</Link> / Silk Sarees
        </div>
        <div className="user-shop-toolbar">
          <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--maroon)' }}>
            Silk Sarees <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>(120 products)</span>
          </h1>
          <select style={{ padding: '0.45rem 0.75rem', borderRadius: 8, border: '1px solid var(--border)' }}>
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        <div className="user-product-grid">
          {shopProducts.concat(shopProducts).map((p, i) => (
            <ProductCard key={`${p.id}-${i}`} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
