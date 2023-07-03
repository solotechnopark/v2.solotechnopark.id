import React from "react";
import Modal from "../Modal";

function EditMitra({ id }) {
  const getOldData = async (req, res) => {
    try {
      const response = await axios
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal>
      <h3 className="mb-4 text-xl font-medium text-gray-900 ">
        Edit data mitra
      </h3>
      <form className="space-y-6" action="#">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900  capitalize"
          >
            Logo
          </label>
          <input
            type="file"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="Enter Category Name"
            required
            // value={categoryName}
            // onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900  capitalize"
          >
            Nama Mitra
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="Enter Category Name"
            required
            // value={categoryName}
            // onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          // onClick={handleSubmit}
        >
          {/* {loading ? "Loading ..." : "Edit Category Now"} */}
          Edit Lah
        </button>
      </form>
    </Modal>
  );
}

export default EditMitra;
