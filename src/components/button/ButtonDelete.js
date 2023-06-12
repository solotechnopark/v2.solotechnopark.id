import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function ButtonDelete() {
  return (
    <button
      type="button"
      data-modal-target="editUserModal"
      data-modal-show="editUserModal"
      className="font-medium text-primary-100 dark:text-blue-500 hover:underline bg-slate-100 hover:bg-primary-100 hover:text-white transition-all p-3 rounded-full"
    >
      <BsFillTrashFill />
    </button>
  );
}

export default ButtonDelete;
