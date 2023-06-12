module.exports = {
  apps: [
    {
      name: "solotechnopark.go.id",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
