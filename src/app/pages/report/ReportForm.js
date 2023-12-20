import React from "react";
import Input from "../../common/form/Input";
import SelectInput from "../../common/form/SelectInput";
import userCardData from "../../utils/userCard.json";
function ReportForm() {
  const reportTypeOptions = [
    { value: "all", label: "All" },
    { value: "payin", label: "Pay In" },
    { value: "payout", label: "Pay Out" }
  ];
  const statusOptions = [
    { value: "all", label: "All" },
    { value: "unassigned", label: "Unassigned" },
    { value: "pending", label: "Pending" },
    { value: "approved", label: "Approverd" },
    { value: "expired", label: "Expired" },
    { value: "rejected", label: "Rejected" }
  ];

  const userOptions = userCardData.map(({ name }) => {
    return { value: name, label: name };
  });
  return (
    <>
      {/* <table>
        <tr>
          <td>
            <Input
              type="text"
              id="reportname"
              name="reportname"
              placeholder="Enter your report name"
              label="Report Name"
            />
          </td>
          <td>
            <SelectInput
              id="reporttype"
              name="reporttype"
              options={reportTypeOptions}
              placeholder="Select Report Type"
              label="Report Type"
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <SelectInput
              id="status"
              name="status"
              options={statusOptions}
              placeholder="Select status"
              label="Status"
            />
          </td>
        </tr>
        <tr>
          <td>
            <Input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter Amount"
              label="Amount"
            />
          </td>
          <td>
            <SelectInput
              id="user"
              name="user"
              options={userOptions}
              placeholder="Select User"
              label="User"
            />
          </td>
        </tr>
        <tr>
          <td>
            <Input type="date" id="startdate" name="startdate" label="Start Date" />
          </td>
          <td>
            <Input type="date" id="enddate" name="enddate" label="End Date" />
          </td>
        </tr>
      </table> */}
      <div>
        <div className="grid grid-cols-2">
          <div className="col-span-2">
            <Input
              type="text"
              id="reportname"
              name="reportname"
              placeholder="Enter your report name"
              label="Report Name"
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-1 w-[110%] ">
            <SelectInput
              id="reporttype"
              name="reporttype"
              options={reportTypeOptions}
              placeholder="Select Report Type"
              label="Report Type"
            />
          </div>
          <div className="col-span-1 w-[110%] ml-[-9%]">
            <SelectInput
              id="status"
              name="status"
              options={statusOptions}
              placeholder="Select status"
              label="Status"
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-1 w-[110%] ">
            <Input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter Amount"
              label="Amount"
            />
          </div>
          <div className="col-span-1 w-[110%] ml-[-9%] ">
            <SelectInput
              id="user"
              name="user"
              options={userOptions}
              placeholder="Select User"
              label="User"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="col-span-1 w-[110%]  text-[#bdbdbd]">
            <Input type="date" id="startdate" name="startdate" label="Start Date" />
          </div>
          <div className="col-span-1 w-[110%] ml-[-9%] text-[#bdbdbd]">
            <Input type="date" id="enddate" name="enddate" label="End Date" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportForm;
