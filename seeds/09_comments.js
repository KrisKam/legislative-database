
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {user_name: "Rick from Aurora", date: "11/05/2018", comment: "Increase spending on K-12 education, including teachers' salaries."},
        {user_name: "Janet", date: "11/05/2018", comment: "Government workers rely on their pensions--please don't make major changes to PERA."},
        {user_name: "Concerned in Golden", date: "11/05/2018", comment: "Our roads are in disrepair. Legislators need to fix existing transportation infrastructure."}
      ]);
    });
};

