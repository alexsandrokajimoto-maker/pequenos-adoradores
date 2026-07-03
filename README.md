# Pequenos Adoradores

Site profissional do ministério infantil **Pequenos Adoradores** da Igreja Assembleia de Deus do Belém — Setor 23.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase preparado
- Vercel deploy-ready
- QR Code Pix
- Formulário de voluntários
- Painel administrativo preparado

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Preencha:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_EMAIL=
```

## Supabase

1. Crie um projeto no Supabase.
2. Vá em SQL Editor.
3. Cole e execute o conteúdo do arquivo `supabase-schema.sql`.
4. Copie a URL do projeto e as chaves API para `.env.local` e para a Vercel.

## Deploy na Vercel

1. Envie este projeto para um repositório GitHub.
2. Entre em vercel.com.
3. Clique em Add New Project.
4. Selecione o repositório.
5. Adicione as variáveis de ambiente.
6. Clique em Deploy.

## Pix

Chave Pix configurada no site:

`karina.ninakajimoto@gmail.com`

## Próximas melhorias

- Login real no admin com Supabase Auth.
- Upload de fotos no Supabase Storage.
- CRUD completo de eventos, equipe, cantina e cursos.
- Área exclusiva para pais.
- Inscrição para EBF.
- Controle de presença das crianças.
