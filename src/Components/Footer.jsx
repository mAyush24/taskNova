import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid #eee' }}>
      © {new Date().getFullYear()} TaskNova
    </footer>
  );
} 