import { Button } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import { FaCopy } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import MyForm from "../../common/component/MyForm";
import DialogComponent from "../../common/component/DialogComponent";
import UserFormFilter from "../../common/component/UserFormFilter";
import UserCard from "../../utils/userCard.json";
import { validationSchema } from "../../utils/ValidationSchema";

function UserForm() {
  const [filterData, setFilterData] = useState([]);
  const [users, setUser] = useState(UserCard);
  const [popup, setPopup] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [filterValues, setFilterValues] = useState({
    fullName: "",
    secretKey: "",
    xKey: "",
    status: "all"
  });

  useEffect(() => {
    setFilterData(users);
  }, []);

  const initialValue = { fullName: "" };

  console.warn(setUser);

  const handleOpen = () => setOpen(!open);

  const handleCreate = () => {
    setPopup(true);
  };

  const handleClosePopup = () => {
    setPopup(false);
  };
  const handleDelete = () => {};
  const handleEdit = () => {};

  const handleSubmit = (values, { resetForm }) => {
    try {
      console.log("Form values:", values);
      handleClosePopup();
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      handleClosePopup();
      resetForm();
    }
  };

  const handleApplyFilter = (filter) => {
    console.log("Before Applying Filter:", filter);
    setFilterValues(filter);

    const filteredUsers = users.filter((user) => {
      const fullName = user.name.toLowerCase();
      const secretKey = user.secretKey;
      const xKey = user.xKey;

      const fullNameMatch = filter.fullName
        ? fullName.startsWith(filter.fullName.toLowerCase())
        : true;

      const secretKeyMatch = filter.secretKey && secretKey == filter.secretKey;

      const xKeyMatch = filter.xKey && xKey === filter.xKey;

      const statusMatch = filter.status === "all" || user.status.toString() === filter.status;
      console.log(statusMatch, user.status, filter.status);

      return (fullNameMatch || secretKeyMatch || xKeyMatch) && statusMatch;
    });

    console.log(filteredUsers);
    setFilterData(filteredUsers);
    handleOpen();
    setIsFilterActive(true);
  };

  const handleClearFilter = () => {
    setFilterValues({
      fullName: "",
      secretKey: "",
      xKey: "",
      status: "all"
    });
    setFilterData(users);
    setIsFilterActive(false);
  };

  return (
    <>
      <div className="flex justify-between gap-8 md:items-baseline px-4 py-2 pb-6">
        <h1 className="text-lg font-body black">User List</h1>
        <div>
          <div className="flex gap-4">
            <Button variant="outlined" onClick={handleOpen} className="px-5 py-2 rounded-2xl">
              Filter
            </Button>
            <button
              onClick={handleCreate}
              className="bg-gradient-to-tr from-[#428777] to-[#428777]  text-white font-bold py-2 px-4 rounded-2xl">
              Create
            </button>
          </div>
        </div>
      </div>

      {isFilterActive && (
        <div className="flex items-center gap-4 px-4 py-2">
          <div>
            {Object.keys(filterValues).map((key) => (
              <span key={key}>
                {filterValues[key] && (
                  <span className="mr-2">
                    <strong className="text-gray-500">
                      {key === "secretKey"
                        ? "Secret Key"
                        : key === "fullName"
                          ? "Fullname"
                          : key === "xkey"
                            ? "X Key"
                            : key === "status"
                              ? "Status"
                              : key}
                    </strong>
                    : {filterValues[key]}
                  </span>
                )}
              </span>
            ))}
          </div>
          <button
            className="bg-[#ef5350] text-white px-2 py-1 rounded-md"
            onClick={handleClearFilter}>
            Clear Filters
          </button>
        </div>
      )}

      <DialogComponent
        showPopup={open}
        initialValue={filterValues}
        onClose={handleOpen}
        title="Filter bar"
        buttonName="Filter"
        handleAction={handleApplyFilter}>
        <UserFormFilter filterValues={filterValues} />
      </DialogComponent>

      <DialogComponent
        showPopup={popup}
        onClose={handleClosePopup}
        title="User Form"
        initialValue={initialValue}
        buttonName="Save"
        handleAction={handleSubmit}
        validation={validationSchema}>
        <MyForm />
      </DialogComponent>

      <div className="overflow-hidden overflow-x-auto">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#b4c0d4]  font-thin">
                Sr No.
              </th>
              <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#b4c0d4] font-thin">
                Full Name
              </th>
              <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#b4c0d4] font-thin">
                Keys
              </th>
              <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#b4c0d4] font-thin">
                Status
              </th>
              <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#b4c0d4] font-thin">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((user) => {
              const classes = "p-4 border-blue-gray-50 text-[#555461] font-normal text-sm";

              return (
                <tr key={user.id}>
                  <td className={classes}>{user.id}</td>
                  <td className={classes}>{user.name}</td>
                  <td className={classes}>
                    <tr className="mb-3">
                      <th>Secret-key: </th>
                      <td>{user.secretKey}</td>
                      <td className="pl-2">
                        <button
                          className="border p-1 rounded-md border-[#428777] pointer"
                          onClick={() => navigator.clipboard.writeText(user.secretKey)}>
                          <FaCopy color="#428777" />
                        </button>
                      </td>
                    </tr>
                    <tr className="text-left">
                      <th className="mr-2">X-key: </th>
                      <td className="">{user.xKey}</td>
                      <td className="pl-2">
                        <button
                          className="border p-1 rounded-md border-[#428777] pointer"
                          onClick={() => navigator.clipboard.writeText(user.xKey)}>
                          <FaCopy color="#428777" />
                        </button>
                      </td>
                    </tr>
                  </td>

                  <td className={classes}>
                    <Switch checked={user.status} />
                  </td>
                  <td className={`flex flex-row ${classes}`}>
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="mr-3 bg-green-500 p-2 rounded-lg">
                      <IoMdCreate />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-400 p-2 rounded-lg">
                      <IoMdTrash className="text-cyan-50" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserForm;
