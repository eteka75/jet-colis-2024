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
import UpdateProfileForm from '@/components/forms/FormeEditProfile';
import Step1 from '@/components/forms/AddTrajet/Step1';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/common/ui/top-page-header';
import {
  LineCover,
  LineDescription,
  LineHeader,
} from '@/components/common/ui/pages-title';
import Notifier from './ui/Notifier';

const Page = async () => {
  // const user = authMiddleware();
  const lists = [
    { text: 'Accueil', href: '/' },
    { text: 'Trajets', href: '/trajets' },
    { text: 'Nouvelle offre' },
  ];
  return (
    <SlimLayout>
      <div className="bg-accent md:h-min pb-8">
        <NavBreadcrumb items={lists} />
        <div className="container">
          <div className="md:w-9/12 max-w-screen-md">
            <Card>
              <CardContent className="p-4 md:p-6">
                <Step1 />
              </CardContent>
            </Card>
          </div>
          <div className="md:w-3/12"></div>

          <div className="grid_gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8 hidden">
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
                        className="h-44"
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
                        <SelectTrigger id="status" aria-label="Select status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Active</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="status">Type de colis</Label>
                      <Select>
                        <SelectTrigger id="status" aria-label="Select status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Active</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
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
        </div>
      </div>
    </SlimLayout>
  );
};

export default Page;
