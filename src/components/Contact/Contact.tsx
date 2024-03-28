import { useState } from "react";
import Contacts from "./Tabs/Contacts";

const Contact = () => {
  const list = [
    { name: "Ajibola", id: "1432432432432432" },
    { name: "Samuel", id: "e2422dsdsad3e32" },
  ];
  const [activeTab, setActiveTab] = useState("Contacts");

  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center w-[90%] max-w-[1140px] flex-col">
          {/* tabs */}
          <main className="w-full flex justify-between items-center flex-row border">
          {["Contacts", "Call History"]?.map((item, i) => (
            <div
              key={i}
              className={`${activeTab === item && "text-[green]"} w-2/4`}
              onClick={() => setActiveTab(item)}
            >
              <h1>{item}</h1>
            </div>
          ))}
          </main>
          {/* tabs */}
          {activeTab === "Contacts" ? <Contacts list={list} /> : "" }
        </div>
      </div>
    </section>
  );
};

export default Contact;
