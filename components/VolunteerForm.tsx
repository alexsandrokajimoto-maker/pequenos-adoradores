'use client';

import { useState } from 'react';
import { whatsappNumber } from '@/lib/data';

export function VolunteerForm() {
  const [status, setStatus] = useState('');

  async function submit(formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    setStatus('Enviando cadastro...');

    try {
      await fetch('/api/voluntarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus('Cadastro registrado. Abrindo WhatsApp...');
    } catch {
      setStatus('Abrindo WhatsApp para concluir o contato.');
    }

    const text = encodeURIComponent(
      `Quero fazer parte da equipe Pequenos Adoradores. Nome: ${data.nome}. Telefone: ${data.telefone}. Area: ${data.area}. Mensagem: ${data.mensagem}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  }

  return (
    <form action={submit} className="card feature form">
      <input className="input" name="nome" placeholder="Seu nome" required />
      <input className="input" name="telefone" placeholder="Telefone / WhatsApp" required />
      <input className="input" name="email" type="email" placeholder="E-mail" />
      <select className="input" name="area" defaultValue="Ensino biblico">
        <option>Ensino biblico</option>
        <option>Louvor infantil</option>
        <option>Recreacao</option>
        <option>Cantina</option>
        <option>Eventos</option>
        <option>Comunicacao</option>
      </select>
      <textarea className="input" name="mensagem" placeholder="Conte como deseja ajudar" rows={5} />
      <button className="btn-primary" type="submit">Enviar cadastro</button>
      {status && <p style={{ fontWeight: 900, color: '#ff6b6b' }}>{status}</p>}
    </form>
  );
}
