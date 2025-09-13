# Personal Finance Tracker 💰

A full-stack web application for tracking personal income and expenses with a clean, intuitive interface. Built with React.js frontend and Node.js/Express backend, powered by MongoDB.

## 🚀 Features

- **Transaction Management**: Add, edit, and delete income/expense transactions
- **Financial Dashboard**: Real-time summary of total income, expenses, and net balance
- **Date Selection**: Easy date picker for transaction dates
- **Category Classification**: Organize transactions as Income or Expense
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Real-time Updates**: Automatic refresh of data after operations

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Material-UI (MUI)** - UI components and date picker
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Day.js** - Date manipulation
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **CORS** - Cross-origin resource sharing

## 🏗️ Project Structure

```
personal-finance-tracker/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── SummaryCards.jsx
│   │   │   ├── TransactionForm.jsx
│   │   │   ├── TransactionItem.jsx
│   │   │   └── TransactionList.jsx
│   │   ├── context/
│   │   │   └── context.js
│   │   ├── api.js
│   │   └── App.jsx
│   │   └── App.css
│   │   └── main.jsx
├── backend/
│   └── server.js
│   └── package.json
│   └── package-lock.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mitengala51/Personal-Finance-Tracker.git
   cd personal-finance-tracker
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Configuration

#### Frontend API Configuration
The frontend is configured to work with both local development and production environments:

- **For Local Development**: In api.js, comment out the production URL and uncomment the http://localhost:3000 line to run against a local backend.`
- **For Production**: The app connects to the deployed backend on Render

No additional configuration is needed - the app will detect the environment and use the appropriate API endpoint.

### Running the Application

1. **Start the Backend Server**
   ```bash
   npm start
   # Server will run on http://localhost:3000
   ```

2. **Start the Frontend Development Server**
   ```bash
   npm run dev
   # Application will open on http://localhost:5173
   ```

## ⚠️ Important: Backend Startup Delay

**Due to Render's free tier limitations, the backend server goes to sleep after periods of inactivity. When you first access the application or after it's been inactive, the initial request may take up to 50 seconds to respond as the server spins back up. Subsequent requests will be much faster.**

This only affects the first load - once the server is active, performance is normal.

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Fetch all transactions |
| GET | `/summary` | Get financial summary (total income, expenses, net balance) |
| POST | `/add` | Add a new transaction |
| PUT | `/:id/edit` | Edit an existing transaction |
| DELETE | `/:id/delete` | Delete a transaction |

## 💡 Usage

1. **Adding Transactions**: Click the "Add Transaction" button to open the form modal
2. **Editing**: Click the edit icon (pencil) on any transaction
3. **Deleting**: Click the delete icon (trash) to remove a transaction
4. **Viewing Summary**: The dashboard automatically displays your financial overview

## 🔧 Key Components

### TransactionForm
- Modal-based form for adding/editing transactions
- Integrated date picker using MUI DatePicker
- Form validation and error handling
- Context API integration for state management

### Dashboard
- Displays financial summary cards
- Real-time data updates using Context API
- Color-coded indicators for income/expense

### TransactionList
- Dynamic list of all transactions
- Inline edit and delete functionality
- Responsive design for mobile devices

### Context API Implementation
- Global state management using React Context
- Handles modal states, form data, and data fetching
- Provides seamless data flow between components

## 🌐 Deployment Details

The application is deployed on the following platforms:

- **Frontend**: Vercel - `https://personal-finance-tracker-iota-two.vercel.app/`
- **Backend**: Render - `https://personal-finance-tracker-m5ky.onrender.com`
- **Database**: MongoDB Atlas (cloud)

### Deployment Notes
- Frontend automatically deploys from the main branch on Vercel
- Backend is deployed on Render's free tier (hence the startup delay)
- Database is hosted on MongoDB Atlas cloud service

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: https://github.com/mitengala51
- Email: mitengala51@gmail.com

## 🙏 Acknowledgments

- Material-UI for excellent React components
- Tailwind CSS for utility-first styling
- Lucide React for beautiful icons
- MongoDB for reliable data storage

## 📈 Future Enhancements

- [ ] Data visualization with charts and graphs
- [ ] Budget planning and tracking
- [ ] Export data to CSV/PDF
- [ ] Multiple currency support
- [ ] User authentication and profiles
- [ ] Transaction categories customization
- [ ] Monthly/yearly financial reports

---

**⭐ If you found this project helpful, please give it a star!**
