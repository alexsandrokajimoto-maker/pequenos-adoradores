import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero">
      <div className="container-page hero-grid">
        <div>
          <span className="badge">Ministerio Infantil - AD Belem Setor 23</span>
          <h1>Pequenos Adoradores</h1>
          <p>Cuidando dos pequenos hoje, formando adoradores para toda a vida. Um espaco de amor, seguranca, Palavra de Deus, alegria e comunhao com Jesus.</p>
          <div className="actions">
            <Link className="btn-primary" href="/equipe">Quero fazer parte</Link>
            <Link className="btn-secondary" href="/doacoes">Fazer doacao</Link>
          </div>
        </div>
        <div className="card hero-card">
          <div>
            <div className="hero-symbol">✨</div>
            <h2>Jesus no centro</h2>
            <p>Deixai vir a mim os pequeninos - Marcos 10:14</p>
          </div>
        </div>
      </div>
    </section>
  );
}
