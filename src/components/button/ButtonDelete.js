import { useAppContext } from "@/context/AppContext";
import { axiosPrivate } from "@/pages/api/axios";
import Cookies from "js-cookie";
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function ButtonDelete({ endpoint }) {
  const [state, dispatch] = useAppContext();

  const handleDelete = async () => {
    const dialog = window.confirm("Anda yakin ingin menghapus ?");
    const token = Cookies.get("token");

    if (dialog) {
      try {
        const response = await axiosPrivate.delete(endpoint, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          dispatch({ type: "SET_RELOAD", payload: !state.isReload });
        }
      } catch (err) {
        console.log(err);
        window.alert("Terjadi kesalahan pada saat menghapus pesan");
      }
    }
  };

  return (
    <button
      type="button"
      data-modal-target="editUserModal"
      data-modal-show="editUserModal"
      className="font-medium text-primary-100 dark:text-blue-500 hover:underline bg-slate-100 hover:bg-primary-100 hover:text-white transition-all p-3 rounded-full"
      onClick={handleDelete}
    >
      <BsFillTrashFill />
    </button>
  );
}

export default ButtonDelete;
