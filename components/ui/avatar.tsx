<<<<<<< HEAD
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"
=======
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
=======
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
      className
    )}
    {...props}
  />
<<<<<<< HEAD
))
Avatar.displayName = AvatarPrimitive.Root.displayName
=======
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
<<<<<<< HEAD
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName
=======
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
=======
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
      className
    )}
    {...props}
  />
<<<<<<< HEAD
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
=======
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
