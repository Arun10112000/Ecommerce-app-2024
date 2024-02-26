import React from 'react'
import Layout from "./../../components/Layout/Layout";
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';
const Dashboard = () => {
  const [auth] = useAuth()
  return (
    <Layout title={"Dashboard - E-Shopping App"}>
          <div className="container-flui p-3 m-3">
            <div className="row" style={{marginTop:"50px"}}>
                <div className="col-md-3">
                    <UserMenu/>
                </div>
                <div className="col-md-9">
                <div  className="card w-75 mt-2 p-3">
                  <p style={{fontSize:"20px"}}>Name : {auth?.user?.name}</p>
                  <p style={{fontSize:"20px"}}>Email : {auth?.user?.email}</p>
                  <p style={{fontSize:"20px"}}>Contact : {auth?.user?.phone}</p>
                </div>
                </div>
            </div>
        </div>
    </Layout>
  );
};

export default Dashboard;
