"use client";
import { useEffect } from "react";
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function RootLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
