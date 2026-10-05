import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard.jsx'
import { IMG, categories, products } from '../data/mockData.js'

const shopProducts = products.map((p) => ({
  ...p,
  price: parseInt(p.price.replace(/\D/g, ''), 10),
  mrp: parseInt(p.price.replace(/\D/g, ''), 10) + 4000,
}))

export function HomePage() {
  return (
    <>
      <section className="user-hero" style={{ backgroundImage: `url(${IMG.hero})` }}>
        <div className="user-hero__content">
          <h1>Tradition Woven With Elegance</h1>
          <p style={{ maxWidth: 420, marginBottom: '1.25rem', opacity: 0.95 }}>
            Discover handpicked silk, cotton, and designer sarees for every celebration.
          </p>
          <Link to="/shop/silk-sarees" className="user-btn user-btn--primary">
            SHOP NOW
          </Link>
        </div>
      </section>
      <div className="user-section">
        <div className="user-promo-grid">
          {[
            { title: 'Wedding Collection', img: IMG.saree1 },
            { title: 'Kanchipuram Silk', img: IMG.saree2 },
            { title: 'New Arrivals', img: IMG.saree3 },
          ].map((c) => (
            <div key={c.title} className="user-promo-card" style={{ backgroundImage: `url(${c.img})` }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem' }}>{c.title}</h3>
                <Link to="/shop/silk-sarees" className="user-btn user-btn--primary" style={{ marginTop: '0.5rem' }}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h2 className="user-section__title">Shop By Category</h2>
        <div className="user-categories">
          {categories.map((c) => (
            <Link key={c.name} to="/shop/silk-sarees" className="user-category">
              <div className="user-category__icon">{c.icon}</div>
              {c.name}
            </Link>
          ))}
        </div>
        <h2 className="user-section__title">New Arrivals</h2>
        <div className="user-product-grid">
          {shopProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </>
  )
}
