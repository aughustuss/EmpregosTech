import  {
  UserLoginContextProvider,
} from "@/contexts/UserLoginContext";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Poppins, Inter } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--body-font",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--title-font",
  display: "swap",
  weight: "500",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--cv-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechJobs",
  description: "TechJobs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserLoginContextProvider>
        <body
          className={`${inter.className} ${nunito.className} ${poppins.className} `}
        >
          {children}
        </body>
      </UserLoginContextProvider>
    </html>
  );
}
