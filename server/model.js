var Sequelize = require('sequelize'),
	c = require('./conf');

var Container = c.config.db.define( 'container', {
	boxName: {
		type: Sequelize.STRING,
		field: 'box_name'
	},
	containerTemplate: {
		type: Sequelize.TEXT,
		field: 'container_template'
	},
	containerData: {
		type: Sequelize.TEXT,
		field: 'container_data'
	},
	isHorizontal: {
		type: Sequelize.BOOLEAN,
		field: 'is_horizontal'
	},
	groupNumber: {
		type: Sequelize.INTEGER,
		field: 'group_number'
	}
} , {
	timestamps: true
});

exports.models = {
	container: Container
};
