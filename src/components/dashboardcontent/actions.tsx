import settings from "@/assets/settings.svg";
import interactions from "@/assets/interactions.svg";
import notificationbell from "@/assets/notificationbell.svg";

interface ActionsProps {
  className?: string;  // Add className to props interface
}

function Actions({ className }: ActionsProps) {
  return (
    <div className={`flex items-center gap-4 ${className || ""}`}> 
      <div className="relative">
        <img src={notificationbell} alt="notifications" />
        <div className="absolute bottom-0 top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
      </div>
      <img src={settings} alt="Settings" />
      <img src={interactions} alt="Interactions" />
    </div>
  );
}

export default Actions;
