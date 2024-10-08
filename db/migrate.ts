import { LibSQLDatabase, drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";

import { tables } from "./schema";
import config from "@/drizzle.config";
import { createClient } from "@libsql/client";

type Database = LibSQLDatabase<Record<string, never>>;

async function main() {
  if (!config.dbCredentials.url || !config.dbCredentials.authToken) {
    throw new Error("DATABASE_URL is not set");
  }

  const turso = createClient({
    url: config.dbCredentials.url!,
    authToken: config.dbCredentials.authToken!,
  });
  const db = drizzle(turso);

  if (process.argv.includes("--clear")) {
    console.log("Clearing database");
    await clearDatabase(db);
    console.log("Database cleared");
  }

  console.log("Migrating database");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("Database migrated");

  if (process.argv.includes("--populate")) {
    console.log("Populating database");
    await populate(db);
    console.log("Database populated");
  }

  turso.close();
}

async function clearDatabase(db: Database) {
  for (const schema of Object.values(tables)) {
    await db.delete(schema);
  }
}

async function populate(db: Database) {
  // Adding schools
  await db.insert(tables.school).values([
    {
      id: 1,
      name: "SPST",
      websiteUrl: "https://spst.edu.sk",
      emailDomain: "spstsnv.sk",
    },
    {
      id: 2,
      name: "Gymnázium",
      websiteUrl: "https://gymnazium.edu.sk",
      emailDomain: "gmail.com",
    },
  ]);

  // Adding stores
  await db.insert(tables.store).values({
    id: 1,
    name: "Školský obchod",
    imageUrl: "",
    adress: "adresa 1",
    websiteUrl: "https://skolskyobchod.sk",
    description: "Školský obchod popis",
  });
  // Adding items
  await db.insert(tables.item).values([
    {
      id: 1,
      name: "bageta",
      description: "bageta popis",
      price: 3.99,
      imageUrl: "",
      weight: 170,
      deleted: false,
      storeId: 1,
    },
    {
      id: 2,
      name: "test bageta",
      description: "najelpsia omega top bageta",
      price: 3.99,
      imageUrl: "",
      weight: 150,
      deleted: false,
      storeId: 1,
    },
  ]);
  await db.insert(tables.allergen).values([
    {
      id: 1,
      number: 1,
      name: "gluten",
      storeId: 1,
    },
    {
      id: 2,
      number: 2,
      name: "milk",
      storeId: 1,
    },
  ]);
  await db.insert(tables.ingredient).values([
    {
      id: 1,
      number: 1,
      name: "tomato",
      storeId: 1,
    },
    {
      id: 2,
      number: 2,
      name: "cheese",
      storeId: 1,
    },
  ]);
  await db.insert(tables.itemAllergen).values([
    {
      itemId: 1,
      allergenId: 1,
    },
    {
      itemId: 1,
      allergenId: 2,
    },
    {
      itemId: 2,
      allergenId: 1,
    },
  ]);
  await db.insert(tables.itemIngredient).values([
    {
      itemId: 1,
      ingredientId: 1,
    },
    {
      itemId: 1,
      ingredientId: 2,
    },
    {
      itemId: 2,
      ingredientId: 1,
    },
  ]);

  await db.insert(tables.schoolStore).values([
    {
      schoolId: 1,
      storeId: 1,
    },
    {
      schoolId: 2,
      storeId: 1,
    },
  ]);
}

main()
  .then(() => {
    console.log("Migration complete");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
