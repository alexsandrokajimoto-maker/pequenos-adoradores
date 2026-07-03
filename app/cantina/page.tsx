import { cantina, whatsappNumber } from '@/lib/data';

export default function CantinaPage() {
  const msg = encodeURIComponent('Quero informacoes da Cantina dos Pequenos Adoradores.');
  return (
    <section className="section">
      <div className="container-page">
        <span className="badge">Arrecadacao</span>
        <h1 className="section-title">Cantina dos Pequenos Adoradores</h1>
        <p className="section-subtitle">Cada compra ajuda nos eventos, materiais e projetos das criancas.</p>
        <div className="grid-3">
          {cantina.map((c) => (
            <div className="card feature" key={c.item}>
              <h3>{c.item}</h3>
              <strong className="price">{c.preco}</strong>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="actions">
          <a className="btn-primary" href={`https://wa.me/${whatsappNumber}?text=${msg}`}>Fazer pedido pelo WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
