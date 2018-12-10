module.exports = (sequelize, connection) =>{
	return connection.define('city', {
		id:
			{
				type: sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
		name:
			{
				type: sequelize.STRING(35),
				allowNull: false,
				defaultValue: ''
			},
		countrycode:
			{
				type: sequelize.STRING(3),
				allowNull: false,
				defaultValue: ''
			},
		district:
			{
				type: sequelize.STRING(20),
				allowNull: false,
				defaultValue: ''
			},
		population:
			{
				type: sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0
			}
	});
};