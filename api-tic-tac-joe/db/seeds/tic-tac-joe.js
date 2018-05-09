
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('leaderboard').del()
    .then(function () {
      // Inserts seed entries
      return knex('leaderboard').insert([
        {userName: 'stallingDAgrape', streak:5},
        {userName: 'warPig77fivemaybe', streak:3},
        {userName: 'toFooly', streak:4}
      ]);
    });
};
