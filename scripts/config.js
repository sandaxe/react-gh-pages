module.exports = {
	DATABASE_URI: process.env.DATABASE_URI,
	SERVER: {
		PORT: process.env.SERVER_PORT,
		URL: process.env.SERVER_URL
	},
	GCS: {
		PROJECTID: process.env.GCS_PROJECTID,
		BUCKETNAME: process.env.GCS_BUCKETNAME
	},
	AWS: {
		AWS_SECRET_ACCESS_KEY : process.env.AWS_SECRET_ACCESS_KEY,
		AWS_ACCESS_KEY_ID : process.env.AWS_ACCESS_KEY_ID,
		AWS_REGION : process.env.AWS_REGION,
		AWS_BUCKET : process.env.AWS_BUCKET
	}
};
