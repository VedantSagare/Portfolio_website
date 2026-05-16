# Portfolio Backend - Spring Boot API

This is the backend service for the Vedant Sagare Portfolio project. It provides RESTful APIs to manage portfolio data and handle contact form submissions.

## 🛠️ Technology Stack
- **Java 17**
- **Spring Boot 3.2.5**
- **Spring Data JPA**: For database interactions.
- **H2 Database**: In-memory database for rapid development.
- **Maven**: Project management and build tool.

## 🚀 Getting Started

### Prerequisites
- Java JDK 17 or higher
- Maven (optional, wrapper included)

### Running the application
Use the Maven wrapper to run the application:
```bash
./mvnw spring-boot:run
```
The server will start at `http://localhost:8080`.

### API Endpoints
- `GET /api/portfolio`: Fetches all portfolio data (about, skills, experience, projects, etc.).
- `POST /api/contact`: Submits a new contact form message.

### Database Console
The H2 console is available for debugging at `http://localhost:8080/h2-console` (when enabled in `application.properties`).

---
For full project documentation, including frontend setup, please refer to the [root README](../README.md).
