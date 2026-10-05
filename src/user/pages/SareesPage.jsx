import { useMemo, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard.jsx'
import { ShopFilters } from '../components/ShopFilters.jsx'
import {
  catalogProducts,
  filterCatalog,
  getCategoryMeta,
  sareeCategories,
  sortCatalog,
} from '../data/sareesCatalog.js'

function categoryHref(slug) {
  return slug === 'all' ? '/sarees' : `/sarees/${slug}`
}

function isCategoryActive(pathname, slug) {
  if (slug === 'all') return pathname === '/sarees' || pathname === '/sarees/'
  return pathname === `/sarees/${slug}`
}

export function SareesPage() {
  const { category: categoryParam } = useParams()
  const category = categoryParam ?? 'all'
  const { pathname } = useLocation()
  const meta = getCategoryMeta(category)
  const [sort, setSort] = useState('featured')
  const [maxPrice, setMaxPrice] = useState(20000)
  const [fabrics, setFabrics] = useState(() => new Set())
  const [search, setSearch] = useState('')
  const [view, setView] = useState('grid')

  const filtered = useMemo(() => {
    const list = filterCatalog(catalogProducts, {
      categorySlug: category,
      fabricSet: fabrics,
      maxPrice,
      search,
    })
    return sortCatalog(list, sort)
  }, [category, fabrics, maxPrice, search, sort])

  function toggleFabric(f) {
    setFabrics((prev) => {
      const next = new Set(prev)
      if (next.has(f)) next.delete(f)
      else next.add(f)
      return next
    })
  }

  function clearFilters() {
    setMaxPrice(20000)
    setFabrics(new Set())
    setSearch('')
    setSort('featured')
  }

  return (
    <div className="user-sarees">
      <section className="user-sarees-hero">
        <div className="user-sarees-hero__inner">
          <nav className="user-breadcrumb user-breadcrumb--light">
            <Link to="/">Home</Link> / Sarees
            {category !== 'all' && <> / {meta.label}</>}
          </nav>
          <h1>{meta.label}</h1>
          <p>{meta.description}</p>
        </div>
      </section>

      <div className="user-sarees__categories">
        <div className="user-sarees__categories-inner">
          {sareeCategories.map((c) => (
            <Link
              key={c.slug}
              to={categoryHref(c.slug)}
              className={`user-sarees-pill${isCategoryActive(pathname, c.slug) ? ' is-active' : ''}`}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="user-shop-layout user-shop-layout--sarees">
        <ShopFilters
          maxPrice={maxPrice}
          onMaxPriceChange={setMaxPrice}
          fabrics={fabrics}
          onFabricToggle={toggleFabric}
          onClear={clearFilters}
        />

        <div className="user-sarees-main">
          <div className="user-shop-toolbar">
            <div>
              <p className="user-sarees-count">
                Showing <strong>{filtered.length}</strong> sarees
              </p>
            </div>
            <div className="user-shop-toolbar__actions">
              <input
                type="search"
                className="user-sarees-search"
                placeholder="Search in this collection..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                className="user-sarees-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A–Z</option>
              </select>
              <div className="user-view-toggle" role="group" aria-label="View mode">
                <button
                  type="button"
                  className={view === 'grid' ? 'active' : ''}
                  onClick={() => setView('grid')}
                  aria-label="Grid view"
                >
                  ⊞
                </button>
                <button
                  type="button"
                  className={view === 'list' ? 'active' : ''}
                  onClick={() => setView('list')}
                  aria-label="List view"
                >
                  ☰
                </button>
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="user-sarees-empty">
              <p>No sarees match your filters.</p>
              <button type="button" className="user-btn user-btn--primary" onClick={clearFilters}>
                Reset filters
              </button>
            </div>
          ) : (
            <div className={view === 'grid' ? 'user-product-grid' : 'user-product-list'}>
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
