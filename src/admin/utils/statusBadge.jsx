const MAP = {
  Delivered: 'delivered',
  Shipped: 'shipped',
  Processing: 'processing',
  Pending: 'pending',
  Cancelled: 'cancelled',
  Active: 'active',
  Inactive: 'inactive',
  Blocked: 'blocked',
  Approved: 'approved',
}

export function StatusBadge({ status }) {
  const key = MAP[status] ?? 'inactive'
  return <span className={`admin-badge admin-badge--${key}`}>{status}</span>
}
