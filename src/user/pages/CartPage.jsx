import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { cartItems } from '../data/mockData.js'

export function CartPage() {
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <div className="user-cart-layout">
      <div>
        <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--maroon)', marginBottom: '1rem' }}>My Cart</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="user-cart-item">
            <input type="checkbox" defaultChecked />
            <img src={item.img} alt="" />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500 }}>{item.name}</div>
              <div style={{ color: 'var(--maroon)', fontWeight: 600 }}>₹{item.price.toLocaleString('en-IN')}</div>
              <div className="user-qty" style={{ marginTop: '0.5rem' }}>
                <button type="button">−</button>
                <span style={{ padding: '0 0.5rem' }}>{item.qty}</span>
                <button type="button">+</button>
              </div>
            </div>
            <button type="button" className="user-btn user-btn--outline" style={{ padding: '0.35rem' }} aria-label="Remove">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
        <div style={{ marginTop: '1rem' }}>
          <input type="text" placeholder="Apply coupon code" style={{ padding: '0.55rem', borderRadius: 8, border: '1px solid var(--border)', width: 200 }} />
          <button type="button" className="user-btn user-btn--outline" style={{ marginLeft: '0.5rem' }}>
            Apply
          </button>
        </div>
      </div>
      <div className="user-summary">
        <h3 style={{ marginBottom: '1rem' }}>Order Summary</h3>
        <div className="user-summary__row">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString('en-IN')}</span>
        </div>
        <div className="user-summary__row">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="user-summary__row" style={{ fontWeight: 700, fontSize: '1.05rem', borderTop: '1px solid var(--border)', paddingTop: '0.5rem' }}>
          <span>Total</span>
          <span>₹{subtotal.toLocaleString('en-IN')}</span>
        </div>
        <Link to="/checkout" className="user-btn user-btn--primary" style={{ width: '100%', marginTop: '1rem' }}>
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}
