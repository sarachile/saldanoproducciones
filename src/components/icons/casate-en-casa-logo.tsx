import { cn } from "@/lib/utils";

export const CasateEnCasaLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("w-24 h-24", className)}
    aria-labelledby="casate-en-casa-logo-title"
  >
    <title id="casate-en-casa-logo-title">Logo Cásate en Casa</title>
    <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <path d="M12.000002,15.5 C10.895432,15.5 10.000002,14.60457 10.000002,13.5 C10.000002,12.39543 12.000002,10.5 12.000002,10.5 C12.000002,10.5 14.000002,12.39543 14.000002,13.5 C14.000002,14.60457 13.104572,15.5 12.000002,15.5 Z" fill="currentColor"></path>
    </g>
  </svg>
);
