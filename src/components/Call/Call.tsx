import { useAppContext } from "../ContextApi/ContextApi";

const Call = () => {
  const { callType } = useAppContext()!;
  console.log(callType);

  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center w-[90%] mt-[4rem]">
          {callType === "audio" ? (
            <div className="w-full">
              <div className="w-[80%] bg-[#ffffff] h-[80vh] text-[black] flex justify-center items-center">
                <h1 className="text-7xl font-bold">AJ</h1>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Call;
