# Stage 1: Build the React application
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency definition files
COPY package.json package-lock.json ./

# Install dependencies using clean install
RUN npm ci

# Copy application source code
COPY . .

# Build production application
RUN npm run build

# Stage 2: Serve application using Nginx
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built application assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
