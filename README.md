# 🌾 KrishiSetu

> Connecting Farmers Directly with Buyers

---

## 📖 About

KrishiSetu is a digital agricultural marketplace built to eliminate unnecessary middlemen by connecting farmers directly with end buyers.

The platform enables farmers to list their crops, while buyers such as:

- Grocery Stores
- Restaurants
- Hotels
- Businesses
- Organisations
- Individual Consumers

can purchase directly from them.

To make bulk purchases affordable and profitable, KrishiSetu also provides a **Group Buying** feature where multiple buyers can join together and purchase crops collectively.

This creates a win-win situation:

- Farmers receive better prices.
- Buyers purchase fresh produce at competitive rates.
- Middlemen are reduced.
- Food wastage decreases.

---

# 🎯 Objective

Build a transparent digital marketplace where:

- Farmers sell directly
- Buyers purchase directly
- Fair pricing is maintained
- Group purchases reduce logistics cost
- Local agriculture becomes more profitable

---

# 👥 User Roles

## Farmer

- Register/Login
- Create farmer profile
- Upload crops
- Update crop quantity
- Manage inventory
- Accept orders
- Track earnings

---

## Buyer

Buyers can be:

- Grocery Stores
- Hotels
- Restaurants
- Businesses
- NGOs
- Individual Consumers

Features:

- Browse crops
- Search nearby farmers
- Purchase crops
- Join Group Buying
- Track Orders
- Give Reviews

---

## Admin

- Manage Users
- Verify Farmers
- Manage Categories
- Resolve Disputes
- Analytics Dashboard

---

# 🌱 Major Features

## Farmer Dashboard

- Crop Listing
- Quantity Management
- Price Management
- Order History
- Earnings

---

## Crop Marketplace

- Browse Crops
- Category Filter
- Location Filter
- Search
- Fresh Arrival
- Seasonal Products

---

## Group Buying

One of the core features of KrishiSetu.

Instead of a single buyer purchasing an entire harvest,

multiple buyers can join together and purchase the crop collectively.

Example:

Farmer has:

500 KG Tomatoes

Instead of waiting for one buyer,

Restaurant A purchases:

100 KG

Restaurant B purchases:

150 KG

Grocery Store purchases:

250 KG

Entire stock gets sold quickly.

Benefits:

- Better price for farmers
- Less transportation cost
- Lower food wastage
- Faster sales

---

## Order Management

- Place Orders
- Order Tracking
- Order History
- Order Status
- Cancel Orders

---

## Reviews & Ratings

Buyers can review:

- Farmer
- Crop Quality
- Delivery

Farmers can also review buyers.

---

## Notifications

- New Orders
- Order Updates
- Crop Sold Out
- Group Buy Completed

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS

---

## Backend

- Django
- Django REST Framework
- PostgreSQL
- JWT Authentication

---

## Deployment

Frontend

- Vercel

Backend

- Render

Database

- PostgreSQL

Media Storage

- Cloudinary (Optional)

---

# 📂 Backend Modules

```
Users
Farmers
Crops
Orders
Group Buying
Payments
Notifications
Reviews
Common Utilities
```

---

# 📂 Frontend Modules

```
Authentication

Dashboard

Crop Marketplace

Group Buying

Orders

Profile

Admin Panel

Shared Components
```

---

# 🔐 Authentication

- JWT Authentication
- Role Based Authorization
- Protected APIs
- Refresh Tokens

---

# 🚀 API Flow

Farmer

Register

↓

Login

↓

Create Crop

↓

Crop Listed

↓

Buyer Views Crop

↓

Places Order

↓

Farmer Accepts

↓

Delivery

↓

Payment

↓

Review

---

# 🗄 Database Overview

Users

↓

Farmer Profile

↓

Crop

↓

Orders

↓

Group Orders

↓

Payments

↓

Reviews

---

# 📌 Future Enhancements

- AI Price Prediction
- Demand Forecasting
- Live Market Prices
- Nearby Farmer Discovery
- Delivery Tracking
- WhatsApp Notifications
- Multi-language Support
- Voice-based Crop Upload
- Crop Disease Detection using AI
- Image-based Crop Quality Verification

---

# 🚀 Installation

Clone repository

```bash
git clone https://github.com/your-username/KrishiSetu.git
```

Backend

```bash
cd backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 👨‍💻 Development Guidelines

## Backend

- One responsibility per app
- Keep business logic inside services.py
- Thin views
- Reusable serializers
- API versioning
- Centralised exceptions

---

## Frontend

- Feature-based folder structure
- Reusable Components
- Custom Hooks
- API layer separation
- Redux for global state
- Lazy loading routes

---

# 📋 Coding Standards

Backend

- PEP8
- Black Formatter
- isort
- Flake8

Frontend

- ESLint
- Prettier
- Functional Components
- Custom Hooks
- Absolute Imports

---

# 🤝 Contributing

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/group-buy
```

3. Commit changes

```bash
git commit -m "Added Group Buying APIs"
```

4. Push

```bash
git push origin feature/group-buy
```

5. Open Pull Request

---

# 🌾 Vision

> Empower Farmers. Strengthen Communities.

KrishiSetu aims to build a transparent, farmer-first digital marketplace where every harvest reaches buyers directly, ensuring fair prices, reduced wastage, and sustainable agricultural growth.