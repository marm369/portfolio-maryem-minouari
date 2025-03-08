import Link from "next/link";
import Image from "next/image";
import { socials } from "@/config/app";

// Define the type for the SocialLink component props
interface SocialLinkProps {
  href: string;
  title: string;
  imageSrc: string;
}

const SocialLink = ({ href, title, imageSrc }: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full"
  >
    <Image
      src={imageSrc || "/placeholder.svg"}
      alt={title}
      width={40}
      height={40}
      className="rounded-full"
    />
  </Link>
);

const FindMeCTA = () => {
  return (
    <div className="bg-transparent text-white">
      <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Find me on</h2>
        <div className="flex justify-center space-x-6">
          <SocialLink
            href={socials.github}
            title="GitHub"
            imageSrc="/logo/github.gif"
          />
          <SocialLink
            href={socials.linkedin}
            title="LinkedIn"
            imageSrc="/logo/linkedin.gif"
          />
          <SocialLink href={socials.twitter} title="X" imageSrc="/logo/x.png" />
        </div>
      </div>
    </div>
  );
};

export default FindMeCTA;
