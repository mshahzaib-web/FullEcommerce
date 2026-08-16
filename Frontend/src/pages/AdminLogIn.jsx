import AdminLogInForm from "../components/AdminLogIn/AdminLogInForm";
import Navbar from "../components/Home/Navbar";

export default function AdminLogIn() {
  return (
    <>
      <Navbar />
      <div>
        <AdminLogInForm />
      </div>
    </>
  );
}
