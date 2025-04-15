# 🚗 HitchHikers

A full-stack serverless web application built using AWS services and React.js, allowing passengers and drivers to register schedules, request rides, and confirm bookings. Designed with scalability, cost-efficiency, and simplicity in mind.

## 📌 Project Goal

Create a cloud-native ride-sharing web application where:
- Passengers can register and view ride schedules
- Drivers can browse and request ride schedules
- Passengers can approve requests and communicate with drivers

All using a secure, scalable, and low-cost infrastructure powered by AWS.

## 🔧 Technology Stack

### ✅ Frontend
- **React.js** (with Vite)
- **Tailwind CSS** + **Shadcn/UI** (UI components)
- **React Router** (page navigation)
- **Redux Toolkit** or **Zustand** (state management)
- **Axios** + **React Query** (API handling and caching)

### ✅ Authentication
- **AWS Cognito**
  - Email/password login
  - Google OAuth (social login)
- **Amplify Auth SDK** for easy integration

### ✅ Backend (Serverless)
- **AWS Amplify**
  - GraphQL API auto-generation (AppSync)
  - Lambda function auto-deployment
  - DynamoDB table auto-creation
  - Real-time data synchronization
  - API request/response auto-generation
  - Backend resource auto-management
  - Local development environment support

### ✅ CI/CD & Hosting
- **AWS Amplify**
  - Automated deployment (GitHub integration)
  - Branch-based environment separation (dev, staging, prod)
  - Preview deployment (Pull Request)
  - CDN and HTTPS support
  - Build optimization and caching
  - Automatic rollback
  - Monitoring and alerts

## 🧭 Application Features

### 👥 Passenger Flow
- Register a ride (departure, destination, date, time)
- View your own schedules
- See incoming driver requests
- Approve a driver → see contact details

### 🚗 Driver Flow
- View open schedules from passengers
- Request to take a ride
- Wait for approval → get contact info when confirmed

### ✅ Shared Functionality
- Both roles can access "My Schedules"
- All state updates handled via API and stored in DynamoDB
- Support for real-time updates or polling (planned)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- AWS CLI configured
- AWS Amplify CLI installed
- AWS Account with appropriate permissions

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/HitchHikers2.git
cd HitchHikers2
```

2. Install dependencies
```bash
cd frontend
npm install
```

3. Initialize Amplify
```bash
amplify init
```

4. Start the development server
```bash
npm run dev
```

## 📁 Project Structure
```
HitchHikers2/
├── frontend/               # React + Vite application
│   ├── src/               # Source files
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom hooks
│   │   ├── store/        # State management
│   │   ├── services/     # API services
│   │   └── utils/        # Utility functions
│   ├── public/           # Static files
│   └── package.json      # Dependencies
├── amplify/              # AWS Amplify configuration
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

## 🤝 Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
