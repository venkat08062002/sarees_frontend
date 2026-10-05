export { IMG, products } from '../../admin/data/mockData.js'

export const categories = [
  { name: 'Silk', icon: '🧵', to: '/sarees/silk' },
  { name: 'Cotton', icon: '🌿', to: '/sarees/cotton' },
  { name: 'Banarasi', icon: '✨', to: '/sarees/banarasi' },
  { name: 'Designer', icon: '👗', to: '/sarees/designer' },
  { name: 'Wedding', icon: '💍', to: '/sarees/wedding' },
  { name: 'Georgette', icon: '🎀', to: '/sarees/georgette' },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Sarees', to: '/sarees' },
  { label: 'Collections', to: '/sarees' },
  { label: 'New Arrivals', to: { pathname: '/', hash: 'new-arrivals' } },
  { label: 'Offers', to: '/sarees' },
  { label: 'Wedding', to: '/sarees/wedding' },
  { label: 'Silk Sarees', to: '/sarees/silk' },
  { label: 'Cotton Sarees', to: '/sarees/cotton' },
  { label: 'Contact', to: { pathname: '/', hash: 'contact' } },
]

export const homePromos = [
  { title: 'Wedding Collection', subtitle: 'Bridal silks & zari', img: '/images/promo-wedding.svg' },
  { title: 'Kanchipuram Silk', subtitle: 'Temple border classics', img: '/images/promo-kanchipuram.svg' },
  { title: 'New Arrivals', subtitle: 'Fresh picks this week', img: '/images/promo-new.svg' },
]

export const trustFeatures = [
  { title: 'Free Shipping', desc: 'On orders above ₹1,499' },
  { title: 'Easy Returns', desc: '7-day hassle-free returns' },
  { title: 'Secure Payment', desc: 'UPI, cards & COD' },
  { title: 'Authentic Weaves', desc: 'Handpicked from weavers' },
]

export const cartItems = [
  { id: 1, name: 'Kanchipuram Silk Saree', price: 8999, mrp: 12999, qty: 1, img: '/images/product-1.svg' },
  { id: 2, name: 'Banarasi Brocade Saree', price: 6499, mrp: 8999, qty: 1, img: '/images/product-2.svg' },
]

export const addresses = [
  { id: 1, label: 'Home', line: '12, Jubilee Hills, Hyderabad, Telangana 500033', default: true },
  { id: 2, label: 'Office', line: 'Tech Park, HITEC City, Hyderabad 500081', default: false },
]

export const userOrders = [
  { id: 'ORD10021', date: '04 Oct 2026', name: 'Kanchipuram Silk Saree', amount: 4580, status: 'Delivered', img: '/images/product-1.svg' },
  { id: 'ORD10018', date: '02 Oct 2026', name: 'Cotton Handloom Saree', amount: 1899, status: 'Shipped', img: '/images/product-3.svg' },
  { id: 'ORD10015', date: '28 Sep 2026', name: 'Designer Tissue Saree', amount: 4299, status: 'Processing', img: '/images/product-4.svg' },
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
  images: ['/images/product-1.svg', '/images/product-2.svg', '/images/product-3.svg'],
}
