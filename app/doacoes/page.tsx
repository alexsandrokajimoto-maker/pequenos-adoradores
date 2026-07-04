'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { pixKey } from '@/lib/data';

export default function DoacoesPage() {
  async function copy() {
    await navigator.clipboard.writeText(pixKey);
    alert('Chave Pix copiada!');
  }

  return (
    <section className="section">
      <div className="container-page">
        <span className="badge">Doacoes</span>
        <h1 className="section-title">Ajude os Pequenos Adoradores</h1>
        <p className="section-subtitle">Sua contribuicao apoia materiais, eventos, EBF, atividades, estrutura, cantina e cuidado com nossas criancas.</p>
        <div className="grid-2" style={{ marginTop: 32 }}>
          <div className="card feature">
            <h2>Chave Pix</h2>
            <p style={{ fontWeight: 900, wordBreak: 'break-all', background: 'rgba(255,209,102,.32)', padding: 16, borderRadius: 18 }}>{pixKey}</p>
            <button onClick={copy} className="btn-primary">Copiar chave Pix</button>
          </div>
          <div className="card feature" style={{ display: 'grid', placeItems: 'center', textAlign: 'center' }}>
            <QRCodeCanvas value={pixKey} size={250} includeMargin />
            <p>Aponte a camera para doar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
