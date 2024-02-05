"use client";
import Editor from "./Editor";
import { MyContextProvider } from "./MyContext";
import SideBar from "./Sidebar";
import ValidateButton from "./ValidateButton";

const Builder = () => {

  return (
    <MyContextProvider>
      <main>
        <SideBar />
        <Editor />
        <ValidateButton />
      </main>

    </MyContextProvider>
  );
};

export default Builder;
