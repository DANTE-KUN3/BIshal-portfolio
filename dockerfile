# Use official Node.js image as base
FROM node:18.16.0-alpine3.18 as base

# Set working directory
WORKDIR /app

# Set the user to root to avoid permission issues during install
USER root

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy the rest of the application files into the container
COPY . .

# Ensure that the node user has the proper ownership of the files
RUN chown -R node:node /app

################################################################################
# Final stage: Use a minimal environment to run the application
FROM node:18.16.0-alpine3.18 as final

# Set working directory in the final image
WORKDIR /app

# Copy package.json and production dependencies from the base image
COPY --from=base /app /app

# Set non-root user for running the application
USER node

# Expose the port that the application listens on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
