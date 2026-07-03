export default function EbdPage() {
  const itens = [
    ['Classes por idade', 'Organizacao por faixas etarias para melhor aprendizado.'],
    ['Aulas criativas', 'Historias biblicas, dinamicas, desenhos e aplicacoes praticas.'],
    ['Familia junto', 'Comunicacao com responsaveis e incentivo a vida devocional em casa.'],
  ];
  return (
    <section className="section">
      <div className="container-page">
        <span className="badge">Escola Biblica Dominical</span>
        <h1 className="section-title" style={{ marginTop: 18 }}>EBD Infantil</h1>
        <p className="section-subtitle">Ensino da Palavra de Deus com historias biblicas, louvores, memorizacao de versiculos, oracao, atividades manuais e linguagem adequada para cada idade.</p>
        <div className="grid-3" style={{ marginTop: 32 }}>
          {itens.map(([titulo, texto]) => (
            <div className="card feature" key={titulo}>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
