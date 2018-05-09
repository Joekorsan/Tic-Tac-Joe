
exports.up = function(knex, Promise) {
  return knex.schema.createTable('leaderboard', (table)=>{
    table.increments();
    table.string('userName');
    table.integer('streak');
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('leaderboard');
};
