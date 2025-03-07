project-management-app/
├── backend/
│   ├── src/
│   │   ├── domain/                  # Core business logic (entities, rules)
│   │   │   ├── entities/            # Models like User, Project, Workspace
│   │   │   │   ├── user.js
│   │   │   │   ├── project.js
│   │   │   │   └── workspace.js
│   │   │   └── repositories/        # Abstract data access interfaces
│   │   │       ├── userRepository.js
│   │   │       └── projectRepository.js
│   │   ├── application/             # Use cases (business workflows)
│   │   │   ├── usecases/
│   │   │   │   ├── auth/           # Authentication logic
│   │   │   │   │   ├── register.js
│   │   │   │   │   ├── sendOtp.js
│   │   │   │   │   └── verifyOtp.js
│   │   │   │   ├── project/        # Project-related logic
│   │   │   │   │   ├── createProject.js
│   │   │   │   │   └── listProjects.js
│   │   │   │   └── chat/           # Chat-related logic
│   │   │   │       └── sendMessage.js
│   │   ├── infrastructure/          # External systems (DB, APIs, etc.)
│   │   │   ├── database/           # MongoDB connection and schemas
│   │   │   │   ├── models/
│   │   │   │   │   ├── User.js
│   │   │   │   │   └── Project.js
│   │   │   │   └── mongoose.js
│   │   │   ├── email/              # Email service (e.g., Nodemailer)
│   │   │   │   └── emailService.js
│   │   │   ├── socket/             # Socket.IO setup
│   │   │   │   └── socketManager.js
│   │   │   └── webrtc/             # WebRTC signaling logic
│   │   │       └── webrtcManager.js
│   │   ├── presentation/           # API routes and controllers
│   │   │   ├── controllers/
│   │   │   │   ├── authController.js
│   │   │   │   ├── projectController.js
│   │   │   │   └── chatController.js
│   │   │   └── routes/
│   │   │       ├── authRoutes.js
│   │   │       ├── projectRoutes.js
│   │   │       └── chatRoutes.js
│   │   └── config/                 # Configuration files
│   │       ├── env.js             # Environment variables
│   │       └── constants.js       # App constants (e.g., plan limits)
│   ├── server.js                   # Entry point
│   └── package.json








