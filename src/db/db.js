import options from "./options/mysqlconfig.js";
import knex from "knex";

const database = knex(options);

export default database;
