import { cn } from '@/lib/utils';
import { FaPlus, FaPaperclip, FaTrash, FaArrowUp, FaSpinner } from 'react-icons/fa';

interface IconProps {
  size?: number;
  className?: string;
}

export const PlusIcon = ({ size = 16, className }: IconProps) => (
  <FaPlus size={size} className={cn(className)} />
);

export const PaperclipIcon = ({ size = 16, className }: IconProps) => (
  <FaPaperclip size={size} className={cn(className)} />
);

export const TrashIcon = ({ size = 16, className }: IconProps) => (
  <FaTrash size={size} className={cn(className)} />
);

export const ArrowUpIcon = ({ size = 16, className }: IconProps) => (
  <FaArrowUp size={size} className={cn(className)} />
);

export const LoaderIcon = ({ size = 16, className }: IconProps) => (
  <FaSpinner size={size} className={cn("animate-spin", className)} />
);

// Add any other icons you need...
