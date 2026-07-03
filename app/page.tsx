import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { cuidados, eventos } from '@/lib/data';

const cards = [
  { title: 'Cuidados com as Criancas', icon: '🛡️', href: '#cuidados', cls: 'blue' },
  { title: 'Tios e Tias', icon: '👩‍🏫', href: '/equipe', cls: 'coral' },
  { title: 'EBD Infantil', icon: '📖', href: '/ebd', cls: 'yellow' },
  { title: 'Eventos e Fotos', icon: '📅', href: '/eventos', cls: 'green' },
  { title: 'Cantina', icon: '🍽️', href: '/cantina', cls: 'purple' },
  { title: 'Doacoes', icon: '💝', href: '/doacoes', cls: 'coral' },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container-page grid-3">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className={`card feature ${card.cls}`}>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>Conheca esta area do ministerio Pequenos Adoradores.</p>
            </Link>
          ))}
        </div>
      </section>
      <section id="cuidados" className="section">
        <div className="container-page">
          <h2 className="section-title">Cuidado com amor, ordem e proposito</h2>
          <p className="section-subtitle">Cada crianca e recebida como bencao do Senhor, com atencao, protecao e ensino biblico adequado a idade.</p>
          <div className="grid-2" style={{ marginTop: 28 }}>
            {cuidados.map((item) => <div key={item} className="card feature">✅ {item}</div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <h2 className="section-title">Proximos destaques</h2>
          <div className="grid-3" style={{ marginTop: 28 }}>
            {eventos.map((e) => <div key={e.titulo} className="card feature"><span className="badge">{e.data}</span><h3>{e.titulo}</h3><p>{e.detalhe}</p></div>)}
          </div>
        </div>
      </section>
    </>
  );
}
