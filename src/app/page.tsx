import HomeNavbar from "@/components/prisma/HomeNavbar";
import CinematicHome from "@/components/prisma/cinematic/CinematicHome";

export default function Home() {
  return (
    <div className="font-prisma overflow-x-hidden">
      <HomeNavbar />
      <CinematicHome />
    </div>
  );
}
