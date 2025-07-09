import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Accordion({ children, defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  return React.Children.map(children, child =>
    React.cloneElement(child, { expanded, setExpanded })
  );
}

function AccordionSummary({ children, expanded, setExpanded }) {
  return (
    <button
      type="button"
      aria-expanded={expanded}
      onClick={() => setExpanded(!expanded)}
      style={{
        width: '100%',
        textAlign: 'left',
        padding: '16px',
        background: 'none',
        border: 'none',
        borderBottom: '1px solid #eee',
        fontWeight: 500,
        fontSize: 16,
        cursor: 'pointer',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: '#1976d2',
      }}
    >
      <span style={{
        display: 'inline-block',
        transition: 'transform 0.2s',
        transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)'
      }}>▶</span>
      {children}
    </button>
  );
}

function AccordionDetails({ children, expanded }) {
  if (!expanded) return null;
  return (
    <div style={{ padding: '16px', borderBottom: '1px solid #eee', background: '#fafbfc', color: '#000' }}>
      {children}
    </div>
  );
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  defaultExpanded: PropTypes.bool
};
AccordionSummary.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
  setExpanded: PropTypes.func
};
AccordionDetails.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool
};

Accordion.Summary = AccordionSummary;
Accordion.Details = AccordionDetails;

export default Accordion; 