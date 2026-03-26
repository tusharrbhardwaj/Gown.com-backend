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

└── README.md       
```

To run this file in your system :
```bash
cd Gowndotcom-backend
```

```bash
npm install express cors
```

```bash
node server.js
```
