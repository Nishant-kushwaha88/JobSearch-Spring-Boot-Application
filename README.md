# 💼 JobSearch - Modern Job Portal System

**JobSearch** is a full-stack, feature-rich Job Portal that seamlessly bridges the gap between **job seekers** and **recruiters**. Designed with performance and user experience in mind, Jobify offers a sleek, responsive interface powered by **React.js + TailwindCSS** and a robust backend powered by **Spring Boot**.

Whether you're an **HR professional** looking to post jobs and manage applications or an **employee** in search of the next career opportunity, Jobify offers all essential tools in one place.

---

## 🚀 Features at a Glance.

- 🔐 **Secure Authentication** – JWT-based login & registration
- 👥 **Role-Based Access Control** – Separate access for HR & Employee
- 📝 **Job Posting** – HR can create and manage job openings
- 🔍 **Smart Job Listings** – Employees can search & filter jobs
- 📄 **Easy Job Application** – Apply directly with resume upload
- 📂 **Application Management** – HR dashboard for viewing and downloading resumes
- 📬 **Resume Download** – Quick access to applicant CVs
- 📊 **Personalized Dashboards** – Tailored views for HR and employees
- 🌐 **Modern UI** – Built with React & TailwindCSS
- ☁️ **Cloud Ready** – Easily deployable on AWS (EC2, RDS, S3)

---

## 🧑‍💻 Tech Stack

### 🛠 Backend
- Java 8+
- Spring Boot (MVC, Data JPA)
- Hibernate ORM
- MySQL
- JWT (Authentication)
- Maven

### 🎨 Frontend
- React.js
- Tailwind CSS
- Axios
- React Router

### 🧰 Dev Tools
- Spring Tool Suite / Eclipse
- VS Code
- Postman
- Git & GitHub

---
## 📂 Project Structure

```bash
jobify/
├── backend/                  # Spring Boot backend
│   ├── controller/
│   ├── entity/
│   ├── service/
│   ├── repository/
│   └── config/
│   └── application.properties
│
├── frontend/                 # React frontend
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── App.jsx
│   └── main.jsx
│
├── README.md
└── LICENSE
```

---

## ⚙️ Getting Started

### 📦 Backend Setup

```bash
# Navigate to backend
cd backend

# Configure your database credentials in application.properties

# Run the Spring Boot application
mvn spring-boot:run
```

### 💻 Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start the React development server
npm run dev
```

📌 **Ensure the backend is running on** `http://localhost:8080` **and the frontend on** `http://localhost:5173`.  
📌 **Don't forget to configure CORS in Spring Boot if required.**



