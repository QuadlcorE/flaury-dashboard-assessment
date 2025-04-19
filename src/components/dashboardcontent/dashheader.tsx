import profileimage from "@/assets/ProfileImage.svg";
import verified from "@/assets/verified.svg";
import Actions from "./actions";

function DashHeader() {
  return (
    <div className="m-6 pb-4 flex justify-between items-center border-b-2">
      <div className="flex items-center gap-3">
        {/* Photo */}
        <div className="relative">
          <div className="w-13 h-13 rounded-full overflow-hidden">
            <img
              src={profileimage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
        </div>
        {/* Text */}
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Good Morning!</span>
            <img src={verified} alt="Logo" />
          </div>
          <h2 className="font-bold text-lg">Becca Baruch</h2>
        </div>
      </div>
      {/* Left Icons */}
      <Actions className="hidden sm:flex" /> 
    </div>
  );
}

export default DashHeader;
