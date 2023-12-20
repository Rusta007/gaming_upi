import React, { useState } from "react";
import { ticketValidationSchema } from "../../../utils/ValidationSchema";
import { ErrorMessage, Form, Formik } from "formik";
import Input from "../../../common/form/Input";
import { Button, DialogFooter } from "@material-tailwind/react";
import FileUpload from "../../../common/form/Fileupload";
import QuillTextarea from "../../../common/form/QuillTextarea";
import { useNavigate } from "react-router";

function TicketForm() {
  const navigate = useNavigate();

  const [fileUploadKey, setFileUploadKey] = useState(0);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    setFileUploadKey((prevKey) => prevKey + 1);
  };

  const handleClose = () => {
    navigate(`/extra/ticket`);
  };
  return (
    <div className="border rounded-lg p-6 px-6">
      <div className="pb-3">
        <h1 className="text-lg font-body black">Generate Ticket</h1>
      </div>
      <div>
        <Formik
          initialValues={{ title: "", description: "", file: null }}
          validationSchema={ticketValidationSchema}
          onSubmit={handleSubmit}>
          {() => (
            <Form>
              <div className="mx-[-43px]">
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter title"
                  label="Title"
                  className=""
                />
              </div>
              <div className="my-2">
                <QuillTextarea
                  id="description"
                  name="description"
                  label="Description"
                  placeholder="Enter description"
                />
              </div>
              <div className="my-2">
                <FileUpload name="file" label="Image Upload" key={fileUploadKey} />
                <ErrorMessage name="file">
                  {(msg) => <div className="text-red-500 mt-1 text-[14px]">{msg}</div>}
                </ErrorMessage>
              </div>
              <DialogFooter className="flex justify-between">
                <Button
                  variant="reset"
                  color="red"
                  onClick={handleClose}
                  className="bg-gradient-to-tr from-[#ee4444] to-[#ee4444]  text-white font-bold">
                  <span>Back</span>
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-tr from-[#428777] to-[#428777]  text-white font-bold ">
                  <span>Submit</span>
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default TicketForm;
