import Image from "next/image";
import Link from "next/link";

interface Props {
  home?: boolean;
  pageTitle?: string;
}

const Header = ({ home, pageTitle }: Props) => {
  return (
    <header className={`row justify-content-center my-${home ? "5" : "3"}`}>
      <div className="col">
        <div className="text-center my-2">
          <Link href="/">
            <Image
              priority
              src="/images/profile.jpg"
              alt="My profile picture"
              height={home ? 220 : 140}
              width={home ? 220 : 140}
              className="rounded-circle"
              style={home ? {} : { cursor: "pointer" }}
            />
          </Link>
        </div>
        <Link href="/">
          <h1
            className={`text-center display-${home ? "2" : "5"} my-2`}
            style={home ? {} : { cursor: "pointer" }}
          >
            James Bosley
          </h1>
        </Link>
        <h2 className={`text-center ${home ? "display-6" : "fs-5"} mb-4`}>
          {pageTitle || "Web Developer"}
        </h2>
      </div>
    </header>
  );
};
export default Header;
