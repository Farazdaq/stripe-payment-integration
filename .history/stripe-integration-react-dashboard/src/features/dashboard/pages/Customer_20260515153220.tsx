import Exporter from "../components/Exporter";
import FileDownloader from "../components/FileDownloader";
import FileUploader from "../components/FileUploader";
import Loading from "../components/Loading";

export default function Customer() {
  return (
    <div>
      <Exporter
        width={100}
        height={100}
        color="#22C55E"
        backgroundColor="#ECFDF5"
        borderColor="#16A34A"
        borderWidth={3}
        type="excel"
        fileName="users-data"
        columns={[
          { key: "name", header: "Name" },
          { key: "email", header: "Email" },
        ]}
        data={[
          { name: "John", email: "john@test.com" },
          { name: "Sarah", email: "sarah@test.com" },
        ]}
      />
      <FileUploader
        width="30%"
        borderStyle="solid"
        height={250}
        borderColor="#3B82F6"
        backgroundColor="#EFF6FF"
        iconColor="#2563EB"
        text="Upload PDF, DOCX, Images, ZIP or any file"
        onChange={(files) => console.log(files)}
      />
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
