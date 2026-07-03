import Link from 'next/link';
import { CalendarDays, Church, HandCoins, ShieldCheck, Utensils, UsersRound } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { cuidados, eventos } from '@/lib/data';

const cards = [
  { title: 'Cuidados com as Crianças', icon: ShieldCheck, href: '#cuidados', color: 'bg-céu/20' },
  { title: 'Tios e Tias', icon: UsersRound, href: '/equipe', color: 'bg-coral/20' },
  { title: 'EBD Infantil', icon: Church, href: '/ebd', color: 'bg-sol/30' },
  { title: 'Eventos e Fotos', icon: CalendarDays, href: '/eventos', color: 'bg-folha/25' },
  { title: 'Cantina', icon: Utensils, href: '/cantina', color: 'bg-uva/15' },
  { title: 'Doações', icon: HandCoins, href: '/doacoes', color: 'bg-coral/15' }
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container-page py-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, icon: Icon, href, color }) => (
            <Link key={title} href={href} className={`card ${color} p-6 transition hover:-translate-y-1`}>
              <Icon className="h-10 w-10 text-noite" />
              <h3 className="mt-5 text-2xl font-black text-noite">{title}</h3>
              <p className="mt-2 text-slate-700">Conheça esta área do ministério Pequenos Adoradores.</p>
            </Link>
          ))}
        </div>
      </section>
      <section id="cuidados" className="container-page py-16">
        <h2 className="section-title">Cuidado com amor, ordem e propósito</h2>
        <p className="section-subtitle">Cada criança é recebida como bênção do Senhor, com atenção, proteção e ensino bíblico adequado à idade.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {cuidados.map((item) => <div key={item} className="card p-5 font-semibold text-slate-700">✅ {item}</div>)}
        </div>
      </section>
      <section className="container-page py-16">
        <h2 className="section-title">Próximos destaques</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {eventos.map((e) => <div key={e.titulo} className="card p-6"><span className="badge bg-sol/40">{e.data}</span><h3 className="mt-4 text-2xl font-black">{e.titulo}</h3><p className="mt-3 text-slate-700">{e.detalhe}</p></div>)}
        </div>
      </section>
    </>
  );
}
