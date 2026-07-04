import { cursos } from '@/lib/data';

export default function CursosPage() {
  return (
    <section className="section">
      <div className="container-page">
        <span className="badge">Setor 23</span>
        <h1 className="section-title">Cursos no Setor 23</h1>
        <p className="section-subtitle">Capacitacoes para criancas, adolescentes, terceira idade e voluntarios.</p>
        <div className="grid-2">
          {cursos.map((c) => (
            <div className="card feature" key={c.titulo}>
              <span className="badge">{c.publico}</span>
              <h3>{c.titulo}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
