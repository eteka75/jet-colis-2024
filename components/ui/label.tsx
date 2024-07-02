<<<<<<< HEAD
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)
=======
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const labelVariants = cva(
  'text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
<<<<<<< HEAD
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
=======
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
