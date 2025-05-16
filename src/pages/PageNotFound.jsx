import notfound from "../assets/404.jpg";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="container text-center py-5">
      <img
        src={notfound}
        alt="404 Not Found"
        className="img-fluid w-100"
        style={{ maxHeight: "80vh", objectFit: "contain" }}
      />
      <p className="mt-4">
        <Link to="/" className="btn btn-danger">
          Go to Home Page
        </Link>
      </p>
    </div>
  );
};
