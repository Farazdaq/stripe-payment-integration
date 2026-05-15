import Loading from "../components/Loading";

export default function Customer() {
  return (
    <div>
      <Loading
        speed={3}
        width={20}
        lineHeight={4}
        height={20}
        lineColor="#F59E0B"
        backgroundColor="#FEF3C7"
      />
      <h1>Customer Page</h1>
      <p>Manage customers here.</p>
    </div>
  );
}
