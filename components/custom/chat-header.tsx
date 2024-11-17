'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useWindowSize } from 'usehooks-ts';

import { ModelSelector } from '../../components/custom/model-selector';
import { SidebarToggle } from '../../components/custom/sidebar-toggle';
import { Button } from '../../components/ui/button';
import { BetterTooltip } from '../../components/ui/tooltip';
import { useSidebar } from '../../components/ui/sidebar';
import { FaPlus, FaRocket } from 'react-icons/fa';

interface ChatHeaderProps {
  selectedModelId: string;
}

export function ChatHeader({ selectedModelId }: ChatHeaderProps) {
  const router = useRouter();
  const { open } = useSidebar();
  const { width: windowWidth } = useWindowSize();

  const handleNewChat = () => {
    router.push('/');
    router.refresh();
  };

  return (
    <header className="sticky top-0 flex items-center gap-2 bg-background px-2 py-1.5 md:px-2">
      <SidebarToggle />
      
      {(!open || windowWidth < 768) && (
        <BetterTooltip content="New Chat">
          <Button
            variant="outline"
            className="order-2 ml-auto px-2 md:order-1 md:ml-0 md:h-fit"
            onClick={handleNewChat}
            aria-label="New Chat"
          >
            <FaPlus className="h-4 w-4" title="New Chat" />
            <span className="md:sr-only">New Chat</span>
          </Button>
        </BetterTooltip>
      )}

      <ModelSelector
        selectedModelId={selectedModelId}
        className="order-1 md:order-2"
      />

      <Button
        className="order-4 hidden h-fit bg-zinc-900 px-2 py-1.5 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 md:ml-auto md:flex md:h-[34px]"
        asChild
      >
        <Link
          href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fai-chatbot"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Deploy with Vercel"
        >
          <FaRocket className="h-4 w-4" title="Deploy with Vercel" />
          <span className="ml-2">Deploy with Vercel</span>
        </Link>
      </Button>
    </header>
  );
}
