import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <p style={{fontSize:"20px"}}> Admin Name : {auth?.user?.name}</p>
              <p style={{fontSize:"20px"}}> Admin Email : {auth?.user?.email}</p>
              <p style={{fontSize:"20px"}}> Admin Contact : {auth?.user?.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
