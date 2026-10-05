export { IMG, products } from '../../admin/data/mockData.js'

export const categories = [
  { name: 'Silk', icon: '🧵' },
  { name: 'Cotton', icon: '🌿' },
  { name: 'Banarasi', icon: '✨' },
  { name: 'Designer', icon: '👗' },
  { name: 'Wedding', icon: '💍' },
  { name: 'Georgette', icon: '🎀' },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Sarees', to: '/shop/silk-sarees' },
  { label: 'Collections', to: '/shop/silk-sarees' },
  { label: 'New Arrivals', to: '/shop/silk-sarees' },
  { label: 'Offers', to: '/shop/silk-sarees' },
  { label: 'Wedding', to: '/shop/silk-sarees' },
  { label: 'Silk Sarees', to: '/shop/silk-sarees' },
  { label: 'Cotton Sarees', to: '/shop/silk-sarees' },
  { label: 'Contact', to: '/' },
]

export const cartItems = [
  {
    id: 1,
    name: 'Kanchipuram Silk Saree',
    price: 8999,
    mrp: 12999,
    qty: 1,
    img: 'https://images.unsplash.com/photo-1610037124592-831f4a823f2d?w=200&q=80',
  },
  {
    id: 2,
    name: 'Banarasi Brocade Saree',
    price: 6499,
    mrp: 8999,
    qty: 1,
    img: 'https://images.unsplash.com/photo-1583391733987-9589a5c9a1f6?w=200&q=80',
  },
]

export const addresses = [
  { id: 1, label: 'Home', line: '12, Jubilee Hills, Hyderabad, Telangana 500033', default: true },
  { id: 2, label: 'Office', line: 'Tech Park, HITEC City, Hyderabad 500081', default: false },
]

export const userOrders = [
  { id: 'ORD10021', date: '04 Oct 2026', name: 'Kanchipuram Silk Saree', amount: 4580, status: 'Delivered', img: 'https://images.unsplash.com/photo-1610037124592-831f4a823f2d?w=120&q=80' },
  { id: 'ORD10018', date: '02 Oct 2026', name: 'Cotton Handloom Saree', amount: 1899, status: 'Shipped', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e3517?w=120&q=80' },
  { id: 'ORD10015', date: '28 Sep 2026', name: 'Designer Tissue Saree', amount: 4299, status: 'Processing', img: 'https://images.unsplash.com/photo-1610037124592-831f4a823f2d?w=120&q=80' },
]

export const productDetail = {
  id: 1,
  name: 'Kanchipuram Pure Silk Saree',
  price: 8999,
  mrp: 12999,
  rating: 4.8,
  reviews: 124,
  fabric: 'Pure Silk',
  color: 'Maroon & Gold',
  design: 'Traditional Temple Border',
  length: '5.5 meters',
  blouse: 'Included',
  description:
    'Handwoven Kanchipuram silk saree with rich zari work. Perfect for weddings and festive occasions.',
  images: [
    'https://images.unsplash.com/photo-1610037124592-831f4a823f2d?w=600&q=80',
    'https://images.unsplash.com/photo-1583391733987-9589a5c9a1f6?w=600&q=80',
    'https://images.unsplash.com/photo-1617627143750-d86bc21e3517?w=600&q=80',
  ],
}
