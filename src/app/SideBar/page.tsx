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
              <CommandItem asChild>
                <Link href="/Dashboard" className="flex items-center gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
              </CommandItem>
  
              <CommandItem asChild>
                <Link href="/BulkUpload" className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4" />
                  Upload Product Data
                </Link>
              </CommandItem>
  
              <CommandItem asChild>
                <Link href="#" className="flex items-center gap-2">
                  <Folders className="h-4 w-4" />
                  Categories
                </Link>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem asChild>
                <Link href="#" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </Link>
              </CommandItem>
  
              <CommandItem asChild>
                <Link href="#" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Billing
                </Link>
              </CommandItem>
  
              <CommandItem asChild>
                <Link href="#" className="flex items-center gap-2">
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
  