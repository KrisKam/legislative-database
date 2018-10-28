const billVotes = require("./votes.js");
const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

knex.select("bill", "id").from("bills")
  .then(bills => {
    const legislatorRecords = knex.select("last_name", "id").from("legislators")
      .then(legislators => {
        const votesArray = billVotes.map((vote) => {
          const legislator = legislators.find(legObj => legObj.last_name === vote.name)
          const bill = bills.find(billObj => billObj.bill === vote.bill)
          if (!legislator) {
            return({
                  "bill_id": bill.id,
                  "legislator_id": "Lebsock",
                  "vote": vote.vote
                })
          }
          
          return({
                  "bill_id": bill.id,
                  "legislator_id": legislator.id,
                  "legislator_name": legislator.last_name,
                  "vote": vote.vote
                })
        }) 
        // console.log(votesArray.length)
        const array1 = [];
        const array2 = [];
        const array3 = [];
        const array4 = [];
        const array5 = [];
        const filteredVotesArray = votesArray.filter(voteObj => voteObj.legislator_id !== "Lebsock")
        filteredVotesArray.forEach((vote, index) => {
          if (index % 5 === 0) {
            array1.push(vote)
          } else if (index % 5 === 1) {
            array2.push(vote)
          } else if (index % 5 === 2) {
            array3.push(vote)
          } else if (index % 5 === 3) {
            array4.push(vote)
          } else if (index % 5 === 4) {
            array5.push(vote)
          }
        })
        // console.log(filteredVotesArray.length)
        console.log(JSON.stringify(array5)); 
        // console.log(JSON.stringify(filteredVotesArray)); 
      })
      //console.log("done")
  })
  //console.log("final")
  
  
 

 
