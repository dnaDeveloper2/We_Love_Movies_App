exports.up = function (knex) {
  return knex.schema.createTable('critics', function (table) {
    table.increments('critic_id').primary();
    table.string('preferred_name');
    table.string('surname');
    table.string('organization_name');
    table.integer("movie_id").unsigned().notNullable();
    table
          .foreign("movie_id")
          .references("movie_id")
          .inTable("movies")
          .onDelete("cascade");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('critics');
};