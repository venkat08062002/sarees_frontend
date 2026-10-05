import { Outlet } from 'react-router-dom'
import { AdminSidebar } from '../components/AdminSidebar.jsx'
import { AdminTopBar } from '../components/AdminTopBar.jsx'
import '../styles/admin.css'

export function AdminLayout() {
  return (
    <div className="admin-app">
      <AdminSidebar />
      <div className="admin-main">
        <AdminTopBar />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
