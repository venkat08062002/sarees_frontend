import { useState } from 'react'
import { Link } from 'react-router-dom'

export function LoginPage() {
  const [tab, setTab] = useState('login')

  return (
    <div className="user-auth-page">
      <div className="user-auth-card">
        <div className="user-auth-tabs">
          <button type="button" className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>
            Login
          </button>
          <button type="button" className={tab === 'register' ? 'active' : ''} onClick={() => setTab('register')}>
            Register
          </button>
        </div>
        {tab === 'login' ? (
          <>
            <div className="user-form-group">
              <label htmlFor="email">Email or Phone</label>
              <input id="email" type="text" placeholder="you@email.com" />
            </div>
            <div className="user-form-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="••••••••" />
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', marginBottom: '1rem' }}>
              <input type="checkbox" /> Remember me
            </label>
            <button type="button" className="user-btn user-btn--primary" style={{ width: '100%' }}>
              Login
            </button>
            <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.8125rem' }}>
              <Link to="/" style={{ color: 'var(--maroon)' }}>
                Forgot password?
              </Link>
            </p>
          </>
        ) : (
          <>
            <div className="user-form-group">
              <label htmlFor="name">Full Name</label>
              <input id="name" type="text" />
            </div>
            <div className="user-form-group">
              <label htmlFor="reg-email">Email</label>
              <input id="reg-email" type="email" />
            </div>
            <div className="user-form-group">
              <label htmlFor="reg-pass">Password</label>
              <input id="reg-pass" type="password" />
            </div>
            <button type="button" className="user-btn user-btn--primary" style={{ width: '100%' }}>
              Create Account
            </button>
          </>
        )}
        <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Or continue with Google / Facebook
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <button type="button" className="user-btn user-btn--outline" style={{ flex: 1 }}>
            Google
          </button>
          <button type="button" className="user-btn user-btn--outline" style={{ flex: 1 }}>
            Facebook
          </button>
        </div>
      </div>
    </div>
  )
}
