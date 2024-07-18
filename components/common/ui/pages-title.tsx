import { cn } from '@/src/lib/utils';

export function LineCover({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('pb-4  border-b w-full clear-both', className)}
      {...props}
    />
  );
}
export function LineHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('font-bold', className)} {...props} />;
}

export function LineDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('text-sm opacity-70 clear-both w-full', className)}
      {...props}
    />
  );
}
