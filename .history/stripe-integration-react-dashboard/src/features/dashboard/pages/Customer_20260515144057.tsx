import Loading from "../components/Loading";

export default function Customer() {
  return (
    <div>
      <h1>Customer Page</h1>
      <p>Manage customers here.</p>
      <Loading speed={1} lineColor="#F59E0B" backgroundColor="#FEF3C7" />
    </div>
  );
}
