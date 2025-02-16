import Link from 'next/link';
import { resumes } from "@/config/app";

const DownloadResumeModal = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="relative flex justify-center">
      <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 shadow-blue-500 shadow-md">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-blue-500 shadow-md dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
            <button
              onClick={close}
              className="absolute top-2 right-4 text-3xl text-gray-600 dark:text-gray-400 hover:text-gray-800 focus:outline-none"
              aria-label="Close modal"
            >
              &times;
            </button>
            <div>
              <div className="mt-4 text-center">
                <h2 className="font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                  Download My Resume
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Please choose your preferred language:
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 space-x-4">
              <Link href={resumes.english} target="_blank" rel="noopener noreferrer"
                    onClick={close}
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500">
                English
              </Link>
              <Link href={resumes.french} target="_blank" rel="noopener noreferrer"
                    onClick={close}
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500">
                Français
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadResumeModal;
