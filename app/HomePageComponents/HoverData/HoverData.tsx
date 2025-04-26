"use client"

import * as React from "react"
import Link from "next/link"
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Jost } from "next/font/google"

const brand: { title: string; href: string; description: string }[] = [
  {
    title: "All",
    href:"/products/Man+Shoes",
    description:
      "",
  },
  {
    title: "Shorts",
    href:"/products/Man_Shirts",
    description:
      "",
  },
  {
    title: "Mid-length",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Sweather",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Mans Watches",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Mans Ties",
    href: "/docs/primitives/progress",
    description:
      "",
  }
  
 

]

const shirts: { title: string; href: string; description: string }[] = [
  {
    title: "Shirt Colors",
    href: "/docs/primitives/alert-dialog",
    description:
      "",
  },
  {
    title: "Shirts Size",
    href: "/docs/primitives/hover-card",
    description:
      "",
  },
  {
    title: "Shirts Price",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Shirts Rating",
    href: "/docs/primitives/progress",
    description:
      "",
  }
 

]

const childrens: { title: string; href: string; description: string }[] = [
  {
    title: "Childrens Shose",
    href: "/docs/primitives/alert-dialog",
    description:
      "",
  },
  {
    title: "Childrens Shirts",
    href: "/docs/primitives/hover-card",
    description:
      "",
  },
  {
    title: "Childrens Boots",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Childrens Jacket",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Childrens Toys",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Childrens Story Books",
    href: "/docs/primitives/progress",
    description:
      "",
  }
  
 

]

const gaming: { title: string; href: string; description: string }[] = [
  {
    title: "Gaming Headphones",
    href: "/docs/primitives/alert-dialog",
    description:
      "",
  },
  {
    title: "Gaming Chairs",
    href: "/docs/primitives/hover-card",
    description:
      "",
  },
  {
    title: "Gaming Mouse",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Gaming Keyboard",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Gaming Mouse Pad",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Gaming Led Lights",
    href: "/docs/primitives/progress",
    description:
      "",
  }
  
 

]

const sports: { title: string; href: string; description: string }[] = [
  {
    title: "Sports  Water Bottle",
    href: "/docs/primitives/alert-dialog",
    description:
      "",
  },
  {
    title: "Sports  Bots",
    href: "/docs/primitives/hover-card",
    description:
      "",
  },
  {
    title: "Sports  Shirts",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Sports  Watches",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Sports  Sunglasses",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Sports Shorts",
    href: "/docs/primitives/progress",
    description:
      "",
  }
  
 

]

const kitchen: { title: string; href: string; description: string }[] = [
  {
    title: "kitchen Knief",
    href: "/docs/primitives/alert-dialog",
    description:
      "",
  },
  {
    title: "kitchen  Cooker",
    href: "/docs/primitives/hover-card",
    description:
      "",
  },
  {
    title: "kitchen  Coofe Machine",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "kitchen  Mats",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "kitchen  Bowls",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "kitchen Pans",
    href: "/docs/primitives/progress",
    description:
      "",
  }
  
 

]


const HoverData=()=> {
  return (
    <div className="w-full hidden md:block ">
    <div className="w-full flex items-center justify-center ">

    <NavigationMenu className="w-screen flex items-center justify-between ">
      <NavigationMenuList className="space-x-5 xl:gap-x-12">
        {/* //! 1 */}
          
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`${jost.className} hover:cursor-pointer text-lg`}>Brand</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white ">
              {brand.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* //! 2 */}
          
        <NavigationMenuItem>
        <NavigationMenuTrigger  className={`${jost.className} hover:cursor-pointer text-lg`}>Shirts</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white ">
              {shirts.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* //! 3 */}
        <NavigationMenuItem>
        <NavigationMenuTrigger className={`${jost.className} hover:cursor-pointer text-lg`}>Sweather</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white ">
              {childrens.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       
        {/* //! 4 */}
        <NavigationMenuItem>
        <NavigationMenuTrigger className={`${jost.className} hover:cursor-pointer text-lg`}>Gaming</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white ">
              {gaming.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* //! 5 */}
        <NavigationMenuItem>
        <NavigationMenuTrigger className={`${jost.className} text-lg hover:cursor-pointer`}>Sports</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white ">
              {sports.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       
        {/* //! 6 */}
        <NavigationMenuItem>
        <NavigationMenuTrigger className={`${jost.className} text-lg hover:cursor-pointer`}>Kitchen</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white ">
              {kitchen.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className={`${jost.className} text-sm  leading-none hover:text-blue-400 duration-300`}>{title}</div>
          <p style={{fontWeight:200}} className={`${jost.className} line-clamp-2  text-[#b1afaf]`}>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default HoverData