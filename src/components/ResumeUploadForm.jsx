import { motion } from "framer-motion";
import { UploadCloud, FileText } from "lucide-react";

const ResumeUploadForm = ({
  resume,
  setResume,
  handleResumeUpload,
  handleDragOver,
  handleDragEnter,
  handleDragLeave,
  handleDrop,
  dragActive,
  jobRole,
  setJobRole,
  handleAnalyze,
  resumeUploaded,
  loading,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-full max-w-xl flex flex-col items-center gap-6 text-center">
        {/* Upload Box */}
        <motion.label
          htmlFor="resume-upload"
          className={`w-full h-96 bg-blue-100 border-2 border-dashed ${
            dragActive ? "border-blue-600" : "border-blue-400"
          } rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
            loading ? "pointer-events-none opacity-60" : "hover:scale-105"
          }`}
          whileHover={!loading ? { scale: 1.02 } : {}}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {resume ? (
            <div className="flex items-center gap-2 text-blue-700 font-medium">
              <FileText size={24} />
              <span className="text-sm">{resume.name}</span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <UploadCloud size={64} className="text-blue-500 mb-4" />
              <p className="text-base font-semibold text-blue-600 px-6">
                Drop your resume here or upload your file
              </p>
              <p className="text-sm text-blue-500 mt-1">
                PDF & DOCX Only. Max 2MB File Size!
              </p>
            </div>
          )}
        </motion.label>

        {/* Hidden Input */}
        <input
          type="file"
          id="resume-upload"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeUpload}
          disabled={loading}
        />

        {/* Job Role Input */}
        <div className="w-full flex flex-col items-center sm:flex-row sm:justify-center sm:gap-4">
          <label
            htmlFor="job-role"
            className="text-base font-semibold text-blue-700"
          >
            Enter Job Role:
          </label>
          <input
            id="job-role"
            type="text"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            placeholder="Ex: Front End Developer"
            className="w-full sm:w-80 mt-2 sm:mt-0 px-4 py-2 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
          <button
            onClick={handleAnalyze}
            className="mt-3 sm:mt-0 sm:ml-2 bg-[#256EFF] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 disabled:opacity-50"
            disabled={!resumeUploaded || jobRole.trim() === "" || loading}
          >
            {loading ? "Analyzing..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadForm;
