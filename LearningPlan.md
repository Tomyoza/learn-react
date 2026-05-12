# LLMark — React Frontend Learning Plan

**Goal:** By the end of Week 5, have a fully working React frontend connected to the LLMark REST API with authentication (sign up and login), full CRUD for Benchmark Results, and basic views for Models.

**Time available:** 5–7 hours per week

---

## Week 2 — React Foundations + Project Setup

### Goal
Understand React fundamentals and get the project scaffolded and running locally.

### Topics
- Components, props, and JSX
- `useState` and `useEffect` hooks
- React Router v6 (basic routing between pages)
- Project structure best practices

### Tasks
- [ ] Set up project with Vite
- [ ] Create a basic layout with a Navbar and placeholder pages: Home, Benchmark Results, Models
- [ ] Set up React Router with routes for each page
- [ ] Build a static version of the Benchmark Results list page (no API yet)

### Resources
- [React Official Docs — Quick Start](https://react.dev/learn)
- [React Router v6 Tutorial](https://reactrouter.com/en/main/start/tutorial)
- [Vite + React setup guide](https://vitejs.dev/guide/)

### Milestone
App runs locally, navigation works between pages, and you can render a hardcoded list of benchmark results.

---

## Week 3 — Authentication: Sign Up, Login + API Integration

### Goal
Connect the frontend to your REST API and implement sign up and login with JWT authentication.

### Topics
- `fetch` or `axios` for API calls
- Sign up and login forms
- Handling JWT tokens (store in `localStorage` or context)
- Protected routes (redirect to login if not authenticated)
- React Context for global auth state

### Tasks
- [ ] Build a Sign Up page with a form that calls `POST /auth/register`
- [ ] Build a Login page with a form that calls `POST /auth/login`
- [ ] Store the JWT token after successful login
- [ ] Create an `AuthContext` to share auth state across the app
- [ ] Build a `PrivateRoute` component that redirects unauthenticated users
- [ ] Fetch and display real Benchmark Results from `GET /api/benchmarks`

### Resources
- [Using Fetch with async/await — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Axios docs](https://axios-http.com/docs/intro)
- [JWT authentication in React — DEV.to](https://dev.to/miracool/how-to-manage-user-authentication-with-react-js-3ic5)

### Milestone
You can sign up for a new account, log in, the token is stored, protected pages redirect unauthenticated users, and the Benchmark Results list loads real data from your API.

---

## Week 4 — Full CRUD for Benchmark Results

### Goal
Implement Create, Update, and Delete for the main entity with forms and confirmation flows.

### Topics
- Controlled form inputs with `useState`
- Sending `POST`, `PUT`, `DELETE` requests with auth headers
- Conditional rendering (show edit/delete buttons only when logged in)
- Basic error handling and loading states

### Tasks
- [ ] Build a Create form: `POST /api/benchmarks` with auth header
- [ ] Add an Edit button on each result that opens an Update form: `PUT /api/benchmarks/:id`
- [ ] Add a Delete button with a simple confirmation: `DELETE /api/benchmarks/:id`
- [ ] Show loading spinners and error messages where appropriate
- [ ] Make sure the list refreshes after create, update, or delete

### Resources
- [React forms — official docs](https://react.dev/reference/react-dom/components/input)
- [How to make authenticated API requests](https://axios-http.com/docs/config_defaults)

### Milestone
A logged-in user can create, edit, and delete Benchmark Results. The list updates in real time after each action.

---

## Week 5 — Models Entity + Polish

### Goal
Build out the Models frontend and polish the UI across all pages.

### Topics
- Reusing patterns from Week 4 for a second entity
- Recharts for data visualization
- Consistent styling and navigation

### Tasks
- [ ] Build Models: View All (`GET /api/models`), View One (`GET /api/models/:id`), Create form (`POST /api/models`)
- [ ] Add a comparison chart using Recharts to visualize benchmark scores across models
- [ ] Add navigation links to Models section in Navbar
- [ ] Clean up styling for consistency across all pages

### Resources
- [Recharts getting started](https://recharts.org/en-US/guide/getting-started)

### Milestone
All CRUD for Benchmark Results works. Models section has View All, View One, and Create. Comparison chart renders real data.

---

## Summary Checklist

| Week | Focus | Done? |
|------|-------|-------|
| 2 | React basics + routing + project setup | ☐ |
| 3 | Sign up + login + JWT + real API data | ☐ |
| 4 | Full CRUD for Benchmark Results | ☐ |
| 5 | Models frontend + comparison chart | ☐ |
