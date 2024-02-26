import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={'Contact us'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            If any query and information about products, free to call anytime we 24X7
            Avialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.leodas@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> :7094023823
          </p>
          <p className="mt-3">
            <BiSupport /> : 2000-2000-2000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;