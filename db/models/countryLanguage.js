module.exports = (sequelize, connection) =>{
	return connection.define('countrylanguage', {
		countrycode:
			{
				primaryKey: true,
				type: sequelize.STRING(3),
				allowNull: false,
				defaultValue: ''
			},
		language:
			{
				primaryKey: true,
				type: sequelize.STRING(35),
				allowNull: false,
				defaultValue: ''
			},
		isofficial:
			{
				type: sequelize.ENUM('T','F'),
				allowNull: false,
				defaultValue: 'F'
			},
		percentage:
			{
				type: sequelize.FLOAT,
				allowNull: false,
				defaultValue: 0.0
			}
	});
};