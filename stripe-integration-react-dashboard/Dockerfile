
#         STEP1: App Building
#>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FROM node:22-alpine AS builder
WORKDIR /app

# Set working directory inside container
COPY package*.json ./

# Optimize caching (install deps first)
RUN npm install

# Copy source code AFTER dependencies (important for caching)
COPY . .

# Set production environment
ENV NODE_ENV=production

# Build React app
RUN npm run build
#-------------------------------------





#       STEP2: Server Preparation & Deployment 
#>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/* 

# Copy build output from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Health check (PRO feature)
HEALTHCHECK --interval=30s --timeout=5s \ CMD wget -qO- http://localhost || exit 1

# Run nginx in foreground (required for Docker)
CMD [ "nginx", "-g", "daemon off;" ]
#----------------------------------------------------

