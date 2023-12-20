import React from "react";
import { Route, Routes } from "react-router-dom";
import TestTransaction from "../../pages/transactions/testTransactions";
import BankCard from "../../pages/bank/BankCard";
import InvoiceTable from "../../pages/payout/InvoiceTable";
import UserForm from "../../pages/user/UserForm";
import Dashboard from "../../pages/dashboard";
import ReportTable from "../../pages/report/ReportTable";
import Rules from "../../pages/rules/Rules";
import LoginPage from "../../pages/login/LoginPage";
import PrivateRoute from "./PrivateRoute";
import TicketList from "../../pages/extra/ticket/TicketList";
import ChatBot from "../../pages/extra/ticket/Chatbot";
import SignupPage from "../../pages/signup/SignupPage";
import ForgotPasswordPage from "../../pages/forgotpassword/ForgotPasswordPage";
import ChangePasswordPage from "../../pages/changepassword/ChangePasswordPage";
import ResetPasswordPage from "../../pages/resetpassword/ResetPasswordPage";
import ForgotPasswordOtpPage from "../../pages/forgotpassword/ForgotPasswordOtpPage";
import SignupOtpPage from "../../pages/signup/SignupOtpPage";
import ProfilePage from "../../pages/profile/ProfilePage";
import ProfileOtpPage from "../../pages/profile/ProfileOtpPage";

import TicketForm from "../../pages/extra/ticket/TicketForm";
const Routing = () => (
  <div className="">
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/transaction/card1"
        element={
          <PrivateRoute>
            <TestTransaction />
          </PrivateRoute>
        }
      />
      <Route
        path="/bank"
        element={
          <PrivateRoute>
            <BankCard />
          </PrivateRoute>
        }
      />
      <Route
        path="/payout"
        element={
          <PrivateRoute>
            <InvoiceTable />
          </PrivateRoute>
        }
      />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <UserForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/report"
        element={
          <PrivateRoute>
            <ReportTable />
          </PrivateRoute>
        }
      />
      <Route
        path="/rules"
        element={
          <PrivateRoute>
            <Rules />
          </PrivateRoute>
        }
      />
      <Route
        path="/extra/ticket"
        element={
          <PrivateRoute>
            <TicketList />
          </PrivateRoute>
        }
      />
      <Route
        path="/extra/ticket/form"
        element={
          <PrivateRoute>
            <TicketForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/chatbot/:id"
        element={
          <PrivateRoute>
            <ChatBot />
          </PrivateRoute>
        }
      />
      <Route
        path="/profilepage"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profileupdateotp"
        element={
          <PrivateRoute>
            <ProfileOtpPage />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      <Route path="/changepassword" element={<ChangePasswordPage />} />
      <Route path="/resetpassword" element={<ResetPasswordPage />} />
      <Route path="/forgotpasswordotppage" element={<ForgotPasswordOtpPage />} />
      <Route path="/signupotppage" element={<SignupOtpPage />} />
    </Routes>
  </div>
);

export default Routing;
