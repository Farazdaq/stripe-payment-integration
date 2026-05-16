import CustomerTable from "../components/CustomerTable";
import Exporter from "../components/Exporter";
import FileDownloader from "../components/FileDownloader";
import FileUploader from "../components/FileUploader";
import ImgViewer from "../components/ImgViewer";
import InvoiceTable from "../components/InvoiceTable";
import Loading from "../components/Loading";
import PackageTable from "../components/PackageTable";
import PageControllerBar from "../components/PageControllerBar";
import { useState } from "react";
import TransactionTable from "../components/TransactionTable";
import SubscriptionTable from "../components/SubscriptionTable";
import Dropdown from "../../../components/Dropdown";
import FilterTextField from "../../../components/FilterTextField";
import ContainerComp from "../../../components/ContainerComp";
export default function Customer() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <ContainerComp
        height={100}
        componentDisplay={
          <div className="flex flex-row gap-2 md:gap-2">
            <FilterTextField
              width="320px"
              height="50px"
              hintText="Filter items..."
              backgroundColor="#111827"
              borderColor="#3b82f6"
              borderWidth="2px"
              textColor="#ffffff"
              placeholderColor="#9ca3af"
              borderRadius="14px"
              fontSize="16px"
              onChange={(value) => console.log(value)}
            />
            <Dropdown
              width="300px"
              height="50px"
              backgroundColor="#1f2937"
              borderColor="#3b82f6"
              borderWidth="2px"
              textColor="#ffffff"
              dropdownBackground="#111827"
              dropdownBorderColor="#3b82f6"
              dropdownTextColor="#ffffff"
              placeholder="Choose option"
              items={[
                { label: "React", value: "react" },
                { label: "Vue", value: "vue" },
                { label: "Angular", value: "angular" },
              ]}
              onSelect={(item) => console.log(item)}
            />
            <Dropdown
              width="300px"
              height="50px"
              backgroundColor="#1f2937"
              borderColor="#3b82f6"
              borderWidth="2px"
              textColor="#ffffff"
              dropdownBackground="#111827"
              dropdownBorderColor="#3b82f6"
              dropdownTextColor="#ffffff"
              placeholder="Choose option"
              items={[
                { label: "React", value: "react" },
                { label: "Vue", value: "vue" },
                { label: "Angular", value: "angular" },
              ]}
              onSelect={(item) => console.log(item)}
            />
          </div>
        }
      />

      <ContainerComp height={100} componentDisplay={<div>+</div>} />
    </div>
  );
}
