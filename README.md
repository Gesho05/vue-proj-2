# Vue.js Job Listings Application

## Project Overview

This project is a single-page application (SPA) for browsing, adding, editing, and deleting job listings. It was developed as an exploration into the core concepts of the Vue.js framework, including component architecture, routing, state management with reactive data, and asynchronous data fetching.

The application was built following a comprehensive crash course by Traversy Media (link provided below).

## Features

* **Browse Listings:** View a list of available jobs with key details like type, title, and location.

* **Detailed View:** Click on any job to see a full description, salary details, and company contact information.

* **CRUD Functionality:**

  * **Create:** Add new job listings using a structured form.

  * **Read:** Fetch and display job data from a REST API (simulated).

  * **Update:** Edit existing job details via a dedicated form.

  * **Delete:** Remove job listings with a confirmation prompt.

* **Modern Vue Structure:** Utilizes the **Composition API** (`<script setup>`) for clean, reusable, and modern component logic.

* **Routing:** Implements Vue Router for multi-page navigation (Home, Jobs, Add Job, Single Job) and dynamic routing for individual job pages.

* **Reactive State:** Uses `ref` and `reactive` for efficient state management and UI updates.

* **Styling:** Styled using Tailwind CSS for a professional and responsive layout.

* **HTTP Client:** Uses Axios for making asynchronous API requests.

* **Mock Backend:** Utilizes JSON Server to simulate a backend REST API and perform CRUD operations during development.

* **UI Enhancements:** Includes a loading spinner (View Spinner) and success/error notifications (Vue Toastify).

## Technologies Used

* **Framework:** Vue.js (Composition API)

* **Routing:** Vue Router

* **State Management:** Vue 3 reactivity (`ref`, `reactive`, `computed`)

* **Styling:** Tailwind CSS

* **HTTP Client:** Axios

* **Mock Data/API:** JSON Server

* **Build Tool:** Vite

## Installation and Setup

### Prerequisites

* Node.js (v18+)

* npm (or yarn/pnpm)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone [your-repo-url]
   cd [your-project-folder]
Install Dependencies:

Bash

npm install
Start the Mock API (JSON Server): This command runs the JSON server, simulating a backend API on port 8000 (or the port specified in your package.json).

Bash

npm run server 
(Note: This uses the jobs.json file as the database.)

Start the Vue Development Server: This runs the main Vue application, typically on port 3000.

Bash

npm run dev
The application should now be running in your browser, and you can access the API data via the mock backend.

Source
This project was developed by following the Vue.js Crash Course by Traversy Media:

https://www.youtube.com/watch?v=VeNfHj6MhgA&t=9612s