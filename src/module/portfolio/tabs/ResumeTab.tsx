import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Download, Link as LinkIcon } from "lucide-react";
import { IS_PROD } from "@/config";

const ResumeTab: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${window.location.origin}/resume.pdf`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <div className="flex w-full text-gray-400 border-b items-center justify-between pr-4 py-2">
        <div className="text-blue-500 font-bold text-2xl">Resume</div>
        <div className="flex items-center space-x-2">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-3 py-1.5 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition"
          >
            <Download className="w-4 h-4 mr-1" />
            Download
          </a>
          <button
            onClick={handleCopy}
            className="inline-flex items-center px-3 py-1.5 border border-gray-400 text-gray-600 rounded hover:bg-gray-100 transition cursor-pointer"
          >
            <LinkIcon className="w-4 h-4 mr-1" />
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </div>

      <div className="w-full flex-1 overflow-auto px-4 py-4">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <div className="flex justify-start">
            <Viewer
              fileUrl={(IS_PROD ? "/anverma" : "") + "/resume.pdf"}
              defaultScale={1.1}
            />
          </div>
        </Worker>
      </div>
    </div>
  );
};

export default ResumeTab;
