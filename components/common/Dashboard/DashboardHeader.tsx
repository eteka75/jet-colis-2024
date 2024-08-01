'use client';
import React, { ReactNode } from 'react';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components//ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components//ui/chart';
import { Separator } from '@/components//ui/separator';
const DashboardHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-between space-y-2 ">
      <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight mb-4">
        {children}
      </h1>
    </div>
  );
};

export default DashboardHeader;
