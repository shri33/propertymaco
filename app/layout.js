// app/layout.js (server component by default)
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/layout/Hero";
import ContactSection from "@/app/components/layout/ContactSection";
import Footer from "@/app/components/layout/Footer";

export const metadata = {
  title: "PropertyMaco - We Buy Houses",
  description: "We buy houses in any condition. Get a fast, fair cash offer today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <main className="flex-grow">{children}</main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
