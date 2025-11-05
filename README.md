# Vue 3 + Vite + GraphQL + Nitro

A full-stack application built with Vue 3, TypeScript, Vite, GraphQL, and Nitro server.

## Features

- **Frontend**: Vue 3 + TypeScript + Vite + Tailwind CSS
- **Backend**: Nitro server with GraphQL API
- **GraphQL**: nitro-graphql with type-safe schema
- **State Management**: Pinia with Pinia Colada for data fetching
- **Routing**: Vue Router
- **Docker**: Multi-runtime support (Node.js & Bun)
- **Type Safety**: Full TypeScript support

## Tech Stack

- [Vue 3](https://vuejs.org/) - Progressive JavaScript Framework
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Nitro](https://nitro.unjs.io/) - Universal JavaScript Server
- [nitro-graphql](https://github.com/productdevbook/nitro-graphql) - GraphQL integration for Nitro
- [Pinia](https://pinia.vuejs.org/) - Vue Store
- [Pinia Colada](https://pinia-colada.esm.dev/) - GraphQL query library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Prerequisites

- Node.js 24+ or Bun 1.3+
- Docker & Docker Compose (for containerized deployment)
- pnpm (recommended package manager)

## Development

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

The app will be available at:
- Frontend & API: http://localhost:5173
- GraphQL Playground: http://localhost:5173/api/graphql

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Docker Deployment

The project supports multiple runtime environments through Docker:

### Services

1. **app** - Node.js runtime (default)
2. **bun** - Bun runtime (profile-based)
3. **dev** - Development mode with hot-reload (profile-based)

### Quick Start

#### Node.js (Production - Port 3000)

```bash
# Build and run
docker compose up app --build

# Run in background
docker compose up app --build -d

# View logs
docker compose logs -f app
```

#### Bun (Production - Port 3001)

```bash
# Build and run
docker compose --profile bun up --build

# Run in background
docker compose --profile bun up --build -d

# View logs
docker compose logs -f bun
```

#### Both Runtimes Simultaneously

```bash
# Run both Node.js (3000) and Bun (3001)
docker compose --profile bun up app bun --build

# In background
docker compose --profile bun up app bun --build -d
```

#### Development Mode

```bash
# Run with hot-reload (port 5173)
docker compose --profile dev up

# In background
docker compose --profile dev up -d
```

### Docker Commands

```bash
# Stop all services
docker compose down

# View running containers
docker compose ps

# View logs
docker compose logs -f

# Restart a service
docker compose restart app

# Execute command in container
docker compose exec app sh

# Rebuild without cache
docker compose build --no-cache app
```

### Environment Variables

The following environment variables are set in production:

- `NODE_ENV=production`
- `NITRO_PORT=3000`
- `NITRO_HOST=0.0.0.0`

### Build Details

#### Node.js Build
- **Runtime**: Node.js 24 Alpine
- **Package Manager**: pnpm
- **Preset**: node-server
- **Output Size**: ~61 KB
- **Multi-stage**: Yes

#### Bun Build
- **Runtime**: Bun 1 Alpine
- **Package Manager**: bun
- **Preset**: bun
- **Output Size**: ~48 KB (22% smaller)
- **Multi-stage**: Yes

## API Endpoints

### REST API

- `GET /api/hello` - Health check endpoint

### GraphQL API

- `POST /api/graphql` - GraphQL endpoint
- `GET /api/graphql` - GraphQL Playground

### Example Queries

#### Get User

```graphql
query GetUser($id: ID!) {
  getUser(id: $id) {
    __typename
    ... on User {
      id
      name
      email
      createdAt
    }
    ... on UserNotFoundError {
      message
      userId
    }
    ... on UnauthorizedError {
      message
      requiredPermission
    }
  }
}
```

Variables:
```json
{
  "id": "1"
}
```

#### Create User

```graphql
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
    createdAt
  }
}
```

Variables:
```json
{
  "input": {
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

## Project Structure

```
.
├── server/                 # Nitro server
│   ├── graphql/           # GraphQL schema & resolvers
│   │   └── user/          # User module
│   └── routes/            # API routes
├── src/                   # Vue application
│   ├── components/        # Vue components
│   ├── composables/       # Composables (useUser, etc.)
│   ├── graphql/          # GraphQL client & SDK
│   ├── pages/            # Page components
│   └── router/           # Vue Router configuration
├── Dockerfile            # Node.js production build
├── Dockerfile.bun        # Bun production build
├── docker-compose.yml    # Multi-service orchestration
└── vite.config.ts        # Vite & Nitro configuration
```

## GraphQL Features

- **Union Types**: Error handling with union types
- **Type Safety**: Auto-generated TypeScript types
- **Code Generation**: GraphQL Code Generator
- **Composables**: Vue composables for queries/mutations

## Performance

- Client-side code splitting
- Optimized production builds
- Multi-stage Docker builds for minimal image size
- Static asset caching
- GraphQL query caching with Pinia Colada

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
