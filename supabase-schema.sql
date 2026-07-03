create table if not exists public.voluntarios (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  telefone text not null,
  email text,
  area text,
  mensagem text,
  created_at timestamptz default now()
);

create table if not exists public.eventos (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  data_evento date,
  descricao text,
  imagem_url text,
  publicado boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.equipe (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  funcao text,
  foto_url text,
  ativo boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.cantina_itens (
  id uuid primary key default gen_random_uuid(),
  item text not null,
  preco numeric(10,2),
  descricao text,
  imagem_url text,
  ativo boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.cursos (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  publico text,
  descricao text,
  data_inicio date,
  ativo boolean default true,
  created_at timestamptz default now()
);

alter table public.voluntarios enable row level security;
alter table public.eventos enable row level security;
alter table public.equipe enable row level security;
alter table public.cantina_itens enable row level security;
alter table public.cursos enable row level security;

create policy "Leitura publica eventos" on public.eventos for select using (publicado = true);
create policy "Leitura publica equipe" on public.equipe for select using (ativo = true);
create policy "Leitura publica cantina" on public.cantina_itens for select using (ativo = true);
create policy "Leitura publica cursos" on public.cursos for select using (ativo = true);
