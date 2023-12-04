import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImportBsJS from "./bootstrap";
import Footer from "@/components/Footer/Footer";
import BasicExample from "@/components/NavbarUTA/BasicExample";

export default function RootLayout({ children }) {
  return (
    <div>
      <BasicExample />
      {children}
      <Footer />
      <ImportBsJS />
    </div>
  );
}
