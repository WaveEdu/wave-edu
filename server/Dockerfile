# Use an official Node.js runtime as a parent image
FROM node:18.16.0

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the port that the application listens on (replace 3000 with your port number)
EXPOSE 8080 

# Set the command to run the application
CMD [ "npm", "run", "start" ]