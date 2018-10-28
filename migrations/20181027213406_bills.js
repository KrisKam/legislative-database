
exports.up = function(knex, Promise) {
  return knex.schema.createTable("bills", (bill) => {
    bill.increments("id");
    bill.string("title");
    bill.string("bill");
    bill.string("bill_url");
    bill.string("last_action");
    bill.string("subject");
    bill.text("description");
    bill.text("sponsors");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("bills");
};
