import * as React from "react";
import { authApi } from "../apis/authApi";
import excel from "../assets/image/excel.svg";
import pdf from "../assets/image/pdf.svg";
import ppt from "../assets/image/powerpoint.svg";
import word from "../assets/image/word.svg";
import useApiQuery from "../hooks/useApiQuery";
import { AuthReponse } from "../models";
import { useHandleError } from "../hooks/useHandleError";
import { CustomModal } from "../shared";

interface IProjectsProps {}
const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  const { closeModal, modalOpen, message } = useHandleError();
  console.log("check message", message);
  // const { modalOpen } = errorObject;

  const listItems = [
    {
      title: "What doesn't kill you will make you stronger - 420 KB",
      link: "#",
      img: ppt,
    },
    {
      title: "What doesn't kill you will make you stronger - 420 KB",
      link: "#",
      img: excel,
    },
    {
      title: "What doesn't kill you will make you stronger - 420 KB",
      link: "#",
      img: word,
    },
    {
      title: "What doesn't kill you will make you stronger - 420 KB",
      link: "#",
      img: pdf,
    },
  ];

  const getUsers = async () => {
    const data = await authApi.getUsers();
    return data;
  };

  const data = useApiQuery<AuthReponse>({
    queryKey: ["getA"],
    queryFn: () => getUsers(),
  });

  return (
    <>
      <CustomModal
        open={false}
        title="Error"
        type="error"
        onClose={() => closeModal()}
      >
        <h1>Error</h1>
      </CustomModal>
      <div className="p-6">
        <h1
          className="bg-red"
          onClick={() => {
            console.log("on click");
            closeModal();
          }}
        >
          You can download all documents below
        </h1>
        {listItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <img src={item.img} alt="image" className="w-[50px]" />
            <a
              href={item.link}
              className="text-blue-700 text-sm italic hover:underline"
              download
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
