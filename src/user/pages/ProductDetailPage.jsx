import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { catalogProducts } from '../data/sareesCatalog.js'
import { productDetail as fallbackDetail } from '../data/mockData.js'

function buildDetail(product) {
  if (!product) return fallbackDetail
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    mrp: product.mrp,
    rating: product.rating ?? 4.5,
    reviews: 48 + product.id * 3,
    fabric: product.fabric,
    color: product.color,
    design: product.category,
    length: '5.5 meters',
    blouse: 'Included',
    description: `${product.name} — handpicked ${product.fabric.toLowerCase()} weave with elegant drape. Ideal for festive and special occasions.`,
    images: [product.img, '/images/product-2.svg', '/images/product-3.svg'],
    categorySlug:
      product.category === 'Silk Sarees'
        ? 'silk'
        : product.category === 'Cotton Sarees'
          ? 'cotton'
          : product.category.toLowerCase(),
  }
}

export function ProductDetailPage() {
  const { id } = useParams()
  const detail = useMemo(() => {
    const found = catalogProducts.find((p) => String(p.id) === String(id))
    return buildDetail(found)
  }, [id])

  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const discount = Math.round((1 - detail.price / detail.mrp) * 100)
  const listPath = detail.categorySlug ? `/sarees/${detail.categorySlug}` : '/sarees'

  return (
    <>
      <div className="user-breadcrumb" style={{ maxWidth: 1280, margin: '1.5rem auto 0', padding: '0 2rem' }}>
        <Link to="/">Home</Link> / <Link to="/sarees">Sarees</Link> /{' '}
        <Link to={listPath}>{detail.design}</Link> / {detail.name}
      </div>
      <div className="user-pdp">
        <div className="user-pdp__gallery">
          <div className="user-pdp__thumbs">
            {detail.images.map((src, i) => (
              <img
                key={`${src}-${i}`}
                src={src}
                alt=""
                className={i === activeImg ? 'active' : ''}
                onClick={() => setActiveImg(i)}
              />
            ))}
          </div>
          <div className="user-pdp__main">
            <img src={detail.images[activeImg]} alt={detail.name} />
          </div>
        </div>
        <div>
          <h1 className="user-pdp__title">{detail.name}</h1>
          <p style={{ margin: '0.5rem 0' }}>
            <span className="user-stars">★★★★★</span>{' '}
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              {detail.rating} ({detail.reviews} reviews)
            </span>
          </p>
          <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--maroon)' }}>
            ₹{detail.price.toLocaleString('en-IN')}{' '}
            <span
              style={{
                textDecoration: 'line-through',
                fontSize: '1rem',
                color: 'var(--text-muted)',
                fontWeight: 400,
              }}
            >
              ₹{detail.mrp.toLocaleString('en-IN')}
            </span>{' '}
            <span className="user-discount-tag">{discount}% OFF</span>
          </p>
          <table className="user-detail-table">
            <tbody>
              {[
                ['Fabric', detail.fabric],
                ['Color', detail.color],
                ['Category', detail.design],
                ['Length', detail.length],
                ['Blouse', detail.blouse],
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
        {detail.description}
      </p>
    </>
  )
}
