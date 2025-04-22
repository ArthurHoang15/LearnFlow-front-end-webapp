# 🎓 LearnFlow - An English learning platform for everyone

Welcome to the **LearnFlow** front-end repository! This project powers the user interface of an interactive, web-based English learning platform designed to make language acquisition engaging, effective, and fun. **LearnFlow** offers a seamless and personalized experience, guiding learners through vocabulary, listening, speaking, reading, and writing challenges with a gamified approach.

---

## 🌟 Features

- 📱 **Responsive UI**: A dynamic, mobile-friendly interface built with ReactJS for smooth navigation across devices.
- 🔐 **User Authentication**: Supports seamless login, registration, and Google OAuth2 integration for quick account access.
- 📚 **Interactive Lessons**: Engage with multiple-choice and fill-in-the-blank exercises, categorized by themes like family, school, and daily activities.
- 🎧 **Listening & Pronunciation**: Practice listening with audio-based challenges and improve pronunciation with microphone-enabled exercises.
- 🏆 **Gamified Learning**: Complete daily quests, play mini-games (e.g., missing letter, word meaning), and earn points to customize avatars in the item shop.
- 🌐 **Community Engagement**: Connect with friends, exchange messages, and compete on leaderboards to track progress.
- ⚙️ **Personalization**: Customize audio settings and notifications for a tailored learning experience.
- 📊 **Progress Tracking**: Monitor learning progress with detailed lesson lists, error logs, and vocabulary trackers.

---

## 🚀 Tech Stack

- **ReactJS**: A robust, component-based library for building fast, interactive, and responsive user interfaces.

---

## 📂 Project Structure

```plaintext
.
├── public
│   ├── index.html        # Main HTML entry point
│   └── assets            # Static assets (images, icons, etc.)
├── src
│   ├── components        # Reusable UI components (e.g., Header, Footer, LessonCard)
│   ├── pages             # Page-level components (e.g., Home, Profile, Lessons)
│   ├── services          # API call handlers and service logic
│   ├── styles            # Tailwind CSS and custom styles
│   ├── utils             # Helper functions and utilities
│   ├── App.tsx           # Main app component with routing
│   └── index.tsx         # Application entry point
├── .gitignore            # Files and folders to ignore in Git
├── package.json          # NPM configuration and dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
├── README.md             # Project documentation
└── vite.config.ts        # Vite configuration for fast development
```

---

## 📂 Branch Naming Convention

Branches should follow a clear naming format for consistency:

```plaintext
<prefix>/<ST-XX>-<task-name>
```

- **Prefix** options:
  - `feature/` – New features
  - `fix/` – Bug fixes
  - `chore/` – Maintenance tasks
  - `refactor/` – Code restructuring

> Example: For task `[ST10][FE]Implement lesson page`, use `feature/ST10-implement-lesson-page`.

---

## 💾 Commit Message Convention

Commits should follow a structured format for clarity:

```plaintext
<prefix>(<ST-XX>): <commit message>
```

- **Prefix** options:
  - `feat` – New features
  - `fix` – Bug fixes
  - `chore` – Maintenance tasks
  - `refactor` – Code restructuring

> Example: For task `[ST10][FE]Implement lesson page`, use `feat(ST10): implement lesson page UI`.

---

## 🔄 Development Workflow

To ensure a smooth and collaborative development process:

1. **Pull** the latest code from the `main` branch.
2. **Create a new branch** from `main` for your task.
3. **Code** your assigned feature or fix.
4. **Commit** changes and **stash** if needed.
5. **Switch to `main`** and pull any new updates.
6. **Switch back to your branch** and merge updates from `main`.
7. **Resolve conflicts** if any.
8. **Push** your branch to the remote repository.
9. **Create a pull request** and request reviews.
10. After approval, **squash and merge** the pull request.

```plaintext
┌───────────────────────────────┐
│        Pull from Main         │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│    Create New Branch from     │
│           Main                │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│             Code              │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│     Commit and Stash if       │
│           Needed              │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│   Switch to Main Branch and   │
│         Pull Updates          │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│   Switch to Working Branch    │
│    and Merge Updates from     │
│            Main               │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│   Resolve Conflicts if Any    │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│          Push to Remote       │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│      Create Pull Request      │
│   and Request Review from     │
│            Others             │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│  After Approval, Squash and   │
│            Merge              │
└───────────────────────────────┘
```

### 📌 Notes for Enhanced Development
- **Consistency**: Follow branch and commit conventions strictly for a clean history.
- **Frequent Pulls**: Regularly pull updates from `main` to minimize conflicts.
- **Communication**: Share progress and blockers with the team for collaboration.
- **Timely Reviews**: Tag reviewers promptly to keep the development cycle efficient.

---

> **Happy Coding!** 🎉 Keep innovating and contributing to making LearnFlow the go-to platform for making English learning engaging and accessible for all! 🚀
