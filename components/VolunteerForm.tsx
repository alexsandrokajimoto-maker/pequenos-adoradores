'use client';
import { useState } from 'react';
import { whatsappNumber } from '@/lib/data';

export function VolunteerForm(){
 const [status,setStatus]=useState('');
 async function submit(formData: FormData){
  const data=Object.fromEntries(formData.entries());
  setStatus('Enviando...');
  try{ await fetch('/api/voluntarios',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}); setStatus('Cadastro registrado.'); }
  catch{ setStatus('Abra o WhatsApp para concluir o contato.'); }
  const text=encodeURIComponent(`Quero fazer parte da equipe Pequenos Adoradores. Nome: ${data.nome}. Telefone: ${data.telefone}. Área: ${data.area}. Mensagem: ${data.mensagem}`);
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`,'_blank');
 }
 return <form action={submit} className="card grid gap-4 p-6"><input className="input" name="nome" placeholder="Seu nome" required/><input className="input" name="telefone" placeholder="Telefone / WhatsApp" required/><input className="input" name="email" type="email" placeholder="E-mail"/><select className="input" name="area"><option>Ensino bíblico</option><option>Louvor infantil</option><option>Recreação</option><option>Cantina</option><option>Eventos</option><option>Comunicação</option></select><textarea className="input min-h-32" name="mensagem" placeholder="Conte como deseja ajudar"/><button className="btn-primary" type="submit">Enviar cadastro</button>{status && <p className="font-bold text-coral">{status}</p>}</form>
}
