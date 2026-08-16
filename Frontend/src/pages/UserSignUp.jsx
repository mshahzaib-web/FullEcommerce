import UserSignUpForm from "../components/UserSignUp/UserSignUpForm";
import Navbar from "../components/Home/Navbar";

export default function UserSignUp() {
  return (
    <>
      <Navbar />
      <div>
        <UserSignUpForm />
      </div>
    </>
  );
}
