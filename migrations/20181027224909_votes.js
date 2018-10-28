
exports.up = function(knex, Promise) {
  return knex.schema.createTable("votes", (vote) => {
    vote.increments("id");
    vote.integer("legislator_id");
    vote.foreign("legislator_id").references("legislators.id");
    vote.integer("bill_id");
    vote.foreign("bill_id").references("bills.id");
    vote.string("vote");
    vote.string("legislator_name")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("votes");
};