import { useAppContext } from "@/context/AppContext";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

function Modal({ children }) {
  const [state, dispatch] = useAppContext();

  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`fixed    ${
        state.isModal.value ? "flex" : "hidden"
      } justify-center items-center top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-black/50`}
    >
      <div className="relative w-full max-w-lg max-h-full">
        {/* Modal content */}
        <OutsideClickHandler
          onOutsideClick={() => {
            dispatch({
              type: "SET_MODAL",
              payload: { id: null, value: false },
            });
          }}
        >
          <div className="relative bg-white rounded-lg shadow  -translate-y-2">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="authentication-modal"
              // onClick={() => {
              //   dispatch({
              //     type: "SET_EDIT",
              //     payload: false,
              //   });
              // }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">{children}</div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}

export default Modal;
