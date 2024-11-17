import { ComponentProps } from 'react';

import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { BetterTooltip } from '@/components/ui/tooltip';

import { Button } from '../ui/button';
import { FaBars } from 'react-icons/fa';

export function SidebarToggle({
  className,
}: ComponentProps<typeof SidebarTrigger>) {
  const { toggleSidebar } = useSidebar();

  return (
    <BetterTooltip content="Toggle Sidebar" align="start">
      <Button
        onClick={toggleSidebar}
        variant="outline"
        className={`md:px-2 md:h-fit ${className}`}
      >
        <FaBars size={16} />
      </Button>
    </BetterTooltip>
  );
}
