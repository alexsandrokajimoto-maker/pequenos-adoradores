import Link from 'next/link';

const modules = [
  ['Eventos e fotos', 'Agenda, galeria e comunicados especiais.'],
  ['Tios e tias', 'Cadastro e organizacao da equipe infantil.'],
  ['EBD Infantil', 'Turmas, aulas, temas e materiais de apoio.'],
  ['Cantina', 'Cardapio, valores e campanhas de arrecadacao.'],
  ['Doacoes', 'Chave Pix, QR Code e controle de contribuicoes.'],
  ['Cursos', 'Cursos do Setor 23 e inscricoes.'],
  ['Voluntarios', 'Pessoas interessadas em servir no ministerio.'],
  ['Avisos', 'Recados para pais, responsaveis e equipe.'],
];

export default function AdminPage() {
  return (
    <section className="section">
      <div className="container-page">
        <span className="badge">Painel administrativo</span>
        <h1 className="section-title">Administracao do Site</h1>
        <p className="section-subtitle">Estrutura preparada para login com Supabase Auth e gerenciamento de conteudo dos Pequenos Adoradores.</p>
        <div className="grid-3" style={{ marginTop: 32 }}>
          {modules.map(([title, desc]) => (
            <div className="card feature" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div className="actions">
          <Link href="/" className="btn-secondary">Voltar ao site</Link>
        </div>
      </div>
    </section>
  );
}
