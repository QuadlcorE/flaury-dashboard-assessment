import BookingTabs from "./dashboardcontent/bookingtabs";
import DashHeader from "./dashboardcontent/dashheader";


function DashboardContent() {
  return (
    <div className="bg-[#FEFFF1]">
      <DashHeader/>
      <h1 className="text-2xl font-bold text-amber-900 text-left ml-6 mb-4">Bookings</h1>
      <BookingTabs/>
    </div>
  );
}

export default DashboardContent;
