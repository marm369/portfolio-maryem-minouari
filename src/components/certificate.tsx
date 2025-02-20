import { CertificateProps } from "@/lib/types";

const Certificate = ({ data: certificate }: { data: CertificateProps }) => {
  return (
    <div
      className="flex items-end overflow-hidden bg-cover rounded-lg h-80 shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{ backgroundImage: `url(${certificate.image})` }}
    >
      <div className="w-full px-8 py-6 overflow-hidden rounded-b-lg backdrop-blur-md bg-white/70 dark:bg-gray-900/70">
        <h2 className="text-2xl font-bold text-gray-900 capitalize dark:text-white">
          {certificate.title}
        </h2>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-medium text-indigo-600 uppercase dark:text-indigo-400">
            {certificate.issuedBy}
          </p>
          <p className="text-sm font-medium text-indigo-600 uppercase dark:text-indigo-400">
            {certificate.issuedAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
