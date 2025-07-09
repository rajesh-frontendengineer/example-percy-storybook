import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Basic = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, background: '#fafbfc', padding: 32, borderRadius: 12 }}>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </div>
); 