
```
IntentoFInalDocker
├─ Backend
│  ├─ .env
│  ├─ Dockerfile.backend
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ rm
│  └─ src
│     ├─ config
│     │  ├─ Datebase.js
│     │  └─ Server.js
│     ├─ controllers
│     │  ├─ AuthController.js
│     │  ├─ CourseController.js
│     │  ├─ LearningStyleController.js
│     │  ├─ RankingController.js
│     │  ├─ TestController.js
│     │  ├─ TopicsController.js
│     │  └─ UserController.js
│     ├─ helpers
│     │  ├─ BcryptHashedHelper.js
│     │  └─ uploadMulterFile.js
│     ├─ index.js
│     ├─ libs
│     │  └─ initialSetup.js
│     ├─ middleware
│     │  ├─ AuthJwt.js
│     │  ├─ HandleValidationErrors.js
│     │  └─ StructureResponse.js
│     ├─ models
│     │  ├─ course
│     │  │  ├─ AnswerModel.js
│     │  │  ├─ CourseModel.js
│     │  │  ├─ MaterialTopicModel.js
│     │  │  ├─ QuestionCourseModel.js
│     │  │  └─ TopicModel.js
│     │  ├─ LearningStyleModel.js
│     │  ├─ movil
│     │  │  ├─ AnswerMovil.js
│     │  │  ├─ QuestionMovil.js
│     │  │  └─ Ranking.js
│     │  ├─ RoleModel.js
│     │  ├─ test
│     │  │  ├─ TestAnswerModel.js
│     │  │  ├─ TestModel.js
│     │  │  └─ TestQuestionModel.js
│     │  └─ UserModel.js
│     ├─ routes
│     │  ├─ Auth.routes.js
│     │  ├─ Course.routes.js
│     │  ├─ LearningStyle.routes.js
│     │  ├─ Movil.routes.js
│     │  ├─ Ranking.routes.js
│     │  ├─ Test.routes.js
│     │  └─ User.routes.js
│     ├─ services
│     │  ├─ Auth.service.js
│     │  ├─ Course.service.js
│     │  ├─ LearningStyle.service.js
│     │  ├─ Movil.service.js
│     │  ├─ Ranking.service.js
│     │  ├─ Test.service.js
│     │  ├─ User.service.js
│     │  └─ validations
│     │     └─ ValidationsAuth.js
│     ├─ uploads
│     │  ├─ materials-topic
│     │  │  ├─ 1718126196764-811238400.jpg
│     │  │  ├─ 1718129667646-110076744.jpg
│     │  │  └─ 1718130057631-426166026.jpg
│     │  └─ users-photos
│     │     └─ 1718130701976-597738184.jpg
│     └─ views
│        └─ index.html
├─ docker-compose.yml
├─ Frontend
│  ├─ .eslintrc.cjs
│  ├─ Dockerfile.frontend
│  ├─ index.html
│  ├─ nginx.conf
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  ├─ image
│  │  │  │  ├─ 1.jpg
│  │  │  │  ├─ 2.jpg
│  │  │  │  ├─ 3.jpg
│  │  │  │  ├─ 4.jpg
│  │  │  │  ├─ aula.jpg
│  │  │  │  ├─ banner.jpg
│  │  │  │  ├─ BG-IA.jpg
│  │  │  │  ├─ IAprendix.png
│  │  │  │  ├─ IAprendix_gif.gif
│  │  │  │  ├─ IAprendix_logo.png
│  │  │  │  ├─ libros.jpg
│  │  │  │  ├─ logo.jpg
│  │  │  │  └─ tutor.jpg
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ AdminSidebar.jsx
│  │  │  ├─ Chatbot.jsx
│  │  │  ├─ courses
│  │  │  │  ├─ CoursesAdd.jsx
│  │  │  │  ├─ CoursesDelete.jsx
│  │  │  │  ├─ CoursesEdit.jsx
│  │  │  │  └─ CoursesList.jsx
│  │  │  ├─ DashboardContent.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ Logout.jsx
│  │  │  ├─ Profile.jsx
│  │  │  ├─ RegisterTest.jsx
│  │  │  ├─ Sidebar.jsx
│  │  │  ├─ student
│  │  │  │  ├─ UserAdd.jsx
│  │  │  │  ├─ UserDelete.jsx
│  │  │  │  ├─ UserEdit.jsx
│  │  │  │  └─ UserList.jsx
│  │  │  ├─ TestVAK.jsx
│  │  │  └─ UserCourses.jsx
│  │  ├─ contexts
│  │  │  └─ AuthProvider.jsx
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  └─ pages
│  │     ├─ AdminDashboard.jsx
│  │     ├─ auth
│  │     │  ├─ Error404.jsx
│  │     │  ├─ Login.jsx
│  │     │  └─ Register.jsx
│  │     ├─ Dashboard.jsx
│  │     └─ LandingPage.jsx
│  ├─ tailwind.config.js
│  └─ vite.config.js
├─ nginx.conf
└─ README.md

```