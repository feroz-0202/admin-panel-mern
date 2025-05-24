import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UsersIcon,
  ShoppingBagIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Users', href: '/users', icon: UsersIcon },
  { name: 'Products', href: '/products', icon: ShoppingBagIcon },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  // Helper for avatar initials
  const getInitials = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50">
      {/* Sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:inset-y-0 z-50">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white/60 backdrop-blur-xl border-r border-gray-200 shadow-xl px-6 pb-4 pt-6">
          <div className="flex h-16 shrink-0 items-center justify-center mb-4">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Admin Dashboard</span>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`
                          group flex gap-x-3 rounded-xl p-2 text-base leading-6 font-semibold transition-all duration-150
                          ${
                            location.pathname === item.href
                              ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white shadow-lg scale-105'
                              : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-100/60'
                          }
                        `}
                      >
                        <item.icon
                          className={`h-6 w-6 shrink-0 ${location.pathname === item.href ? 'text-white' : 'text-gray-400 group-hover:text-indigo-600'}`}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white/80 backdrop-blur-xl px-6 pb-4 pt-6">
                  <div className="flex h-16 shrink-0 items-center justify-center mb-4">
                    <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Admin Dashboard</span>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className={`
                                  group flex gap-x-3 rounded-xl p-2 text-base leading-6 font-semibold transition-all duration-150
                                  ${
                                    location.pathname === item.href
                                      ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white shadow-lg scale-105'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-100/60'
                                  }
                                `}
                              >
                                <item.icon
                                  className={`h-6 w-6 shrink-0 ${location.pathname === item.href ? 'text-white' : 'text-gray-400 group-hover:text-indigo-600'}`}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:pl-72 min-h-screen">
        {/* Navbar */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white/60 backdrop-blur-xl shadow-md px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1"></div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              {/* Profile section */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center shadow-md border-2 border-white">
                  {user?.name ? (
                    <span className="text-white font-bold text-lg select-none">
                      {getInitials(user.name)}
                    </span>
                  ) : (
                    <UserCircleIcon className="h-8 w-8 text-white/80" />
                  )}
                </div>
                <span className="text-base font-semibold text-gray-900 drop-shadow-sm">
                  {user?.name}
                </span>
                <button
                  onClick={logout}
                  className="ml-2 flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-1.5 text-sm font-bold text-white shadow-md hover:scale-105 hover:from-pink-500 hover:to-indigo-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 py-10 min-h-screen bg-transparent">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
} 