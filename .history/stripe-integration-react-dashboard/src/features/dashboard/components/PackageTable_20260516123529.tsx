import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ImgViewer from "./ImgViewer";
import FileUploader from "./FileUploader";
import { useTheme } from "../../../theme/useTheme";

type PackageItem = {
  id: string | number;
  name: string;
  code: string;
  price: string | number;
  type: string;
  interval: string;
  productId: string;
  planId: string;
  features: string[];
  description: string;
};

type PackageTableProps = {
  data: PackageItem[];

  width?: string | number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;

  onEdit?: (item: PackageItem) => void;
};

export default function PackageTable({
  data,

  width = "100%",
  backgroundColor = "#FFFFFF",
  borderColor = "#E2E8F0",
  textColor = "#0F172A",

  onEdit,
}: PackageTableProps) {
  const [openRow, setOpenRow] = useState<string | number | null>(null);

  const toggleRow = (id: string | number) => {
    setOpenRow(openRow === id ? null : id);
  };
  const { theme } = useTheme();
  return (
    <div
      className="overflow-x-auto"
      style={{
        width,
        backgroundColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <table className="min-w-[1100px] w-full text-sm">
        {/* HEADER */}
        <thead>
          <tr
            className="text-center font-semibold"
            style={{ color: textColor }}
          >
            <th className="p-3 border-b" style={{ borderColor }}>
              ID
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Name
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Code
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Price
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Type
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Interval
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Product ID
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Plan ID
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              #
            </th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((item) => {
            const isOpen = openRow === item.id;

            return (
              <React.Fragment key={item.id}>
                {/* MAIN ROW */}
                <tr className="text-center" style={{ borderColor }}>
                  <td className="p-3 border-b">{item.id}</td>
                  <td className="p-3 border-b font-medium">{item.name}</td>
                  <td className="p-3 border-b">{item.code}</td>
                  <td className="p-3 border-b">{item.price}</td>
                  <td className="p-3 border-b">{item.type}</td>
                  <td className="p-3 border-b">{item.interval}</td>
                  <td className="p-3 border-b">{item.productId}</td>
                  <td className="p-3 border-b">{item.planId}</td>

                  {/* ACTIONS */}
                  <td className="p-3 border-b flex items-center justify-center gap-3">
                    <button
                      onClick={() => onEdit?.(item)}
                      className="underline text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>

                    <button onClick={() => toggleRow(item.id)}>
                      {isOpen ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                  </td>
                </tr>

                {/* EXPANDED ROW */}
                {isOpen && (
                  <tr>
                    <td
                      colSpan={9}
                      className="p-4 border-b"
                      style={{ borderColor }}
                    >
                      <div className="grid md:grid-cols-2 gap-6 items-start">
                        {/* LEFT SIDE */}
                        <div>
                          <h3 className="font-semibold mb-2">Features</h3>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            {item.features.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>

                          <h3 className="font-semibold mt-4 mb-2">
                            Description
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex flex-col gap-2 ml-80">
                          <ImgViewer
                            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                            width="30%"
                            height={100}
                            borderColor={theme.colors.text}
                            borderWidth={1}
                            objectFit="contain"
                            backgroundColor={
                              theme.colors.containerCopBackgroundColor
                            }
                          />

                          <FileUploader
                            width="30%"
                            borderWidth={1}
                            borderStyle="solid"
                            height={100}
                            borderColor={theme.colors.borderColor}
                            backgroundColor={
                              theme.colors.containerCopBackgroundColor
                            }
                            iconColor={theme.colors.text}
                            text="Change"
                            onChange={(files) => console.log(files)}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
