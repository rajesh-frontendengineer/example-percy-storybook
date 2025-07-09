import React from 'react';
import PropTypes from 'prop-types';

export default function Table({ columns, rows, caption, renderActions }) {
  return (
    <div style={{ borderRadius: 12, border: '1px solid #eee', background: '#fafbfc', padding: 24, margin: '24px 0', boxShadow: '0 1px 4px #0001', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: 8, overflow: 'hidden', minWidth: 500 }}>
        {caption && <caption style={{ captionSide: 'top', textAlign: 'left', fontWeight: 600, fontSize: 18, color: '#1976d2', padding: '8px 0' }}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                style={{
                  color: '#1976d2',
                  textAlign: col.align || 'left',
                  padding: '10px',
                  fontWeight: 600,
                  borderBottom: '1px solid #eee',
                  background: 'white'
                }}
              >
                {col.label}
              </th>
            ))}
            {renderActions && <th style={{ color: '#1976d2', textAlign: 'left', padding: '16px', fontWeight: 600, borderBottom: '1px solid #eee', background: 'white' }}>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{ borderBottom: '1px solid #eee', color: '#000', fontWeight: 500, transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#e3f2fd'}
              onMouseLeave={e => e.currentTarget.style.background = ''}
            >
              {columns.map(col => (
                <td
                  key={col.key}
                  style={{
                    padding: '10px',
                    borderBottom: i === rows.length - 1 ? 'none' : '1px solid #eee',
                    color: '#000',
                    fontWeight: 500,
                    textAlign: col.align || 'left'
                  }}
                >
                  {col.render ? col.render(row[col.key], row, i) : row[col.key]}
                </td>
              ))}
              {renderActions && <td style={{ padding: '16px', borderBottom: i === rows.length - 1 ? 'none' : '1px solid #eee' }}>{renderActions(row, i)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    render: PropTypes.func
  })).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  caption: PropTypes.string,
  renderActions: PropTypes.func
}; 