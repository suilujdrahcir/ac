# Use Node.js 22 LTS
FROM node:22-bullseye

# Set working directory
WORKDIR /app

# Copy dependency files first (for caching)
COPY package*.json ./

# Try to copy node_modules if it exists locally — but don't fail if it doesn't
ONBUILD COPY node_modules ./node_modules

# Install dependencies
RUN if [ -d "./node_modules" ]; then echo "Using existing node_modules"; else npm install; fi

# Install global tools
RUN npm install -g @expo/ngrok

# System updates and utilities
RUN apt-get update && apt-get install -y net-tools

# Copy the rest of your app
COPY . .

# Expose Expo development ports
EXPOSE 19000 19001 19002 8081

# Environment variables
ENV EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
ENV REACT_NATIVE_PACKAGER_HOSTNAME=0.0.0.0

# Keep container running
CMD ["tail", "-f", "/dev/null"]
