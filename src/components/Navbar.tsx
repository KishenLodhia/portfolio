import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ui/mode-toggle";

const components: {
  title: string;
  href: string;
  description: string;
  icon: IconType;
}[] = [
  {
    title: "LinkedIn",
    href: "#",
    description: "View my LinkedIn profile!",
    icon: FaLinkedinIn,
  },
  {
    title: "Instagram",
    href: "#",
    description: "Follow me on Instagram",
    icon: FaInstagram,
  },
  {
    title: "GitHub",
    href: "#",
    description: "Check out my Github repos!",
    icon: FaGithub,
  },
  {
    title: "Contact",
    href: "#",
    description: "Get in touch with me!",
    icon: MdOutlineMailOutline,
  },
];

export const Navbar = () => {
  return (
    <div className="md:flex flex-row p-5 items-center justify-center gap-1 hidden">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="hover:bg-accent hover:rounded px-3 py-2">
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="hover:bg-accent hover:rounded px-3 py-2">
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="hover:bg-accent hover:rounded px-3 py-2">
            <NavigationMenuLink href="/resume">Resume</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="hover:bg-accent hover:rounded px-3 py-2">
            <NavigationMenuLink href="/portfolio">Portfolio</NavigationMenuLink>
          </NavigationMenuItem>

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
  );
};

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
