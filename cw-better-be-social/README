# BetterBeSocial (Year 3 Coursework) — Django Backend + Realtime Chat

BetterBeSocial is a coursework social web app built with Django using an MVC-style structure
(Models, Views, Templates). My focus for this project was **backend functionality**:
authentication, user profiles, following, posting, uploading images, and a realtime chat room.

The frontend is functional but intentionally basic (coursework scope).

## Demo / Report
- Demo video: https://drive.google.com/file/d/1WiKNTmx2SBQozFwhNYc85Ey6gM5rpEny/view?usp=sharing
- Report: https://drive.google.com/file/d/11bKGGAzZ4pHAb7ZY1Wv9WVEMdsT4iIVC/view?usp=sharing

## Tech Stack
- Python **3.10.10**
- Django (course version used in class: **3.0.3**, see `requirements.txt`)
- Django REST Framework (REST API)
- Django Channels + WebSockets (realtime chat)
- Celery (async background tasks)
- Redis (broker for Celery and Channels)

## Features
- Account registration (Django auth, salted password hashes)
- Login / logout
- Search users (case-insensitive partial match)
- Follow / unfollow (unidirectional follow links)
- User profiles with location + avatar
- Status posts (text)
- Image uploads (media posts + avatar upload)
- Async image processing (creates a square 100×100 “tile” thumbnail)
- Realtime chat room (WebSocket)
- OpenAPI support + Swagger docs page for the API
- Unit tests (Factory_boy)

## Routes / API (high level)
### Website routes (examples)
- `/register/`, `/login/`, `/logout/`
- `/user/<username>/` (user homepage)
- `/follow/<username>/`, `/unfollow/<username>/`
- `/chat/<room_name>/` (chat page)

### REST API endpoints
- `GET /api/users/` — list users (id + username)
- `GET /api/profiles/` — list profile info for all users
- `GET /api/user/<userid>/` — profile info for a user
- `GET /api/posts/<userid>/` — posts by user
- `GET /api/images/<userid>/` — images by user
- `POST /api/image/` — upload image (requires login)

API docs:
- `/apischema/` (OpenAPI JSON)
- `/swagger-docs/` (human readable)

## Notes / Known Limitations
- UI is basic and not the main focus of this project.
- This repo is kept close to the submitted coursework version (dependencies may be old).
- Some features (chat, background image processing) require Redis/Celery to run fully.

## Run (Local) — Basic
This should be enough to browse the site and core pages.

1) Create and activate a virtual environment
2) Install dependencies:
   `pip install -r requirements.txt`

3) Run migrations:
   `python manage.py migrate`

4) Start the server:
   `python manage.py runserver`

## Run (Local) — With Full Features (Redis / Celery / Chat)
If you want realtime chat + background image processing, you’ll need Redis running and a
Celery worker.

High-level steps:
1) Start Redis
2) Start Celery worker
3) Start the Django app (ASGI/Channels configuration is already included in the project)

(Exact commands can differ depending on OS/setup, so I’m keeping this section high-level
for portfolio purposes.)

## Tests
Run:
`python manage.py test`
