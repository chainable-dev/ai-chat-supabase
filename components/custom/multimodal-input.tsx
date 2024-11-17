'use client';

import { Attachment, Message } from 'ai';
import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { FaArrowUp, FaPaperclip } from 'react-icons/fa';

export function MultimodalInput({
  chatId,
  input,
  setInput,
  handleSubmit,
  isLoading,
  attachments,
  setAttachments,
}: {
  chatId: string;
  input: string;
  setInput: (value: string) => void;
  handleSubmit: () => void;
  isLoading: boolean;
  attachments: Array<Attachment>;
  setAttachments: (attachments: Array<Attachment>) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="relative w-full flex flex-col gap-4">
      <Textarea
        ref={textareaRef}
        value={input}
        onChange={handleInput}
        placeholder="Type your message..."
        className="resize-none"
      />
      <Button
        onClick={handleSubmit}
        disabled={isLoading || input.length === 0}
      >
        <FaArrowUp size={14} />
      </Button>
      <Button
        onClick={() => {/* handle file upload */}}
        variant="outline"
      >
        <FaPaperclip size={14} />
      </Button>
    </div>
  );
}
