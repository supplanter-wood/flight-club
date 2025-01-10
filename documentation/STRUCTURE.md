{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww35640\viewh21840\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # Project Structure Document\
\
## **Project Name:** Subscription-Based Flight Deal Service\
\
### **Purpose**\
This document defines the directory and file structure for the project to ensure scalability, maintainability, and ease of collaboration across teams.\
\
---\
\
## **Core Principles**\
- **Separation of Concerns:** Organize code based on functionality.\
- **Modularity:** Encapsulate features to minimize dependencies.\
- **Scalability:** Allow for future growth and feature additions.\
- **Consistency:** Use consistent naming conventions and folder hierarchies.\
\
---\
\
## **High-Level Structure**\
```\
root/\
|-- backend/\
|   |-- src/\
|   |   |-- controllers/\
|   |   |-- models/\
|   |   |-- routes/\
|   |   |-- services/\
|   |   |-- utils/\
|   |   |-- middlewares/\
|   |-- tests/\
|   |-- config/\
|   |-- package.json\
|   |-- README.md\
|-- frontend/\
|   |-- src/\
|   |   |-- components/\
|   |   |-- pages/\
|   |   |-- hooks/\
|   |   |-- utils/\
|   |   |-- assets/\
|   |-- public/\
|   |-- tests/\
|   |-- package.json\
|   |-- README.md\
|-- mobile/\
|   |-- src/\
|   |   |-- components/\
|   |   |-- screens/\
|   |   |-- hooks/\
|   |   |-- utils/\
|   |   |-- assets/\
|   |-- android/\
|   |-- ios/\
|   |-- package.json\
|   |-- README.md\
|-- scripts/\
|-- documentation/\
|-- .env\
|-- .gitignore\
|-- README.md\
```\
\
---\
\
## **Backend Directory**\
- **src/controllers/**: Handle HTTP requests and responses.\
- **src/models/**: Define database schemas and ORM models.\
- **src/routes/**: Define application routes and associate them with controllers.\
- **src/services/**: Encapsulate business logic and reusable code.\
- **src/utils/**: Utility functions (e.g., formatters, validators).\
- **src/middlewares/**: Custom middleware for authentication, error handling, etc.\
- **tests/**: Unit and integration tests.\
- **config/**: Configuration files (e.g., database, environment variables).\
\
---\
\
## **Frontend Directory**\
- **src/components/**: Reusable UI components.\
- **src/pages/**: Page-level components that combine other components.\
- **src/hooks/**: Custom React hooks for state and logic management.\
- **src/utils/**: Utility functions and helper files.\
- **src/assets/**: Static assets like images, fonts, and styles.\
- **public/**: Publicly accessible assets (e.g., favicon, index.html).\
- **tests/**: Unit tests for components and pages.\
\
---\
\
## **Mobile Directory**\
- **src/components/**: Reusable UI components.\
- **src/screens/**: Screen-level components for navigation and layouts.\
- **src/hooks/**: Custom React Native hooks.\
- **src/utils/**: Shared utilities.\
- **src/assets/**: Static files for the mobile app.\
- **android/** and **ios/**: Native platform-specific files for React Native.\
\
---\
\
## **Global Directories**\
- **scripts/**: Deployment scripts, automation, and tools.\
- **documentation/**: Markdown files for the PRD, database design, UI/UX, and more.\
- **.env**: Environment variables for development.\
- **.gitignore**: Specifies intentionally untracked files.\
- **README.md**: Main project documentation.\
\
---\
\
## **Development Workflow**\
1. **Clone the Repository**: `git clone <repo_url>`\
2. **Install Dependencies**:\
   - Backend: `cd backend && npm install`\
   - Frontend: `cd frontend && npm install`\
   - Mobile: `cd mobile && npm install`\
3. **Run Locally**:\
   - Backend: `npm run dev`\
   - Frontend: `npm start`\
   - Mobile: `npm start`\
4. **Testing**:\
   - Use `npm test` in respective directories.\
\
---\
\
## **Future Considerations**\
- Add Docker for containerization.\
- Set up CI/CD pipelines for deployment.\
- Integrate with external APIs for flight scraping and notifications.\
\
}