const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);


const getBillsPageInfo = () => {
  return knex
    .select("id", "title", "bill", "subject", "last_action")
    .from("bills")
    .orderBy("bill", "asc")
}

const getBillInfo = (id) => {
  return knex 
    .select()
    .from("bills")
    .where("id", id)
}

const getLegislators = () => {
  return knex
    .select("id", "title", "full_name", "party", "district")
    .from("legislators")
    .orderBy("title", "asc")
    .orderBy("last_name", "asc")
}

module.exports = {

  getBillsPageInfo,
  getBillInfo,
  getLegislators
}