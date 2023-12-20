import React, { useEffect } from "react";
import { Button, Dialog, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { Form, Formik } from "formik";

const DialogComponent = ({
  showPopup,
  onClose,
  children,
  title,
  buttonName,
  handleAction,
  validation,
  initialValue
}) => {
  // console.log(validation);

  const handleOverlayClick = (e) => {
    const isClickOutsideDialog = !e.target.closest(".dialog-container");
    if (isClickOutsideDialog) {
      console.log("working");
      onClose();
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener("mousedown", handleOverlayClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, [showPopup, onClose]);

  return (
    <Dialog open={showPopup} className="dialog-container" onClose={onClose}>
      <DialogHeader>
        <div className="px-6 pt-5">
          <h1 className="font-bold text-2xl ">{title}</h1>
        </div>
      </DialogHeader>

      <Formik initialValues={initialValue} onSubmit={handleAction} validationSchema={validation}>
        {() => (
          <Form>
            {children}

            <DialogFooter className="flex justify-between mx-8">
              <Button
                variant="text"
                color="red"
                onClick={onClose}
                className="bg-gradient-to-tr from-[#ee4444] to-[#ee4444]  text-white font-bold">
                <span>Cancel</span>
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-tr from-[#428777] to-[#428777]  text-white font-bold ">
                <span>{buttonName}</span>
              </Button>
            </DialogFooter>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default DialogComponent;
