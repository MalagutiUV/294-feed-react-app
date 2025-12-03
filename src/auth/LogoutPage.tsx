function LogoutPage() {
  localStorage.removeItem("token");

  return <h1>Sie wurden erfolgreich ausgeloggt.</h1>;
}
export default LogoutPage;
