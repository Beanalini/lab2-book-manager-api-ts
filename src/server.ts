import { app } from "./app";
import { CONFIG } from "./config";
import { populateDummyData } from "./database/database_seed";

const environment = process.env.NODE_ENV || "dev";
const PORT = CONFIG.port;

CONFIG.nodeEnv !== "dev"
	? console.log(
			`🌍 Running in ${environment} environment using SQlite in-memory database`
	  )
	: console.log(
			`🌍 Running in ${environment} environment using postgresSQL database`
	  );

app.listen(PORT, () => {
	console.log(`🚂 Express started on port ${PORT}`);

	// Seed the database with some data
	if (environment === "test") {
		populateDummyData();
	}
});
