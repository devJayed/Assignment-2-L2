# Bicycle Store Inventory Management System
## Overview
This express application with TypeScript integrates MongoDB with Mongoose to manage a Bicycle Store. You can use the MongoDB database to store Products (bicycles) and Orders. I have also used Mongoose to define schema and perform data operations. I have implemented the CRUD operations for both bicycles and orders. I have ensured data integrity using Mongoose schema validation.
## Features
- **Create a Bicycle**  
  Add a new bicycle to the inventory.  
  **Endpoint:** `POST /api/products`

- **Get All Bicycles**  
  Retrieve a list of all bicycles in the inventory.  
  **Endpoint:** `GET /api/products`

- **Get a Specific Bicycle**  
  Fetch details of a specific bicycle by its ID.  
  **Endpoint:** `GET /api/products/:productId`

- **Update a Bicycle**  
  Update the details of an existing bicycle.  
  **Endpoint:** `PUT /api/products/:productId`

- **Delete a Bicycle**  
  Remove a bicycle from the inventory.  
  **Endpoint:** `DELETE /api/products/:productId`

- **Order a Bicycle**  
  Place an order for a bicycle.  
  **Endpoint:** `POST /api/orders`

- **Calculate Revenue from Orders (Aggregation)**  
  Calculate total revenue generated from all orders using aggregation.  
  **Endpoint:** `GET /api/orders/revenue`
  
  ## Tech Stack
- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Others:** Mongoose
