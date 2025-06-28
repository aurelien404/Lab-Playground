# OpenTasker

**OpenTasker** is an advanced To-Do list application featuring user authentication, cloud-synced task management, and cross-browser accessibility. Whether you're on your phone, laptop, or any other browser — your lists follow you everywhere.

## Features

- User authentication and secure login
- Manage and organize tasks effortlessly
- Tasks saved to the cloud and accessible across all devices
- Built with a modern tech stack: React + Vite + Tailwind CSS + Laravel

## Tech Stack

**Frontend**:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

**Backend**:

- [Laravel](https://laravel.com/)

## Getting Started

Clone the repo:

```bash
git clone https://github.com/aurelien404/OpenTasker.git
cd OpenTasker
npm install
npm run dev
```

## 🔧 Development Roadmap

Here’s the step-by-step plan for building **OpenTasker**. Each phase focuses on building solid functionality and clean UX.

### Phase 1: Authentication

- [ ] Build `/login` and `/register` components
- [ ] Connect to Laravel backend authentication (via API)
- [ ] Set up token storage (localStorage or cookies)
- [ ] Create route protection to restrict access to `/dashboard`

### Phase 2: Routing & Layout

- [ ] Install and configure `react-router-dom`
- [ ] Define routes: `/login`, `/register`, `/dashboard`, `*` (404)
- [ ] Create a shared layout or navbar for authenticated pages

### Phase 3: Dashboard Skeleton

- [ ] Build initial `/dashboard` page
- [ ] Display welcome message and user info
- [ ] Add "Log Out" functionality

### Phase 4: To-Do List Core

- [ ] Create task input form
- [ ] Display list of tasks with complete/delete actions
- [ ] Connect to Laravel backend:
  - `GET /tasks`
  - `POST /tasks`
  - `PATCH /tasks/:id`
  - `DELETE /tasks/:id`
- [ ] Use `axios` to manage API requests and errors

### Phase 5: Styling with Tailwind CSS

- [ ] Make UI clean and responsive using Tailwind classes
- [ ] Style authentication pages and forms
- [ ] Add basic transitions and hover effects

### Phase 6: Bonus Features (Optional)

- [ ] Task filters: All / Completed / Active
- [ ] Add due dates and reminder notifications
- [ ] Implement dark mode toggle
- [ ] Allow sharing lists with other users

---

Contributions and feedback are welcome — open an issue or submit a pull request if you'd like to join the build!
