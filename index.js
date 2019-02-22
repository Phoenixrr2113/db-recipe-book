const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile');

const server = express();

server.use(express.json());
server.use(helmet());

const db = knex(knexConfig.development);

server.get('/', (req, res) => {
	res.send('Welcome To Recipe Book Api');
});

// --------------- INGREDIENTS --------------------- //

server.get('/api/ingredients', (req, res) => {
	db('ingredients')
		.then(ingredients => {
			res.status(200).json(ingredients);
		})
		.catch(err => res.status(500).json(err));
});

server.get('/api/ingredients/:id', (req, res) => {
	db('ingredients')
		.where({ id: req.params.id })
		.then(ingredient => {
			res.status(200).json(ingredient);
		})
		.catch(err => res.status(500).json(err));
});

server.post('/api/ingredients', (req, res) => {
	db('ingredients')
		.insert(req.body)
		.then(ids => {
			res.status(200).json(ids);
		})
		.catch(err => res.status(500).json(err));
});

server.delete('/api/ingredients/:id', (req, res) => {
	db('ingredients')
		.where({ id: req.params.id })
		.del()
		.then(id => {
			res.status(200).json(id);
		})
		.catch(err => res.status(500).json(err));
});

server.put('/api/ingredients/:id', (req, res) => {
	db('ingredients')
		.where({ id: req.params.id })
		.update(req.body)
		.then(id => {
			res.status(200).json(id);
		})
		.catch(err => res.status(500).json(err));
});

// ------------------ DISHES ------------------ //

server.get('/api/dishes', (req, res) => {
	db('dishes')
		.then(dishes => {
			res.status(200).json(dishes);
		})
		.catch(err => res.status(500).json(err));
});

server.get('/api/dishes/:id', (req, res) => {
	db('dishes')
		.where({ id: req.params.id })
		.then(dish => {
			res.status(200).json(dish);
		})
		.catch(err => res.status(500).json(err));
});

server.post('/api/dishes', (req, res) => {
	db('dishes')
		.insert(req.body)
		.then(ids => {
			res.status(200).json(ids);
		})
		.catch(err => res.status(500).json(err));
});

server.delete('/api/dishes/:id', (req, res) => {
	db('dishes')
		.where({ id: req.params.id })
		.del()
		.then(id => {
			res.status(200).json(id);
		})
		.catch(err => res.status(500).json(err));
});

server.put('/api/dishes/:id', (req, res) => {
	db('dishes')
		.where({ id: req.params.id })
		.update(req.body)
		.then(id => {
			res.status(200).json(id);
		})
		.catch(err => res.status(500).json(err));
});

// --------------- RECIPES ----------------------- //

server.get('/api/recipes', (req, res) => {
	db('recipes')
		.then(recipes => {
			res.status(200).json(recipes);
		})
		.catch(err => res.status(500).json(err));
});

server.get('/api/recipes/:id', (req, res) => {
	db('recipes')
		.where({ id: req.params.id })
		.then(recipe => {
			res.status(200).json(recipe);
		})
		.catch(err => res.status(500).json(err));
});

server.post('/api/recipes', (req, res) => {
	db('recipes')
		.insert(req.body)
		.then(ids => {
			res.status(200).json(ids);
		})
		.catch(err => res.status(500).json(err));
});

server.delete('/api/recipes/:id', (req, res) => {
	db('recipes')
		.where({ id: req.params.id })
		.del()
		.then(id => {
			res.status(200).json(id);
		})
		.catch(err => res.status(500).json(err));
});

server.put('/api/recipes/:id', (req, res) => {
	db('recipes')
		.where({ id: req.params.id })
		.update(req.body)
		.then(id => {
			res.status(200).json(id);
		})
		.catch(err => res.status(500).json(err));
});

const port = 5000;
server.listen(port, function() {
	console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
