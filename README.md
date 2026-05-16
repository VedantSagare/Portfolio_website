# Vedant Sagare - Professional Portfolio

A modern, high-performance, full-stack portfolio website showcasing the technical journey, skills, and projects of Vedant Sagare. This project features a React-based frontend with stunning glassmorphism aesthetics and a robust Spring Boot backend for data management.

## 🚀 Live Demo
[Coming Soon / Your Deployment Link Here]

## ✨ Features

- **Dynamic Frontend**: Built with React and Vite for blazing-fast performance.
- **Glassmorphism UI**: Modern design with vibrant colors, frosted glass effects, and smooth animations.
- **Interactive Background**: Particle background system for an engaging user experience.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Micro-animations**: Subtle hover effects and transitions using Vanilla CSS and Framer Motion.
- **Backend API**: Spring Boot REST API for managing portfolio data and contact form submissions.
- **Database**: H2 Database (In-memory) for easy setup and testing.
- **Fallback Support**: Seamlessly handles backend unavailability with comprehensive local fallback data.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Vanilla CSS (Custom Glassmorphism System)
- **Animations**: Framer Motion
- **Icons**: FontAwesome / Custom SVG

### Backend
- **Framework**: Java Spring Boot
- **Database**: H2 Database (JPA/Hibernate)
- **API**: RESTful Services
- **Validation**: Spring Boot Starter Validation

## 📂 Project Structure

```
Portfolio_Website/
├── frontend/               # React + Vite application
│   ├── src/
│   │   ├── api/           # API service layers
│   │   ├── components/    # Reusable UI components
│   │   └── App.jsx        # Main application entry
├── backend/                # Spring Boot application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/      # Java source code
│   │   │   └── resources/ # Configuration and static assets
│   └── pom.xml            # Maven dependencies
└── README.md               # Project documentation
```

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- Java JDK 17+
- Maven

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/vedantsagare/portfolio-website.git
   cd Portfolio_Website
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

3. **Backend Setup**
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```
   The backend API will be available at `http://localhost:8080`.

## 📝 Contact
**Vedant Sagare**  
Email: [vedantsagare2002@gmail.com](mailto:vedantsagare2002@gmail.com)  
LinkedIn: [linkedin.com/in/vedantsagare](https://linkedin.com/in/vedantsagare)  
GitHub: [github.com/vedantsagare](https://github.com/vedantsagare)

---
