import { PageHeader } from '../components/PageHeader.jsx'

const settingTabs = [
  'General',
  'Store Details',
  'Payment Settings',
  'Shipping Settings',
  'Email & Notifications',
  'Users & Roles',
  'Tax & Policies',
  'Appearance',
  'Backup & Data',
]

export function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" subtitle="Manage your store configuration and preferences." />
      <div className="admin-tabs">
        {settingTabs.map((t, i) => (
          <button key={t} type="button" className={i === 0 ? 'active' : ''}>
            {t}
          </button>
        ))}
      </div>
      <div className="admin-settings-grid">
        <div className="admin-card">
          <div className="admin-card__title">Basic Settings</div>
          <div className="admin-form-group">
            <label>Store Name</label>
            <input defaultValue="SareeStore" />
          </div>
          <div className="admin-form-group">
            <label>Store Email</label>
            <input defaultValue="hello@sareestore.com" />
          </div>
          <div className="admin-form-group">
            <label>Contact Phone</label>
            <input defaultValue="+91 98765 43210" />
          </div>
          <div className="admin-form-group">
            <label>Website URL</label>
            <input defaultValue="https://sareestore.com" />
          </div>
          <div className="admin-form-group">
            <label>Time Zone</label>
            <select>
              <option>Asia/Kolkata (IST)</option>
            </select>
          </div>
          <div className="admin-form-group">
            <label>Currency</label>
            <select>
              <option>INR (₹)</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            <button type="button" className="admin-btn admin-btn--primary">
              Save Changes
            </button>
            <button type="button" className="admin-btn admin-btn--outline">
              Reset
            </button>
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-card__title">Logo & Favicon</div>
          <div
            style={{
              border: '1px dashed var(--border)',
              borderRadius: 8,
              padding: '2rem',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--maroon)' }}>
              SareeStore
            </div>
            <button type="button" className="admin-btn admin-btn--outline" style={{ marginTop: '0.75rem' }}>
              Change Logo
            </button>
          </div>
          <div
            style={{
              border: '1px dashed var(--border)',
              borderRadius: 8,
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            🪷
            <button type="button" className="admin-btn admin-btn--outline" style={{ marginTop: '0.5rem', width: '100%' }}>
              Change Favicon
            </button>
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-card__title">Status & Social</div>
          <div className="admin-toggle-row">
            <span>Store is Live</span>
            <div className="admin-toggle" />
          </div>
          <div className="admin-toggle-row">
            <span>Enable Maintenance Mode</span>
            <div className="admin-toggle" style={{ background: '#d1d5db' }} />
          </div>
          <div className="admin-card__title" style={{ marginTop: '1rem' }}>
            Social Media Links
          </div>
          {['Facebook', 'Instagram', 'YouTube', 'WhatsApp'].map((s) => (
            <div key={s} className="admin-form-group">
              <label>{s}</label>
              <input placeholder={`https://${s.toLowerCase()}.com/sareestore`} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
