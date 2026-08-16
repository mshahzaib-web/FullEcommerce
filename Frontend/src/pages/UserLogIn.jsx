import UserLogInForm from "../components/UserLogIn/UserLogInForm";
import Navbar from "../components/Home/Navbar";

export default function UserLogIn() {
  return (
    <>
      <Navbar />
      <div>
        <UserLogInForm />
      </div>
    </>
  );
}
