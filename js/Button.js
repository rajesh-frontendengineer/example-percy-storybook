import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  base: {
    fontFamily: 'inherit',
    fontWeight: 500,
    fontSize: 16,
    borderRadius: 6,
    padding: '8px 24px',
    border: 'none',
    cursor: 'pointer',
    background: 'none',
    outline: 'none',
    transition: 'background 0.2s, color 0.2s, border 0.2s',
    margin: '0 8px',
  },
  text: {
    color: '#1976d2',
    background: 'none',
  },
  contained: {
    color: '#fff',
    background: '#1976d2',
    boxShadow: '0 2px 4px #0002',
  },
  outlined: {
    color: '#1976d2',
    background: 'none',
    border: '1.5px solid #1976d2',
  },
  agree: {
    color: '#000',
    background: '#FFD600',
    boxShadow: '0 2px 4px #0002',
  },
};

export default function Button({ variant = 'text', children, ...rest }) {
  let style = { ...styles.base, ...styles[variant] };
  return (
    <button style={style} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'agree']),
  children: PropTypes.node.isRequired,
}; 