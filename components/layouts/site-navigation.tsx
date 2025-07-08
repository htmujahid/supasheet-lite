"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import { Trans } from "@/components/makerkit/trans";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { If } from "../makerkit/if";
import { SidebarTrigger } from "../ui/sidebar";
import { SiteNavigationItem } from "./site-navigation-item";

/**
 * Add your navigation links here
 *
 * @example
 *
 * {
 *   FAQ: {
 *     label: 'marketing:faq',
 *     path: '/faq',
 *   },
 *   Pricing: {
 *     label: 'marketing:pricing',
 *     path: '/pricing',
 *   },
 * }
 */

const links: Record<
  string,
  {
    label: string;
    path: string;
  }
> = {
  /*
    FAQ: {
      label: 'marketing:faq',
      path: '/faq',
    },
     */
};

const sidebarPaths = ["/home/resources"];

export function SiteNavigation() {
  const pathname = usePathname();

  const NavItems = Object.values(links).map((item) => {
    return (
      <SiteNavigationItem key={item.path} path={item.path}>
        <Trans i18nKey={item.label} />
      </SiteNavigationItem>
    );
  });

  return (
    <>
      <div className={"hidden items-center justify-center md:flex"}>
        <NavigationMenu className={"px-4 py-2"}>
          <NavigationMenuList className={"space-x-5"}>
            {NavItems}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className={"flex justify-start sm:items-center md:hidden"}>
        <If condition={sidebarPaths.map((path) => pathname.startsWith(path))}>
          <SidebarTrigger
            className="size-8 opacity-80"
            iconClassName="size-5"
          />
        </If>
        <MobileDropdown />
      </div>
    </>
  );
}

function MobileDropdown() {
  if (Object.values(links).length === 0) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger aria-label={"Open Menu"}>
        <Menu className={"h-8 w-8"} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className={"w-full"}>
        {Object.values(links).map((item) => {
          const className = "flex w-full h-full items-center";

          return (
            <DropdownMenuItem key={item.path} asChild>
              <Link className={className} href={item.path}>
                <Trans i18nKey={item.label} />
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
