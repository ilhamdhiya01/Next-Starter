import Image from 'next/image';

const Home = () => {
  const techStack = [
    {
      name: 'Next.js 15',
      description: 'React framework with App Router',
      icon: '⚡',
    },
    {
      name: 'TypeScript',
      description: 'Type-safe development',
      icon: '📘',
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
      icon: '🎨',
    },
    {
      name: 'React Server Components',
      description: 'Server-first architecture',
      icon: '🚀',
    },
  ];

  const features = [
    'App Router with Server Components',
    'TypeScript configuration',
    'Tailwind CSS styling',
    'Dark mode support',
    'Optimized for production',
    'SEO friendly',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-6 flex justify-center">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={37}
                priority
              />
            </div>
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
              Next.js Starter Project
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-zinc-600 dark:text-zinc-400">
              A modern, production-ready starter template with TypeScript,
              Tailwind CSS, and best practices built-in.
            </p>
          </div>

          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-3 text-4xl">{tech.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                  {tech.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
                ✨ Features
              </h2>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="mr-3 text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
                🚀 Quick Start
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    1. Install dependencies
                  </p>
                  <code className="block rounded-lg bg-zinc-100 px-4 py-2 text-sm dark:bg-zinc-800">
                    npm install
                  </code>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    2. Run development server
                  </p>
                  <code className="block rounded-lg bg-zinc-100 px-4 py-2 text-sm dark:bg-zinc-800">
                    npm run dev
                  </code>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    3. Start building
                  </p>
                  <code className="block rounded-lg bg-zinc-100 px-4 py-2 text-sm dark:bg-zinc-800">
                    Edit app/page.tsx
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 font-medium text-white transition-colors hover:bg-zinc-700 sm:w-auto dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              📚 Documentation
            </a>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-8 font-medium text-zinc-900 transition-colors hover:bg-zinc-50 sm:w-auto dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
