'use client';

import { useState } from 'react';

export default function Home() {
  const [spend, setSpend] = useState(0);
  const [cpc, setCpc] = useState(0);
  const [cvr, setCvr] = useState(0);
  const [aov, setAov] = useState(0);

  const clicks = cpc > 0 ? spend / cpc : 0;
  const conversions = clicks * (cvr / 100);
  const revenue = conversions * aov;
  const profit = revenue - spend;
  const roi = spend > 0 ? ((profit / spend) * 100).toFixed(2) : '0.00';

  return (
    <div style={{ padding: '40px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Google Ads ROI Calculator</h1>
      <p>Enter your numbers below:</p>

      <input
        type="number"
        placeholder="Ad Spend"
        onChange={(e) => setSpend(Number(e.target.value))}
        style={{ width: '100%', padding: '10px', marginBottom: '12px' }}
      />

      <input
        type="number"
        placeholder="CPC"
        onChange={(e) => setCpc(Number(e.target.value))}
        style={{ width: '100%', padding: '10px', marginBottom: '12px' }}
      />

      <input
        type="number"
        placeholder="Conversion Rate (%)"
        onChange={(e) => setCvr(Number(e.target.value))}
        style={{ width: '100%', padding: '10px', marginBottom: '12px' }}
      />

      <input
        type="number"
        placeholder="Average Order Value"
        onChange={(e) => setAov(Number(e.target.value))}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />

      <h2>Results</h2>
      <p><strong>Clicks:</strong> {clicks.toFixed(0)}</p>
      <p><strong>Conversions:</strong> {conversions.toFixed(2)}</p>
      <p><strong>Revenue:</strong> ₹{revenue.toFixed(2)}</p>
      <p><strong>Profit:</strong> ₹{profit.toFixed(2)}</p>
      <p><strong>ROI:</strong> {roi}%</p>
    </div>
  );
}