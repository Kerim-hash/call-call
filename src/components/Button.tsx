import { cn } from "@/lib/utils";

export default function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(buttonClassName, className)} {...props} />;
}

export const buttonClassName =
  "bg-foreground !text-popover hover:bg-primary/90 transition-all duration-500 flex items-center justify-center gap-2 rounded-full px-3 py-2 font-semibold text-white transition-colors hover:bg-primary  active:bg-blue-600 disabled:bg-gray-200";
