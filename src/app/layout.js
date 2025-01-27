import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from '@/components/common/Navbar'
import Footer from "@/components/common/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div style={{marginTop: "8rem"}}>
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
