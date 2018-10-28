module.exports = {

  development: {
    client: "pg",
    connection: "postgresql:///legislative-vote-server"
  },

  
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
