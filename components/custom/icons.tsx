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

export const BotIcon = ({ size = 16, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={cn("fill-current", className)}
  >
    <path d="M8.75 2.8V5H9c2.973 0 5.441 2.162 5.917 5H16v3h-1v1.5V16h-1.5H2.5H1v-1.5V13H0v-3h1.083C1.559 7.162 4.027 5 7 5h.75V2.8C7.802 2.54 7.5 2.055 7.5 1.5 7.5.67 8.172 0 9 0s1.5.67 1.5 1.5c0 .555-.302 1.04-.75 1.3zM7 6.5C4.515 6.5 2.5 8.515 2.5 11v3.5h11V11c0-2.485-2.015-4.5-4.5-4.5H7zm.25 4.75c0 .966-.784 1.75-1.75 1.75s-1.75-.784-1.75-1.75S4.534 9.5 5.5 9.5s1.75.784 1.75 1.75zm3.5 1.75c.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75-1.75.784-1.75 1.75.784 1.75 1.75 1.75z" />
  </svg>
);

export const UserIcon = ({ size = 16, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={cn("fill-current", className)}
  >
    <path d="M7.75 0C5.955 0 4.5 1.455 4.5 3.25v.5c0 1.795 1.455 3.25 3.25 3.25h.5c1.795 0 3.25-1.455 3.25-3.25v-.5C11.5 1.455 10.045 0 8.25 0h-.5zM6 3.25C6 2.284 6.784 1.5 7.75 1.5h.5c.966 0 1.75.784 1.75 1.75v.5c0 .966-.784 1.75-1.75 1.75h-.5C6.784 5.5 6 4.716 6 3.75v-.5zM2.5 14.5v-1.329C3.32 11.538 4.993 10.5 6.83 10.5h2.341c1.837 0 3.51 1.038 4.329 2.671V14.5H2.5zm4.33-7C4.355 7.5 2.106 8.939 1.069 11.186L1 11.335V13v2.25V16h.75h12.5H15v-.75V13v-1.665l-.069-.149C13.894 8.939 11.645 7.5 9.17 7.5H6.83z" />
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

// Add more icons as needed...
