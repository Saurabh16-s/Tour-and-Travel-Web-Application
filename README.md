#  Trippy — AI-Powered Travel Booking Platform

> A full-stack travel booking platform with a conversational AI trip planner, JWT authentication, and cloud-native AWS infrastructure.

🌐 **Live Demo:** [http://13.126.227.115/](http://13.126.227.115/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running with Docker](#running-with-docker)
- [AI Agent — How It Works](#ai-agent--how-it-works)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## Overview

Trippy is a production-deployed, full-stack travel booking application. Users can register, log in securely, explore travel options, and interact with an **agentic AI trip planner** that understands natural language queries and assists with multi-step travel planning.

The project is built with a microservices-inspired approach — the core backend runs on Spring Boot, while the AI agent is a separate Python microservice, both deployed on AWS EC2 behind Nginx.

---

## Features

- 🔐 **User Authentication** — Secure registration and login with JWT (JSON Web Tokens), stateless session management
- 🤖 **Agentic AI Trip Planner** — Conversational AI assistant powered by LangGraph + LLaMA 3.3 70B via Groq for intelligent, multi-step travel planning
- 📧 **Email Notifications** — Transactional emails via AWS SES (booking confirmations, welcome emails)
- 🐳 **Dockerized Deployment** — Multi-container setup orchestrated with Docker Compose
- 🌐 **Nginx Reverse Proxy** — Single entry point routing traffic to frontend, backend, and AI service
- ☁️ **AWS Infrastructure** — Hosted on EC2 with S3 and SES integrations

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React | UI framework |
| Axios | HTTP client |

### Backend (Core)
| Technology | Purpose |
|---|---|
| Spring Boot | REST API framework |
| Spring Security + JWT | Authentication & authorization |
| JPA / Hibernate | ORM layer |
| PostgreSQL | Relational database |
| AWS SES | Email notifications |
| AWS SQS | Async message queue |
| AWS S3 | Object storage |

### AI Microservice
| Technology | Purpose |
|---|---|
| Python + FastAPI | Microservice framework |
| LangGraph | Agentic workflow orchestration |
| Groq API | LLM inference (LLaMA 3.3 70B) |

### Infrastructure
| Technology | Purpose |
|---|---|
| Docker + Docker Compose | Containerization |
| Nginx | Reverse proxy |
| AWS EC2 | Cloud hosting |

---

## Architecture

```
                        ┌─────────────────────────────────────────┐
                        │              AWS EC2 Instance            │
                        │                                          │
        User ──────────▶│  Nginx (Port 80)                        │
                        │      │                                   │
                        │      ├──▶ React Frontend (Port 3000)    │
                        │      │                                   │
                        │      ├──▶ Spring Boot API (Port 8080)   │
                        │      │         │                         │
                        │      │         ├──▶ PostgreSQL           │
                        │      │         ├──▶ AWS SES              │
                        │      │         ├──▶ AWS SQS              │
                        │      │         └──▶ AWS S3               │
                        │      │                                   │
                        │      └──▶ AI Microservice (Port 8000)   │
                        │               │                          │
                        │               └──▶ Groq API (LLaMA 3.3) │
                        └─────────────────────────────────────────┘
```

---

## Getting Started

### Prerequisites

- Java 17+
- Node.js 18+
- Python 3.10+
- Docker & Docker Compose
- PostgreSQL (if running locally without Docker)
- AWS account (for SES, SQS, S3)

### Clone the Repository

```bash
git clone https://github.com/your-username/trippy.git
cd trippy
```

---

## Environment Variables

### Spring Boot (`/backend/.env` or `application.properties`)

```env
DB_URL=jdbc:postgresql://localhost:5432/trippy
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password

JWT_SECRET=your_jwt_secret

AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
AWS_REGION=ap-south-1
AWS_SES_FROM_EMAIL=noreply@yourdomain.com
AWS_SQS_QUEUE_URL=https://sqs.ap-south-1.amazonaws.com/...
AWS_S3_BUCKET=your-s3-bucket-name
```

### AI Microservice (`/ai-service/.env`)

```env
GROQ_API_KEY=your_groq_api_key
SPRING_BACKEND_URL=http://backend:8080
```

---

## Running with Docker

The entire stack (frontend, backend, AI service, PostgreSQL) can be spun up with a single command:

```bash
docker compose up --build
```

Services will be available at:
- Frontend: `http://localhost`
- Spring Boot API: `http://localhost/api`
- AI Microservice: `http://localhost/ai`

To stop:
```bash
docker compose down
```

---

## AI Agent — How It Works

The AI trip planner is built as a **stateful agentic system** using LangGraph, not a simple one-shot LLM call.

**Why LangGraph?**
Standard LLM calls are stateless — each prompt is independent. LangGraph lets you define a **graph of nodes and edges** where the agent can loop, branch, and make decisions based on intermediate outputs. This is essential for complex tasks like travel planning where the agent needs to:

1. Understand the user's intent
2. Ask clarifying questions if needed
3. Reason through constraints (dates, budget, destinations)
4. Produce a structured itinerary

**Flow:**
```
User Message
     │
     ▼
 LangGraph Agent (FastAPI)
     │
     ├── Intent Classification Node
     ├── Context Gathering Node (multi-turn)
     ├── Planning Node (Groq → LLaMA 3.3 70B)
     └── Response Formatting Node
     │
     ▼
Structured Travel Plan → Returned to Spring Boot → Displayed on UI
```

**Model:** LLaMA 3.3 70B via Groq for ultra-low latency inference.

---

## Project Structure

```
trippy/
├── frontend/               # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/       # Axios API calls
│   └── Dockerfile
│
├── backend/                # Spring Boot application
│   ├── src/main/java/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── model/
│   │   └── security/       # JWT config
│   └── Dockerfile
│
├── ai-service/             # Python AI microservice
│   ├── main.py             # FastAPI entry point
│   ├── agent/
│   │   ├── graph.py        # LangGraph workflow
│   │   └── nodes.py        # Agent nodes
│   └── Dockerfile
│
├── nginx/
│   └── nginx.conf          # Reverse proxy config
│
└── docker-compose.yml
```

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## Author

**Saurabh** — CSE Student @ COER University  


---

> ⭐ If you found this project useful, consider giving it a star!
