import React from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>RasoiChain - Connect Street Food Vendors with Trusted Suppliers</title>
        <meta
          name="description"
          content="Smart marketplace for street food vendors to find the best suppliers for raw materials. Get the best prices, nearest locations, and AI-powered recommendations."
        />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  );
}