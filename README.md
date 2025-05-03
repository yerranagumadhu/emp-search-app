
# 📘 README: Employee Search App (App 1)

This is the primary **React application** that allows users to **search for employees by ID** and opens a secure, dedicated tab (App 2) to display employee details. It works in coordination with a **Django backend protected by Okta SAML SSO authentication**.

---

## 🔍 Features

- 🔎 Search employees using their ID
- 🗂 Opens employee details in a separate tab (App 2)
- 🚫 Restricts access to a single employee detail tab at a time
- 🔐 Auth flow via Okta SSO and Django backend
- 🌐 Handles cross-app redirect via SAML RelayState

---

## 🏁 Getting Started

### Prerequisites

- Node.js ≥ 16.x
- npm ≥ 8.x
- Django backend running at `http://localhost:8000/`
- App 2 (Employee Details) running at `http://localhost:3001/`

### Install Dependencies

```bash
npm install
```

### Run the App

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

---

## 🧠 App Logic Overview

1. User enters an employee ID and clicks search.
2. The app opens App 2 (employee details viewer) in a new tab:
   ```
   http://localhost:3001/?empId=123
   ```
3. App 2 validates whether the user is authenticated.
4. If not authenticated, the backend triggers Okta SSO login and redirects back using `RelayState`.

---

## 🔐 Authentication Integration (SSO)

- Uses SAML-based login from Okta via Django backend.
- RelayState parameter ensures App 2 is reloaded after authentication.
- All requests to protected API endpoints use `credentials: "include"`.

---

## 🔄 Backend API Usage

- Check if the user is authenticated:
  ```
  GET http://localhost:8000/sso/saml/check-auth/
  ```
- Login endpoint (automatically redirects to Okta with `RelayState`):
  ```
  GET http://localhost:8000/sso/saml/login/?RelayState=http://localhost:3001/?empId=123
  ```

---

## 📂 Project Structure

```
app1/
├── public/
├── src/
│   ├── App.js           # Main component with search logic
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

---

## ✅ Best Practices Followed

- SSO redirection using RelayState
- `localStorage` to prevent opening multiple employee tabs
- Isolated detail view logic delegated to App 2

---

## 🔧 Environment Variables (optional)

You may move hardcoded URLs into a `.env` file:
```
REACT_APP_BACKEND_URL=http://localhost:8000
REACT_APP_DETAILS_URL=http://localhost:3001
```

And use:
```js
process.env.REACT_APP_BACKEND_URL
```

---

## 📄 License

This project is licensed under the **MIT License**.
