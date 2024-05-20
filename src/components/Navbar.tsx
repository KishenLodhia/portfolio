// Importing necessary components and icons
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ui/mode-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";

// Defining the social media links and their details
const components: {
  title: string;
  href: string;
  description: string;
  icon: IconType;
}[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/kishenlodhia/",
    description: "View my LinkedIn profile!",
    icon: FaLinkedinIn,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/kishen_lodhia/",
    description: "Follow me on Instagram",
    icon: FaInstagram,
  },
  {
    title: "GitHub",
    href: "https://github.com/KishenLodhia",
    description: "Check out my Github repos!",
    icon: FaGithub,
  },
];

// Navbar component
export const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="md:flex flex-row p-5 items-center justify-center gap-1 hidden">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Navigation Menu Items */}
            <NavigationMenuItem className="hover:bg-accent hover:rounded px-3 py-2">
              <Link to={"/"}>Home</Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="hover:bg-accent hover:rounded px-3 py-2">
              <Link to={"/about"}>About</Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="hover:bg-accent hover:rounded px-3 py-2">
              <Link to={"/resume"}>Resume</Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="hover:bg-accent hover:rounded px-3 py-2">
              <Link to={"/portfolio"}>Portfolio</Link>
            </NavigationMenuItem>

            {/* Social Media Links */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Social</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-1 w-[300px] p-5 md:grid-cols-2 md:w-[550px]">
                  {components.map((component) => (
                    <MenuItem
                      key={component.title}
                      title={component.title}
                      link={component.href}
                      icon={<component.icon />}
                      description={component.description}
                    ></MenuItem>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-end sm:block md:hidden">
        <Sheet>
          <SheetTrigger>
            <div className="p-3 text-5xl">
              <CgMenuRight />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Where to?</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-center justify-center text-2xl py-10">
              <ul className="space-y-7 ">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <Separator />
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <Separator />

                <li>
                  <Link to={"/resume"}>Resume</Link>
                </li>
                <Separator />
                <li>
                  <Link to={"/portfolio"}>Portfolio</Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

// MenuItem component
interface MenuItemProps {
  title: string;
  description: string;
  icon?: ReactNode;
  link?: string;
}

const MenuItem = ({ title, description, icon, link }: MenuItemProps) => {
  return (
    <NavigationMenuLink href={link}>
      <div className="flex flex-row items-center hover:rounded-md hover:bg-accent">
        <div className="p-5 text-2xl">{icon}</div>

        <div>
          <div className="font-medium">{title}</div>
          <Separator />
          <div className="text-sm leading-snug text-muted-foreground">{description}</div>
        </div>
      </div>
    </NavigationMenuLink>
  );
};

export default Navbar;
