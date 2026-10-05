import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader.jsx'
import { IMG } from '../data/mockData.js'

export function BannerPreviewPage() {
  return (
    <>
      <PageHeader
        title="Banner Preview (Homepage)"
        subtitle="This is how banners will appear on your website."
        actions={
          <Link to="/" className="admin-btn admin-btn--outline" target="_blank">
            View Live Website
          </Link>
        }
      />
      <div className="admin-card">
        <div
          className="admin-preview-hero"
          style={{ backgroundImage: `url(${IMG.hero})` }}
        >
          <div>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>Festive Collection</p>
            <h2>UPTO 50% OFF</h2>
            <button type="button" className="admin-btn admin-btn--primary" style={{ marginTop: '1rem' }}>
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="admin-preview-grid">
          {[
            { title: 'New Arrivals', img: IMG.saree1 },
            { title: 'Kanchipuram Silk', img: IMG.saree2 },
            { title: 'Wedding Collection', img: IMG.saree3 },
          ].map((c) => (
            <div
              key={c.title}
              className="admin-preview-card"
              style={{ backgroundImage: `url(${c.img})` }}
            >
              <span>{c.title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
