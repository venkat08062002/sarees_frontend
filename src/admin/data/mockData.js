export const IMG = {
  saree1: 'https://images.unsplash.com/photo-1610037124592-831f4a823f2d?w=400&q=80',
  saree2: 'https://images.unsplash.com/photo-1583391733987-9589a5c9a1f6?w=400&q=80',
  saree3: 'https://images.unsplash.com/photo-1617627143750-d86bc21e3517?w=400&q=80',
  hero: 'https://images.unsplash.com/photo-1595587468428-850c2d510902?w=1200&q=80',
}

export const dashboardStats = [
  { label: 'Total Sales', value: '₹2,45,680', change: '+12.5%', up: true },
  { label: 'Total Orders', value: '124', change: '+8.2%', up: true },
  { label: 'Total Products', value: '356', change: '+4.1%', up: true },
  { label: 'Total Customers', value: '892', change: '+15.3%', up: true },
]

export const recentOrders = [
  { id: '#ORD10021', customer: 'Priya Sharma', amount: '₹4,580', status: 'Delivered', date: '04 Oct 2026' },
  { id: '#ORD10020', customer: 'Ananya Reddy', amount: '₹2,199', status: 'Shipped', date: '03 Oct 2026' },
  { id: '#ORD10019', customer: 'Meera Iyer', amount: '₹8,999', status: 'Processing', date: '03 Oct 2026' },
  { id: '#ORD10018', customer: 'Kavya Nair', amount: '₹1,850', status: 'Pending', date: '02 Oct 2026' },
  { id: '#ORD10017', customer: 'Sneha Patel', amount: '₹3,420', status: 'Cancelled', date: '01 Oct 2026' },
]

export const lowStock = [
  { name: 'Banarasi Silk Saree', stock: 3, img: IMG.saree1 },
  { name: 'Kanchipuram Gold Zari', stock: 5, img: IMG.saree2 },
  { name: 'Tissue Designer Saree', stock: 2, img: IMG.saree3 },
]

export const products = [
  { id: 1, name: 'Kanchipuram Silk Saree', category: 'Silk Sarees', price: '₹8,999', stock: 24, status: 'Active', img: IMG.saree1, sku: 'KS-001' },
  { id: 2, name: 'Banarasi Brocade Saree', category: 'Silk Sarees', price: '₹6,499', stock: 18, status: 'Active', img: IMG.saree2, sku: 'BB-102' },
  { id: 3, name: 'Cotton Handloom Saree', category: 'Cotton Sarees', price: '₹1,899', stock: 42, status: 'Active', img: IMG.saree3, sku: 'CH-220' },
  { id: 4, name: 'Designer Tissue Saree', category: 'Designer', price: '₹4,299', stock: 8, status: 'Active', img: IMG.saree1, sku: 'DT-045' },
]

export const orders = [
  { id: '#ORD10021', customer: 'Priya Sharma', items: 2, amount: '₹4,580', payment: 'Online (Razorpay)', status: 'Delivered', date: '04 Oct 2026' },
  { id: '#ORD10020', customer: 'Ananya Reddy', items: 1, amount: '₹2,199', payment: 'COD', status: 'Shipped', date: '03 Oct 2026' },
  { id: '#ORD10019', customer: 'Meera Iyer', items: 3, amount: '₹8,999', payment: 'Online (Razorpay)', status: 'Processing', date: '03 Oct 2026' },
  { id: '#ORD10018', customer: 'Kavya Nair', items: 1, amount: '₹1,850', payment: 'COD', status: 'Pending', date: '02 Oct 2026' },
  { id: '#ORD10017', customer: 'Sneha Patel', items: 2, amount: '₹3,420', payment: 'Online (Razorpay)', status: 'Cancelled', date: '01 Oct 2026' },
]

export const customers = [
  { id: 'CUS1001', name: 'Priya Sharma', email: 'priya@email.com', phone: '+91 98765 43210', orders: 12, spent: '₹24,580', lastLogin: '04 Oct 2026, 10:30 AM', status: 'Active', location: 'Hyderabad, Telangana', joined: '12 Jan 2025' },
  { id: 'CUS1002', name: 'Ananya Reddy', email: 'ananya@email.com', phone: '+91 91234 56789', orders: 8, spent: '₹18,200', lastLogin: '03 Oct 2026, 6:15 PM', status: 'Active', location: 'Bangalore, Karnataka', joined: '05 Mar 2025' },
  { id: 'CUS1003', name: 'Meera Iyer', email: 'meera@email.com', phone: '+91 99887 76655', orders: 5, spent: '₹9,450', lastLogin: '02 Oct 2026, 9:00 AM', status: 'Active', location: 'Chennai, Tamil Nadu', joined: '20 Jun 2025' },
  { id: 'CUS1004', name: 'Kavya Nair', email: 'kavya@email.com', phone: '+91 97654 32109', orders: 2, spent: '₹3,700', lastLogin: '28 Sep 2026, 2:45 PM', status: 'Blocked', location: 'Kochi, Kerala', joined: '01 Aug 2026' },
]

export const banners = [
  { id: 1, title: 'Festive Collection', position: 'Homepage (Hero)', link: '/offers', status: 'Active', start: '01 Oct 2026', end: '31 Oct 2026', img: IMG.hero },
  { id: 2, title: 'Wedding Collection', position: 'Homepage (Grid)', link: '/wedding', status: 'Active', start: '15 Sep 2026', end: '15 Nov 2026', img: IMG.saree1 },
  { id: 3, title: 'New Arrivals', position: 'Category Top', link: '/new', status: 'Inactive', start: '01 Aug 2026', end: '30 Sep 2026', img: IMG.saree2 },
]

export const coupons = [
  { code: 'WELCOME10', name: 'Welcome Offer', type: 'Percentage', discount: '10%', minOrder: '₹999', usage: '45 / 500', from: '01 Oct 2026', to: '31 Dec 2026', status: 'Active' },
  { code: 'FESTIVE500', name: 'Festive Flat Off', type: 'Fixed', discount: '₹500', minOrder: '₹3,000', usage: '120 / 200', from: '01 Oct 2026', to: '31 Oct 2026', status: 'Active' },
  { code: 'FREESHIP', name: 'Free Shipping', type: 'Free Shipping', discount: '—', minOrder: '₹1,499', usage: '890 / ∞', from: '01 Jan 2026', to: '31 Dec 2026', status: 'Active' },
]

export const reviews = [
  { id: 1, product: 'Kanchipuram Silk Saree', customer: 'Priya Sharma', rating: 5, comment: 'Beautiful quality and fast delivery!', date: '03 Oct 2026', status: 'Approved', img: IMG.saree1 },
  { id: 2, product: 'Cotton Handloom Saree', customer: 'Ananya Reddy', rating: 4, comment: 'Comfortable fabric, colors as shown.', date: '02 Oct 2026', status: 'Pending', img: IMG.saree3 },
  { id: 3, product: 'Banarasi Brocade Saree', customer: 'Meera Iyer', rating: 5, comment: 'Perfect for wedding season.', date: '01 Oct 2026', status: 'Approved', img: IMG.saree2 },
]

export const salesChartData = [12, 18, 15, 22, 28, 24, 32, 30, 35, 38, 42, 45, 40, 48, 52, 50, 55, 58, 54, 60, 62, 58, 65, 68, 70, 72, 75, 78, 80, 85, 82]

export const orderStatusDonut = [
  { label: 'Pending', value: 12, color: '#ca8a04' },
  { label: 'Processing', value: 28, color: '#ea580c' },
  { label: 'Shipped', value: 46, color: '#2563eb' },
  { label: 'Delivered', value: 32, color: '#16a34a' },
  { label: 'Cancelled', value: 6, color: '#dc2626' },
]

export const categorySales = [
  { name: 'Silk', value: 85 },
  { name: 'Cotton', value: 62 },
  { name: 'Designer', value: 48 },
  { name: 'Tissue', value: 35 },
  { name: 'Georgette', value: 28 },
]

export const topProducts = [
  { name: 'Kanchipuram Silk Saree', category: 'Silk', sold: 48, revenue: '₹4,31,952', img: IMG.saree1 },
  { name: 'Banarasi Brocade', category: 'Silk', sold: 36, revenue: '₹2,33,964', img: IMG.saree2 },
  { name: 'Cotton Handloom', category: 'Cotton', sold: 72, revenue: '₹1,36,728', img: IMG.saree3 },
]

export const topCustomers = [
  { name: 'Priya Sharma', orders: 12, spent: '₹24,580' },
  { name: 'Ananya Reddy', orders: 8, spent: '₹18,200' },
  { name: 'Meera Iyer', orders: 5, spent: '₹9,450' },
]
