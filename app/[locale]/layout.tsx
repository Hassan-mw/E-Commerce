
import "./globals.css";


import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { DataProvider } from './ContextApi/ContextApi';
import Navbar from './Navbar/Navbar';
import Footer from './component_/Footer';
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
        <body>
           <div className="w-full h-full flex flex-col overflow-hidden overflow-x-hidden">
        <DataProvider>
      <NextIntlClientProvider> 
         <Navbar/>
         {children}
        </NextIntlClientProvider>
        <Footer/>
        </DataProvider>
         </div>
      </body>

    </html>
  );
}