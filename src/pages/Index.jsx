import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-8 h-8" />
          <span>Acme Inc</span>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
          <a href="/" className="transition-colors text-muted-foreground hover:text-foreground">Home</a>
          <a href="/about" className="transition-colors text-muted-foreground hover:text-foreground">About</a>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl">Welcome to Our Website</h1>
          <p className="mt-4">This is a placeholder text for the main content area. Feel free to customize it.</p>
        </div>
      </main>
      <footer className="border-t py-4 text-center">
        © 2023 Your Company Name
      </footer>
    </div>
  );
};

export default Index;