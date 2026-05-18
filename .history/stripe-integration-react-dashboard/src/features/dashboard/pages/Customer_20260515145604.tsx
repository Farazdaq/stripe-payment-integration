import Loading from "../components/Loading";

export default function Customer() {
  return (
    <div>
      <FileDownloader
        width={90}
        height={90}
        color="#22C55E"
        backgroundColor="#ECFDF5"
        fileName="users-report"
        type="pdf"
        title="Users Report"
        columns={[
          { key: "name", header: "Name" },
          { key: "email", header: "Email" },
          { key: "role", header: "Role" },
        ]}
        data={[
          {
            name: "John Doe",
            email: "john@example.com",
            role: "Admin",
          },
          {
            name: "Sarah",
            email: "sarah@example.com",
            role: "User",
          },
        ]}
      />
      <Loading
        speed={1}
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
