# Google Cloud Architecture & Deployment Strategy

**Target Audience:** AI Agents & Developers
**Purpose:** To determine the optimal Google Cloud architecture for *any* application and provide a production-ready deployment path.

This guide serves as a decision framework. When building a new app, consult the **Decision Matrix** to select services, then follow the **Reference Architectures** for implementation.

---

## 1. AI Decision Matrix (Service Selection)

Use this logic to determine the stack components.

### Compute (Where to run the code?)
| Requirement | Recommended Service | Why? |
| :--- | :--- | :--- |
| **Standard Web App / API** | **Cloud Run** | Serverless, scales to zero, handles HTTP/gRPC. Best for stateless containers. |
| **Event-Driven / Background** | **Cloud Functions** | Single-purpose, triggers on Pub/Sub, Storage events, or Firestore changes. |
| **Long-Running Jobs** | **Cloud Run Jobs** | For batch processing, data transformation, or tasks > 60 mins. |
| **Complex Microservices** | **GKE Autopilot** | If you need Kubernetes orchestration, service mesh, or legacy compatibility. |
| **VM / Custom OS** | **Compute Engine** | **Avoid unless necessary.** Use only for legacy apps or specific kernel needs. |

### Database (Where to store data?)
| Requirement | Recommended Service | Why? |
| :--- | :--- | :--- |
| **Relational / Structured** | **Cloud SQL (PostgreSQL)** | Standard for most apps. Use **pgvector** for AI/Embeddings. |
| **Document / Real-time** | **Firestore** | Best for mobile/web apps needing live sync, flexible schema, and rapid dev. |
| **High Scale / Global** | **Cloud Spanner** | For mission-critical, globally distributed apps (Financial/Enterprise). |
| **Caching / Session Store** | **Memorystore (Redis)** | High-speed in-memory store. Essential for high-traffic APIs. |

### Storage & Assets
| Requirement | Recommended Service | Why? |
| :--- | :--- | :--- |
| **User Uploads / Media** | **Cloud Storage** | Object storage for images, videos, backups. Infinite scale. |
| **Docker Images** | **Artifact Registry** | Store and manage container images for Cloud Run/GKE. |

### AI & Data Processing
| Requirement | Recommended Service | Why? |
| :--- | :--- | :--- |
| **LLM / GenAI Models** | **Vertex AI** | Access Gemini, PaLM, or host custom models. |
| **Vector Search** | **Cloud SQL (pgvector)** | Simplest for most apps. Use **Vertex AI Vector Search** for massive scale (>10M vectors). |
| **Async Tasks / Queues** | **Cloud Tasks** | Rate limiting, retries, and scheduling HTTP requests. |
| **Event Bus** | **Pub/Sub** | Decoupling services. One-to-many messaging. |

### Frontend Framework (What to build the UI with?)

**Company Standard:** All projects deploy to **Google Cloud Run**.

| Requirement | Recommended Stack | Why? |
| :--- | :--- | :--- |
| **SPA / Dashboard** | **Vite + React** | Fast builds, simple setup, works with any backend. |
| **Landing Page + Custom Server** | **Vite + Express** | Full control over CSP, rate limiting, middleware. **Default choice.** |
| **SEO-Critical Site** | **Next.js** | Server rendering for blogs, e-commerce, content sites. |
| **Mobile App** | **React Native** or **Flutter** | Cross-platform native apps. |

#### Decision Flowchart

```text
Does the site need SEO for dynamic content?
├── YES → Next.js + Cloud Run
└── NO → Vite + Express + Cloud Run (default)
```

#### Python Equivalent Reference

| JavaScript | Python | Notes |
| :--- | :--- | :--- |
| **Next.js** | **Django** | Full-stack, opinionated, batteries included |
| **Vite + Express** | **React + Flask** | Separate frontend/backend, maximum flexibility |
| **Express** | **Flask** | Minimal, unopinionated backend |

---

## 2. Database Strategy: Local vs. Cloud

**Question:** Should I develop against a local database or connect to Cloud SQL?

### Recommendation: Hybrid Approach
1.  **Local Development**: Use **Docker** to run a local instance of Postgres/Firestore.
    *   *Why?* Zero latency, works offline, free, no risk of breaking production data.
2.  **Staging/Production**: Use **Cloud SQL** or **Firestore**.

### Workflow
1.  **Local Setup**:
    ```bash
    # Run Postgres locally
    docker run -d --name local-db -e POSTGRES_PASSWORD=pass -p 5432:5432 postgres:15
    ```
2.  **Migration**: Use an ORM (Prisma, Drizzle, Sequelize) or migration tool (Alembic) to keep schemas in sync.
    *   *Run locally:* `npx prisma migrate dev`
    *   *Run in CI/CD:* `npx prisma migrate deploy`
3.  **Seeding**: Create a seed script to populate your local DB with dummy data.

### Alternative: Cloud SQL Auth Proxy
If you *must* test against real data, use the **Cloud SQL Auth Proxy** to securely connect from your laptop to GCP without whitelisting IPs.
```bash
./cloud-sql-proxy PROJECT_ID:REGION:INSTANCE_NAME
```
*Warning: This introduces latency and potential security risks if not handled carefully.*

---

## 3. Local Development Strategy: Native vs. Docker

**Question:** Should I run my *application code* in Docker during development?

### Recommendation: "Native for Speed, Docker for Verification"

| Component | Dev Mode (Recommended) | Why? |
| :--- | :--- | :--- |
| **Database / Redis** | **Docker** | Keeps your OS clean. Easy to start/stop/reset. |
| **App Code (Node/Python)** | **Native** (`npm run dev`) | **Hot Reloading** is faster. Debuggers work better. |
| **Pre-Deploy Check** | **Docker** | Verify the container builds and runs before pushing. |

### The "Golden Workflow"
1.  **Start Services**: `docker compose up -d db redis`
2.  **Code**: Run `npm run dev` or `python app.py` locally. Connect to localhost ports.
3.  **Verify**: Before pushing, run `docker build .` and `docker run` to ensure no missing dependencies.

---

## 4. Reference Architectures

### Pattern A: The "Standard" Full-Stack App
**Best for:** SaaS, Internal Tools, E-commerce.
*   **Compute:** Cloud Run (Frontend + Backend)
*   **Database:** Cloud SQL (PostgreSQL)
*   **Caching:** Memorystore (Redis) - *Optional*
*   **Assets:** Cloud Storage

```mermaid
graph LR
    User[User] --> LB[Load Balancer]
    LB --> CR[Cloud Run Service]
    CR --> SQL[Cloud SQL (Postgres)]
    CR --> Redis[Memorystore (Redis)]
    CR --> GCS[Cloud Storage]
```

### Pattern B: The "GenAI" Application
**Best for:** RAG (Retrieval Augmented Generation), Chatbots, Content Creation.
*   **Compute:** Cloud Run (App Logic)
*   **Database:** Cloud SQL (pgvector) - *Stores Embeddings + Data*
*   **AI Model:** Vertex AI (Gemini API)
*   **Processing:** Cloud Run Jobs (Ingestion/Embedding generation)

```mermaid
graph LR
    User --> CR[Cloud Run App]
    CR --> Vertex[Vertex AI (LLM)]
    CR --> SQL[Cloud SQL (pgvector)]
    CR -- Async Job --> PubSub[Pub/Sub]
    PubSub --> Worker[Cloud Run Job]
    Worker --> Vertex
    Worker --> SQL
```

### Pattern C: The "Real-Time" Mobile/Web App
**Best for:** Chat apps, Live Dashboards, Collaboration tools.
*   **Compute:** Cloud Run (API) + Firebase Hosting (Static)
*   **Database:** Firestore (Real-time sync)
*   **Auth:** Firebase Auth
*   **Events:** Cloud Functions (Triggered by Firestore writes)

---

## 5. Backend & API Strategy (Python/Flask)

To ensure the backend is as robust as the frontend, follow these standards.

### 5.1 Modern Python Standards
*   **Type Hints**: MANDATORY. Every function must have input/output types.
    ```python
    def calculate_total(items: list[dict], tax_rate: float) -> float:
        ...
    ```
*   **Pydantic**: Use `pydantic` for all data validation (Request bodies, Environment variables). Never parse JSON manually.
*   **Project Structure**:
    *   `routes/`: API endpoints only. No business logic.
    *   `services/`: Pure business logic. No HTTP dependencies.
    *   `models/`: Pydantic schemas.

### 5.2 API Design (REST)
*   **Standard Response Format**:
    ```json
    {
      "data": { ... },      // Success payload
      "error": null         // Or error object
    }
    ```
*   **Status Codes**:
    *   `200 OK`: Success.
    *   `400 Bad Request`: Validation failed (Pydantic error).
    *   `401 Unauthorized`: Missing/Invalid API Key.
    *   `500 Internal Server Error`: Unhandled exception (log it!).

### 5.3 Testing Strategy
*   **Framework**: `pytest`.
*   **Mocking**: NEVER call real external APIs (Gemini, Stripe) in tests. Use `unittest.mock`.
*   **Coverage**: Aim for 80%+ coverage on `services/`.

---

## 6. Implementation Guide (Standard Stack)

This section details how to deploy **Pattern A** (Node.js/Express + Vite + React).

### 5.1 Project Structure
```
project-root/
├── client/                 # Vite + React
├── server/                 # Express
├── Dockerfile              # Multi-stage build
├── cloudbuild.yaml         # CI/CD
└── .github/workflows/      # CI/CD
```

### 5.2 Containerization (Dockerfile)
*Use multi-stage builds to keep images small.*

```dockerfile
# Stage 1: Builder
FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Build Args for Vite (Client-side env vars)
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

# Stage 2: Production
FROM node:20-slim AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist
ENV NODE_ENV=production
ENV PORT=8080
CMD ["node", "dist/index.js"]
```

**Alternative: Python (Flask/FastAPI)**
```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt gunicorn

COPY . .

# Cloud Run expects the container to listen on $PORT
ENV PORT=8080
EXPOSE 8080

# Start Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "--workers", "1", "--threads", "8", "--timeout", "0", "app:app"]
```

### 5.3 Infrastructure Setup (Terraform Recommended)
*For production, use Terraform. For quick starts, use gcloud.*

**Essential gcloud commands:**
```bash
# 1. Enable APIs
gcloud services enable run.googleapis.com sqladmin.googleapis.com secretmanager.googleapis.com

# 2. Create Secrets
echo -n "secret_value" | gcloud secrets create DB_PASS --data-file=-

# 3. Deploy Cloud Run
gcloud run deploy my-app \
  --source . \
  --allow-unauthenticated \
  --set-secrets="DB_PASS=DB_PASS:latest"
```

### 6.4 Secret Management Strategy
**Rule:** NEVER commit secrets (API Keys, DB Passwords) to Git.

#### A. Local Development (`.env`)
1.  Create a `.env` file in your project root.
2.  Add it to `.gitignore` immediately.
    ```bash
    # .env
    DB_PASS=my-local-password
    GEMINI_API_KEY=AIzaSy...
    ```
3.  Use `dotenv` (Node) or `python-dotenv` (Python) to load them.

#### B. Production (Google Secret Manager)
1.  **Create Secret**:
    ```bash
    echo -n "super-secret-value" | gcloud secrets create DB_PASS --data-file=-
    ```
2.  **Grant Access**:
    Give your Cloud Run Service Account the `Secret Accessor` role.
3.  **Deploy**:
    Mount the secret as an environment variable.
    ```bash
    gcloud run deploy my-app --set-secrets="DB_PASS=DB_PASS:latest"
    ```
    *Cloud Run automatically injects the value into `process.env.DB_PASS` or `os.environ["DB_PASS"]`.*

### 5.5 CI/CD Pipeline Strategy

Choose **one** of the following methods.

#### Option A: GitHub Actions (Recommended)
**Best for:** Teams already using GitHub.
**Security:** Uses **Workload Identity Federation** (WIF) to avoid long-lived service account keys.

1.  **Setup WIF in GCP**:
    ```bash
    # Create Pool & Provider
    gcloud iam workload-identity-pools create "github-pool" --location="global"
    gcloud iam workload-identity-pools providers create-oidc "github-provider" \
      --location="global" --workload-identity-pool="github-pool" \
      --issuer-uri="https://token.actions.githubusercontent.com" \
      --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository"
    ```
2.  **Grant Access**:
    ```bash
    gcloud iam service-accounts add-iam-policy-binding "my-service-account@PROJECT_ID.iam.gserviceaccount.com" \
      --role="roles/iam.workloadIdentityUser" \
      --member="principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/github-pool/attribute.repository/GITHUB_USER/REPO_NAME"
    ```
3.  **Workflow File** (`.github/workflows/deploy.yml`):
    ```yaml
    name: Deploy to Cloud Run
    on:
      push:
        branches: [ "main" ]
    jobs:
      deploy:
        runs-on: ubuntu-latest
        permissions:
          contents: 'read'
          id-token: 'write' # Required for WIF
        steps:
          - uses: actions/checkout@v4
          
          # Authenticate via WIF (No Keys!)
          - uses: google-github-actions/auth@v2
            with:
              workload_identity_provider: 'projects/123456789/locations/global/workloadIdentityPools/github-pool/providers/github-provider'
              service_account: 'my-service-account@PROJECT_ID.iam.gserviceaccount.com'

          - uses: google-github-actions/deploy-cloudrun@v2
            with:
              service: my-app
              source: .
              region: us-central1
              secrets: |
                DB_PASS=DB_PASS:latest
    ```

#### Option B: Google Cloud Build
**Best for:** Native GCP integration, complex build triggers.

1.  **Create `cloudbuild.yaml`**:
    ```yaml
    steps:
      # Build Container
      - name: 'gcr.io/cloud-builders/docker'
        args: ['build', '-t', 'us-central1-docker.pkg.dev/$PROJECT_ID/my-repo/my-app:$COMMIT_SHA', '.']
      
      # Push Container
      - name: 'gcr.io/cloud-builders/docker'
        args: ['push', 'us-central1-docker.pkg.dev/$PROJECT_ID/my-repo/my-app:$COMMIT_SHA']
      
      # Deploy to Cloud Run
      - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
        entrypoint: gcloud
        args:
          - 'run'
          - 'deploy'
          - 'my-app'
          - '--image'
          - 'us-central1-docker.pkg.dev/$PROJECT_ID/my-repo/my-app:$COMMIT_SHA'
          - '--region'
          - 'us-central1'
    ```
2.  **Connect Trigger**:
    Go to **Cloud Build > Triggers** in GCP Console and connect your GitHub repository.

---

## 7. Operational Excellence

### Observability
*   **Logs**: Use structured JSON logging.
    ```typescript
    console.log(JSON.stringify({ severity: 'INFO', message: 'User logged in', userId: '123' }));
    ```
*   **Errors**: Use **Sentry** (Client + Server).
*   **Metrics**: Cloud Monitoring automatically tracks CPU, Memory, and Request Count.

*   **CPU Allocation**: Use "CPU only allocated during request" for standard web apps. Use "Always allocated" only for background processing apps.

---

## 8. Security & Maintenance Strategy

### 8.1 Application Security (AppSec)
*   **Helmet.js**: Always use `helmet()` in Express to set secure HTTP headers (HSTS, X-Frame-Options).
*   **CORS**: Restrict `Access-Control-Allow-Origin` to your specific frontend domain. Never use `*` in production.
*   **Rate Limiting**: Use `express-rate-limit` to prevent abuse (e.g., 100 req/15min).
*   **Input Validation**: Use **Zod** to validate ALL incoming data (API bodies, query params). Never trust user input.

### 8.2 Network Security
*   **Private Services**: Use **Internal Traffic Only** for Cloud Run services that don't need public access (e.g., backend APIs called by other services).
*   **VPC Connector**: Connect Cloud Run to Cloud SQL via Private IP to avoid exposing the database to the public internet.
*   **Cloud Armor**: Enable Google Cloud Armor to block SQL injection, XSS, and DDoS attacks at the load balancer level.

### 8.3 Identity & Access (IAM)
*   **Least Privilege**:
    *   Create a dedicated Service Account for each Cloud Run service (e.g., `backend-sa@project.iam.gserviceaccount.com`).
    *   Grant *only* specific roles: `roles/cloudsql.client`, `roles/secretmanager.secretAccessor`.
    *   **NEVER** use the default Compute Engine service account (it has Editor permissions).

### 8.4 Supply Chain Security
*   **Dependency Scanning**: Enable **Dependabot** or **Renovate** to automatically patch vulnerable npm/pip packages.
*   **Container Scanning**: Enable **Artifact Analysis** in GCP to scan Docker images for OS-level vulnerabilities (CVEs) before deployment.
*   **Signed Images**: Use **Binary Authorization** to ensure only trusted/signed images are deployed to production.

---

## 9. Troubleshooting & Common Issues

| Issue | Solution |
|-------|----------|
| **Billing not enabled** | `gcloud billing projects link PROJECT_ID --billing-account=ACCOUNT_ID` |
| **API not enabled** | `gcloud services enable SERVICE_NAME.googleapis.com` |
| **Permission denied** | Check IAM roles. Service Account needs `Secret Accessor`, `Cloud SQL Client`. |
| **Container timeout** | Increase `--timeout` (max 3600s). Default is 300s. |
| **503 Service Unavailable** | App failed to start or didn't listen on `$PORT`. Check logs. |

## 10. Useful Commands Cheat Sheet

```bash
# List projects
gcloud projects list

# Set current project
gcloud config set project PROJECT_ID

# View deployed services
gcloud run services list

# View logs (tail)
gcloud run logs tail SERVICE_NAME

# Delete a service
gcloud run services delete SERVICE_NAME --region us-central1
```

---

## 11. Appendix: Service Catalog for AI Agents

Use this menu to explore available tools when designing architectures.

### 🧠 AI & Machine Learning
| Service | Use Case |
| :--- | :--- |
| **Vertex AI** | Unified platform for training, hosting, and using ML models (Gemini, PaLM). |
| **Vertex AI Vector Search** | High-scale vector similarity search for RAG applications. |
| **Document AI** | Extract structured data from documents (PDFs, invoices). |
| **Speech-to-Text / Text-to-Speech** | Audio transcription and synthesis. |
| **Translation API** | Real-time language translation. |
| **Video Intelligence API** | Analyze video content (labels, faces, explicit content). |

### 💻 Compute
| Service | Use Case |
| :--- | :--- |
| **Cloud Run** | **Default choice.** Serverless containers for HTTP/Event-driven apps. |
| **Cloud Functions** | Snippets of code (Node/Python/Go) triggered by events. |
| **GKE (Kubernetes Engine)** | Orchestration for complex microservices or stateful workloads. |
| **Compute Engine (GCE)** | Virtual Machines. Use only when you need full OS control or GPUs. |
| **Cloud Run Jobs** | Serverless batch processing (scripts, data migration). |

### 💾 Database
| Service | Use Case |
| :--- | :--- |
| **Cloud SQL** | Managed MySQL, PostgreSQL, SQL Server. **Standard RDBMS.** |
| **Firestore** | NoSQL document database. Real-time sync. **Best for mobile/web.** |
| **Cloud Spanner** | Horizontally scalable, global relational database. **Enterprise scale.** |
| **Cloud Bigtable** | Wide-column NoSQL. High throughput/low latency (IoT, AdTech). |
| **Memorystore** | Managed Redis or Memcached. **Caching & Session Store.** |
| **AlloyDB** | Fully managed PostgreSQL compatible database for demanding workloads. |

### 📦 Storage
| Service | Use Case |
| :--- | :--- |
| **Cloud Storage (GCS)** | Object storage (Images, Videos, Backups). Infinite scale. |
| **Filestore** | Managed NFS file servers for GCE/GKE instances. |
| **Persistent Disk** | Block storage attached to VM instances. |

### 📊 Data Analytics
| Service | Use Case |
| :--- | :--- |
| **BigQuery** | Serverless data warehouse. SQL queries on petabytes of data. |
| **Pub/Sub** | Global messaging and event ingestion. **Decoupling services.** |
| **Dataflow** | Stream and batch data processing (Apache Beam). |
| **Datastream** | Serverless Change Data Capture (CDC) and replication. |

### 🌐 Networking
| Service | Use Case |
| :--- | :--- |
| **Cloud Load Balancing** | Global HTTP(S) load balancing with autoscaling. |
| **Cloud CDN** | Content Delivery Network to cache assets at the edge. |
| **Cloud DNS** | Programmable, authoritative DNS service. |
| **VPC (Virtual Private Cloud)** | Global virtual network for your resources. |

### 🛡️ Security & Identity
| Service | Use Case |
| :--- | :--- |
| **IAM** | Identity and Access Management. Control who can do what. |
| **Secret Manager** | Secure storage for API keys, passwords, and certs. |
| **Cloud Armor** | WAF (Web Application Firewall) and DDoS protection. |
| **Identity Platform** | Customer identity and access management (CIAM). |

### 🛠️ DevOps & Observability
| Service | Use Case |
| :--- | :--- |
| **Cloud Build** | Serverless CI/CD platform. Builds containers. |
| **Artifact Registry** | Store and manage Docker images and language packages. |
| **Cloud Monitoring** | Metrics, dashboards, and alerting. |
| **Cloud Logging** | Centralized log management and analysis. |
| **Cloud Trace** | Distributed tracing for performance bottlenecks. |
