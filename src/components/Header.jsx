import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value.trim();
    e.target.reset();

    if (queryTerm) {
      navigate(`/Search?q=${queryTerm}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <i className="bi bi-film"></i> MovieHunt
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/top" className="nav-link">Top Rated</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/popular" className="nav-link">Popular</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/upcoming" className="nav-link">Upcoming</NavLink>
            </li>
          </ul>

          <form onSubmit={handleSearch} className="d-flex" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              name="search"
              required
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

/* or this is correct return <nav> </nav>;
*/
