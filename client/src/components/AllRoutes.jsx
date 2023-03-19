import { Route, Routes } from "react-router-dom";
import { AddEvent } from "./AddEvent";
import { Dashboard } from "../pages/Dashboard";
import { LoginAdminUser } from "./LoginAdminUser";
import { SetAdminUser } from "./setAdminUser";
import { ThankYou } from "./ThankYou";
import { HomePage } from "../pages/HomePage";
import { SendOTP } from "./SendOTP";
import { VerifyOTP } from "./VerifyOTP";

export const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setAdminUser" element={<SetAdminUser />} />
        <Route path="/adminLogin" element={<LoginAdminUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/otp" element={<SendOTP />} />
        <Route path="/:partnerName/login" element={<VerifyOTP />} />
        <Route path="/add_event" element={<AddEvent />} />
        <Route path="/thankyoupage" element={<ThankYou />} />
      </Routes>
  );
};
