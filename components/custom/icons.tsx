import { cn } from '@/lib/utils';

interface IconProps {
  size?: number;
  className?: string;
}

export const PlusIcon = ({ size = 16, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={cn("stroke-current", className)}
  >
    <path d="M8 1v14M1 8h14" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const VercelIcon = ({ size = 16, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={cn("fill-current", className)}
  >
    <path d="M8 1L16 15H0L8 1Z" />
  </svg>
);

export const SidebarLeftIcon = ({ size = 16, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={cn("fill-current", className)}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.245 2.5H14.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H6.245V2.5ZM4.995 2.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H4.995V2.5ZM0 1H1.5H14.5H16V2.5V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V2.5V1Z"
    />
  </svg>
);

export const ChevronDownIcon = ({ size = 16, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={cn("fill-current", className)}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0607 6.75L11.5303 7.28033L8.70711 10.1036C8.31658 10.4941 7.68342 10.4941 7.29289 10.1036L4.46967 7.28033L3.93934 6.75L5 5.68934L5.53033 6.21967L8 8.68934L10.4697 6.21967L11 5.68934L12.0607 6.75Z"
    />
  </svg>
);

// Add more icons as needed...
