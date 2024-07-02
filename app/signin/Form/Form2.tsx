import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Form2 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto md:my-20 border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-2">
          <Button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-md">
            <FaGithub className="w-4 h-4" />
            <span>Github</span>
          </Button>
          <Button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-md">
            <FaGoogle className="w-4 h-4" />
            <span>Google</span>
          </Button>
          <Separator className="my-4">OR CONTINUE WITH</Separator>
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Create account
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Form2;
