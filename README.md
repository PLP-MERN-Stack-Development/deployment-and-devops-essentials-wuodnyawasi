# Deployment and DevOps for MERN Applications

This assignment focuses on deploying a full MERN stack application to production, implementing CI/CD pipelines, and setting up monitoring for your application.

## Assignment Overview

1. **✅ COMPLETED: MERN application production deployment**
   - Frontend: Code splitting, environment variables, production build
   - Backend: Error handling, secure headers, logging, environment variables
   - MongoDB: Connection pooling, Atlas setup guidance
2. **✅ COMPLETED: Deployed the backend to a cloud platform**
3. **✅ COMPLETED: Deployed the frontend to a static hosting service**
4. **✅ COMPLETED: Set up CI/CD pipelines with GitHub Actions**
5. **✅ COMPLETED: Implemented monitoring and maintenance strategies**

## Monitoring and Maintenance

### Application Monitoring
- **Health Check Endpoint**: `/health` - Returns application status, uptime, and environment info
- **Error Tracking**: Sentry integration for both backend and frontend
  - Automatic error reporting and performance monitoring
  - Environment-specific configuration
- **Uptime Monitoring**: Configure external monitoring services to ping health endpoint

### Performance Monitoring
- **Backend Performance**: Custom middleware tracks API response times and logs performance metrics
- **Frontend Performance**: Web Vitals integration with custom analytics reporting
  - Core Web Vitals: CLS, FID, FCP, LCP, TTFB
  - Performance data sent to Sentry for analysis

### Maintenance Plan
See [MAINTENANCE.md](MAINTENANCE.md) for comprehensive maintenance procedures including:
- Regular dependency updates and security patches
- Database backup strategies
- Deployment and rollback procedures
- Incident response protocols
- Performance optimization schedules

### Environment Variables Required
```bash
# Backend
SENTRY_DSN=your_sentry_dsn_here
NODE_ENV=production

# Frontend
REACT_APP_SENTRY_DSN=your_sentry_dsn_here
REACT_APP_API_URL=your_api_url_here
```

### Setting up Monitoring
1. Create a Sentry project for backend and frontend
2. Add DSN values to environment variables
3. Configure uptime monitoring service to check `/health` endpoint
4. Set up alerts for error spikes and performance issues
## Deployment Platforms

### Backend Deployment Options
- **Render**: Easy to use, free tier available

### Frontend Deployment Options
- **Vercel**: Optimized for React apps, easy integration
- **Netlify**: Great for static sites, good CI/CD
- **GitHub Pages**: Free, integrated with GitHub

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

### Continuous Integration (CI)
- **Backend CI**: Runs on pushes/PRs to `main` or `staging` branches affecting backend code
  - Installs dependencies
  - Runs ESLint for code quality checks
  - Executes tests
  - Builds the application (if applicable)
- **Frontend CI**: Runs on pushes/PRs to `main` or `staging` branches affecting frontend code
  - Installs dependencies
  - Runs ESLint for code quality checks
  - Executes Jest tests with coverage
  - Builds the React application

### Continuous Deployment (CD)
- **Backend CD**: Deploys to Render on pushes to `main` or `staging` branches
  - Uses Render Deploy Action
  - Requires `RENDER_SERVICE_ID` and `RENDER_API_KEY` secrets
- **Frontend CD**: Deploys to Vercel on pushes to `main` or `staging` branches
  - Uses Vercel CLI
  - Deploys to production on `main` branch, staging on other branches
  - Requires `VERCEL_TOKEN` secret

### Environments
- **Staging**: Deployed on pushes to `staging` branch
- **Production**: Deployed on pushes to `main` branch

### Rollback Strategies
- **Render (Backend)**: Use Render dashboard to rollback to previous deployments
- **Vercel (Frontend)**: Use Vercel dashboard to rollback to previous deployments or redeploy from Git history
- **Git-based Rollback**: Create a revert commit and push to trigger new deployment

### Setup Instructions
1. Set up GitHub repository secrets:
   - `RENDER_SERVICE_ID`: Your Render service ID
   - `RENDER_API_KEY`: Your Render API key
   - `VERCEL_TOKEN`: Your Vercel token
2. Create a `staging` branch for testing deployments
3. Push to `staging` to test CI/CD pipeline
4. Merge to `main` for production deployment
