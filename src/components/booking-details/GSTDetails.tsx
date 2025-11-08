import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const GSTDetails = ({ setGSTData }: { setGSTData: any }) => {
  const [showGST, setShowGST] = useState(false);
  const [companyNumber, setCompanyNumber] = useState("");
  const [companyName, setCompanyName] = useState("");

  // update parent state whenever fields change
  const handleChange = () => {
    setGSTData({
      RegisteredCompanyNumber: companyNumber,
      RegisteredCompanyName: companyName
    });
  };

  const handleCompanyNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Only allow letters or digits, no special characters
    const cleaned = val.replace(/[^a-zA-Z0-9]/g, "");
    setCompanyNumber(cleaned);
    handleChange();
  };

  return (
    <div className="bg-[#4A4A4A]-card rounded-lg border border-[#4A4A4A]-light p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-[#3D85C6] font-bold">GST Details</h2>
        <Switch checked={showGST} onCheckedChange={setShowGST} />
      </div>

      {showGST && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Company Number */}
          <div>
            <Label htmlFor="companyNumber" className="text-sm font-medium text-[#3D85C6]">
              GST Number
            </Label>
            <Input
              id="companyNumber"
              placeholder="Enter GST Number"
              value={companyNumber}
              onChange={handleCompanyNumberChange}
              className="mt-1 border border-[#4A4A4A] focus:border-[#4A4A4A]"
            />
          </div>

          {/* Company Name */}
          <div>
            <Label htmlFor="companyName" className="text-sm font-medium text-[#3D85C6]">
              Company Name
            </Label>
            <Input
              id="companyName"
              placeholder="Enter Company Name"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
                handleChange();
              }}
              className="mt-1 border border-[#4A4A4A] focus:border-[#4A4A4A]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GSTDetails;