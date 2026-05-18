import Loading from "../components/Loading";

export default function Customer() {
  return (
    <div>
      <Loading
        speed={1}
        width={50}
        height={50}
        lineColor="#F59E0B"
        backgroundColor="#FEF3C7"
      />
      <h1>Customer Page</h1>
      <p>Manage customers here.</p>
    </div>
  );
}
