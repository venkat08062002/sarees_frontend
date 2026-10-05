import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

export function ProductCard({ product }) {
  const discount =
    product.mrp && product.price
      ? Math.round((1 - product.price / product.mrp) * 100)
      : null

  return (
    <article className="user-product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.img} alt={product.name} className="user-product-card__img" />
      </Link>
      <div className="user-product-card__body">
        <Link to={`/product/${product.id}`} style={{ fontWeight: 500, fontSize: '0.875rem' }}>
          {product.name}
        </Link>
        <div style={{ margin: '0.35rem 0' }}>
          <span className="user-stars">★★★★★</span>
        </div>
        <div>
          <span className="user-product-card__price">
            {typeof product.price === 'number' ? `₹${product.price.toLocaleString('en-IN')}` : product.price}
          </span>
          {product.mrp && (
            <span className="user-product-card__mrp">₹{product.mrp.toLocaleString('en-IN')}</span>
          )}
          {discount && (
            <span style={{ color: 'var(--green)', fontSize: '0.75rem', marginLeft: '0.35rem' }}>
              {discount}% off
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.65rem', alignItems: 'center' }}>
          <button type="button" className="user-btn user-btn--primary" style={{ flex: 1, padding: '0.45rem' }}>
            Add to Cart
          </button>
          <button type="button" className="user-btn user-btn--outline" style={{ padding: '0.45rem' }} aria-label="Wishlist">
            <Heart size={18} />
          </button>
        </div>
      </div>
    </article>
  )
}
