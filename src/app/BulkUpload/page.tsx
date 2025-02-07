"use client";
import { useState } from "react";
import * as XLSX from "xlsx";
import { UploadCloud, CheckCircle, XCircle } from "lucide-react";
import SideBar from "../SideBar/page";

type ParsedRow = Record<string, string | number>;

const BulkUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<ParsedRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    parseFile(uploadedFile);
  };

  const parseFile = (file: File) => {
    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target?.result) {
        setError("Error reading file.");
        return;
      }
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData: ParsedRow[] =
        XLSX.utils.sheet_to_json<ParsedRow>(sheet);
      validateData(parsedData);
    };
    reader.readAsBinaryString(file);
  };

  const validateData = (parsedData: ParsedRow[]) => {
    if (!parsedData.length) {
      setError("Uploaded file is empty or incorrectly formatted.");
      return;
    }
    setData(parsedData);
  };

  const handleUpload = () => {
    if (!data.length) return;
    console.log("Uploading data...", data);
  };

  return (
    <div className="flex h-screen">
      <div className="w-[350px] bg-gray-100 h-full fixed">
        <SideBar />
      </div>

      <div className="flex flex-col justify-end items-end w-full p-6 ml-[350px]">
        <div className="bg-white shadow rounded-lg p-6 w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Bulk Upload Products</h2>
          <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg flex flex-col items-center">
            <label className="cursor-pointer flex flex-col items-center">
              <UploadCloud className="w-12 h-12 text-gray-400 mb-2" />
              <span className="text-gray-600">
                Click to upload CSV or Excel
              </span>
              <input
                type="file"
                accept=".csv,.xlsx"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
          {file && <p className="text-gray-600 mt-2">File: {file.name}</p>}
          {error && (
            <p className="text-red-500 mt-2 flex items-center">
              <XCircle className="w-5 h-5 mr-1" /> {error}
            </p>
          )}
          {data.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">
                Preview ({data.length} items)
              </h3>
              <ul className="mt-2 max-h-40 overflow-y-auto border p-2 rounded-lg">
                {data.slice(0, 5).map((item, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    {JSON.stringify(item)}
                  </li>
                ))}
                {data.length > 5 && (
                  <li className="text-gray-500">...and more</li>
                )}
              </ul>
            </div>
          )}
          <button
            onClick={handleUpload}
            disabled={!data.length}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <CheckCircle className="w-5 h-5 mr-2" /> Upload Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkUpload;
