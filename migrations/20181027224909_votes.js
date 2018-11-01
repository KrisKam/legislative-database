
exports.up = function(knex, Promise) {
  return knex.schema.createTable("votes", (vote) => {
    vote.increments("id");
    vote.string("bill");
    vote.string("name");
    vote.string("vote")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("votes");
};