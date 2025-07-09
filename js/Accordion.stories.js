import React from 'react';
import Accordion from './Accordion';
import Button from './Button';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const Basic = () => (
  <div style={{ maxWidth: 600, margin: '32px auto', background: '#fff', borderRadius: 12, border: '1px solid #eee', boxShadow: '0 1px 4px #0001' }}>
    <Accordion>
      <Accordion.Summary>Plan Benefits</Accordion.Summary>
      <Accordion.Details>
        <strong>Basic Care</strong>: Includes essential health benefits, preventive care, and access to a wide provider network.<br/>
        <strong>Premium Plus</strong>: Adds dental, vision, and wellness programs to your coverage.
      </Accordion.Details>
    </Accordion>
    <Accordion>
      <Accordion.Summary>Coverage Details</Accordion.Summary>
      <Accordion.Details>
        All plans cover emergency services, hospitalization, prescription drugs, and maternity care. Out-of-network coverage may vary by plan. Please review your plan documents for full details.
      </Accordion.Details>
    </Accordion>
    <Accordion>
      <Accordion.Summary>Next Steps</Accordion.Summary>
      <Accordion.Details>
        <div style={{ marginBottom: 16 }}>
          Ready to enroll or need more information? Our licensed agents can help you compare plans and find the best fit for your needs.
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Button variant="text">Contact Agent</Button>
          <Button variant="agree">Enroll Now</Button>
        </div>
      </Accordion.Details>
    </Accordion>
  </div>
); 