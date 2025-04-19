import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logo from "@/assets/Logo.svg";
import chat from "@/assets/chat.svg";
import dashboard from "@/assets/dashboard.svg";
import profile from "@/assets/profile.svg";
import favourite from "@/assets/favourite.svg";
import Actions from "./dashboardcontent/actions";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: dashboard,
    selected: true,
  },
  {
    title: "Chat",
    url: "#",
    icon: chat,
    selected: false,
  },
  {
    title: "Favourite",
    url: "#",
    icon: favourite,
    selected: false,
  },
  {
    title: "Profile",
    url: "#",
    icon: profile,
    selected: false,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-3xs bg-[#8B3E00] ">
      <SidebarHeader className="bg-[#8B3E00]">
          {/* Logo */}
          <div className="flex justify-center">
            <a href="https://vite.dev" target="_blank">
              <img src={logo} className="logo" alt="Logo" />
            </a>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-[#8B3E00]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.selected}
                    className={`${item.selected ? "bg-[#FEFFF1] hover:bg-transparent rounded-xs" : "rounded-xs hover:bg-transparent"}`}
                  >
                    <a href={item.url}>
                      <img src={item.icon} alt={item.title} className="w-4 h-4 m-2" />
                      <span className={`${item.selected ? "text-[#8B3E00] text-xl" : "text-[#FEFFF1] text-xl" }`}>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="sm:bg-[#8B3E00] bg-white flex items-center">
        <Actions className="sm:hidden bg-white"/>
      </SidebarFooter>
    </Sidebar>
  );
}
