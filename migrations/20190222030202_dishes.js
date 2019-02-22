exports.up = function(knex, Promise) {
	return knex.schema.createTable('dishes', table => {
		table.increments();

		table
			.string('name', 255)
			.notNullable()
			.unique();

		table
			.integer('recipe_id')
			.unsigned()
			.references('id')
			.inTable('recipes')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('dishes');
};
