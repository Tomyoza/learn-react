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

## Week 3 — Routing + API Calls + Authentication

**Focus:** Core integration

You already understand JWTs and REST — here you are wiring that knowledge into React's component lifecycle. This week will feel more familiar than week 2. It is also the direct preparation for what your instructor expects you to demonstrate in week 5.

### Goals

- Set up React Router with at least 3 routes (Login, Dashboard, a resource list)
- Build a login form that POSTs to your API and stores the JWT
- Create a protected route wrapper that redirects unauthenticated users
- Fetch and display real data from your authenticated API

### Resources

- [React Router v6 docs](https://reactrouter.com/start/library/routing) — tutorial + `createBrowserRouter`
- [react.dev — useContext](https://react.dev/reference/react/useContext) for sharing auth state across components
- Store your JWT in `localStorage`, then attach it via a shared `fetch` wrapper or Axios interceptor

### Milestones

- [ ] Login works end-to-end against your real API
- [ ] Visiting a protected route without a token redirects to `/login`
- [ ] An authenticated GET request renders real data in the browser

---

## Week 4 — Build Something of Your Own

**Focus:** Independent project

> No tutorials. No AI-generated code. Use what you learned in weeks 2 and 3 to build something that works. It does not need to be polished — it needs to be yours.

### Goals

- Pick a small, concrete idea you can finish in 5–7 hours
- Write every line yourself — struggle through errors rather than copying solutions
- Apply at least: components, state, `useEffect`, and a fetch call
- Get it running in the browser, broken edges and all

### Resources

- Your own notes and code from weeks 2 and 3 — that is the point
- [react.dev API reference](https://react.dev/reference/react) — for looking things up, not following along
- A public REST API (e.g. [JSONPlaceholder](https://jsonplaceholder.typicode.com)) if you want a backend without setup

### Milestones

- [ ] You can describe every line of your code and why it is there
- [ ] The app does something visible in the browser
- [ ] You hit at least one error you had to debug yourself and fix

---

## Week 5 — Start Your API Frontend: HTTP + Login Flow

**Focus:** Connect to your REST API

By the end of this week you should feel confident making HTTP requests, handling responses, and building a login flow for an API that requires authentication — including how you make requests to your API and how you store the JWT, as shown in your instructor's video.

### Goals

- Make HTTP requests to your own REST API and handle the responses correctly
- Build a login flow — form, POST to your auth endpoint, receive and store the JWT
- Attach the JWT to subsequent requests the way your instructor demonstrates
- Protect at least one route so unauthenticated users cannot reach it

### Resources

- Your instructor's video on making API requests and storing the JWT — watch it before writing code
- [react.dev — Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects) for fetch inside `useEffect`
- Browser devtools network tab — check that the `Authorization` header is present on every protected request

### Milestones

- [ ] Login form works against your real API and stores the JWT
- [ ] At least one authenticated request succeeds and renders data
- [ ] You can explain how the token is stored and how it gets attached to requests

---

## Notes

**Week 3 and week 5 are related.** Week 3 is the learning phase — you follow resources and build with guidance. Week 5 is where you demonstrate that same knowledge confidently against your own API, on your own. Week 3 is the preparation; week 5 is the proof.

**Lean on your backend knowledge.** You already understand HTTP, JWTs, status codes, and CRUD semantics. The React learning curve is mostly the component model and state, not the API layer.

**On JWT storage.** `localStorage` is the simplest starting point and fine for a course project. Know that `httpOnly` cookies are more secure in production, but do not let that slow you down now.