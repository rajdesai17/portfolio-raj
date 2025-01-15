import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export const Navigation = () => {
  return (
    <div className="w-full flex justify-center">
      <NavigationMenu className="mb-8">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#home">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#about">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#projects">
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="https://drive.google.com/file/d/1YnvfPrvjbM86sWVAKr2gsbTjTfSX9Vbh/view?usp=sharing">
              Resume
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;