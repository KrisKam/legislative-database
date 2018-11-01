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

const getLegislator = (id) => {
  return knex
    .select()
    .from("legislators")
    .where("id", id)
}

const getVoteInfo = (id) => {
  console.log(id)
  return knex 
    .select("bills.title", "bills.bill", "legislators.chamber", "legislators.party", "vote", "votes.bill_id")
    .count()
    .from("votes")
    .innerJoin("bills", "bills.id", "votes.bill_id")
    .innerJoin("legislators", "legislators.id", "votes.legislator_id")
    .where("votes.bill_id", id)
    .groupBy("bills.title", "bills.bill", "legislators.chamber", "legislators.party", "vote", "votes.bill_id")
    .orderBy("bills.title", "legislators.chamber", "legislators.party", "vote")
}

module.exports = {

  getBillsPageInfo,
  getBillInfo,
  getLegislators,
  getLegislator,
  getVoteInfo
}