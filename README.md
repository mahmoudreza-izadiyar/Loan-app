# Loan Application Project

## 📌 Overview
This project is a **Loan Application System** built using **React (Frontend) and Express (Backend) with TypeScript**. The system allows users to fill out a loan application form and receive lender offers based on the submitted details.

## 🚀 Features
### **Frontend (React + TypeScript)**
- **Form Handling** using `react-hook-form` & validation with `zod`
- **React Router** for navigation between pages
- **Atomic Design Principle** for better component organization
- **Styled UI** with CSS (responsive & modern design)
- **Fetch API Integration** to communicate with backend

### **Backend (Express + TypeScript)**
- **REST API** for loan application processing
- **In-memory data storage** (no external database required)
- **Validation Middleware** for secure input processing
- **CORS & Body Parsing Middleware** included
- **Monthly Repayment Calculation** for lenders' offers
- **Unit Testing** with Jest & ts-jest

## 📂 Project Structure
```
loan-app/
│── backend/          # Express Backend
│   ├── src/
│   │   ├── routes/   # API Endpoints
│   │   ├── models/   # Data Models
│   │   ├── utils/    # Helper functions
│   │   ├── tests/    # Jest Unit Tests
│   │   ├── index.ts  # Main server file
│   ├── package.json  # Backend Dependencies
│   ├── jest.config.ts # Jest Configuration
│── frontend/         # React Frontend
│   ├── src/
│   │   ├── components/ # Atomic Design (atoms, molecules, organisms)
│   │   ├── pages/      # Loan Application & Loan Results Pages
│   │   ├── App.tsx     # Main Component
│   │   ├── main.tsx    # ReactDOM Entry
│   ├── package.json  # Frontend Dependencies
│── README.md         # Project Documentation
```

## 💻 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/loan-app.git
cd loan-app
```

### **2️⃣ Install Dependencies**
#### **Backend**
```sh
cd backend
pnpm install  # or npm install
```
#### **Frontend**
```sh
cd ../frontend
pnpm install  # or npm install
```

### **3️⃣ Start the Development Servers**
#### **Backend**
```sh
pnpm dev  # or npm run dev
```
Server will start at **`http://localhost:5001/`**.

#### **Frontend**
```sh
pnpm dev  # or npm run dev
```
Frontend will start at **`http://localhost:5173/`**.

## 📝 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/loan-application` | Submit loan application |
| `GET`  | `/api/loan-offers` | Fetch lender offers |

### **Example API Request (Loan Application Submission)**
```sh
curl -X POST http://localhost:5001/api/loan-application \
     -H "Content-Type: application/json" \
     -d '{"firstName": "John", "lastName": "Doe", "email": "john.doe@example.com", "employmentStatus": "Employed", "loanPurpose": "Vehicle", "amount": 5000, "deposit": 1000, "term": 3}'
```

### **Example API Response (Lender Offers)**
```json
[
  {
    "name": "Lender A",
    "monthlyRepayment": "$300",
    "interestRate": "5.5% APR",
    "fees": "$10 processing fee"
  },
  {
    "name": "Lender B",
    "monthlyRepayment": "$290",
    "interestRate": "5.0% APR",
    "fees": "$15 application fee"
  }
]
```

## 🛠️ Testing
### **1️⃣ Install Jest & ts-jest**
```sh
cd backend
pnpm add -D jest ts-jest @types/jest
```

### **2️⃣ Configure Jest for TypeScript**
Ensure `jest.config.ts` exists in `backend/` with the following:
```ts
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
```

### **3️⃣ Run Jest Tests**
```sh
pnpm test  # or npm test
```

## 📌 Future Enhancements
- ✅ Connect to a real database (PostgreSQL or MongoDB)
- ✅ Improve UI responsiveness for mobile users
- ✅ Add authentication for secure access

