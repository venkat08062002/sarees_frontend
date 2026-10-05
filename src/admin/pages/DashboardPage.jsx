import { PageHeader } from '../components/PageHeader.jsx'
import { StatusBadge } from '../utils/statusBadge.jsx'
import {
  dashboardStats,
  recentOrders,
  lowStock,
  salesChartData,
  orderStatusDonut,
} from '../data/mockData.js'

export function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back, Admin!"
        actions={<span className="admin-date-pill">01 Oct 2026 – 31 Oct 2026</span>}
      />
      <div className="admin-stats">
        {dashboardStats.map((s) => (
          <div key={s.label} className="admin-stat-card">
            <div className="admin-stat-card__label">{s.label}</div>
            <div className="admin-stat-card__row">
              <span className="admin-stat-card__value">{s.value}</span>
              <span className="admin-stat-card__change">{s.change}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="admin-grid-2">
        <div className="admin-card">
          <div className="admin-card__title">Sales Overview</div>
          <div className="admin-chart-line">
            {salesChartData.map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-card__title">Order Status</div>
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
      </div>
      <div className="admin-grid-2">
        <div className="admin-card">
          <div className="admin-card__title">Recent Orders</div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
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
                    <td>{o.date}</td>
                    <td>
                      <span className="admin-link">View</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-card__title">Low Stock Products</div>
          {lowStock.map((p) => (
            <div key={p.name} className="admin-low-stock-item">
              <img src={p.img} alt="" className="admin-thumb" />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }}>{p.name}</div>
                <div style={{ color: 'var(--red)', fontSize: '0.75rem' }}>Only {p.stock} left</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
