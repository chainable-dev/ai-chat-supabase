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

export const SupabaseIcon = ({ size = 32, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 109 113"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path
      d="M63.708 110.284C60.848 113.885 55.05 111.912 54.982 107.314L53.975 40.0627H99.194C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.708 110.284Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M63.708 110.284C60.848 113.885 55.05 111.912 54.982 107.314L53.975 40.0627H99.194C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.708 110.284Z"
      fill="url(#paint1_linear)"
      fillOpacity="0.2"
    />
    <path
      d="M45.317 2.07103C48.177 -1.53037 53.975 0.442937 54.043 5.041L54.485 72.2922H9.266C1.07642 72.2922 -3.49236 62.8321 1.60138 56.4175L45.317 2.07103Z"
      fill="#3ECF8E"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="53.975"
        y1="54.974"
        x2="94.163"
        y2="71.829"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#249361" />
        <stop offset="1" stopColor="#3ECF8E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="36.156"
        y1="30.578"
        x2="54.484"
        y2="65.081"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// Add more icons as needed...
