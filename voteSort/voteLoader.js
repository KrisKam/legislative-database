const senateBillVotes = require("./rawData/senateBillVotes");
const houseBillVotes = require("./rawData/houseBillVotes");

// knex.select("id").from("bills")



const sen_votes = [];

houseBillVotes.forEach(bill => {
  bill.votes.forEach(vote => {
    let bill_obj = {};
    let bill_name = bill.bill;
    bill_obj["bill"] = bill_name
    bill_obj["name"] = vote.name;
    bill_obj["vote"] = vote.vote;
    sen_votes.push(bill_obj);
  })
})

console.log(JSON.stringify(sen_votes));