'use client';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { handleSignOut } from '@/src/lib/actions';
import { BadgeCheck, Gauge, PackagePlus } from 'lucide-react';
import Link from 'next/link';
import { BiMessageSquare } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoIosHelpCircleOutline, IoIosLogOut } from 'react-icons/io';
import { LuUser2 } from 'react-icons/lu';

// const LoginDropdownMenu = ({ user }: { user: User | undefined }) => {
//   const [loading, setLoading] = useState(false);

//   return (
// <div className="flex items-center justify-center">
//   <DropdownMenu>
//     <DropdownMenuTrigger asChild>
//       <Image
//         width={50}
//         height={50}
//         className="w-9 h-9 min-w-9 min-h-9 cursor-pointer md:ms-1 lg:ms-2  border-2 border-gray-200 rounded-full"
//         // src={userimg}
//         src={user?.image ? user?.image : userimg}
//         alt="User"
//       />
//       <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
//     </DropdownMenuTrigger>

//     <DropdownMenuContent
//       align="end"
//       className="shadow-inset_ min-w-[220px] max-w-[270px]  mt-1   border-slate-100 dark:border-accent _pointu"
//     >
//       <div className="absolute  z-0 top-[-4px] animate-accordion-up duration-1000 right-[5px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-slate-100 dark:border-b-slate-500"></div>

//       <DropdownMenuLabel>
//         <div
//           title={user?.name || 'Utilisateur'}
//           className="text-nowrap text-ellipsis overflow-hidden"
//         >
//           <Link href="/user">
//             {user?.name || 'Utilisateur'}
//             <br />
//             <div className="text-xs opacity-50">
//               {user?.profilId ? '@' + user.profilId : 'Mon profil'}
//             </div>
//           </Link>
//         </div>
//       </DropdownMenuLabel>
//       <DropdownMenuSeparator />
//       <DropdownMenuGroup>
//         <DropdownMenuItem>
//           <Link href="/user/" className="flex items-center py-1__">
//             <Gauge className="mr-2 h-4 w-4" /> Tableau de bord
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuItem>
//           <Link href="/user/profil" className="flex items-center py-1__">
//             <LuUser2 className="mr-2 h-4 w-4" /> Mon compte
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuItem>
//           <Link href="/user/messages" className="flex items-center py-1__">
//             <BiMessageSquare className="mr-2 h-4 w-4" /> Messagerie
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             <Link href="/travel-offers" className="flex items-center py-1__">
//               <GiReceiveMoney className="mr-2 h-4 w-4" />
//               Mes offres de livraison
//             </Link>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuItem>
//           <Link href="/dashboard" className="flex items-center py-1__">
//             <BadgeCheck className="mr-2 h-4 w-4" />
//             Colis reçus
//           </Link>
//         </DropdownMenuItem>

//         <DropdownMenuSeparator />
//       </DropdownMenuGroup>
//       <DropdownMenuItem>
//         <Link href="/help" className="flex items-center py-1__">
//           <IoIosHelpCircleOutline className="mr-2 h-4 w-4" />
//           Aide
//         </Link>
//       </DropdownMenuItem>
//       <DropdownMenuSeparator />
//       <DropdownMenuItem>
//         <form action={handleSignOut}>
//           <button type="submit" className="flex items-center py-1__">
//             <IoIosLogOut className="mr-2 h-4 w-4" />{' '}
//             {loading ? 'Signing out...' : 'Sign out'}
//           </button>
//         </form>
//       </DropdownMenuItem>
//     </DropdownMenuContent>
//   </DropdownMenu>
// </div>
//   );
// };

// export default LoginDropdownMenu;

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { signOut, useSession } from 'next-auth/react';
import { GuestDropdownMenu } from './GuestDropdownMenu';

const LoginDropdownMenu = () => {
  const { data: session } = useSession();

  if (session && session?.user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-8 w-8 border dark:border-accent rounded-full"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={session.user?.image ?? ''}
                alt={session.user?.name ?? ''}
              />
              <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 text-xs" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/dashboard/" className="flex items-center  py-1__">
                <Gauge className="mr-2 h-4 w-4" /> Tableau de bord
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/user/profil" className="flex items-center py-1__">
                <LuUser2 className="mr-2 h-4 w-4" /> Mon compte
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/user/messages" className="flex items-center py-1__">
                <BiMessageSquare className="mr-2 h-4 w-4" /> Messagerie
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  href="/travel-offers"
                  className="flex items-center py-1__"
                >
                  <PackagePlus className="mr-2 h-4 w-4" />
                  Mes offres de livraison
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/dashboard" className="flex items-center py-1__">
                <BadgeCheck className="mr-2 h-4 w-4" />
                Colis reçus
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/help" className="flex items-center py-1__">
              <IoIosHelpCircleOutline className="mr-2 h-4 w-4" />
              Aide
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <form action={handleSignOut}>
              <button type="submit" className="flex items-center py-1__">
                <IoIosLogOut className="mr-2 h-4 w-4" /> Se déconnecter
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    return <GuestDropdownMenu />;
  }
};
export default LoginDropdownMenu;
