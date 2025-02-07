# Use node as the base image
FROM node:16.18.1-alpine AS builder

# Set the working directory to /app
WORKDIR /app

# Copy only package.json and package-lock.json first (to leverage Docker cache)
COPY package*.json ./

# Install dependencies (including vite)
RUN npm install

# Now copy the rest of the files
COPY . .

# Build the app (ensure vite is installed locally, not globally)
RUN npm run build

# Use nginx as the base image for serving the app
FROM nginx:1.23.2-alpine

# Set NODE_ENV to production
ENV NODE_ENV production

# Copy the build output from the builder image to Nginx's directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the nginx config from the builder image
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the app
EXPOSE 80
