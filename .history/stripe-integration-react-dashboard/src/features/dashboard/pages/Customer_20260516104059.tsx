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
    <div className="flex flex-row gap-2 md:gap-2">
      <ContainerComp height={100} componentDisplay={} />
    </div>
  );
}
