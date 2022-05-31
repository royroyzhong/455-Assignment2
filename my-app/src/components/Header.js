import Nav from "./Nav.js";
function Header() {
  // const showHome = () => {
  //   if (window.location.pathname === "/") {
  //     return <Home />;
  //   }
  // };
  // const showAbout = () => {
  //   if (window.location.pathname === "/about") {
  //     return <About />;
  //   }
  // };
  return (
    <>
      <div className="header">
        <h1>CPSC 455</h1>
        <h2>My Receipe with pure HTML, CSS, and JavaScript</h2>
      </div>
      <Nav />
      {/* {showHome()}
      {showAbout()} */}
    </>
  );
}

export default Header;
