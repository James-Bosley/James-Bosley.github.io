import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  home?: boolean;
  pageTitle?: string;
  noImage?: boolean;
}

const Header: FC<Props> = ({ home, pageTitle, noImage }) => {
  return (
    <header className={`row justify-content-center my-${home ? "5" : "3"}`}>
      <div className="col">
        <div className={`text-center my-2 ${noImage ? "d-none" : ""}`}>
          <Link href="/">
            <Image
              priority
              src="/images/profile.jpg"
              alt="My profile picture"
              height={home ? 220 : 140}
              width={home ? 220 : 140}
              className="rounded-circle clickable"
            />
          </Link>
        </div>
        <Link href="/">
          <h1 className={`text-center display-${home ? "2" : "5"} my-2 clickable`}>James Bosley</h1>
        </Link>
        <h2 className={`text-center ${home ? "display-6" : "fs-5"} mb-4`}>
          {pageTitle || "Web Developer"}
        </h2>
      </div>
    </header>
  );
};
export default Header;
