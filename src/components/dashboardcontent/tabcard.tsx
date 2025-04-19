import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import cardimage from "@/assets/Cardimage.svg";
import { Button } from "@/components/ui/button";

interface Appointment {
  id: number;
  date: string;
  time: string;
  salon: string;
  stylist: string;
  reminded: boolean;
}

interface TabCardProps {
  appointment: Appointment;
}

function TabCard({ appointment }: TabCardProps) {
  return (
    <Card className="bg-transparent shadow-none gap-3 border-[#8B3E00]/50 max-w-80 py-2 min-w-72 mb-4">
      {/* Header */}
      <CardHeader className="border-b-1 pb-0 px-2">
        <div className="flex justify-between mb-1">
          <div className="text-sm ">
            {appointment.date}·{appointment.time}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>Remind me</span>
            <Switch
              className="data-[state=checked]:bg-[#8B3E00] "
              checked={appointment.reminded}
            />
          </div>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="px-2">
        <div className="flex gap-2">
          <div className="flex align-middle bg-transparent rounded overflow-hidden">
            <img src={cardimage} alt="Salon" className="object-cover" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold">{appointment.salon}</h3>
            <p className="text-sm text-gray-500">{appointment.stylist}</p>
            <p className="text-xs text-[#8B3E00] mt-1">
              This is a placeholder for booked services
            </p>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="border-t [.border-t]:pt-3 pb-1 px-1">
        <div className="flex justify-center gap-6 w-full">
          {/* Added w-full */}
          <Button
            variant="outline"
            className="text-sm bg-transparent rounded-3xl border-[#8B3E00] text-[#8B3E00] hover:bg-red-300 px-4"
          >
            Cancel booking
          </Button>
          <Button className="text-sm rounded-3xl bg-[#8B3E00] hover:bg-transparent hover:border hover:border-[#8B3E00] hover:text-[#8B3E00] text-white px-4">
            View receipt
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default TabCard;
