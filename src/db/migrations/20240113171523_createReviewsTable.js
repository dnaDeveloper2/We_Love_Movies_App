exports.up = function (knex) {
  return knex.schema.createTable('reviews', function (table) {
    table.increments('review_id').primary();
    table.text('content');
    table.integer('score');
    table.integer('critic_id').unsigned().notNullable();
    table.foreign('critic_id').references('critic_id').inTable('critics')
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('reviews');
};
