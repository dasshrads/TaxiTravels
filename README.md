# TaxiTravels – Full-Stack Ride Booking App (Demo)

TaxiTravels is a **full-stack mobile application prototype** inspired by ride-hailing platforms like Uber.
The project demonstrates **end-to-end app development**, including a mobile frontend, backend APIs, and a women-safety focused SOS feature.

This project was built as a **portfolio demo** to showcase real-world app architecture, frontend–backend communication, and safety-first feature design.

---

## ✨ Key Features

### Ride Booking (Demo)

* Enter **pickup** and **drop** locations
* Send booking details to backend API
* Backend receives, logs and processes booking data
* User profile mock (name & phone) to simulate real-world app identity

### 🛡️ Safety Feature (SOS Alert)

* Dedicated **SOS button** inside the app
* User can select **Male / Female**
* SOS request is sent to backend with:
  * Gender
  * Live GPS indicator
* Designed to demonstrate **women-safety workflows** but dedicated to every gender's safety

### Mobile-First Experience

* Built using **Expo Router** for modern navigation
* Clean UI with simple, intuitive interactions

---

## 🛠️ Tech Stack

### Frontend (Mobile App)

* React Native
* Expo
* Expo Router
* TypeScript
* Axios

### Backend

* Node.js
* Express.js
* REST API demonstrating booking and SOS request handling (logged server-side)

### Tools & Platform

* Git & GitHub
* VS Code
* Expo Go (for mobile testing)
* Modular folder structure

---

## 📂 Project Structure

TaxiTravels/
├── backend-pc-app/
│   ├── server.js
│   ├── package.json
│
├── mobile-frontend-app/
│   ├── app/
│   │   └── (tabs)/index.tsx
│   ├── assets/
│   ├── package.json
│
├── README.md
└── .gitignore

---

## ⚡How to Run the Project

### 1️. Backend

cd backend-pc-app
npm install
node server.js

### 2️. Mobile App

cd mobile-frontend-app
npm install
npx expo start

* Scan the QR code using **Expo Go** on your mobile device

---

## 📱Demo Walkthrough

### App Flow

1. **Home Screen**

   * User enters name and phone number
   * User selects gender (Male / Female)
   * User enters pickup and drop locations
  
     

2. **Book Taxi**

   * User taps **Book Taxi**
   * Booking details are sent to the backend API
   * Backend receives and logs pickup, drop, and gender data

3. **SOS Feature**

   * SOS button available within the app
   * Sends alert containing:
     * User gender
     * Live GPS indicator (placeholder for demo purposes)
   * Backend receives and logs SOS request

**What this demonstrates:**

* Frontend → Backend communication using Axios
* Safety-first UX design
* Real-world mobile app workflow

---

## 🔮Future Improvements

* Real Google Maps integration
* Live driver tracking
* Authentication (OTP / Login)
* Push notifications for SOS alerts
* Database integration (MongoDB / Firebase)
* Admin dashboard for monitoring SOS events
* Persistent user profiles with authentication

---

## 💡 Why I Built This Project

I built TaxiTravels to:
 * Practice full-stack development
 * Work on a real-world problem (user safety)
 * Strengthen my understanding of:
   * API communication
   * Mobile app development
   * State management
   * Clean project structuring

This project represents my hands-on learning approach and ability to convert ideas into working applications.

 ---

## ⚠️ Note

This project is a **functional prototype** created for learning and portfolio purposes.
It focuses on **architecture, feature design, and data flow**, rather than production deployment.

---

### 👤 Author

**Dasshrads**
Hi, I’m Shraddha Das.
I’m a passionate learner exploring full-stack development, mobile apps, artificial intelligence and real-world problem solving through code.

**Reach me at** 
Email ID: dasshrads1708@gmail.com
GitHub: [https://github.com/dasshrads](https://github.com/dasshrads)

⭐ If you like this project, feel free to star the repo!
