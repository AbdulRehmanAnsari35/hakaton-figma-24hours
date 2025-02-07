"use client"; // ✅ Ensure it's a client component

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from "lucide-react";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="hidden md:block h-[100vh] w-[350px] bg-secondary p-4">
      {/* ✅ FIX: Ensure Command is rendered properly inside a div */}
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem asChild>
              <Link href="/Dashboard" className="flex items-center">
                <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
              </Link>
            </CommandItem>

            <CommandItem asChild>
              <Link href="/BulkUpload" className="flex items-center">
                <Newspaper className="mr-2 h-4 w-4" /> Upload Product Data
              </Link>
            </CommandItem>

            <CommandItem asChild>
              <Link href="#" className="flex items-center">
                <Folders className="mr-2 h-4 w-4" /> Categories
              </Link>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Settings">
            <CommandItem asChild>
              <Link href="#" className="flex items-center">
                <User className="mr-2 h-4 w-4" /> Profile
              </Link>
            </CommandItem>

            <CommandItem asChild>
              <Link href="#" className="flex items-center">
                <CreditCard className="mr-2 h-4 w-4" /> Billing
              </Link>
            </CommandItem>

            <CommandItem asChild>
              <Link href="#" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" /> Settings
              </Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default SideBar;
