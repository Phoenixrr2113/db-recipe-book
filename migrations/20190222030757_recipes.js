exports.up = function(knex, Promise) {
	return knex.schema.createTable('recipes', table => {
		table.increments();

		table
			.string('name', 255)
			.notNullable()
			.unique();

		table
			.integer('ingredient_id')
			.unsigned()
			.references('id')
			.inTable('ingredients')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table
			.integer('dishes')
			.unsigned()
			.references('id')
			.inTable('dishes')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipes');
};
