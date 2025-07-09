import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Accordion({ children, defaultExpanded = false, summaryAlign = 'left', renderSummary }) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  return React.Children.map(children, child =>
    React.cloneElement(child, { expanded, setExpanded, summaryAlign, renderSummary })
  );
}

function AccordionSummary({ children, expanded, setExpanded, summaryAlign, renderSummary }) {
  return (
    <button
      type="button"
      aria-expanded={expanded}
      onClick={() => setExpanded(!expanded)}
      style={{
        width: '100%',
        textAlign: summaryAlign,
        padding: '10px',
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
        justifyContent: summaryAlign === 'center' ? 'center' : summaryAlign === 'right' ? 'flex-end' : 'flex-start',
      }}
    >
      <span style={{
        display: 'inline-block',
        transition: 'transform 0.2s',
        transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)'
      }}>▶</span>
      {renderSummary ? renderSummary(children, expanded) : children}
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

function AccordionGroup({ children, attached = false, style, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: attached ? 0 : 16,
        ...style,
      }}
      {...rest}
    >
      {React.Children.map(children, (child, idx) =>
        attached && React.isValidElement(child)
          ? React.cloneElement(child, {
              style: {
                ...child.props.style,
                borderRadius:
                  idx === 0
                    ? '12px 12px 0 0'
                    : idx === React.Children.count(children) - 1
                    ? '0 0 12px 12px'
                    : '0',
                margin: 0,
                borderTop: idx !== 0 ? '1px solid #eee' : undefined,
              },
            })
          : child
      )}
    </div>
  );
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  defaultExpanded: PropTypes.bool,
  summaryAlign: PropTypes.oneOf(['left', 'center', 'right']),
  renderSummary: PropTypes.func,
};
AccordionSummary.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
  setExpanded: PropTypes.func,
  summaryAlign: PropTypes.oneOf(['left', 'center', 'right']),
  renderSummary: PropTypes.func,
};
AccordionDetails.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool
};
AccordionGroup.propTypes = {
  children: PropTypes.node.isRequired,
  attached: PropTypes.bool,
  style: PropTypes.object,
};

Accordion.Summary = AccordionSummary;
Accordion.Details = AccordionDetails;
Accordion.Group = AccordionGroup;

export default Accordion; 