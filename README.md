# Melophile – Music Academy Website

> A modern, responsive website for Melophile Music Academy, designed to showcase guitar and piano classes, learning programs, instructors, student experiences, and provide an easy way for prospective students to get in touch.

🌐 **Live Website:** https://melophile.co.in

---

## 📌 Overview

Melophile is a music academy based in Virar West offering guitar and piano classes.

This project was developed as a real-world website for the academy with a focus on:

- Premium and responsive UI
- Clear presentation of music courses
- Mobile-friendly experience
- Student inquiry and free-trial booking
- WhatsApp integration
- Google Maps integration
- Dynamic blog content through Sanity CMS
- Production deployment with a custom domain

---

## ✨ Features

### 🎸 Guitar & Piano Classes
Dedicated sections for the instruments offered by Melophile, with information about the learning journey and course levels.

### 📚 Structured Learning Path
The website presents a structured progression:

- Foundation
- Beginner
- Intermediate
- Advanced

### ⭐ Why Melophile
Highlights the academy's learning model, including:

- 30-hour monthly learning package
- Flexible learning schedule
- Instruments provided
- Practice and learning opportunities
- Personal guidance

### 👨‍🏫 Teachers Section
Introduces the musicians and instructors teaching at Melophile.

### 📝 Blog
A dynamic blog section powered by **Sanity CMS**, allowing music-related articles and learning resources to be managed separately from the website code.

### 💬 WhatsApp Inquiry
Students can submit an inquiry through the website and their details are formatted into a WhatsApp message for easy communication.

### 📍 Google Maps
The contact section provides directions to the academy through Google Maps.

### 📱 Responsive Design
The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

### 🚀 Production Deployment
The website is deployed with a custom domain:

**https://melophile.co.in**

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- JavaScript
- HTML5
- CSS3

### CMS
- Sanity CMS

### Integrations
- WhatsApp
- Google Maps
- Sanity API

### Deployment
- Render
- Custom domain configuration

### Version Control
- Git
- GitHub

---

## 🏗️ Project Structure

```text
Melophile/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Instruments.jsx
│   │   ├── Benefits.jsx
│   │   ├── Courses.jsx
│   │   ├── Teachers.jsx
│   │   ├── Blog.jsx
│   │   ├── Reviews.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   │
│   ├── sanity/
│   │   └── client.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
