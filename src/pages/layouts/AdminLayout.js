import Sidebar from "@/components/Sidebar";
import NavbarAdmin from "@/components/navbar/NavbarAdmin";
import React from "react";

function AdminLayout({ children }) {
  return (
    <>
      <NavbarAdmin />
      <Sidebar />
      <main className="p-4 sm:ml-64 mt-20 ">
        {children}
      </main>{" "}
    </>
  );
}

export default AdminLayout;
