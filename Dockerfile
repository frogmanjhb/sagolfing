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

# Build the application
RUN npm run build

# Expose port
EXPOSE $PORT

# Start command
CMD ["npx", "--yes", "serve", "dist", "-s", "-l", "$PORT"]

