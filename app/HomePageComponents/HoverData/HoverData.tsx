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

interface discriptionDataType{
  id:number;
  data:string
}

const Model: { title: string; href: string; description: discriptionDataType[] }[] = [
  {
    title: "All",
    href:"/products/Man+Shoes",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Shorts",
    href:"/products/Man_Shirts",
    description:[
      {id:2,data:''}
    ]
  },
  {
    title: "Mid-length",
    href: "/docs/primitives/progress",
    description:[
      {id:3,data:''}
    ]
  },
  {
    title: "Sweather",
    href: "/docs/primitives/progress",
    description:[
      {id:4,data:''}
    ]
  }
  
 

]

const shirts: { title: string; href: string; description: discriptionDataType[]  }[] = [
  {
    title: "Shirt Colors",
    href: "/docs/primitives/alert-dialog",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Shirts Size",
    href: "/docs/primitives/hover-card",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Shirts Price",
    href: "/docs/primitives/progress",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Shirts Rating",
    href: "/docs/primitives/progress",
    description:[
      {id:1,data:''}
    ]
  }
 

]

const sweather: { title: string; href: string; description: discriptionDataType[]  }[] = [
  {
    title: "Sweather Size",
    href: "/docs/primitives/alert-dialog",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Sweather Color",
    href: "/docs/primitives/progress",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Sweather Size",
    href: "/docs/primitives/progress",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Sweather Rating",
    href: "/docs/primitives/progress",
    description:[
      {id:1,data:''}
    ]
  }
 

]
const Size: { title: string; href: string; description: discriptionDataType[]  }[] = [
  {
    title: "3xl",
    href: "/docs/primitives/alert-dialog",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "2xl",
    href: "/docs/primitives/hover-card",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "XL",
    href: "/docs/primitives/progress",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "L",
    href: "/docs/primitives/progress",
    description:[
      {id:1,data:''}
    ]
  }

]

const Color: { title: string; href: string; description: discriptionDataType[]  }[] = [
  {
    title: "Color  Red",
    href: "/docs/primitives/alert-dialog",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Color  Green",
    href: "/docs/primitives/hover-card",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Color  White",
    href: "/docs/primitives/progress",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Color  Yellow",
    href: "/docs/primitives/progress",
    description:[
      {id:1,data:''}
    ]
  }
 

]

const Price: { title: string; href: string; description: discriptionDataType[]  }[] = [
  {
    title: "Below 100$",
    href: "/docs/primitives/alert-dialog",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Below  200$",
    href: "/docs/primitives/hover-card",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Below  300$",
    href: "/docs/primitives/progress",
    description:[
      {id:1,data:''}
    ]
  },
  {
    title: "Below  400$",
    href: "/docs/primitives/progress",
    description:[
      {id:1,data:''}
    ]
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
          <NavigationMenuTrigger className={`${jost.className} hover:cursor-pointer text-lg`}>Model</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white ">
              {Model.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description.map((data,index)=><span key={data.id}>{data.data}</span>)}
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
              {sweather.map((component) => (
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
        <NavigationMenuTrigger className={`${jost.className} hover:cursor-pointer text-lg`}>Size</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white ">
              {Size.map((component) => (
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
        <NavigationMenuTrigger className={`${jost.className} text-lg hover:cursor-pointer`}>Color</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white ">
              {Color.map((component) => (
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
        <NavigationMenuTrigger className={`${jost.className} text-lg hover:cursor-pointer`}>Price</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white ">
              {Price.map((component) => (
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