import { ModeToggle } from "@/themes/mode-toggle";
import Cookies from "js-cookie";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { Button } from "@/components/ui/button";
import PatientsSection from "@/components/doctor-dashboard/PatientsSection";

function DoctorDashboard() {
  const sidebarState: boolean = Cookies.get("sidebar_state") === "true";

  return (
    <SidebarProvider defaultOpen={sidebarState}>
      <AppSidebar />
      <main className="flex w-full flex-col min-h-screen">
        <header className="flex w-full justify-between pr-8 pl-4 py-4 sticky top-0 bg-background">
          <Button size={"icon"} variant="outline">
            <SidebarTrigger />
          </Button>

          <ModeToggle />
        </header>

        <PatientsSection />
      </main>
    </SidebarProvider>
  );
}

export default DoctorDashboard;
