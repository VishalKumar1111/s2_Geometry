# Use Ubuntu as the base image
FROM ubuntu

# Install curl and other dependencies
RUN apt-get update && apt-get install -y curl

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update -y && \
    apt-get install -y nodejs

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the application files
COPY main.js .

# Expose the application port
EXPOSE 8000

# Start the application
ENTRYPOINT ["node", "neighbor.js"]
