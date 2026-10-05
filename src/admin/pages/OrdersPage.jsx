import { Filter } from 'lucide-react'
import { PageHeader } from '../components/PageHeader.jsx'
import { Pagination } from '../components/Pagination.jsx'
import { StatusBadge } from '../utils/statusBadge.jsx'
import { orders } from '../data/mockData.js'

export function OrdersPage() {
  return (
    <>
      <PageHeader title="Orders" subtitle="Manage and track customer orders." />
      <div className="admin-filters">
        <select defaultValue="">
          <option value="">All Status</option>
          <option>Delivered</option>
          <option>Shipped</option>
        </select>
        <span className="admin-date-pill">01 Oct 2026 – 31 Oct 2026</span>
        <input type="search" placeholder="Search orders..." />
        <button type="button" className="admin-btn admin-btn--outline">
          <Filter size={16} /> Filter
        </button>
      </div>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total Amount</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr key={o.id}>
                <td>{i + 1}</td>
                <td>{o.id}</td>
                <td>{o.customer}</td>
                <td>{o.items}</td>
                <td>{o.amount}</td>
                <td>{o.payment}</td>
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
        <Pagination showing="Showing 1 to 5 of 124 orders" />
      </div>
    </>
  )
}
