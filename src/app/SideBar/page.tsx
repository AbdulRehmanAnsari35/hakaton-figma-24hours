"use client"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command";
  import {
    LayoutDashboard,
    Newspaper,
    Folders,
    CreditCard,
    Settings,
    User,
  } from "lucide-react";
  import Link from "next/link";
  
  const SideBar = () => {
    return (
      <div className="hidden md:block h-[100vh] w-[350px] bg-secondary p-4">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Link href="/Dashboard" className="flex items-center gap-2 w-full">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
              </CommandItem>
  
              <CommandItem>
                <Link href="/BulkUpload" className="flex items-center gap-2 w-full">
                  <Newspaper className="h-4 w-4" />
                  Upload Product Data
                </Link>
              </CommandItem>
  
              <CommandItem>
                <Link href="#" className="flex items-center gap-2 w-full">
                  <Folders className="h-4 w-4" />
                  Categories
                </Link>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <Link href="#" className="flex items-center gap-2 w-full">
                  <User className="h-4 w-4" />
                  Profile
                </Link>
              </CommandItem>
  
              <CommandItem>
                <Link href="#" className="flex items-center gap-2 w-full">
                  <CreditCard className="h-4 w-4" />
                  Billing
                </Link>
              </CommandItem>
  
              <CommandItem>
                <Link href="#" className="flex items-center gap-2 w-full">
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    );
  };
  
  export default SideBar;
  