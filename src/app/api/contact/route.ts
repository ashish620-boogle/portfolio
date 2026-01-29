import { sql } from "@vercel/postgres";

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

    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;

    await sql`
      INSERT INTO contact_messages (name, email, message)
      VALUES (${name}, ${email}, ${message});
    `;

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    const message =
      error instanceof Error ? error.message : "Something went wrong.";
    return Response.json({ error: message }, { status: 500 });
  }
}
