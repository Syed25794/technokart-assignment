import { Route, Routes } from "react-router-dom";
import { AddEvent } from "./AddEvent";
import { Dashboard } from "../pages/Dashboard";
import { LoginAdminUser } from "./LoginAdminUser";
import { PartnerLoginPage } from "./PartnerLoginPage";
import { SetAdminUser } from "./setAdminUser";
import { ThankYou } from "./ThankYou";

export const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<SetAdminUser />} />
        <Route path="/adminLogin" element={<LoginAdminUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/:partnerLoginPage" element={<PartnerLoginPage />} />
        <Route path="/add_event" element={<AddEvent />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
  );
};
