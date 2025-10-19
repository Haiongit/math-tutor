import { AuthProvider } from "@/context/AuthProvider";
import QueryProvider from "@/context/QueryBuilder";
import I18nProvider from "@/components/providers/I18nProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "@smastrom/react-rating/style.css";
import "ckeditor5/ckeditor5.css";
import type { Metadata } from "next";
import React from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-learning",
  description: "Learning Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (typeof window !== "undefined") {
    return;
  }

  return (
    <html>
      <body className="flex flex-col min-h-screen">
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
        >
          <I18nProvider>
            <QueryProvider>
              <AuthProvider>{children}</AuthProvider>
              <Toaster
                position="top-center"
                toastOptions={{ duration: 5000, removeDelay: 1000 }}
              />
            </QueryProvider>
          </I18nProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
