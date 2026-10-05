import { useState } from 'react'
import { Link } from 'react-router-dom'
import { productDetail } from '../data/mockData.js'

export function ProductDetailPage() {
  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const discount = Math.round((1 - productDetail.price / productDetail.mrp) * 100)

  return (
    <>
      <div className="user-breadcrumb" style={{ maxWidth: 1280, margin: '1.5rem auto 0', padding: '0 2rem' }}>
        <Link to="/">Home</Link> / <Link to="/shop/silk-sarees">Silk Sarees</Link> / {productDetail.name}
      </div>
      <div className="user-pdp">
        <div className="user-pdp__gallery">
          <div className="user-pdp__thumbs">
            {productDetail.images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                className={i === activeImg ? 'active' : ''}
                onClick={() => setActiveImg(i)}
              />
            ))}
          </div>
          <div className="user-pdp__main">
            <img src={productDetail.images[activeImg]} alt={productDetail.name} />
          </div>
        </div>
        <div>
          <h1 className="user-pdp__title">{productDetail.name}</h1>
          <p style={{ margin: '0.5rem 0' }}>
            <span className="user-stars">★★★★★</span>{' '}
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              {productDetail.rating} ({productDetail.reviews} reviews)
            </span>
          </p>
          <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--maroon)' }}>
            ₹{productDetail.price.toLocaleString('en-IN')}{' '}
            <span style={{ textDecoration: 'line-through', fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>
              ₹{productDetail.mrp.toLocaleString('en-IN')}
            </span>{' '}
            <span className="user-discount-tag">{discount}% OFF</span>
          </p>
          <table className="user-detail-table">
            <tbody>
              {[
                ['Fabric', productDetail.fabric],
                ['Color', productDetail.color],
                ['Design', productDetail.design],
                ['Length', productDetail.length],
                ['Blouse', productDetail.blouse],
              ].map(([k, v]) => (
                <tr key={k}>
                  <td>{k}</td>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="user-qty">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                −
              </button>
              <span style={{ padding: '0 0.75rem' }}>{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)}>
                +
              </button>
            </div>
            <Link to="/cart" className="user-btn user-btn--outline">
              Add to Cart
            </Link>
            <Link to="/checkout" className="user-btn user-btn--primary">
              Buy Now
            </Link>
          </div>
          <div className="user-trust">
            {['Free Shipping', '7-Day Return', 'Secure Payment', 'COD Available'].map((t) => (
              <div key={t}>{t}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="user-tabs">
        {['Description', 'Product Details', 'Shipping & Returns', 'Reviews'].map((t, i) => (
          <button key={t} type="button" className={i === 0 ? 'active' : ''}>
            {t}
          </button>
        ))}
      </div>
      <p style={{ maxWidth: 1280, margin: '0 auto 2rem', padding: '0 2rem', color: 'var(--text-muted)' }}>
        {productDetail.description}
      </p>
    </>
  )
}
