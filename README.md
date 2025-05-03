# Save the README content as a Markdown (.md) file

readme_content = """
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
