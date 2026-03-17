---
title: "From Docker Dreams to Debugging Reality: My Journey Contributing to Pomelo"
date: "Jan 26, 2026"
excerpt: "Docker Desktop seemed like the easy button for my Collabboard project, but 'Module Not Found' and 'ECONNREFUSED' errors had me tearing my hair out. This is the story of how I stopped fighting an invisible enemy and used the Docker CLI to get my monorepo running in WSL."
---

# From Docker Dreams to Debugging Reality: My Journey Contributing to Pomelo

I recently started contributing to an open-source project called **Pomelo**—a test-conducting platform open-sourced by Unstop and built by the Sahyadri Open Source Community. On paper, everything looked clean and modern: a monorepo with a Next.js frontend, an Express backend, and a Judge0 code execution service, all orchestrated with Docker. The expectation was simple—clone, run Docker, and start contributing.

That expectation didn’t last long.

---
##
## When Docker Isn’t the Easy Button

Docker is often marketed as the ultimate solution to environment issues. “Works on my machine” is supposed to disappear. In reality, my experience was the opposite.

Despite seeing all containers marked as “running” in Docker Desktop, the system itself was falling apart:

* The backend container kept crashing with a `MODULE_NOT_FOUND` error
* The frontend constantly failed with `ECONNREFUSED`
* Logs looked normal, yet nothing worked end-to-end

At this point, it felt less like debugging and more like guessing.

---

## Problem 1: MODULE_NOT_FOUND in a Monorepo

The first real blocker was a `MODULE_NOT_FOUND` error pointing to:

```
node_modules/@pomelo/code-gen/dist/index.js
```

The root cause wasn’t immediately obvious. The issue was tied to how monorepos work. Pomelo contains shared internal packages that must be **built before they can be used**. However, Docker was simply mounting the project into containers without building these shared packages.

This meant the `dist/` folder existed—but was empty. The backend wasn’t broken; it simply had nothing to import.

### Fix

The solution was to build the project before running Docker:

```
pnpm install
pnpm run build
```

Once the build artifacts were generated, the backend could finally resolve its dependencies.

---

## Problem 2: OneDrive vs Docker (A Hidden Conflict)

The next issue was far less obvious. My project was stored inside a OneDrive-synced Desktop folder. While convenient, this caused subtle but critical problems.

Docker (running inside WSL) depends on correct symlinks and file permissions. OneDrive interferes with both, leading to:

* Broken symlinks
* “Illegal Path” errors
* Inconsistent container behavior

### Fix

Moving the project to a non-synced directory solved everything instantly:

```
C:\pomelo
```

This removed OneDrive from the equation and stabilized the environment.

---

## Problem 3: ECONNREFUSED and the Localhost Trap

Once containers were running, the frontend still couldn’t communicate with the backend. The issue was this line in the frontend:

```ts
fetch("http://localhost:8080/api/auth/login")
```

Inside Docker, `localhost` refers to the container itself—not the host or another service. So the frontend container was trying to call its own nonexistent API.

### Fix

Since modifying the code wasn’t an option, I used a Docker networking workaround:

```
docker network connect --alias localhost pomelo_default pomelo-server-1
```

This created an alias so that requests to `localhost` inside the frontend container were routed to the backend container.

It wasn’t obvious—but it worked.

---

## Problem 4: 200 OK… but Nothing Works

After fixing networking, the backend finally responded with:

```
POST /auth/login 200
```

But the UI still didn’t move forward. No dashboard. No error. Just a stuck login screen.

This turned out to be a Next.js 15 issue related to **Server Action version skew**. When the app rebuilds, server action IDs change. If the browser has cached an older version, it tries to call outdated actions that no longer exist.

### Fix

* Hard refresh (`Ctrl + F5`)
* Clear site data in DevTools
* Reload or manually navigate to `/dashboard`

After that, everything worked as expected.

---

## Key Takeaways

This experience wasn’t just about fixing bugs—it was about understanding the system:

* Monorepos often require manual build steps even with Docker
* File systems (especially synced ones like OneDrive) can break container behavior
* Docker networking is not intuitive—`localhost` is container-specific
* Frontend frameworks like Next.js introduce their own caching complexities

Most importantly, I learned that **Docker Desktop is not enough when things go wrong**. The Docker CLI is essential for debugging and control.

---

## Final Thoughts

I started contributing to Pomelo expecting to write features. Instead, I spent most of my time debugging infrastructure.

But that process changed how I approach development. I stopped treating tools like Docker as black boxes and started understanding how they actually work.

Today, the project runs smoothly—clean builds, stable containers, proper networking. Getting there wasn’t easy, but it was worth it.

Because in the end, the real value wasn’t just fixing the setup.

It was becoming the kind of developer who can.
