const PORT=process.env.PORT || 3000;
const DATABASE_HOST =process.env.DATABASE_HOST || "localhost";
const DATABASE_USER=process.env.DATABASE_USER || "root";

const DATABASE_NAME=process.env.DATABASE_NAME || "mundial";

const DATABASE_PASSWORD=process.env.DATABASE_PASSWORD || "12345";

const config={
    PORT,
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_USER
}

module.exports=config;