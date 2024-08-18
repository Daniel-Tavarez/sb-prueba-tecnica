import authService from "@/app/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.isLoggedIn());
  const router = useRouter();

  useEffect(() => {
    const handleAuthChange = (loggedInStatus: boolean) => {
      setIsLoggedIn(loggedInStatus);
    };

    // Listen for authentication changes
    authService.on("authChange", handleAuthChange);

    // Cleanup listener on unmount
    return () => {
      authService.off("authChange", handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    authService.logout();
    router.push("/pages/login");
  };

  return (
    <div className="navbar">
      <h1>Prueba Técnica - Daniel Tavarez</h1>
      {isLoggedIn && (
        <button onClick={handleLogout}>Cerrar Sesión</button>
      )}
    </div>
  );
};

export default Navbar;
