import Link from 'next/link';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-24 bg-noite text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-black">Pequenos Adoradores</h3>
          <p className="mt-3 text-white/75">Igreja Assembleia de Deus do Belém — Setor 23.</p>
          <p className="mt-3 font-bold text-sol">Jesus ama as crianças.</p>
        </div>
        <div>
          <h4 className="font-black">Acesso rápido</h4>
          <div className="mt-4 grid gap-2 text-white/75">
            <Link href="/ebd">EBD Infantil</Link><Link href="/eventos">Eventos e Fotos</Link><Link href="/cantina">Cantina</Link><Link href="/doacoes">Doações</Link>
          </div>
        </div>
        <div className="space-y-3 text-white/80">
          <p className="flex gap-2"><Mail /> karina.ninakajimoto@gmail.com</p>
          <p className="flex gap-2"><MapPin /> Setor 23 — Assembleia de Deus do Belém</p>
          <p className="flex gap-2"><MessageCircle /> Contato via WhatsApp</p>
        </div>
      </div>
    </footer>
  );
}
