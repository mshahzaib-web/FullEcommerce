import AdminSignUpForm from "../components/AdminSignUpForm/AdminSignUpForm";
import Navbar from "../components/Home/Navbar";

export default function AdminSignUp() {
  return (
    <>
      <Navbar />
      <div>
        <AdminSignUpForm />
      </div>
    </>
  );
}
