# [Jetpack](https://tryjetpack.dev)

This is an open source e-commerce jetpack build with everything new in Next.js 14. It is bootstrapped with `create-t3-app`.

[![Jetpack](./public/images/screenshot.png)](https://tryjetpack.dev/)

> **Warning**
> This project is still in development and is not ready for production use.
>
> It uses new technologies (drizzle ORM) which are subject to change and may break your application.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Database** [Supabase](https://supabase.com)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **User Management:** [Clerk](https://clerk.com)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Email:** [Resend Email](https://resend.com)

## Features

- [x] Containerized and platform agnostic with **Docker**
- [x] Database with **Supabase**
- [x] ORM using **Drizzle ORM**
- [x] Authentication with **Clerk**
- [x] Email**Resend**
- [x] Validation with **Zod**
- [x] CI starter with Github Actions

## Pro (coming soon)

- [ ] Payments with **Stripe Checkout**
- [ ] User management
- [ ] Admin dashboard

## Running Locally

1. Clone the repository

   ```bash
   git clone https://github.com/slawton3/jetpack.git
   ```

2. Install dependencies using pnpm

   ```bash
   bun install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```

4. Start the development server

   ```bash
   bun run dev
   ```

5. Push the database schema

   ```bash
   bun run db:push
   ```

## How do I deploy this?

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Contributing

Contributions are welcome! Please open an issue if you have any questions or suggestions. Your contributions will be acknowledged. See the [contributing guide](./CONTRIBUTING.md) for more information.

## Contributors

Thanks goes to these wonderful people for their contributions:

<p align="center">
 <a href="https://github.com/slawton3/jetpack/graphs/contributors">
   <img src="https://contrib.rocks/image?repo=slawton3/jetpack" />
 </a>
</p>

<p align="center">
 Made with <a rel="noopener noreferrer" target="_blank" href="https://contrib.rocks">contrib.rocks</a>
</p>

## License

Licensed under the MIT License. Check the [LICENSE](./LICENSE.md) file for details.
