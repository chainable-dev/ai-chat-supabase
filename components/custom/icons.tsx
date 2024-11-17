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

export const ArrowUpIcon = ({ size = 16, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={cn("fill-current", className)}
  >
    <path d="M8 1L3 6h2v6h6V6h2L8 1z" />
  </svg>
);

export const PaperclipIcon = ({ size = 16, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={cn("fill-current", className)}
  >
    <path d="M4 8l4-4 4 4-4 4-4-4z" />
  </svg>
);

export const StopIcon = ({ size = 16, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={cn("fill-current", className)}
  >
    <rect width="16" height="16" />
  </svg>
);

export const MessageIcon = ({ size = 16, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={cn("fill-current", className)}
  >
    <path d="M2.891 10.403l.092.23c.246.612.517 1.472.517 2.367 0 .359-.044.713-.112 1.05.308-.105.626-.234.941-.392.55-.274 1.01-.597 1.38-.906l.515-.43.663.097c.36.053.732.08 1.113.08 3.784 0 6.5-2.644 6.5-5.5S11.784 2 8 2C4.216 2 1.5 4.644 1.5 7.5c0 1.182.442 2.293 1.231 3.215l.16.188zM2.814 15.765C1.761 16 1 16 1 16s.433-.69.729-1.563c.154-.454.271-.956.271-1.437 0-.617-.193-1.271-.409-1.81C.592 10.022 0 8.572 0 7c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7c-.453 0-.897-.033-1.329-.096-.445.371-1.002.762-1.671 1.096-.766.383-1.533.62-2.186.765z" />
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

// Add any other icons you need...
