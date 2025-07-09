import React from 'react';
import PropTypes from 'prop-types';

export default function Table({ columns, rows }) {
  return (
    <div style={{ borderRadius: 12, border: '1px solid #eee', background: '#fafbfc', padding: 24, margin: '24px 0', boxShadow: '0 1px 4px #0001' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: 8, overflow: 'hidden' }}>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key} style={{ color: '#1976d2', textAlign: 'left', padding: '16px', fontWeight: 600, borderBottom: '1px solid #eee', background: 'white' }}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #eee', color: '#000', fontWeight: 500 }}>
              {columns.map(col => (
                <td key={col.key} style={{ padding: '16px', borderBottom: i === rows.length - 1 ? 'none' : '1px solid #eee', color: '#000', fontWeight: 500 }}>{row[col.key]}</td>
              ))}
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
    key: PropTypes.string.isRequired
  })).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired
}; 