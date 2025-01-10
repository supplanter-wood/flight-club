import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Flight Club - Find Amazing Flight Deals",
  description: "Discover incredible flight deals and save on your next trip",
  themeColor: "#007BFF",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="h-full">
      <body 
        className={`${roboto.variable} ${openSans.variable} font-sans antialiased min-h-full flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-50 border-t py-4 text-center text-gray-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
              <div>
                <h3 className="font-bold mb-4">About</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-600">How It Works</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                  <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Follow Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
                  <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t">
              Flight Club © {new Date().getFullYear()}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
