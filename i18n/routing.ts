// import { useParams } from 'next/navigation';
// import { useParams } from 'next/navigation';
import { createNavigation } from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});

export const {Link,redirect,usePathname,useRouter}=createNavigation(routing)
