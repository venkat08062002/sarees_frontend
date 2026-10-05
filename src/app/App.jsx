import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminLayout } from '../admin/layout/AdminLayout.jsx'
import { DashboardPage } from '../admin/pages/DashboardPage.jsx'
import { ProductsPage } from '../admin/pages/ProductsPage.jsx'
import { AddProductPage } from '../admin/pages/AddProductPage.jsx'
import { CategoriesPage } from '../admin/pages/CategoriesPage.jsx'
import { OrdersPage } from '../admin/pages/OrdersPage.jsx'
import { CustomersPage } from '../admin/pages/CustomersPage.jsx'
import { BannersPage } from '../admin/pages/BannersPage.jsx'
import { BannerPreviewPage } from '../admin/pages/BannerPreviewPage.jsx'
import { CouponsPage } from '../admin/pages/CouponsPage.jsx'
import { ReviewsPage } from '../admin/pages/ReviewsPage.jsx'
import { ReportsPage } from '../admin/pages/ReportsPage.jsx'
import { SettingsPage } from '../admin/pages/SettingsPage.jsx'
import { UserLayout } from '../user/layout/UserLayout.jsx'
import { HomePage } from '../user/pages/HomePage.jsx'
import { SareesPage } from '../user/pages/SareesPage.jsx'
import { ProductDetailPage } from '../user/pages/ProductDetailPage.jsx'
import { CartPage } from '../user/pages/CartPage.jsx'
import { CheckoutPage } from '../user/pages/CheckoutPage.jsx'
import { LoginPage } from '../user/pages/LoginPage.jsx'
import { MyOrdersPage } from '../user/pages/MyOrdersPage.jsx'
import { ProfilePage } from '../user/pages/ProfilePage.jsx'
import { WishlistPage } from '../user/pages/WishlistPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/new" element={<AddProductPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="banners" element={<BannersPage />} />
        <Route path="banners/preview" element={<BannerPreviewPage />} />
        <Route path="coupons" element={<CouponsPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      <Route element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sarees/:category?" element={<SareesPage />} />
        <Route path="shop/silk-sarees" element={<Navigate to="/sarees/silk" replace />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="account/orders" element={<MyOrdersPage />} />
        <Route path="account/profile" element={<ProfilePage />} />
        <Route path="account/wishlist" element={<WishlistPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
