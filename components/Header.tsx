import Link from 'next/link';
import { Heart, Menu } from 'lucide-react';

const nav = [['Inicio','/'],['EBD','/ebd'],['Eventos','/eventos'],['Cantina','/cantina'],['Equipe','/equipe'],['Cursos','/cursos'],['Doacoes','/doacoes'],['Admin','/admin']];

export function Header() {
  return (
    <header className="header">
      <div className="container-page header-inner">
        <Link href="/" className="logo">
          <div className="logo-mark"><Heart size={28} fill="white" /></div>
          <div className="logo-title">Pequenos<span>Adoradores</span></div>
        </Link>
        <nav className="nav">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
        <Link href="/doacoes" className="btn-primary">Contribuir</Link>
        <Menu className="menu-icon" />
      </div>
    </header>
  );
}
