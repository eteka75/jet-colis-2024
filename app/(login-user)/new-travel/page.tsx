import { auth } from '@/auth';
import SlimLayout from '@/components/layouts/SlimLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { authMiddleware } from '@/src/lib/actions';
import { ChevronLeft, PlusCircle, Upload } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';
import NavBreadcrumb from './ui/NavBreadcrumb';
import Link from 'next/link';

const Page = async () => {
  // const user = authMiddleware();
  return (
    <SlimLayout>
      <NavBreadcrumb />
      <div className="bg-accente h-min">
        <div className="container">
          <div className="py-4 ">
            <form>
              <div className="mx-auto overflow-auto grid  flex-1 auto-rows-max gap-4">
                <div className="flex items-center gap-4">
                  <Link href="/">
                    <Button variant="outline" size="icon" className="h-7 w-7">
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Back</span>
                    </Button>
                  </Link>
                  <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    Nouvelle offre
                  </h1>
                  <Badge variant="outline" className="ml-auto sm:ml-0">
                    Trajet
                  </Badge>
                  <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Link href={'/'}>
                      {' '}
                      <Button variant="outline" size="sm">
                        Annuler
                      </Button>
                    </Link>
                    <Button type="submit" size="sm">
                      Save Product
                    </Button>
                  </div>
                </div>
                <form className="w-full max-w-lg ">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                      />
                      <p className="text-red-500 text-xs italic">
                        Please fill out this field.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password"
                        type="password"
                        placeholder="******************"
                      />
                      <p className="text-gray-600 text-xs italic">
                        Make it as long and as crazy as you'd like
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-city"
                      >
                        City
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="text"
                        placeholder="Albuquerque"
                      />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-state"
                      >
                        State
                      </label>
                      <div className="relative">
                        <select
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                        >
                          <option>New Mexico</option>
                          <option>Missouri</option>
                          <option>Texas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-zip"
                      >
                        Zip
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        type="text"
                        placeholder={'90210'}
                      />
                    </div>
                  </div>
                </form>

                <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                  <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Voyage</CardTitle>
                        <CardDescription>Détail sur le voyage</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 ">
                          <div className="grid gap-3">
                            <Label htmlFor="name">Nom</Label>
                            <Input
                              id="name"
                              type="text"
                              className="w-full py-1"
                              defaultValue="Gamer Gear Pro Controller"
                            />
                          </div>
                          <div className="md:grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                              <Label htmlFor="name">Lieu de départ</Label>
                              <Input
                                id="name"
                                type="text"
                                className="w-full py-1"
                                defaultValue="Gamer Gear Pro Controller"
                              />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="name">Destination</Label>
                              <Input
                                id="name"
                                type="text"
                                className="w-full py-1"
                                defaultValue="Gamer Gear Pro Controller"
                              />
                            </div>
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                              id="description"
                              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                              className="min-h-24"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <div>
                      <div className=" items-center gap-2 md:justify-end  md:flex">
                        <Link href={'/'}>
                          {' '}
                          <Button variant="outline" size="sm">
                            Annuler
                          </Button>
                        </Link>
                        <Button type="submit" size="sm">
                          Save Product
                        </Button>
                      </div>
                    </div>

                    {/* <Card x-chunk="dashboard-07-chunk-2">
                    <CardHeader>
                      <CardTitle>Product Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 sm:grid-cols-3">
                        <div className="grid gap-3">
                          <Label htmlFor="category">Category</Label>
                          <Select>
                            <SelectTrigger
                              id="category"
                              aria-label="Select category"
                            >
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="clothing">Clothing</SelectItem>
                              <SelectItem value="electronics">
                                Electronics
                              </SelectItem>
                              <SelectItem value="accessories">
                                Accessories
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="subcategory">
                            Subcategory (optional)
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="subcategory"
                              aria-label="Select subcategory"
                            >
                              <SelectValue placeholder="Select subcategory" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="t-shirts">T-Shirts</SelectItem>
                              <SelectItem value="hoodies">Hoodies</SelectItem>
                              <SelectItem value="sweatshirts">
                                Sweatshirts
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card> */}
                  </div>
                  <div className="grid auto-rows-max items-start gap-4 lg:gap-6">
                    <Card x-chunk="dashboard-07-chunk-3">
                      <CardHeader>
                        {/* <CardTitle className="text-lg">Type de colis</CardTitle> */}
                        <CardDescription>
                          Type de colis acceptés pour ce trajet
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="status">Type de colis</Label>
                            <Select>
                              <SelectTrigger
                                id="status"
                                aria-label="Select status"
                              >
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="published">
                                  Active
                                </SelectItem>
                                <SelectItem value="archived">
                                  Archived
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="status">Type de colis</Label>
                            <Select>
                              <SelectTrigger
                                id="status"
                                aria-label="Select status"
                              >
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="published">
                                  Active
                                </SelectItem>
                                <SelectItem value="archived">
                                  Archived
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card
                      className="overflow-hidden"
                      x-chunk="dashboard-07-chunk-4"
                    >
                      <CardHeader>
                        {/* <CardTitle className="text-md">
                          Product Images
                        </CardTitle> */}
                        <CardDescription>Image du voyage</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-2">
                          <button className="flex aspect-square_w-full h-32 items-center justify-center rounded-md border border-dashed">
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Upload</span>
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 md:hidden">
                  <Button variant="outline" size="sm">
                    Discard
                  </Button>
                  <Button size="sm">Save Product</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SlimLayout>
  );
};

export default Page;
