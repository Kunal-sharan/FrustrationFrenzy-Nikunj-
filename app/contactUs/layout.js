import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../navbar/Navbar";

export default function DashboardLayout({ children }) {
  return (
      <section>
        <Navbar/>
        {children}
      </section>
    
  );
}
