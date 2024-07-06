import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRightIcon, Blocks } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Balance from 'react-wrap-balancer';

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        'mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]',
        className
      )}
      {...props}
    />
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        'max-w-[750px] text-center md:text-lg font-light text-foreground',
        className
      )}
      {...props}
    />
  );
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center space-x-4 py-4 md:pb-10',
        className
      )}
      {...props}
    />
  );
}

function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      <Blocks className="h-4 w-4" />{' '}
      <Separator className="mx-2 h-4" orientation="vertical" />{' '}
      <span>Des milliers d'offres d'offres chaque jours</span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  );
}

export {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
  Announcement,
};
