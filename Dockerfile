FROM oven/bun:1 as base

# Next.js app lives here
WORKDIR /app

# Set production environment
ENV BUN_ENV="production"


# Throw-away build stage to reduce the size of the final image
FROM base as build

# Install node modules
COPY bun.lockb package.json ./
RUN bun install

# Copy application code
COPY . .

# Build application
RUN bun run build

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "bun", "run", "start" ]