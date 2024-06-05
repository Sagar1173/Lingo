// npm i dotenv before import
import "dotenv/config";
import type { Config } from "drizzle-kit";


// actual from the video 2:11:29
export default {
    schema : "./db/schema.ts",
    out : "./drizzle",
    dialect : "postgresql",
    dbCredentials : {
        url : process.env.DATABASE_URL!,
    },
} satisfies Config;

// from the docs
// import { defineConfig } from "drizzle-kit";
// export default defineConfig({
//   dialect: "postgresql", 
//   schema: "./db/schema.ts",
//   out: "./drizzle",
// });