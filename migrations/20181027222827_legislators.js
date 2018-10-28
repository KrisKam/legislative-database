
exports.up = function(knex, Promise) {
  return knex.schema.createTable("legislators", (legislator) => {
    legislator.increments("id");
    legislator.string("chamber");
    legislator.string("title");
    legislator.string("full_name");
    legislator.string("last_name");
    legislator.string("sponsor_name");
    legislator.string("party");
    legislator.integer("district");
    legislator.string("occupation");
    legislator.string("phone");
    legislator.string("email");
    legislator.string("headshot");
    legislator.string("name");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("legislators");
};
