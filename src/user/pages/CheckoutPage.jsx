import { useState } from 'react'
import { cartItems } from '../data/mockData.js'
import { addresses } from '../data/mockData.js'

export function CheckoutPage() {
  const [step] = useState(1)
  const [selectedAddress, setSelectedAddress] = useState(addresses[0].id)
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <>
      <div className="user-checkout-steps">
        {['Address', 'Payment', 'Review'].map((label, i) => (
          <div key={label} className={`user-checkout-step ${i + 1 <= step ? 'active' : ''}`}>
            <span>{i + 1}</span>
            {label}
          </div>
        ))}
      </div>
      <div className="user-checkout-grid">
        <div>
          <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Delivery Address</h2>
          {addresses.map((a) => (
            <div
              key={a.id}
              className={`user-address-card ${selectedAddress === a.id ? 'selected' : ''}`}
              onClick={() => setSelectedAddress(a.id)}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              <strong>{a.label}</strong>
              {a.default && (
                <span className="user-discount-tag" style={{ marginLeft: '0.5rem' }}>
                  Default
                </span>
              )}
              <p style={{ marginTop: '0.35rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>{a.line}</p>
            </div>
          ))}
          <button type="button" className="user-btn user-btn--outline" style={{ marginTop: '0.5rem' }}>
            + Add New Address
          </button>
          <h2 style={{ fontSize: '1.1rem', margin: '1.5rem 0 1rem' }}>Payment Method</h2>
          {[
            { id: 'cod', label: 'Cash on Delivery (COD)' },
            { id: 'razorpay', label: 'Online — Razorpay' },
            { id: 'upi', label: 'UPI' },
          ].map((p) => (
            <label key={p.id} className="user-address-card" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="radio" name="pay" defaultChecked={p.id === 'razorpay'} />
              {p.label}
            </label>
          ))}
        </div>
        <div className="user-summary">
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', gap: '0.5rem', margin: '0.75rem 0', fontSize: '0.8125rem' }}>
              <img src={item.img} alt="" style={{ width: 48, height: 60, borderRadius: 6, objectFit: 'cover' }} />
              <div>
                <div>{item.name}</div>
                <div>Qty: {item.qty}</div>
              </div>
              <div style={{ marginLeft: 'auto' }}>₹{item.price.toLocaleString('en-IN')}</div>
            </div>
          ))}
          <div className="user-summary__row" style={{ marginTop: '1rem' }}>
            <span>Total</span>
            <strong>₹{subtotal.toLocaleString('en-IN')}</strong>
          </div>
          <button type="button" className="user-btn user-btn--primary" style={{ width: '100%', marginTop: '1rem' }}>
            Place Order
          </button>
        </div>
      </div>
    </>
  )
}
