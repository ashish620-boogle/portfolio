import { createClient } from "@vercel/postgres";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
};

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || name.length < 2) {
      return Response.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || !isEmail(email)) {
      return Response.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!message || message.length < 10) {
      return Response.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    const connectionString =
      process.env.POSTGRES_URL || process.env.DATABASE_URL;
    if (!connectionString) {
      return Response.json(
        { error: "Database connection is not configured." },
        { status: 500 }
      );
    }

    const client = createClient({ connectionString });
    await client.connect();
    try {
      await client.sql`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT NOW()
        );
      `;

      await client.sql`
        INSERT INTO contact_messages (name, email, message)
        VALUES (${name}, ${email}, ${message});
      `;
    } finally {
      await client.end();
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    const message =
      error instanceof Error
        ? JSON.stringify(error, Object.getOwnPropertyNames(error))
        : JSON.stringify(error);
    return Response.json({ error: message }, { status: 500 });
  }
}
