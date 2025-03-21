module.exports = {
    apps: [
      {
        name: "my-app",            
        script: "npm",             
        args: "run start",        
        watch: false,             
        env: {
          NODE_ENV: "development", 
        },
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  