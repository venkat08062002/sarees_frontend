import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from '../components/ProductCard.jsx'
import { IMG, categories, homePromos, products, trustFeatures } from '../data/mockData.js'

const shopProducts = products.map((p) => {
  const price = parseInt(p.price.replace(/\D/g, ''), 10)
  return {
    ...p,
    price,
    mrp: price + 4000,
    rating: 5,
  }
})

export function HomePage() {
  return (
    <div className="user-home">
      <section className="user-hero">
        <div className="user-hero__inner">
          <div className="user-hero__copy">
            <p className="user-hero__eyebrow">Festive season · Up to 50% off</p>
            <h1>Tradition Woven With Elegance</h1>
            <p className="user-hero__lead">
              Discover handpicked silk, cotton, and designer sarees for weddings, festivals, and
              everyday grace.
            </p>
            <div className="user-hero__actions">
              <Link to="/sarees" className="user-btn user-btn--primary">
                SHOP NOW
              </Link>
              <Link to={{ pathname: '/', hash: 'new-arrivals' }} className="user-btn user-btn--ghost">
                View New Arrivals
              </Link>
            </div>
          </div>
          <div className="user-hero__visual">
            <img src={IMG.hero} alt="" className="user-hero__image" />
          </div>
        </div>
      </section>

      <section className="user-section user-section--tight">
        <div className="user-promo-grid">
          {homePromos.map((c) => (
            <Link key={c.title} to="/sarees" className="user-promo-card">
              <img src={c.img} alt="" className="user-promo-card__img" />
              <div className="user-promo-card__overlay">
                <div>
                  <p className="user-promo-card__subtitle">{c.subtitle}</p>
                  <h3>{c.title}</h3>
                  <span className="user-promo-card__cta">
                    SHOP NOW <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="user-trust-bar">
        <div className="user-trust-bar__inner">
          {trustFeatures.map((f) => (
            <div key={f.title} className="user-trust-bar__item">
              <strong>{f.title}</strong>
              <span>{f.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="user-section">
        <div className="user-section__head">
          <h2 className="user-section__title user-section__title--left">Shop By Category</h2>
          <Link to="/sarees" className="user-section__link">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="user-categories">
          {categories.map((c) => (
            <Link key={c.name} to={c.to} className="user-category">
              <div className="user-category__icon">{c.icon}</div>
              <span>{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="user-section user-section--muted" id="new-arrivals">
        <div className="user-section__head">
          <div>
            <h2 className="user-section__title user-section__title--left">New Arrivals</h2>
            <p className="user-section__subtitle">Handpicked sarees added this week</p>
          </div>
          <Link to="/sarees" className="user-section__link">
            View all products <ArrowRight size={16} />
          </Link>
        </div>
        <div className="user-product-grid">
          {shopProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="user-newsletter">
        <div className="user-newsletter__inner">
          <div>
            <h2>Join the SareeStore family</h2>
            <p>Get early access to sales, wedding edits, and styling tips.</p>
          </div>
          <form className="user-newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button type="submit" className="user-btn user-btn--primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
