```bash
gowndotcom/
│
├── backend/                    ← BACKEND FOLDER (Express + Node.js)
│   ├── config/
│   │   └── db.js              ← Database connection
│   ├── controllers/
│   │   ├── productController.js   ← Product logic
│   │   └── paymentController.js   ← Payment logic
│   ├── models/
│   │   └── Product.js         ← MongoDB schema
│   ├── routes/
│   │   ├── productRoutes.js   ← API routes for products
│   │   └── paymentRoutes.js   ← API routes for payment
│   ├── server.js              ← Main backend entry point
│   ├── package.json           ← Backend dependencies
│   └── .env                   ← Backend environment variables
│
├── frontend/                   ← FRONTEND FOLDER (Vue.js)
│   ├── public/                ← Static files
│   ├── src/
│   │   ├── assets/
│   │   │   └── main.css       ← Global styles
│   │   ├── components/
│   │   │   ├── NavBar.vue     ← Navigation bar
│   │   │   ├── FooterComponent.vue
│   │   │   └── ProductCard.vue
│   │   ├── views/
│   │   │   ├── HomePage.vue   ← Landing page
│   │   │   ├── ProductListPage.vue  ← All products
│   │   │   ├── ProductDetailPage.vue ← Single product
│   │   │   ├── AdminPage.vue  ← Add product form
│   │   │   ├── CartPage.vue   ← Shopping cart
│   │   │   └── PaymentPage.vue ← Checkout
│   │   ├── router/
│   │   │   └── index.js       ← Vue Router config
│   │   ├── App.vue            ← Main Vue component
│   │   └── main.js            ← Vue entry point
│   ├── index.html             ← HTML template
│   ├── vite.config.js         ← Vite config
│   ├── package.json           ← Frontend dependencies
│   └── .env                   ← Frontend environment variables
│
└── README.md                   ← Setup instructions
```


---

## Prerequisites

Before you begin, ensure you have the following installed:

| Software | Version | Download Link |
|----------|---------|---------------|
| Node.js | v16+ | https://nodejs.org/ |
| npm | v8+ | Comes with Node.js |
| MongoDB | v6+ | See installation below |
| Git | Latest | https://git-scm.com/ |

Check installations:
```bash
node --version    # Should show v16+
npm --version     # Should show v8+
mongod --version  # Should show v6+
🍃 MongoDB Installation
Option A: Local Installation
macOS (using Homebrew)
# Install Homebrew if not installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Tap MongoDB formula
brew tap mongodb/brew

# Install MongoDB Community Edition
brew install mongodb-community@7.0

# Start MongoDB as a service
brew services start mongodb-community@7.0

# Verify it's running
brew services list

MongoDB will start automatically as a Windows service.


Click "Build a Database"
Choose FREE "M0 Sandbox"
Select region closest to you
Click "Create"
Create Database User

Go to "Database Access"
Click "Add New Database User"
Choose "Password" authentication
Enter username and password (save these!)
Click "Add User"
Allow Network Access

Go to "Network Access"
Click "Add IP Address"
Click "Allow Access from Anywhere" (0.0.0.0/0)
Click "Confirm"
Get Connection String

Go to "Database" → Click "Connect"
Choose "Connect your application"
Copy the connection string:
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
Update backend/.env

MONGO_URL=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net
DB_NAME=gowndotcom
PORT=5001
CORS_ORIGINS=http://localhost:5173
⚙️ Backend Setup
Step 1: Navigate to Backend Directory
cd backend
Step 2: Install Dependencies
npm install
This installs:

express - Web framework
mongoose - MongoDB ODM
cors - Cross-origin resource sharing
dotenv - Environment variables
nodemon - Auto-restart on changes (dev)
Step 3: Configure Environment Variables
Create or edit .env file in backend/ folder:

# MongoDB Connection
MONGO_URL=mongodb://localhost:27017
DB_NAME=gowndotcom

# Server Configuration
PORT=5001

# CORS Settings
CORS_ORIGINS=http://localhost:5173
Note for Mac Users: Use port 5001 instead of 5000 (AirPlay uses 5000)

Step 4: Start Backend Server
Development mode (auto-restart on changes):

npm run dev
Production mode:

npm start
Step 5: Verify Backend is Running
You should see:

Connected to MongoDB
Sample products seeded successfully
Server running on port 5001
Test the API:

# In a new terminal
curl http://localhost:5001/api/products
You should see JSON with 6 sample gowns.

 Frontend Setup
Step 1: Navigate to Frontend Directory
cd frontend
Step 2: Install Dependencies
npm install
This installs:

vue - Vue.js framework
vue-router - Client-side routing
vite - Build tool
@vitejs/plugin-vue - Vite plugin for Vue
Step 3: Configure Environment Variables
Create or edit .env file in frontend/ folder:

VITE_API_URL=http://localhost:5001
Important: This must match your backend PORT!

Step 4: Start Frontend Development Server
npm run dev
Step 5: Verify Frontend is Running
You should see:

  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
Open http://localhost:5173 in your browser.

Running the Application
Quick Start (Two Terminals)
Terminal 1 - Backend:

cd backend
npm install
npm start
Terminal 2 - Frontend:

cd frontend
npm install
npm run dev
Browser:

http://localhost:5173
Complete Startup Checklist
Step	Action	Expected Result
1	Start MongoDB	Service running
2	cd backend && npm install	Dependencies installed
3	npm start	"Server running on port 5001"
4	cd frontend && npm install	Dependencies installed
5	npm run dev	"Local: http://localhost:5173"
6	Open browser	Gowndotcom homepage loads
📡 API Endpoints
Base URL
http://localhost:5001/api
Products
Method	Endpoint	Description	Request Body
GET	/products	Get all products	-
GET	/products/:id	Get single product	-
POST	/products	Create new product	{ name, price, description, image, category }
PUT	/products/:id	Update product	{ name, price, description, image, category }
DELETE	/products/:id	Delete product	-
Payment
Method	Endpoint	Description	Request Body
POST	/payment	Process payment (simulated)	{ cardholderName, cardNumber, expiryDate, cvv, amount, items }
Health Check
Method	Endpoint	Description
GET	/api/health	Check API status
Example API Calls
Get all products:

curl http://localhost:5001/api/products
Get single product:

curl http://localhost:5001/api/products/PRODUCT_ID
Add new product:

curl -X POST http://localhost:5001/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Stunning Red Gown",
    "price": 1299,
    "description": "A beautiful red evening gown",
    "image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
    "category": "Evening"
  }'
Simulate payment:

curl -X POST http://localhost:5001/api/payment \
  -H "Content-Type: application/json" \
  -d '{
    "cardholderName": "John Doe",
    "cardNumber": "4242424242424242",
    "expiryDate": "12/25",
    "cvv": "123",
    "amount": 1299,
    "items": [{"name": "Test Gown", "price": 1299, "quantity": 1}]
  }'
