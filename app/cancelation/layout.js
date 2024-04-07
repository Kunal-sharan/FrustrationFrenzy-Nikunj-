import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../navbar/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <ClerkProvider>
      <section>
        <Navbar/>
        {children}
      </section>
    </ClerkProvider>
  );
}
