import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import chatbotJson from "../../../utils/chatbot.json";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdOutlineFilePresent } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import moment from "moment";
import "moment/locale/en-gb";

const ChatBot = () => {
  const { data } = useLocation().state || {};
  // console.log(data);
  const navigate = useNavigate();
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [editorValue, setEditorValue] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  moment.locale("en-gb");

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentFiles, setCurrentFiles] = useState([]);

  const getAvatarIcon = (sender) => {
    const firstLetter = sender.charAt(0).toUpperCase();
    return <div className="avatar-circle text-[13px]">{firstLetter}</div>;
  };

  const formik = useFormik({
    initialValues: {
      chatInput: ""
    },
    onSubmit: (values, { resetForm }) => {
      handleSendMessage();
      resetForm();
    }
  });

  console.warn(formik);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["removeImage"]
    ]
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
  ];

  console.warn(modules, formats, editorValue);

  useEffect(() => {
    setChatMessages(chatbotJson);
  }, []);

  useEffect(() => {
    const defaultContent = `${data?.description}`;
    setEditorValue(defaultContent);
  }, [data]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCloseChat = () => {
    navigate("/extra/ticket");
  };

  const handleShowDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  const getRelativeTime = (date) => {
    const messageDate = moment(date, "DD-MM-YYYY HH:mm A");
    const currentDate = moment();
    const yesterdayDate = moment().subtract(1, "days");

    if (currentDate.isSame(messageDate, "day")) {
      return `Today at ${messageDate.format("h:mm A")}`;
    } else if (yesterdayDate.isSame(messageDate, "day")) {
      return `Yesterday at ${messageDate.format("h:mm A")}`;
    } else {
      const diffInDays = currentDate.diff(messageDate, "days");

      if (diffInDays < 7) {
        return `${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`;
      } else {
        return messageDate.format("MMM D, YYYY [at] h:mm A");
      }
    }
  };

  const handleSendMessage = () => {
    // console.log("Working");
    const trimmedContent = chatInput.trim();

    let message = document.querySelectorAll(`.ql-syntax`);

    let newContent = "";

    if (message) {
      let number = 0;
      const codeElement = document.getElementsByClassName(".ql-syntax");
      if (codeElement) {
        const lines = chatInput.split("\n");
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes("</pre>")) {
            number = 0;
          }
          newContent += lines[i] + "" + "<div>" + (number + 1) + "</div>" + "\n";
          number++;
        }
      }

      codeElement.innerHTML = newContent;
    }

    const messageFinal = message ? newContent.trim() : chatInput;

    const isEditorEmpty = !trimmedContent.replace(/<p>|<\/p>|<br>|<\/br>/gi, "").trim();

    if (isEditorEmpty) {
      return;
    }

    const files = selectedFiles.map((file, index) => ({
      link: URL.createObjectURL(file),
      text: file.name
    }));

    // console.log(chatInput);

    const newMessage = {
      text: messageFinal,
      sender: "user",
      date: moment().format("DD-MM-YYYY HH:mm A"),
      isSending: true,
      files
    };
    const updatedMessages = [newMessage, ...chatMessages];
    setChatMessages(updatedMessages);

    setEditorValue("");
    setChatInput("");
    setSelectedFiles([]);
    setCurrentFiles([]);
    message = null;
    console.log(null);
    newContent = "";
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    const updatedSelectedFiles = [
      ...selectedFiles,
      ...Array.from(files).slice(0, 5 - selectedFiles.length)
    ];

    console.log(updatedSelectedFiles.length);
    setSelectedFiles(updatedSelectedFiles);
    setCurrentFiles(updatedSelectedFiles);

    e.target.value = null;
  };

  const handleRemoveFile = (index) => {
    const updatedSelectedFiles = [...selectedFiles];
    updatedSelectedFiles.splice(index, 1);

    setSelectedFiles(updatedSelectedFiles);
    setCurrentFiles(updatedSelectedFiles);
  };

  return (
    <>
      <div className="">
        <div className="relative">
          <div className="">
            <div className="p-3 flex items-center justify-between rounded-md">
              <div className="flex items-center ml-[-10px]">
                <p onClick={handleCloseChat} className="cursor-pointer">
                  <IoIosArrowBack size="20px" />
                </p>
                <p className="font-thin text-base">{data?.title}</p>
              </div>
              <div>
                <p>Status</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#c5c3c3] rounded-sm p-3">
          <div className="flex justify-between">
            <div>
              <p className="text-[darkgray]">Ticket raise on 2nd Oct...</p>
            </div>
            <div>
              <button
                onClick={handleShowDetailsClick}
                className="text-blue-500 underline cursor-pointer">
                {showDetails ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </div>

          <div className="rounded-sm">
            {showDetails ? (
              <div className="border-none pt-2">
                <hr />
                <p className="pt-2 text-sm text-justify">{data?.description}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-2 flex flex-col-reverse">
          <div className="flex flex-col-reverse">
            {chatMessages.map((message, index) => (
              <div key={index} className="flex items-start">
                <p className="border relative top-[15px] p-4 rounded-[50%] w-[16px] h-[16px] flex justify-center items-center bg-[#e9e9e9]">
                  {getAvatarIcon(message.sender)}
                </p>

                <div className={`w-full mt-2 p-2 mr-1 rounded`}>
                  <div className={`text-[10px] mr-2 flex justify-start gap-[10px] text-gray-600`}>
                    {getRelativeTime(message.date)}

                    {message.isSending ? <FaClock className="animate-spin" /> : ""}
                  </div>

                  {/* {console.log(message.text)} */}
                  {message.text && message.text.trim() !== "" ? (
                    <div
                      className="text-[13px] text-justify messageText"
                      dangerouslySetInnerHTML={{ __html: message.text }}
                    />
                  ) : null}

                  {message.files && message.files.length > 0 && (
                    <div className="mt-2">
                      {message.files.map((file, fileIndex) => (
                        <div key={fileIndex} className="flex gap-[10px] text-[13px] items-center">
                          {fileIndex + 1}.
                          <a
                            href={file.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm cursor-pointer text-blue-500 text-[12px] hover:text-blue-800">
                            {file.text}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white px-2 py-2 border-t">
          <div className="flex flex-col text-[13px] text-blue-500">
            {currentFiles.map((file, index) => (
              <div key={index} className="mr-2">
                <p className="flex gap-[15px]">
                  {index + 1}.{file.type && <div>{file.name}</div>}
                  <button
                    type="button"
                    className="ml-[-8px] text-red-500 cursor-pointer"
                    onClick={() => handleRemoveFile(index)}>
                    <MdOutlineDeleteForever />
                  </button>
                </p>
              </div>
            ))}
          </div>

          <div className="w-[100%] relative">
            <div className="absolute w-[28px] top-[21px] right-[0px] hover:text-blue-500">
              <label htmlFor="fileInput" className="ql-insertFile cursor-pointer">
                <input
                  id="fileInput"
                  type="file"
                  accept=".pdf, .png, .jpg, .jpeg, .doc, .docx"
                  onChange={(e) => handleFileInputChange(e)}
                  className="hidden"
                  multiple
                  max="5"
                />
                <MdOutlineFilePresent />
              </label>
            </div>
            <div>
              <ReactQuill
                theme="snow"
                value={chatInput}
                onChange={(value) => setChatInput(value)}
                modules={modules}
                formats={formats}
                placeholder="Type your message..."
                className="flex-grow py-2 rounded"
                onKeyDown={handleKeyPress}
              />
            </div>
          </div>
          <div className="flex items-center gap-2" onClick={handleSendMessage}>
            <div className="cursor-pointer border bg-gradient-to-tr from-[#428777] to-[#428777] text-white px-3 py-2  rounded-md">
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
