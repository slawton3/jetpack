# [ezVoice](https://ezvoice.io)

This is an open source starter template for Next.js applications.

[![ezVoice](./public/images/ezvoice-logo.png)](https://ezvoice.io/)

> **Important note**
> The project is set up to use Docker, however an existing issue with Bun prevents the container from running. Please see https://github.com/oven-sh/bun/issues/5648 for more details. For now, the project is deployed with [Vercel](https://vercel.com).
>
> This project is still in development and contributions are welcome!

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
- [x] Email with **Resend**
- [x] Validation with **Zod**
- [x] CI starter with Github Actions

## Roadmap

- [ ] Markdown blog
- [ ] Protected routes

## Pro (coming soon)

- [ ] Payments with **Stripe Checkout**
- [ ] User management
- [ ] Admin dashboard
- [ ] Notifications
- [ ] LLM Integrations

## Running Locally

1. Clone the repository

   ```bash
   git clone https://github.com/slawton3/ezvoice.git
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
 <a href="https://github.com/slawton3/ezvoice/graphs/contributors">
   <img src="https://contrib.rocks/image?repo=slawton3/ezvoice" />
 </a>
</p>

<p align="center">
 Made with <a rel="noopener noreferrer" target="_blank" href="https://contrib.rocks">contrib.rocks</a>
</p>

## License

Licensed under the MIT License. Check the [LICENSE](./LICENSE.md) file for details.
