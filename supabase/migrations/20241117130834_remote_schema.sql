drop trigger if exists "handle_chats_updated_at" on "public"."chats";

drop trigger if exists "document_version_trigger" on "public"."documents";

drop trigger if exists "tr_file_version" on "public"."file_uploads";

drop trigger if exists "handle_users_updated_at" on "public"."users";

drop trigger if exists "handle_votes_updated_at" on "public"."votes";

drop policy "Users can create own chats" on "public"."chats";

drop policy "Users can delete own chats" on "public"."chats";

drop policy "Users can update own chats" on "public"."chats";

drop policy "Users can view own chats" on "public"."chats";

drop policy "Users can create own documents" on "public"."documents";

drop policy "Users can delete own documents" on "public"."documents";

drop policy "Users can insert their own documents" on "public"."documents";

drop policy "Users can update own documents" on "public"."documents";

drop policy "Users can update their own documents" on "public"."documents";

drop policy "Users can view own documents" on "public"."documents";

drop policy "Users can view their own documents" on "public"."documents";

drop policy "Users can delete their own files" on "public"."file_uploads";

drop policy "Users can insert their own files" on "public"."file_uploads";

drop policy "Users can view their own files" on "public"."file_uploads";

drop policy "Users can create messages in their chats" on "public"."messages";

drop policy "Users can view messages from their chats" on "public"."messages";

drop policy "Users can create own suggestions" on "public"."suggestions";

drop policy "Users can view own suggestions" on "public"."suggestions";

drop policy "Users can update own profile" on "public"."users";

drop policy "Users can view own profile" on "public"."users";

drop policy "Users can create votes on their chats" on "public"."votes";

drop policy "Users can delete votes on their chats" on "public"."votes";

drop policy "Users can update votes on their chats" on "public"."votes";

drop policy "Users can view votes on their chats" on "public"."votes";

revoke select on table "public"."file_uploads" from "PUBLIC";

revoke delete on table "public"."messages" from "anon";

revoke insert on table "public"."messages" from "anon";

revoke references on table "public"."messages" from "anon";

revoke trigger on table "public"."messages" from "anon";

revoke truncate on table "public"."messages" from "anon";

revoke update on table "public"."messages" from "anon";

revoke delete on table "public"."messages" from "authenticated";

revoke references on table "public"."messages" from "authenticated";

revoke trigger on table "public"."messages" from "authenticated";

revoke truncate on table "public"."messages" from "authenticated";

revoke update on table "public"."messages" from "authenticated";

alter table "public"."documents" drop constraint "documents_id_created_at_key";

alter table "public"."file_uploads" drop constraint "file_uploads_chat_id_fkey";

alter table "public"."file_uploads" drop constraint "file_uploads_unique_per_chat";

alter table "public"."file_uploads" drop constraint "file_uploads_unique_version";

alter table "public"."suggestions" drop constraint "suggestions_document_id_document_created_at_fkey";

alter table "public"."votes" drop constraint "votes_message_id_fkey";

alter table "public"."chats" drop constraint "chats_user_id_fkey";

alter table "public"."documents" drop constraint "documents_user_id_fkey";

alter table "public"."file_uploads" drop constraint "file_uploads_user_id_fkey";

alter table "public"."suggestions" drop constraint "suggestions_user_id_fkey";

drop function if exists "public"."get_document_latest_version"(doc_id uuid);

drop function if exists "public"."get_latest_document"(doc_id uuid, auth_user_id uuid);

drop function if exists "public"."get_next_file_version"(p_bucket_id text, p_storage_path text);

drop function if exists "public"."handle_document_version"();

drop function if exists "public"."handle_new_user"();

drop function if exists "public"."handle_updated_at"();

drop function if exists "public"."set_file_version"();

alter table "public"."documents" drop constraint "documents_pkey";

alter table "public"."votes" drop constraint "votes_pkey";

drop index if exists "public"."documents_id_created_at_key";

drop index if exists "public"."file_uploads_bucket_path_idx";

drop index if exists "public"."file_uploads_chat_id_idx";

drop index if exists "public"."file_uploads_created_at_idx";

drop index if exists "public"."file_uploads_unique_per_chat";

drop index if exists "public"."file_uploads_unique_version";

drop index if exists "public"."file_uploads_user_id_idx";

drop index if exists "public"."idx_chats_created_at";

drop index if exists "public"."idx_chats_updated_at";

drop index if exists "public"."idx_documents_content_gin";

drop index if exists "public"."idx_documents_created_at";

drop index if exists "public"."idx_documents_latest_version";

drop index if exists "public"."idx_documents_title_gin";

drop index if exists "public"."idx_documents_user_id";

drop index if exists "public"."idx_messages_role";

drop index if exists "public"."idx_suggestions_created_at";

drop index if exists "public"."idx_suggestions_document_id";

drop index if exists "public"."idx_suggestions_is_resolved";

drop index if exists "public"."idx_suggestions_unresolved";

drop index if exists "public"."idx_suggestions_user_id";

drop index if exists "public"."idx_users_created_at";

drop index if exists "public"."idx_users_email";

drop index if exists "public"."idx_votes_composite";

drop index if exists "public"."idx_votes_message_id";

drop index if exists "public"."documents_pkey";

drop index if exists "public"."votes_pkey";

create table "public"."chat_histories" (
    "id" uuid not null default uuid_generate_v4(),
    "messages" jsonb not null,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "updated_at" timestamp with time zone default CURRENT_TIMESTAMP
);


create table "public"."chat_messages" (
    "id" uuid not null default uuid_generate_v4(),
    "message" text not null,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP
);


create table "public"."chat_sessions" (
    "id" uuid not null default uuid_generate_v4(),
    "user_id" uuid,
    "started_at" timestamp with time zone default CURRENT_TIMESTAMP
);


create table "public"."google_drive_tokens" (
    "id" uuid not null default uuid_generate_v4(),
    "user_id" text not null,
    "tokens" jsonb not null,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "updated_at" timestamp with time zone default CURRENT_TIMESTAMP
);


create table "public"."projects" (
    "id" uuid not null default uuid_generate_v4(),
    "name" text not null,
    "description" text,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "updated_at" timestamp with time zone default CURRENT_TIMESTAMP
);


create table "public"."tasks" (
    "id" uuid not null default uuid_generate_v4(),
    "title" text not null,
    "description" text,
    "status" text not null,
    "project_id" uuid not null,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "updated_at" timestamp with time zone default CURRENT_TIMESTAMP
);


create table "public"."team_members" (
    "id" uuid not null default uuid_generate_v4(),
    "full_name" text not null,
    "role" text not null,
    "avatar_url" text,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "updated_at" timestamp with time zone default CURRENT_TIMESTAMP
);


create table "public"."user_google_tokens" (
    "user_id" uuid not null,
    "tokens" jsonb not null,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "updated_at" timestamp with time zone default CURRENT_TIMESTAMP
);


alter table "public"."user_google_tokens" enable row level security;

create table "public"."user_settings" (
    "user_id" uuid not null,
    "theme" text,
    "language" text,
    "notifications_enabled" boolean,
    "model" text
);


alter table "public"."chats" alter column "created_at" set default now();

alter table "public"."chats" alter column "created_at" drop not null;

alter table "public"."chats" alter column "updated_at" set default now();

alter table "public"."chats" alter column "updated_at" drop not null;

alter table "public"."chats" alter column "user_id" drop not null;

alter table "public"."documents" add column "updated_at" timestamp without time zone default now();

alter table "public"."documents" alter column "created_at" set default now();

alter table "public"."documents" alter column "created_at" drop not null;

alter table "public"."documents" alter column "created_at" set data type timestamp without time zone using "created_at"::timestamp without time zone;

alter table "public"."documents" alter column "id" set default gen_random_uuid();

alter table "public"."documents" alter column "user_id" drop not null;

alter table "public"."documents" disable row level security;

alter table "public"."file_uploads" drop column "bucket_id";

alter table "public"."file_uploads" drop column "chat_id";

alter table "public"."file_uploads" drop column "content_type";

alter table "public"."file_uploads" drop column "filename";

alter table "public"."file_uploads" drop column "original_name";

alter table "public"."file_uploads" drop column "size";

alter table "public"."file_uploads" drop column "storage_path";

alter table "public"."file_uploads" drop column "url";

alter table "public"."file_uploads" drop column "version";

alter table "public"."file_uploads" add column "file_name" text not null;

alter table "public"."file_uploads" add column "file_url" text not null;

alter table "public"."file_uploads" alter column "created_at" set default now();

alter table "public"."file_uploads" alter column "created_at" drop not null;

alter table "public"."file_uploads" alter column "created_at" set data type timestamp without time zone using "created_at"::timestamp without time zone;

alter table "public"."file_uploads" alter column "user_id" drop not null;

alter table "public"."file_uploads" disable row level security;

alter table "public"."messages" drop column "updated_at";

alter table "public"."messages" add column "fishtag" text;

alter table "public"."messages" add column "metadata" jsonb;

alter table "public"."messages" add column "new_column_name" text;

alter table "public"."messages" add column "sessionid" uuid;

alter table "public"."messages" add column "timestamp" timestamp with time zone default now();

alter table "public"."messages" add column "user_id" uuid;

alter table "public"."messages" add column "userid" uuid;

alter table "public"."messages" alter column "chat_id" drop not null;

alter table "public"."messages" alter column "content" set data type text using "content"::text;

alter table "public"."messages" alter column "created_at" set default CURRENT_TIMESTAMP;

alter table "public"."messages" alter column "created_at" drop not null;

alter table "public"."messages" alter column "role" drop not null;

alter table "public"."suggestions" alter column "created_at" set default now();

alter table "public"."suggestions" alter column "created_at" drop not null;

alter table "public"."suggestions" alter column "created_at" set data type timestamp without time zone using "created_at"::timestamp without time zone;

alter table "public"."suggestions" alter column "document_created_at" drop not null;

alter table "public"."suggestions" alter column "document_created_at" set data type timestamp without time zone using "document_created_at"::timestamp without time zone;

alter table "public"."suggestions" alter column "document_id" drop not null;

alter table "public"."suggestions" alter column "id" set default gen_random_uuid();

alter table "public"."suggestions" alter column "is_resolved" drop not null;

alter table "public"."suggestions" alter column "original_text" drop not null;

alter table "public"."suggestions" alter column "suggested_text" drop not null;

alter table "public"."suggestions" alter column "user_id" drop not null;

alter table "public"."suggestions" disable row level security;

alter table "public"."users" drop column "created_at";

alter table "public"."users" drop column "updated_at";

alter table "public"."users" add column "username" text not null;

alter table "public"."users" alter column "email" set data type text using "email"::text;

alter table "public"."users" disable row level security;

alter table "public"."votes" drop column "is_upvoted";

alter table "public"."votes" drop column "message_id";

alter table "public"."votes" add column "created_at" timestamp with time zone default CURRENT_TIMESTAMP;

alter table "public"."votes" add column "id" uuid not null default uuid_generate_v4();

alter table "public"."votes" add column "user_id" uuid not null;

alter table "public"."votes" disable row level security;

drop extension if exists "pg_trgm";

CREATE UNIQUE INDEX chat_histories_pkey ON public.chat_histories USING btree (id);

CREATE UNIQUE INDEX chat_messages_pkey ON public.chat_messages USING btree (id);

CREATE UNIQUE INDEX chat_sessions_pkey ON public.chat_sessions USING btree (id);

CREATE UNIQUE INDEX google_drive_tokens_pkey ON public.google_drive_tokens USING btree (id);

CREATE INDEX idx_messages_sessionid ON public.messages USING btree (sessionid);

CREATE INDEX idx_messages_timestamp ON public.messages USING btree ("timestamp");

CREATE UNIQUE INDEX projects_pkey ON public.projects USING btree (id);

CREATE UNIQUE INDEX tasks_pkey ON public.tasks USING btree (id);

CREATE UNIQUE INDEX team_members_pkey ON public.team_members USING btree (id);

CREATE UNIQUE INDEX unique_user_id ON public.google_drive_tokens USING btree (user_id);

CREATE UNIQUE INDEX user_google_tokens_pkey ON public.user_google_tokens USING btree (user_id);

CREATE UNIQUE INDEX user_settings_pkey ON public.user_settings USING btree (user_id);

CREATE UNIQUE INDEX documents_pkey ON public.documents USING btree (id);

CREATE UNIQUE INDEX votes_pkey ON public.votes USING btree (id);

alter table "public"."chat_histories" add constraint "chat_histories_pkey" PRIMARY KEY using index "chat_histories_pkey";

alter table "public"."chat_messages" add constraint "chat_messages_pkey" PRIMARY KEY using index "chat_messages_pkey";

alter table "public"."chat_sessions" add constraint "chat_sessions_pkey" PRIMARY KEY using index "chat_sessions_pkey";

alter table "public"."google_drive_tokens" add constraint "google_drive_tokens_pkey" PRIMARY KEY using index "google_drive_tokens_pkey";

alter table "public"."projects" add constraint "projects_pkey" PRIMARY KEY using index "projects_pkey";

alter table "public"."tasks" add constraint "tasks_pkey" PRIMARY KEY using index "tasks_pkey";

alter table "public"."team_members" add constraint "team_members_pkey" PRIMARY KEY using index "team_members_pkey";

alter table "public"."user_google_tokens" add constraint "user_google_tokens_pkey" PRIMARY KEY using index "user_google_tokens_pkey";

alter table "public"."user_settings" add constraint "user_settings_pkey" PRIMARY KEY using index "user_settings_pkey";

alter table "public"."documents" add constraint "documents_pkey" PRIMARY KEY using index "documents_pkey";

alter table "public"."votes" add constraint "votes_pkey" PRIMARY KEY using index "votes_pkey";

alter table "public"."chat_sessions" add constraint "chat_sessions_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) not valid;

alter table "public"."chat_sessions" validate constraint "chat_sessions_user_id_fkey";

alter table "public"."google_drive_tokens" add constraint "unique_user_id" UNIQUE using index "unique_user_id";

alter table "public"."messages" add constraint "messages_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) not valid;

alter table "public"."messages" validate constraint "messages_user_id_fkey";

alter table "public"."suggestions" add constraint "suggestions_document_id_fkey" FOREIGN KEY (document_id) REFERENCES documents(id) not valid;

alter table "public"."suggestions" validate constraint "suggestions_document_id_fkey";

alter table "public"."tasks" add constraint "tasks_project_id_fkey" FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE not valid;

alter table "public"."tasks" validate constraint "tasks_project_id_fkey";

alter table "public"."tasks" add constraint "tasks_status_check" CHECK ((status = ANY (ARRAY['todo'::text, 'in_progress'::text, 'done'::text]))) not valid;

alter table "public"."tasks" validate constraint "tasks_status_check";

alter table "public"."user_google_tokens" add constraint "user_google_tokens_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."user_google_tokens" validate constraint "user_google_tokens_user_id_fkey";

alter table "public"."user_settings" add constraint "user_settings_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) not valid;

alter table "public"."user_settings" validate constraint "user_settings_user_id_fkey";

alter table "public"."votes" add constraint "votes_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE not valid;

alter table "public"."votes" validate constraint "votes_user_id_fkey";

alter table "public"."chats" add constraint "chats_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "public"."chats" validate constraint "chats_user_id_fkey";

alter table "public"."documents" add constraint "documents_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) not valid;

alter table "public"."documents" validate constraint "documents_user_id_fkey";

alter table "public"."file_uploads" add constraint "file_uploads_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) not valid;

alter table "public"."file_uploads" validate constraint "file_uploads_user_id_fkey";

alter table "public"."suggestions" add constraint "suggestions_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) not valid;

alter table "public"."suggestions" validate constraint "suggestions_user_id_fkey";

grant select on table "public"."chat_histories" to "anon";

grant select on table "public"."chat_histories" to "authenticated";

grant delete on table "public"."chat_histories" to "service_role";

grant insert on table "public"."chat_histories" to "service_role";

grant references on table "public"."chat_histories" to "service_role";

grant select on table "public"."chat_histories" to "service_role";

grant trigger on table "public"."chat_histories" to "service_role";

grant truncate on table "public"."chat_histories" to "service_role";

grant update on table "public"."chat_histories" to "service_role";

grant delete on table "public"."chat_messages" to "anon";

grant insert on table "public"."chat_messages" to "anon";

grant references on table "public"."chat_messages" to "anon";

grant select on table "public"."chat_messages" to "anon";

grant trigger on table "public"."chat_messages" to "anon";

grant truncate on table "public"."chat_messages" to "anon";

grant update on table "public"."chat_messages" to "anon";

grant delete on table "public"."chat_messages" to "authenticated";

grant insert on table "public"."chat_messages" to "authenticated";

grant references on table "public"."chat_messages" to "authenticated";

grant select on table "public"."chat_messages" to "authenticated";

grant trigger on table "public"."chat_messages" to "authenticated";

grant truncate on table "public"."chat_messages" to "authenticated";

grant update on table "public"."chat_messages" to "authenticated";

grant delete on table "public"."chat_messages" to "service_role";

grant insert on table "public"."chat_messages" to "service_role";

grant references on table "public"."chat_messages" to "service_role";

grant select on table "public"."chat_messages" to "service_role";

grant trigger on table "public"."chat_messages" to "service_role";

grant truncate on table "public"."chat_messages" to "service_role";

grant update on table "public"."chat_messages" to "service_role";

grant select on table "public"."chat_sessions" to "anon";

grant select on table "public"."chat_sessions" to "authenticated";

grant delete on table "public"."chat_sessions" to "service_role";

grant insert on table "public"."chat_sessions" to "service_role";

grant references on table "public"."chat_sessions" to "service_role";

grant select on table "public"."chat_sessions" to "service_role";

grant trigger on table "public"."chat_sessions" to "service_role";

grant truncate on table "public"."chat_sessions" to "service_role";

grant update on table "public"."chat_sessions" to "service_role";

grant delete on table "public"."google_drive_tokens" to "anon";

grant insert on table "public"."google_drive_tokens" to "anon";

grant references on table "public"."google_drive_tokens" to "anon";

grant select on table "public"."google_drive_tokens" to "anon";

grant trigger on table "public"."google_drive_tokens" to "anon";

grant truncate on table "public"."google_drive_tokens" to "anon";

grant update on table "public"."google_drive_tokens" to "anon";

grant delete on table "public"."google_drive_tokens" to "authenticated";

grant insert on table "public"."google_drive_tokens" to "authenticated";

grant references on table "public"."google_drive_tokens" to "authenticated";

grant select on table "public"."google_drive_tokens" to "authenticated";

grant trigger on table "public"."google_drive_tokens" to "authenticated";

grant truncate on table "public"."google_drive_tokens" to "authenticated";

grant update on table "public"."google_drive_tokens" to "authenticated";

grant delete on table "public"."google_drive_tokens" to "service_role";

grant insert on table "public"."google_drive_tokens" to "service_role";

grant references on table "public"."google_drive_tokens" to "service_role";

grant select on table "public"."google_drive_tokens" to "service_role";

grant trigger on table "public"."google_drive_tokens" to "service_role";

grant truncate on table "public"."google_drive_tokens" to "service_role";

grant update on table "public"."google_drive_tokens" to "service_role";

grant select on table "public"."projects" to "anon";

grant select on table "public"."projects" to "authenticated";

grant delete on table "public"."projects" to "service_role";

grant insert on table "public"."projects" to "service_role";

grant references on table "public"."projects" to "service_role";

grant select on table "public"."projects" to "service_role";

grant trigger on table "public"."projects" to "service_role";

grant truncate on table "public"."projects" to "service_role";

grant update on table "public"."projects" to "service_role";

grant select on table "public"."tasks" to "anon";

grant select on table "public"."tasks" to "authenticated";

grant delete on table "public"."tasks" to "service_role";

grant insert on table "public"."tasks" to "service_role";

grant references on table "public"."tasks" to "service_role";

grant select on table "public"."tasks" to "service_role";

grant trigger on table "public"."tasks" to "service_role";

grant truncate on table "public"."tasks" to "service_role";

grant update on table "public"."tasks" to "service_role";

grant select on table "public"."team_members" to "anon";

grant select on table "public"."team_members" to "authenticated";

grant delete on table "public"."team_members" to "service_role";

grant insert on table "public"."team_members" to "service_role";

grant references on table "public"."team_members" to "service_role";

grant select on table "public"."team_members" to "service_role";

grant trigger on table "public"."team_members" to "service_role";

grant truncate on table "public"."team_members" to "service_role";

grant update on table "public"."team_members" to "service_role";

grant delete on table "public"."user_google_tokens" to "anon";

grant insert on table "public"."user_google_tokens" to "anon";

grant references on table "public"."user_google_tokens" to "anon";

grant select on table "public"."user_google_tokens" to "anon";

grant trigger on table "public"."user_google_tokens" to "anon";

grant truncate on table "public"."user_google_tokens" to "anon";

grant update on table "public"."user_google_tokens" to "anon";

grant delete on table "public"."user_google_tokens" to "authenticated";

grant insert on table "public"."user_google_tokens" to "authenticated";

grant references on table "public"."user_google_tokens" to "authenticated";

grant select on table "public"."user_google_tokens" to "authenticated";

grant trigger on table "public"."user_google_tokens" to "authenticated";

grant truncate on table "public"."user_google_tokens" to "authenticated";

grant update on table "public"."user_google_tokens" to "authenticated";

grant delete on table "public"."user_google_tokens" to "service_role";

grant insert on table "public"."user_google_tokens" to "service_role";

grant references on table "public"."user_google_tokens" to "service_role";

grant select on table "public"."user_google_tokens" to "service_role";

grant trigger on table "public"."user_google_tokens" to "service_role";

grant truncate on table "public"."user_google_tokens" to "service_role";

grant update on table "public"."user_google_tokens" to "service_role";

grant select on table "public"."user_settings" to "anon";

grant select on table "public"."user_settings" to "authenticated";

grant delete on table "public"."user_settings" to "service_role";

grant insert on table "public"."user_settings" to "service_role";

grant references on table "public"."user_settings" to "service_role";

grant select on table "public"."user_settings" to "service_role";

grant trigger on table "public"."user_settings" to "service_role";

grant truncate on table "public"."user_settings" to "service_role";

grant update on table "public"."user_settings" to "service_role";

create policy "Users can access their own chats"
on "public"."chats"
as permissive
for all
to public
using ((auth.uid() = user_id));


create policy "Allow authenticated users to insert messages"
on "public"."messages"
as permissive
for insert
to public
with check ((EXISTS ( SELECT 1
   FROM chats
  WHERE ((chats.id = messages.chat_id) AND (chats.user_id = auth.uid())))));


create policy "Allow authenticated users to select messages"
on "public"."messages"
as permissive
for select
to public
using ((EXISTS ( SELECT 1
   FROM chats
  WHERE ((chats.id = messages.chat_id) AND (chats.user_id = auth.uid())))));


create policy "Users can only access their own Google tokens"
on "public"."user_google_tokens"
as permissive
for all
to public
using ((auth.uid() = user_id));



