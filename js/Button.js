import React from 'react';
import PropTypes from 'prop-types';

const sizes = {
  small: { fontSize: 14, padding: '4px 12px' },
  medium: { fontSize: 16, padding: '8px 24px' },
  large: { fontSize: 18, padding: '12px 32px' },
};

const styles = {
  base: {
    fontFamily: 'inherit',
    fontWeight: 400,
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
    background: 'none',
    outline: 'none',
    transition: 'background 0.2s, color 0.2s, border 0.2s',
    margin: '0 8px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
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
  spinner: {
    width: 16,
    height: 16,
    border: '2px solid #fff',
    borderTop: '2px solid #1976d2',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    display: 'inline-block',
  },
};

function Spinner() {
  return <span style={styles.spinner} />;
}

export default function Button({ variant = 'text', size = 'medium', icon, iconPosition = 'left', fullWidth = false, loading = false, children, ...rest }) {
  let style = { ...styles.base, ...styles[variant], ...sizes[size] };
  if (fullWidth) style.width = '100%';
  return (
    <button style={style} disabled={loading || rest.disabled} {...rest}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
        </>
      )}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'agree']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
}; 