const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);


const getBillsPageInfo = () => {
  return knex
    .select("id", "title", "bill", "subject", "last_action")
    .from("bills")
    .orderBy("bill", "asc")
}

const getBillInfo = (bill) => {
  return knex 
    .select()
    .from("bills")
    .where("bill", bill)
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

const getVoteInfo = (bill) => {
  return knex 
    .select("bills.title", "bills.bill", "legislators.chamber", "legislators.party", "votes.vote", "votes.bill")
    .count()
    .from("votes")
    .innerJoin("bills", "bills.bill", "votes.bill")
    .innerJoin("legislators", "legislators.last_name", "votes.name")
    .where("votes.bill", bill)
    .groupBy("bills.title", "bills.bill", "legislators.chamber", "legislators.party", "votes.vote", "votes.bill")
    .orderBy("bills.title", "legislators.chamber", "legislators.party", "votes.vote")
}

const getLegislatorVote = (id, bill) => {
  return knex 
    .select("votes.name", "votes.bill", "votes.vote", "legislators.id")
    .from("votes")
    .innerJoin("legislators", "legislators.last_name", "votes.name")
    .where({"legislators.id": id, "votes.bill": bill})
}

const allComments = () => {
  return knex.select()
    .from("comments")
    .orderBy("id", "ascending");
};

const createComment = (newData) => {
  return knex("comments")
    .insert(newData)
    .returning('*');
};

const updateComment = (id, updatedData) => {
  return knex("comments")
    .where("id", id)
    .update(updatedData);
};

const deleteComment = (id) => {
  return knex.select()
    .from("comments")
    .where("id", id)
    .delete();
};

module.exports = {

  getBillsPageInfo,
  getBillInfo,
  getLegislators,
  getLegislator,
  getVoteInfo,
  getLegislatorVote,
  allComments,
  createComment,
  updateComment,
  deleteComment

}