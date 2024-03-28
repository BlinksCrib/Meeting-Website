import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../ContextApi/ContextApi";

interface List {
  name: string;
  id: string;
}

// Define props for the Contacts component, which includes an array of Contact objects
interface ListProps {
  list: List[]; // This is the correct way to type an array of Contact objects
}

const Contacts: React.FC<ListProps> = ({ list }) => {
  const navigate = useNavigate();

  const { setCallType } = useAppContext()!;

  const handleClick = (item: string) => {
    if (setCallType) {
      setCallType(item);
    } else {
      console.error("setCallType is undefined.");
    }
    navigate("/call");
  };

  return (
    <div className="w-full mt-[2rem]">
      <table className="w-full border-separate border-spacing-2">
        <tr className=" w-full">
          <th className="w-[35%] text-start">Name</th>
          <th className="w-[35%] text-start">Wallet Id</th>
          <th className="w-[30%] text-start">Action</th>
        </tr>
        {list?.map((item, i) => (
          <tr className="" key={i}>
            <td className="w-[35%] mb-4">{item.name}</td>
            <td className="w-[35%]">{item.id}</td>
            <td>
              <div className="flex">
                <i
                  className="fa-solid fa-phone cursor-pointer"
                  onClick={() => handleClick("audio")}
                ></i>
                <i
                  className="fa-solid fa-video ml-3 cursor-pointer"
                  onClick={() => handleClick("audio")}
                ></i>
              </div>
            </td>
          </tr>
        ))}
      </table>
      {/* my phrases */}
      {/* traffic lecture upper chat early apology poet advice suspect under woman
      skin */}
    </div>
  );
};

export default Contacts;
