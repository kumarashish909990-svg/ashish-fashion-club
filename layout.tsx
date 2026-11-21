import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Ashish Fashion Club",description:"Everyday fashion. Elevated."};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}