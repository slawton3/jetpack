import type { User } from "@clerk/nextjs/server";
import { DashboardIcon, ExitIcon, GearIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn, getUserEmail } from "@/lib/utils";

interface AuthDropdownProps extends ButtonProps {
  user: User | null;
}

export function AuthDropdown({ user, className, ...props }: AuthDropdownProps) {
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  const email = getUserEmail(user);

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              className={cn("size-8 rounded-full", className)}
              {...props}
            >
              <Avatar className="size-8">
                <AvatarImage src={user.imageUrl} alt={user.username ?? ""} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <p className="cursor-not-allowed">
                  <DashboardIcon className="mr-2 size-4" aria-hidden="true" />
                  Dashboard
                  <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <p className="cursor-not-allowed">
                  <Icons.credit className="mr-2 size-4" aria-hidden="true" />
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <p className="cursor-not-allowed">
                  <GearIcon className="mr-2 size-4" aria-hidden="true" />
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </p>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/signout">
                <ExitIcon className="mr-2 size-4" aria-hidden="true" />
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button size="sm" className={cn(className)} {...props} asChild>
          <Link href="/signin">
            Sign In
            <span className="sr-only">Sign In</span>
          </Link>
        </Button>
      )}
    </>
  );
}
