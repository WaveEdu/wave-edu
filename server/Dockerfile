# Use Node.js 18.16 as the base image
FROM node:18.16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally
RUN npm install -g pm2

# Copy the application code to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application with PM2
CMD ["pm2-runtime", "dist/index.js"]