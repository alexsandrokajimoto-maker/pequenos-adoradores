import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-page footer-inner">
        <div>
          <h3>Pequenos Adoradores</h3>
          <p>Igreja Assembleia de Deus do Belem - Setor 23.</p>
          <p><strong>Jesus ama as criancas.</strong></p>
        </div>
        <div>
          <h4>Acesso rapido</h4>
          <p><Link href="/ebd">EBD Infantil</Link></p>
          <p><Link href="/eventos">Eventos e Fotos</Link></p>
          <p><Link href="/cantina">Cantina</Link></p>
          <p><Link href="/doacoes">Doacoes</Link></p>
        </div>
        <div>
          <h4>Contato</h4>
          <p>karina.ninakajimoto@gmail.com</p>
          <p>Setor 23 - Assembleia de Deus do Belem</p>
          <p>Atendimento via WhatsApp</p>
        </div>
      </div>
    </footer>
  );
}
