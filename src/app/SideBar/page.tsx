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
      <div className="hidden md:block h-[100vh] w-[350px] bg-secondary">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <Link href="/Dashboard">Dashboard</Link>
              </CommandItem>
  
              <CommandItem>
                <Newspaper className="mr-2 h-4 w-4" />
                <Link href="/BulkUpload">Upload Product Data</Link>
              </CommandItem>
  
              <CommandItem>
                <Folders className="mr-2 h-4 w-4" />
                <Link href="#">Categories</Link>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </CommandItem>
  
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                Billing
              </CommandItem>
  
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    );
  };
  
  export default SideBar;
  