import { IMG } from '../../admin/data/mockData.js'

const imgs = [IMG.saree1, IMG.saree2, IMG.saree3, IMG.saree4]

function item(id, name, category, fabric, price, mrp, color) {
  return {
    id,
    name,
    category,
    categorySlug: category.toLowerCase().replace(/\s+/g, '-'),
    fabric,
    price,
    mrp,
    color,
    img: imgs[(id - 1) % imgs.length],
    rating: 4 + (id % 10) / 10,
    sku: `SS-${String(id).padStart(3, '0')}`,
  }
}

/** Dummy catalog for Sarees tab (no API) */
export const sareeCategories = [
  { slug: 'all', label: 'All Sarees', description: 'Every weave in one place' },
  { slug: 'silk', label: 'Silk Sarees', description: 'Kanchipuram, Banarasi & pure silk' },
  { slug: 'cotton', label: 'Cotton Sarees', description: 'Breathable handlooms for daily wear' },
  { slug: 'banarasi', label: 'Banarasi', description: 'Brocade zari from Varanasi' },
  { slug: 'designer', label: 'Designer', description: 'Contemporary drapes & tissue weaves' },
  { slug: 'wedding', label: 'Wedding', description: 'Bridal reds, golds & ceremonial silks' },
  { slug: 'georgette', label: 'Georgette', description: 'Light flow for parties & evenings' },
]

export const catalogProducts = [
  item(1, 'Kanchipuram Silk Saree', 'Silk Sarees', 'Silk', 8999, 12999, 'Maroon'),
  item(2, 'Banarasi Brocade Saree', 'Silk Sarees', 'Silk', 6499, 8999, 'Gold'),
  item(3, 'Cotton Handloom Saree', 'Cotton Sarees', 'Cotton', 1899, 2499, 'Green'),
  item(4, 'Designer Tissue Saree', 'Designer', 'Tissue', 4299, 5999, 'Purple'),
  item(5, 'Temple Border Kanjivaram', 'Silk Sarees', 'Silk', 12499, 15999, 'Red'),
  item(6, 'Mysore Silk Classic', 'Silk Sarees', 'Silk', 7499, 9999, 'Royal Blue'),
  item(7, 'Khadi Cotton Daily Wear', 'Cotton Sarees', 'Cotton', 1299, 1799, 'Beige'),
  item(8, 'Banarasi Butta Saree', 'Banarasi', 'Silk', 9899, 13499, 'Wine'),
  item(9, 'Bridal Red Wedding Saree', 'Wedding', 'Silk', 18999, 24999, 'Red'),
  item(10, 'Georgette Party Wear', 'Georgette', 'Georgette', 2799, 3999, 'Teal'),
  item(11, 'Organza Designer Saree', 'Designer', 'Organza', 5599, 7999, 'Blush'),
  item(12, 'Chiffon Evening Drape', 'Georgette', 'Chiffon', 3199, 4499, 'Navy'),
]

export function categoryFromSlug(slug) {
  if (!slug || slug === 'all') return null
  const map = {
    silk: 'Silk Sarees',
    cotton: 'Cotton Sarees',
    banarasi: 'Banarasi',
    designer: 'Designer',
    wedding: 'Wedding',
    georgette: 'Georgette',
  }
  return map[slug] ?? null
}

export function getCategoryMeta(slug) {
  const found = sareeCategories.find((c) => c.slug === (slug || 'all'))
  return found ?? sareeCategories[0]
}

export function filterCatalog(products, { categorySlug, fabricSet, maxPrice, search }) {
  let list = [...products]
  const catName = categoryFromSlug(categorySlug)
  if (catName) {
    list = list.filter((p) => p.category === catName)
  }
  if (fabricSet?.size) {
    list = list.filter((p) => fabricSet.has(p.fabric))
  }
  if (maxPrice != null) {
    list = list.filter((p) => p.price <= maxPrice)
  }
  if (search?.trim()) {
    const q = search.trim().toLowerCase()
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q),
    )
  }
  return list
}

export function sortCatalog(products, sort) {
  const list = [...products]
  switch (sort) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price)
    case 'name':
      return list.sort((a, b) => a.name.localeCompare(b.name))
    default:
      return list
  }
}
