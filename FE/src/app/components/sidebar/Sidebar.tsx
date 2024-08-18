"use client";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <Image
          src={"/assets/logo-sb-footer.svg"}
          width={290}
          height={130}
          alt="logo SB"
        />
      </div>
      <div className="side-items">
        <ul>
          <li
            className={`link-wrapper ${pathname === "/" ? "selected" : ""}`}
            onClick={() => handleNavigation("/")}>
            <HomeIcon className="side-logo" />
            Inicio
          </li>
          <li
            className={`link-wrapper ${
              pathname === "/pages/search" ? "selected" : ""
            }`}
            onClick={() => handleNavigation("/pages/search")}>
            <SearchIcon className="side-logo" />
            Consulta
          </li>
          <li
            className={`link-wrapper ${
              pathname === "/pages/create-record" ? "selected" : ""
            }`}
            onClick={() => handleNavigation("/pages/create-record")}>
            <AddIcon className="side-logo" />
            Crear registro
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
