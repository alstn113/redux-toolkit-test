import { Link } from "react-router-dom";

const NavPage = () => {
  return (
    <>
      <Link to="/">Home </Link>
      <Link to="/count">count </Link>
      <Link to="/todos">todos </Link>
      <Link to="/sample">sample </Link>
    </>
  );
};

export default NavPage;
