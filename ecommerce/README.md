# NexusCart Enterprise E-Commerce Platform (50k+ LOC)

NexusCart is a high-performance, modular enterprise e-commerce platform featuring TypeScript backend micro-services, React UI design system, Prisma ORM database management, comprehensive test suites, and Docker deployment.

---

## Table of Contents
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Build](#build)
- [Run](#run)
- [Testing & Coverage](#testing--coverage)
- [Docker Deployment](#docker-deployment)
- [Architecture & API Spec](#architecture--api-spec)

---

## Dependencies

The project requires the following runtime dependencies:
- **Node.js**: v18.0.0 or higher (v20.x recommended)
- **NPM**: v9.0.0 or higher
- **TypeScript**: v5.3.3
- **Database**: SQLite (default for development) or PostgreSQL v15+
- **Docker**: Docker Engine 20.10+ & Docker Compose v2.0+

---

## Installation

Clone the repository and install all node dependencies:

```bash
# Clone the repository
git clone https://github.com/ShaikRajiya55/ecommerce.git
cd ecommerce

# Install production and development dependencies
npm install
```

---

## Build

Compile TypeScript source code into production JavaScript distribution files:

```bash
# Run TypeScript compilation
npm run build
```

---

## Run

### Development Mode
Start the development server with live reload:

```bash
npm run dev
```

### Production Mode
Build and run the compiled production bundle:

```bash
npm run build
npm start
```

The server will start listening on `http://localhost:8000`.

---

## Testing & Coverage

Execute the automated test suites (minimum 5 test cases) with coverage reports:

```bash
# Run unit and integration tests
npm test

# Run tests with code coverage calculation
npm run test:coverage
```

---

## Docker Deployment

Build and launch the application containers using Docker Compose:

```bash
# Build Docker image
docker build -t nexuscart-app:latest .

# Launch application stack
docker-compose up -d
```

---

## Architecture & API Spec

For comprehensive API endpoints documentation and system design, refer to the docs directory:
- [API Specification](docs/API_SPECIFICATION.md)
- [Architecture Overview](docs/ARCHITECTURE.md)


## Pull Request Telemetry
- PR #1: Core Subsystems
- PR #2: Microservices
- PR #3: Game Engine
- PR #4: Test Suites
- PR #5: Documentation & Automation
- PR #6: Interactive Dashboard V2
- PR #7: Enterprise Storefront Analytics
