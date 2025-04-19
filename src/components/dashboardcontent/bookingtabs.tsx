import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabCard from "./tabcard";

function BookingTabs() {
  const bookings = [
    {
      id: 1,
      date: "Jan 14, 2024",
      time: "10:00 AM",
      salon: "Timeless Salon",
      stylist: "Idan Hills",
      reminded: true,
    },
    {
      id: 2,
      date: "Jan 14, 2024",
      time: "10:00 AM",
      salon: "Timeless Salon",
      stylist: "Idan Hills",
      reminded: true,
    },
    {
      id: 3,
      date: "Jan 14, 2024",
      time: "10:00 AM",
      salon: "Timeless Salon",
      stylist: "Idan Hills",
      reminded: false,
    },
    {
      id: 4,
      date: "Jan 14, 2024",
      time: "10:00 AM",
      salon: "Timeless Salon",
      stylist: "Idan Hills",
      reminded: true,
    },
    {
      id: 5,
      date: "Jan 14, 2024",
      time: "10:00 AM",
      salon: "Timeless Salon",
      stylist: "Idan Hills",
      reminded: false,
    },
    {
      id: 6,
      date: "Jan 14, 2024",
      time: "10:00 AM",
      salon: "Timeless Salon",
      stylist: "Idan Hills",
      reminded: true,
    },
  ];

  return (
    <div className="lg:[&_.tabs-root]:flex-row">
      <Tabs defaultValue="upcoming">
        <div className="flex justify-center">
          <TabsList className="border-b-1 rounded-none lg:px-[8vw] md:px-[5vw] px-[1vw] border-[#8B3E00]/45 justify-center bg-transparent">
            <div className="flex justify-between">
              {/* Adjust space-x value as needed */}
              <TabsTrigger
                value="upcoming"
                className="data-[state=active]:underline data-[state=active]:text-[#8B3E00] data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-2 font-medium"
              >
                Upcoming
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="data-[state=active]:underline data-[state=active]:text-[#8B3E00] data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-2 font-medium"
              >
                Completed
              </TabsTrigger>
              <TabsTrigger
                value="cancelled"
                className="data-[state=active]:underline data-[state=active]:text-[#8B3E00] data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-2 font-medium"
              >
                Cancelled
              </TabsTrigger>
            </div>
          </TabsList>
        </div>

        <TabsContent value="upcoming" className="mt-4">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8 max-w-3xl">
              {bookings.map((booking) => (
                <TabCard key={booking.id} appointment={booking} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-4">
          <div className="text-center text-gray-500 py-12">
            No completed bookings.
          </div>
        </TabsContent>

        <TabsContent value="cancelled" className="mt-4">
          <div className="text-center text-gray-500 py-12">
            No cancelled bookings.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default BookingTabs;
