import Link from 'next/link';
import { Heart, Menu } from 'lucide-react';

const nav = [
  ['Início', '/'], ['EBD', '/ebd'], ['Eventos', '/eventos'], ['Cantina', '/cantina'],
  ['Equipe', '/equipe'], ['Cursos', '/cursos'], ['Doações', '/doacoes'], ['Admin', '/admin']
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sol via-coral to-céu shadow-lg">
            <Heart className="h-7 w-7 fill-white text-white" />
          </div>
          <div>
            <p className="text-xl font-black leading-5 text-noite">Pequenos</p>
            <p className="text-xl font-black leading-5 text-coral">Adoradores</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="rounded-full px-4 py-2 text-sm font-bold text-noite/80 hover:bg-sol/30">{label}</Link>)}
        </nav>
        <Link href="/doacoes" className="hidden rounded-full bg-coral px-5 py-3 font-black text-white shadow-lg md:inline-flex">Contribuir</Link>
        <Menu className="h-7 w-7 lg:hidden" />
      </div>
    </header>
  );
}
