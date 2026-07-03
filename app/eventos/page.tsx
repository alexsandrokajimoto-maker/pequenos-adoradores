import { eventos } from '@/lib/data';
export default function EventosPage() {
  return <section className="container-page py-16"><span className="badge bg-céu/25">Agenda e galeria</span><h1 className="section-title mt-5">Eventos e Fotos</h1><p className="section-subtitle">Divulgação de EBF, cultos infantis, cantinas, apresentações, ensaios e momentos especiais com as crianças.</p><div className="mt-10 grid gap-6 md:grid-cols-3">{eventos.map(e=><div className="card overflow-hidden" key={e.titulo}><div className="h-40 bg-gradient-to-br from-sol via-coral to-céu"/><div className="p-6"><span className="badge bg-sol/40">{e.data}</span><h3 className="mt-4 text-2xl font-black">{e.titulo}</h3><p className="mt-3 text-slate-700">{e.detalhe}</p></div></div>)}</div></section>;
}
