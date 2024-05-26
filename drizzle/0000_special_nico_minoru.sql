CREATE TABLE IF NOT EXISTS "email_subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256),
	"created_at" timestamp (3) DEFAULT '2024-05-24T21:27:23.491Z',
	"updated_at" timestamp (3),
	"deleted_at" timestamp (3)
);
