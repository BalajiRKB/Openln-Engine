# Backend API Specifications

## Authentication (`/api/auth`)

(See `src/models/*.ts` for exact Mongoose schema definitions)

### POST `/signup`
- **Description:** Register a new user and generate their initial roadmap.
- **Body:** `{ username, email, password, goal?, learningStyle?, timeCommitment? }`
- **Response:** `{ success: true, token, user: { ... } }`
- **Features:**
    - Checks for existing user (email/username).
    - Hashes password.
    - Generates JWT token (set in cookie).
    - creates default `Roadmap` based on user goal.

### POST `/login`
- **Description:** Authenticate existing user.
- **Body:** `{ email, password }`
- **Response:** `{ success: true, token, user: { ... } }`
- **Features:**
    - Validates credentials.
    - Returns JWT token (cookie).

### GET `/me`
- **Description:** Get current logged-in user's profile basics.
- **Headers:** `Authorization: Bearer <token>`
- **Response:** `{ success: true, user: { ... } }`

### POST `/logout`
- **Description:** Logout user.
- **Features:** Clears functionality auth cookie.

### PUT `/profile`
- **Description:** Update user preference fields.
- **Body:** `{ goal?, timeCommitment?, learningStyle? }`
- **Response:** `{ success: true, user: { ... } }`

---

## Tasks (`/api/tasks`)

### GET `/`
- **Description:** Get all tasks for the current user (sorted by specific order/date).

### POST `/generate`
- **Description:** Generate daily tasks using AI.
- **Features:**
    - Checks if tasks already exist for today.
    - Uses Google Gemini to generate content based on user profile/roadmap.
    - Creates `Task` documents.

### GET `/today`
- **Description:** Get only tasks created/assigned for "today".

### GET `/:id`
- **Description:** Get details of a specific task.
- **Params:** `id` (Task ID)

### POST `/:id/complete`
- **Description:** Mark a task as completed.
- **Body:** `{ quizAnswers? }` (if task has a quiz)
- **Features:**
    - Validates quiz answers.
    - Updates task status to `completed`.
    - Awards Experience Points (XP).
    - Updates Skill proficiency.
    - Updates User Streak (daily streak logic).
    - Checks for Level Up / Rank Up.

### POST `/:id/regenerate`
- **Description:** Regenerate a specific task's content if unsatisfying.
- **Features:** Re-calls AI to get new content/quiz.

---

## User Profile (`/api/profile`)

### GET `/`
- **Description:** Get full user profile data including stats, skills, achievements.
- **Response:** `{ success: true, profileData: { ... }, username, email }`

---

## Data Models

### User
- `username`, `email`, `password` (hashed)
- `profileData`:
    - `level`, `rank` (E-S), `experience`, `progress`
    - `skills`: [{ name, proficiency, lastImproved }]
    - `streak`: { current, longest, lastCompleted }
    - `achievements`: [{ title, description, icon, date }]
    - `roadmapId` (ref)

### Task
- `title`, `description`, `type`, `difficultyLevel`
- `status`: pending, in-progress, completed
- `content` (HTML/Markdown from AI)
- `quiz`: [{ question, options, answer }]
- `rewards`: { experience, skillRewards }

### Roadmap
- `userId`, `goal`, `title`, `description`
- `milestones`: [{ title, status, type, content, rewards }]
