const FABRICS = ['Silk', 'Cotton', 'Georgette', 'Tissue', 'Chiffon', 'Organza']
const COLORS = [
  { name: 'Maroon', hex: '#5d1725' },
  { name: 'Gold', hex: '#c9a227' },
  { name: 'Green', hex: '#166534' },
  { name: 'Navy', hex: '#1e3a5f' },
]

export function ShopFilters({ maxPrice, onMaxPriceChange, fabrics, onFabricToggle, onClear }) {
  return (
    <aside className="user-filters">
      <div className="user-filters__head">
        <h3>Filters</h3>
        <button type="button" className="user-filters__clear" onClick={onClear}>
          Clear all
        </button>
      </div>

      <div className="user-filter-block">
        <strong>Price Range</strong>
        <input
          type="range"
          min={1000}
          max={20000}
          step={500}
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="user-filter-range"
        />
        <span className="user-filter-hint">Up to ₹{maxPrice.toLocaleString('en-IN')}</span>
      </div>

      <div className="user-filter-block">
        <strong>Fabric</strong>
        {FABRICS.map((f) => (
          <label key={f}>
            <input
              type="checkbox"
              checked={fabrics.has(f)}
              onChange={() => onFabricToggle(f)}
            />{' '}
            {f}
          </label>
        ))}
      </div>

      <div className="user-filter-block">
        <strong>Color</strong>
        {COLORS.map((c) => (
          <label key={c.name}>
            <span className="user-color-swatch" style={{ background: c.hex }} title={c.name} /> {c.name}
          </label>
        ))}
      </div>
    </aside>
  )
}
