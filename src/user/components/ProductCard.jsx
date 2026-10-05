import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

export function ProductCard({ product }) {
  const discount =
    product.mrp && product.price
      ? Math.round((1 - product.price / product.mrp) * 100)
      : null

  return (
    <article className="user-product-card">
      <Link to={`/product/${product.id}`} className="user-product-card__media">
        <img src={product.img} alt={product.name} className="user-product-card__img" loading="lazy" />
        {product.category && <span className="user-product-card__tag">{product.category}</span>}
      </Link>
      <div className="user-product-card__body">
        <Link to={`/product/${product.id}`} className="user-product-card__name">
          {product.name}
        </Link>
        <div className="user-product-card__rating">
          <span className="user-stars" aria-hidden>
            ★★★★★
          </span>
          {product.rating && (
            <span className="user-product-card__rating-text">({product.rating}.0)</span>
          )}
        </div>
        <div className="user-product-card__pricing">
          <span className="user-product-card__price">
            {typeof product.price === 'number'
              ? `₹${product.price.toLocaleString('en-IN')}`
              : product.price}
          </span>
          {product.mrp && (
            <span className="user-product-card__mrp">₹{product.mrp.toLocaleString('en-IN')}</span>
          )}
          {discount != null && discount > 0 && (
            <span className="user-product-card__off">{discount}% off</span>
          )}
        </div>
        <div className="user-product-card__actions">
          <button type="button" className="user-btn user-btn--primary user-product-card__cart">
            Add to Cart
          </button>
          <button type="button" className="user-btn user-btn--icon" aria-label="Add to wishlist">
            <Heart size={18} />
          </button>
        </div>
      </div>
    </article>
  )
}
