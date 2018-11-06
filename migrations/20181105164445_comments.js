
exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments", (comment) => {
    comment.increments("id");
    comment.string("user_name");
    comment.string("date");
    comment.text("comment")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("comments");
};