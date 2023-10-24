# Use Node.js as the base image
FROM node:18

# Set the working directory in the docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY ./ ./
RUN chmod -R 777 .

# Install global Nx CLI and project dependencies
RUN npm install -g nx

# Build the specific app (you can also use nx build if needed)
# RUN nx build my-app

# Expose the port the app runs on
EXPOSE 8080

# Command to run the app
CMD ["npx", "nx", "run", "account_backend:serve:development"]
