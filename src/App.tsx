import './App.css'
import { AppSidebar } from "@/components/appsidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DashboardContent from "./components/dashboardcontent";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  
  return (
    <SidebarProvider className="bg-[#FEFFF1] flex justify-center">
      <AppSidebar />
      <SidebarInset className="bg-[#FEFFF1] max-w-5xl ">
          <SidebarTrigger className="md:hidden" />
          <DashboardContent />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
