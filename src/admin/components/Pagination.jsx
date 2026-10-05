export function Pagination({ showing = '1 to 8 of 892', pages = [1, 2, 3] }) {
  return (
    <div className="admin-pagination">
      <span>{showing}</span>
      <div className="admin-pagination__pages">
        <button type="button">‹</button>
        {pages.map((p) => (
          <button key={p} type="button" className={p === 1 ? 'active' : ''}>
            {p}
          </button>
        ))}
        <span style={{ padding: '0 0.25rem' }}>…</span>
        <button type="button">112</button>
        <button type="button">›</button>
      </div>
    </div>
  )
}
