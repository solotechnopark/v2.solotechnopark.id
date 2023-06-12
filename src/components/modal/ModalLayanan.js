import React from "react";
import { useAppContext } from "@/context/AppContext";
import { AiOutlineClose } from "react-icons/ai";

function ModalLayanan() {
  const [state, dispatch] = useAppContext();

  console.log(state.isModal.id);

  return (
    <div
      className={`${
        state.isModal.value ? "fixed" : "hidden"
      } z-20 left-0 top-0 right-0 bottom-0 flex justify-center items-center animate-fadeIn`}
    >
      <div
        className="bg-dark-transparent-100 fixed z-0 left-0 top-0 right-0 bottom-0 flex justify-center items-center animate-fadeIn"
        onClick={() =>
          dispatch({
            type: "SET_MODAL",
            payload: { ...state.isModal.id, value: false },
          })
        }
      ></div>
      <div className="content bg-white mx-10 lg:mx-auto max-w-2xl rounded-lg p-4 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="col-span-1">
            <div className="bg-gray-200 rounded-md overflow-hidden">
              {/* <img
                className="w-full mx-auto"
                src={modal.data.image}
                alt="foto"
              /> */}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="flex justify-between items-start">
              <h2 className="head-4 mb-8">modal data title</h2>
              <div
                className="bg-slate-100 rounded-full border flex justify-evenly items-center flex-col w-10 h-10 cursor-pointer hover:bg-primary-100 transition-all"
                onClick={() =>
                  dispatch({
                    type: "SET_MODAL",
                    payload: { ...state.isModal.id, value: false },
                  })
                }
              >
                <AiOutlineClose />
                {/* <span className="rounded-lg bg-black h-[2px] w-[50%]"></span> */}
              </div>
            </div>
            <p className="leading-7">modal data desc</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLayanan;
