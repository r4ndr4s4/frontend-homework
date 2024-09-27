# kpmg-frontend-homework-project

- Original boilerplate: [https://github.com/emre-cil/vite-mui-ts/](https://github.com/emre-cil/vite-mui-ts/)
- Deployed app: [https://kpmg-frontend-homework-project.vercel.app/](https://kpmg-frontend-homework-project.vercel.app/)

## Original boilerplate README 👇

TypeScript + React + Redux + MUI + RRD + ESLint + Prettier

![vite-mui-ts](https://i.ibb.co/j8JSrhV/Screenshot-2023-07-06-121352.png)

### Getting Started

#### Clone the repo

```
npx degit emre-cil/vite-mui-ts my-app
```

```
cd my-app
```

#### Install Dependencies

```
pnpm install
```

#### Run

```
pnpm dev
```

#### Paths

Application using absolute paths
Example: '@/components/Counter/Counter';

if you don't want to use you can remove these lines from

> vite.config.ts

```
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
```

> tsconfig.json

```
"paths": {
      "@/*": ["./*"]
    }
```

### Scripts

| Script        | Description                        |
| ------------- | ---------------------------------- |
| pnpm dev      | Runs the application.              |
| pnpm build    | Create builds for the application. |
| pnpm preview  | Runs the Vite preview              |
| pnpm lint     | Display eslint errors              |
| pnpm lint:fix | Fix the eslint errors              |
| pnpm format   | Runs prettier for all files        |
| pnpm test     | Run tests                          |

### Check List

```

```
