module.exports = (sequelize, connection) =>{
	return connection.define('country', {
		code:
			{
				type: sequelize.STRING(3),
				primaryKey: true,
				allowNull: false,
				defaultValue: ''
			},
		name:
			{
				type: sequelize.STRING(52),
				allowNull: false,
				defaultValue: ''
			},
		continent:
			{
				type: sequelize.ENUM('Asia','Europe','North America','Africa','Oceania','Antarctica','South America'),
				allowNull: false,
				defaultValue: 'Asia'
			},
		region:
			{
				type: sequelize.STRING(26),
				allowNull: false,
				defaultValue: ''
			},
		surfacearea:
			{
				type: sequelize.FLOAT(10,2),
				allowNull: false,
				defaultValue: 0.00
			},
		indepyear:
			{
				type: sequelize.INTEGER,
				allowNull: true,
				defaultValue: null
			},
		population:
			{
				type: sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0
			},
		lifeexpectancy:
			{
				type: sequelize.FLOAT(3,1),
				allowNull: true,
				defaultValue: null
			},
		gnp:
			{
				type: sequelize.FLOAT(10,2),
				allowNull: true,
				defaultValue: null
			},
		gnpold:
			{
				type: sequelize.FLOAT(10,2),
				allowNull: true,
				defaultValue: null
			},
		localname:
			{
				type: sequelize.STRING(45),
				allowNull: false,
				defaultValue: ''
			},
		governmentform:
			{
				type: sequelize.STRING(45),
				allowNull: false,
				defaultValue: ''
			},
		headofstate:
			{
				type: sequelize.STRING(60),
				allowNull: true,
				defaultValue: null
			},
		capital:
			{
				type: sequelize.INTEGER,
				allowNull: true,
				defaultValue: null
			},
		code2:
			{
				type: sequelize.STRING(2),
				allowNull: false,
				defaultValue: ''
			}
	});
};