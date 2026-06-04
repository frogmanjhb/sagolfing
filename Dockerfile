# Use Node 20
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with no cache
RUN npm ci --no-cache --legacy-peer-deps

# Copy all source files
COPY . .

# Make binaries executable
RUN chmod -R +x node_modules/.bin

# Vite embeds VITE_* at build time — Railway passes service variables as build args
ARG VITE_WEB3FORMS_ACCESS_KEY
ARG VITE_SITE_URL
ENV VITE_WEB3FORMS_ACCESS_KEY=$VITE_WEB3FORMS_ACCESS_KEY
ENV VITE_SITE_URL=$VITE_SITE_URL

# Build the application
RUN npm run build

# Expose port
EXPOSE $PORT

# Start command - use shell form to interpolate $PORT
CMD npx --yes serve dist -s -l ${PORT:-3000}

