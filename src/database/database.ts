import { Dialect, Sequelize } from "sequelize";
import { CONFIG } from "../config";

// using connection string
/*const connectionString = `${CONFIG.dbDialect}://${CONFIG.dbUserName}:${CONFIG.dbPassword}@${CONFIG.dbHost}:${process.env.DB_PORT}/${CONFIG.dbName}`;
console.log(connectionString);
export let sequelize = new Sequelize(connectionString);
console.log(sequelize);*/

export let sequelize = new Sequelize("sqlite::memory:");

if (CONFIG.nodeEnv !== "test") {
	sequelize = new Sequelize(
		CONFIG.dbName ?? "MISSING_DB_NAME_CONFIG",
		CONFIG.dbUserName ?? "MISSING_DB_USERNAME_CONFIG",
		CONFIG.dbPassword ?? "MISSING_DB_PASSWORD_CONFIG",
		{
			host: CONFIG.dbHost ?? "MISSING_DB_HOST_CONFIG",
			port: parseInt(process.env.DB_PORT as string) ?? "MISSING_DB_PORT_CONFIG",
			dialect: (CONFIG.dbDialect as Dialect) ?? "postgres",
		}
	);
}
