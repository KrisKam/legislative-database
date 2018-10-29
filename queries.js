const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);


const getBillsPageInfo = () => {
  return knex
    .select("id", "title", "bill", "subject", "last_action")
    .from("bills")
}


module.exports = {

  getBillsPageInfo,
}