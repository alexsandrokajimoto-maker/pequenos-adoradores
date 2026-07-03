import { tios, whatsappNumber } from '@/lib/data';
import { VolunteerForm } from '@/components/VolunteerForm';

export default function EquipePage() {
  return (
    <section className="section">
      <div className="container-page">
        <span className="badge">Servir com amor</span>
        <h1 className="section-title">Tios, Tias e Voluntarios</h1>
        <p className="section-subtitle">Nossa equipe serve com dedicacao para acolher, ensinar e cuidar dos pequenos adoradores do Senhor.</p>
        <div className="grid-3">
          {tios.map((t) => (
            <div className="card feature" key={t.nome}>
              <div className="hero-symbol" style={{ width: 82, height: 82, fontSize: 30 }}>👤</div>
              <h3>{t.nome}</h3>
              <p>{t.funcao}</p>
            </div>
          ))}
        </div>
        <div className="grid-2" style={{ marginTop: 42 }}>
          <div className="card feature">
            <h2>Quero fazer parte da equipe</h2>
            <p>Preencha seus dados. O formulario registra o interesse e abre o WhatsApp para contato com a equipe.</p>
            <div className="actions"><a className="btn-secondary" href={`https://wa.me/${whatsappNumber}`}>Falar com a equipe</a></div>
          </div>
          <VolunteerForm />
        </div>
      </div>
    </section>
  );
}
