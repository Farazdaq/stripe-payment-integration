import CustomerTable from "../components/CustomerTable";
import Exporter from "../components/Exporter";
import FileDownloader from "../components/FileDownloader";
import FileUploader from "../components/FileUploader";
import ImgViewer from "../components/ImgViewer";
import Loading from "../components/Loading";
import PackageTable from "../components/PackageTable";
import PageControllerBar from "../components/PageControllerBar";
import { useState } from "react";
export default function Customer() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div className="p-6">
        <PackageTable
          data={[
            {
              id: 1,
              name: "Starter Plan",
              code: "ST-001",
              price: "$10",
              type: "Monthly",
              interval: "30 days",
              productId: "PROD-1001",
              planId: "PLAN-2001",
              features: ["Basic Support", "1 User", "Email Access"],
              description: "This is a starter package for new users.",
            },
          ]}
          onEdit={(item) => console.log("Edit:", item)}
        />
        <CustomerTable
          backgroundColor="#F8FAFC"
          borderColor="#CBD5E1"
          data={[
            {
              id: 1,
              accountId: "ACC-1001",
              stripeId: "STR-88991",
              name: "John Doe",
              email: "john@test.com",
              phone: "+971 555 1234",
              country: "UAE",
              paymentMethod: true,
            },
            {
              id: 2,
              accountId: "ACC-1002",
              stripeId: "STR-88992",
              name: "Sarah Khan",
              email: "sarah@test.com",
              phone: "+971 555 5678",
              country: "UAE",
              paymentMethod: false,
            },
          ]}
          onEdit={(row) => console.log("Edit:", row)}
        />
      </div>
      <PageControllerBar
        currentPage={page}
        totalPages={7}
        backgroundColor="#F1F5F9"
        borderColor="#94A3B8"
        textColor="#0F172A"
        activeColor="#22C55E"
        onPageChange={setPage}
      />
      <ImgViewer
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
        width="20%"
        height={100}
        borderColor="#3B82F6"
        borderWidth={3}
        objectFit="cover"
      />
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
