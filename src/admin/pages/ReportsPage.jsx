import { Download } from 'lucide-react'
import { PageHeader } from '../components/PageHeader.jsx'
import { StatusBadge } from '../utils/statusBadge.jsx'
import {
  salesChartData,
  orderStatusDonut,
  categorySales,
  topProducts,
  topCustomers,
  recentOrders,
  IMG,
} from '../data/mockData.js'

export function ReportsPage() {
  return (
    <>
      <PageHeader
        title="Reports"
        subtitle="View sales, orders, customers and product performance."
        actions={
          <>
            <span className="admin-date-pill">01 Oct 2026 – 31 Oct 2026</span>
            <button type="button" className="admin-btn admin-btn--primary">
              <Download size={16} /> Download Report
            </button>
          </>
        }
      />
      <div className="admin-stats" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
        {[
          { label: 'Total Revenue', value: '₹2,45,680', change: '+12.5%' },
          { label: 'Total Orders', value: '124', change: '+8.3%' },
          { label: 'Total Customers', value: '892', change: '+15.3%' },
          { label: 'Products Sold', value: '356', change: '+10.2%' },
          { label: 'Average Order Value', value: '₹1,980', change: '+5.1%' },
        ].map((s) => (
          <div key={s.label} className="admin-stat-card">
            <div className="admin-stat-card__label">{s.label}</div>
            <div className="admin-stat-card__row">
              <span className="admin-stat-card__value" style={{ fontSize: '1.1rem' }}>
                {s.value}
              </span>
              <span className="admin-stat-card__change">{s.change}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="admin-grid-3" style={{ marginBottom: '1rem' }}>
        <div className="admin-card">
          <div className="admin-card__title">Sales Overview</div>
          <div className="admin-chart-line">
            {salesChartData.map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-card__title">Orders by Status</div>
          <div className="admin-donut" />
          <div className="admin-donut-legend">
            {orderStatusDonut.map((d) => (
              <span key={d.label}>
                <i style={{ background: d.color }} />
                {d.label} ({d.value})
              </span>
            ))}
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-card__title">Sales by Category</div>
          <div className="admin-bar-chart">
            {categorySales.map((c) => (
              <div key={c.name} className="admin-bar-chart__item">
                <div className="admin-bar-chart__bar" style={{ height: `${c.value}%` }} />
                <span className="admin-bar-chart__label">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="admin-grid-3">
        <div className="admin-card">
          <div className="admin-card__title">Top Selling Products</div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Sold</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p, i) => (
                <tr key={p.name}>
                  <td>{i + 1}</td>
                  <td>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <img src={p.img} alt="" className="admin-thumb" style={{ width: 32, height: 32 }} />
                      {p.name}
                    </span>
                  </td>
                  <td>{p.sold}</td>
                  <td>{p.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="admin-card">
          <div className="admin-card__title">Top Customers</div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Orders</th>
                <th>Spent</th>
              </tr>
            </thead>
            <tbody>
              {topCustomers.map((c, i) => (
                <tr key={c.name}>
                  <td>{i + 1}</td>
                  <td>{c.name}</td>
                  <td>{c.orders}</td>
                  <td>{c.spent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="admin-card">
          <div className="admin-card__title">Recent Orders</div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.amount}</td>
                  <td>
                    <StatusBadge status={o.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
