import Link from "next/link";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
export default function Header({ t, i18n }: { t: any, i18n: any }) {
  return (
    <div className="justify-between w-full items-center text-center mx-auto flex mt-6">
      <div className="flex space-x-8">
        <Link href="/">
          <div className="text-base transition-all duration-300 font-medium hover:text-white cursor-pointer">{t("header.home")}</div>
        </Link>
        <Link href="/projects">
          <div className="text-base transition-all duration-300 font-medium hover:text-white cursor-pointer">{t("header.projects")}</div>
        </Link>
      </div>
      <div className="flex space-x-2">
        <Link href="https://discord.com/users/716930725877907466" className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full">
          <i className="fab fa-discord"></i>
        </Link>
        <Link href="https://github.com/iamnullman" className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full">
          <i className="fab fa-github"></i>
        </Link>
        <Link href="https://twitter.com/iamnullman" className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full">
          <i className="fab fa-twitter"></i>
        </Link>
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full">
        <i className="fa-solid fa-language"></i>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                onClick={() => i18n.changeLanguage("tr")}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Turkish
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => i18n.changeLanguage("en")}
                  className={classNames(
                    t("lang") == "en" ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  English
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
      </div>
    </div>
  );
}
