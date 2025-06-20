
# 🎭 Fake Form Server – 

This is a **simulated phishing backend server** used to demonstrate the impact of a **Stored XSS attack**. It captures credentials submitted through a **fake login form** that is injected into the vulnerable app using malicious XSS payloads.

---

## 🚀 Purpose

This server mimics a malicious actor’s phishing backend. It receives stolen credentials from unsuspecting users who were tricked into entering their details on a fake login page rendered through XSS.

---

## 📦 Tech Stack

- **Frontend:** Static HTML (fake-form.html)
- **Backend:** Node.js with Express
- **Data storage:** `stolen_credentials.txt` (plaintext log of captured usernames & passwords)

---

## 🛠️ How to Run

### 📁 1. Start the Fake Backend Server

cd fake-form/backend
node server.js


> This starts the server at `http://localhost:5001`

---

### 🌐 2. Serve the Fake Login Page

In the `fake-form` directory (where `fake-form.html` is located):
cd ..
npx serve .

This makes the fake form accessible at `http://localhost:5001/fake-form.html`


