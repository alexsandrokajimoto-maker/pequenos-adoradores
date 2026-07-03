import Link from 'next/link';
import { BookOpen, HeartHandshake, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-sol/50 blur-2xl" />
      <div className="absolute right-8 top-20 h-32 w-32 rounded-full bg-céu/40 blur-2xl" />
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="badge bg-sol/40 text-noite">Ministério Infantil — AD Belém Setor 23</span>
          <h1 className="mt-6 text-5xl font-black leading-tight text-noite md:text-7xl">Pequenos Adoradores</h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700">Cuidando dos pequenos hoje, formando adoradores para toda a vida. Um espaço de amor, segurança, Palavra de Deus, alegria e comunhão com Jesus.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="btn-primary" href="/equipe">Quero fazer parte</Link>
            <Link className="btn-secondary" href="/doacoes">Fazer doação</Link>
          </div>
        </div>
        <div className="card relative min-h-[420px] overflow-hidden p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-céu/25 via-sol/25 to-coral/25" />
          <div className="relative grid h-full place-items-center text-center">
            <div className="grid gap-5">
              <div className="mx-auto grid h-28 w-28 place-items-center rounded-[2rem] bg-white shadow-soft"><Sparkles className="h-14 w-14 text-coral" /></div>
              <h2 className="text-3xl font-black text-noite">Jesus no centro</h2>
              <p className="mx-auto max-w-md text-slate-700">“Deixai vir a mim os pequeninos...” — Marcos 10:14</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-5"><BookOpen className="mx-auto text-céu" /><b>EBD Infantil</b></div>
                <div className="rounded-3xl bg-white p-5"><HeartHandshake className="mx-auto text-coral" /><b>Cuidado e amor</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
