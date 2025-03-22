function NotFound() {
  return (
    <div className="container">
      <Nav />
      <h1>404</h1>
      <p>Page not found</p>
      <Footer children={<Clock />} className={"footer"} />
    </div>
  );
}

export default NotFound;
