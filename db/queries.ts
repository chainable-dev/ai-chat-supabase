import { AuthError } from '@supabase/supabase-js';
import type { Client, Database } from '../lib/supabase/types';
import { supabase } from './storage';

type Tables = Database['public']['Tables'];
type User = Tables['users']['Row'];
type Chat = Tables['chats']['Row'];
type Message = Tables['messages']['Row'];
type Vote = Tables['votes']['Row'];
type Document = Tables['documents']['Row'];
type Suggestion = Tables['suggestions']['Row'];
type FileUpload = Tables['file_uploads']['Row'];

export async function getSessionQuery(client: Client): Promise<User | null> {
  const {
    data: { user },
    error,
  } = await client.auth.getUser();

  if (error) {
    throw {
      message: error.message,
      status: error.status || 500,
    } as AuthError;
  }

  return user;
}

export async function getUserByIdQuery(client: Client, id: string): Promise<User> {
  const { data: user, error } = await client
    .from('users')
    .select()
    .eq('id', id)
    .single();

  if (error) {
    throw {
      message: error.message,
      status: error?.code ? 400 : 500,
    } as AuthError;
  }

  return user;
}

export async function getUserQuery(client: Client, email: string): Promise<User> {
  const { data: users, error } = await client
    .from('users')
    .select()
    .eq('email', email)
    .single();

  if (error) throw error;
  return users;
}

export async function saveChatQuery(
  client: Client,
  {
    id,
    user_id,
    title,
  }: {
    id: string;
    user_id: string;
    title: string;
  }
): Promise<void> {
  const { error } = await client.from('chats').insert({
    id,
    user_id,
    title,
  });

  if (error) throw error;
}

export async function getChatsByUserIdQuery(
  client: Client,
  { user_id }: { user_id: string }
): Promise<Chat[]> {
  const { data: chats, error } = await client
    .from('chats')
    .select()
    .eq('user_id', user_id)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return chats;
}

export async function getChatByIdQuery(client: Client, { id }: { id: string }): Promise<Chat | null> {
  const { data: chat, error } = await client
    .from('chats')
    .select()
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null;
    }
    throw error;
  }
  return chat;
}

export async function getMessagesByChatIdQuery(
  client: Client,
  { id }: { id: string }
): Promise<Message[]> {
  const { data: messages, error } = await client
    .from('messages')
    .select()
    .eq('chat_id', id)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return messages;
}

export async function saveMessagesQuery(
  client: Client,
  {
    chat_id,
    messages,
  }: {
    chat_id: string;
    messages: Tables['messages']['Insert'][];
  }
): Promise<void> {
  const messagesWithChatId = messages.map((message) => ({
    ...message,
    chat_id,
  }));

  const { error } = await client.from('messages').insert(messagesWithChatId);

  if (error) throw error;
}

export async function voteMessageQuery(
  client: Client,
  {
    chat_id,
    message_id,
    is_upvoted,
  }: {
    chat_id: string;
    message_id: string;
    is_upvoted: boolean;
  }
): Promise<void> {
  const { data: message, error: messageError } = await client
    .from('messages')
    .select('id')
    .eq('id', message_id)
    .eq('chat_id', chat_id)
    .single();

  if (messageError || !message) {
    throw new Error('Message not found or does not belong to this chat');
  }

  const { error } = await client.from('votes').upsert(
    {
      chat_id,
      message_id,
      is_upvoted,
    },
    {
      onConflict: 'chat_id,message_id',
    }
  );

  if (error) throw error;
}

export async function getVotesByChatIdQuery(
  client: Client,
  { id }: { id: string }
): Promise<Vote[]> {
  const { data: votes, error } = await client
    .from('votes')
    .select()
    .eq('chat_id', id);

  if (error) throw error;
  return votes;
}

export async function getDocumentByIdQuery(
  client: Client,
  { id }: { id: string }
): Promise<Document | null> {
  const { data: documents, error } = await client
    .from('documents')
    .select()
    .eq('id', id)
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) throw error;
  return documents?.[0] || null;
}

export async function saveDocumentQuery(
  client: Client,
  {
    id,
    title,
    content,
    user_id,
  }: {
    id: string;
    title: string;
    content?: string;
    user_id: string;
  }
): Promise<void> {
  const { error } = await client.from('documents').insert({
    id,
    title,
    content,
    user_id,
  });

  if (error) throw error;
}

export async function getSuggestionsByDocumentIdQuery(
  client: Client,
  { document_id, user_id }: { document_id: string; user_id: string }
): Promise<Suggestion[]> {
  const { data: suggestions, error } = await client
    .from('suggestions')
    .select()
    .eq('document_id', document_id)
    .eq('user_id', user_id);

  if (error) throw error;
  return suggestions;
}

export async function saveSuggestionsQuery(
  client: Client,
  {
    document_id,
    document_created_at,
    original_text,
    suggested_text,
    description,
    user_id,
  }: {
    document_id: string;
    document_created_at: string;
    original_text: string;
    suggested_text: string;
    description?: string;
    user_id: string;
  }
): Promise<void> {
  const { error } = await client.from('suggestions').insert({
    document_id,
    document_created_at,
    original_text,
    suggested_text,
    description,
    user_id,
  });

  if (error) throw error;
}

export async function deleteDocumentsByIdAfterTimestampQuery(
  client: Client,
  { id, timestamp }: { id: string; timestamp: string }
): Promise<void> {
  const { error } = await client
    .from('documents')
    .delete()
    .eq('id', id)
    .gte('created_at', timestamp);

  if (error) throw error;
}

export async function getDocumentsByIdQuery(
  client: Client,
  { id }: { id: string }
): Promise<Document[]> {
  const { data: documents, error } = await client
    .from('documents')
    .select()
    .eq('id', id)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return documents;
}

export async function getChatWithMessagesQuery(
  client: Client,
  { id }: { id: string }
): Promise<(Chat & { messages: Message[] }) | null> {
  const { data: chat, error: chatError } = await client
    .from('chats')
    .select()
    .eq('id', id)
    .single();

  if (chatError) {
    if (chatError.code === 'PGRST116') {
      return null;
    }
    throw chatError;
  }

  const { data: messages, error: messagesError } = await client
    .from('messages')
    .select()
    .eq('chat_id', id)
    .order('created_at', { ascending: true });

  if (messagesError) throw messagesError;

  return {
    ...chat,
    messages: messages || [],
  };
}

type PostgrestError = {
  code: string;
  message: string;
  details: string | null;
  hint: string | null;
};

export function handleSupabaseError(error: PostgrestError | null): null {
  if (!error) return null;

  if (error.code === 'PGRST116') {
    return null;
  }

  throw error;
}

export async function fetchFiles(): Promise<FileUpload[]> {
  const { data, error } = await supabase
    .from('file_uploads')
    .select('*');

  if (error) {
    console.error('Error fetching files:', error);
    return [];
  }

  return data;
}
