// // components/Navbar.tsx
// import React from 'react';
// import {
//   FiMail,
//   FiBell,
//   FiSend,
//   FiUser,
//   FiSun,
//   FiMoon,
//   FiFacebook,
//   FiTwitter,
// } from 'react-icons/fi';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from '@/components/ui/navigation-menu';

// import { FaFacebook } from 'react-icons/fa6';
// import { MdOutlineCardGiftcard, MdOutlineLightMode } from 'react-icons/md';
// import { BsTwitterX } from 'react-icons/bs';
// import { Button } from '../ui/button';
// import Link from 'next/link';
// interface NavbarProps {
//   isAuthenticated: boolean;
//   darkMode: boolean;
//   toggleDarkMode: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({
//   isAuthenticated,
//   darkMode,
//   toggleDarkMode,
// }) => {
//   return (
//     <nav className="bg-white dark:bg-gray-800 border-b px-4 py-3">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <a
//             href="#"
//             className="text-xl uppercase font-bold me-8 text-gray-800 dark:text-white"
//           >
//             JetColis
//           </a>
//         </div>
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Recherche..."
//             className="px-2 py-1 border border-slate-200 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           />
//           {!isAuthenticated ? (
//             <>
//               <a
//                 href="#"
//                 className="text-gray-600 dark:text-gray-300 p-2 rounded-sm hover:bg-slate-100"
//               >
//                 <FiBell className="h-6 w-6" />
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-600 dark:text-gray-300 p-2 rounded-sm hover:bg-slate-100"
//               >
//                 <FiMail className="h-6 w-6" />
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-600 dark:text-gray-300 p-2 rounded-sm hover:bg-slate-100"
//               >
//                 <FiUser className="h-6 w-6" />
//               </a>
//             </>
//           ) : (
//             <>
//               {/* <a href="#" className="text-gray-600 dark:text-gray-300">
//                 Créer un compte
//               </a>
//               <a href="#" className="text-gray-600 dark:text-gray-300">
//                 Se connecter
//               </a> */}
//             </>
//           )}
//           {/* <button className="text-gray-600 dark:text-gray-300">
//             <FaFacebook className="h-5 font-light w-5" />
//           </button>
//           <button className="text-gray-600 dark:text-gray-300">
//             <BsTwitterX className="h-5 font-light w-5" />
//           </button> */}
//           <button
//             onClick={toggleDarkMode}
//             className="text-gray-600 p-2 rounded-sm hover:bg-slate-100 dark:text-gray-300"
//           >
//             {darkMode ? (
//               <FiSun className="h-6 w-6 " />
//             ) : (
//               <MdOutlineLightMode className="h-5 font-light w-5" />
//             )}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
