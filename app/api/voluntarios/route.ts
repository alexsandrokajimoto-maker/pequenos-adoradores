import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  const body = await request.json();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return NextResponse.json({ saved: false, message: 'Supabase não configurado. Dados recebidos localmente.', data: body });
  }

  const supabase = createClient(url, key);
  const { error } = await supabase.from('voluntarios').insert({
    nome: body.nome,
    telefone: body.telefone,
    email: body.email,
    area: body.area,
    mensagem: body.mensagem
  });

  if (error) return NextResponse.json({ saved: false, error: error.message }, { status: 400 });
  return NextResponse.json({ saved: true });
}
