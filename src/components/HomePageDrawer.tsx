import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const HomePageDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="flex justify-center items-center border rounded-md p-2">Get in Touch!</DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col justify-center items-center h-[50vh]">
          <div className="text-slate-500 text-2xl p-5">Follow me on social media</div>
          <div className="flex flex-row p-3 items-center justify-center w-56 ">
            <div className="p-5">
              <a href="https://www.linkedin.com/in/kishenlodhia" target="_blank" className="h-10 w-10">
                <FaLinkedin size={50} />
              </a>
            </div>
            <div className="p-5">
              <a href="https://github.com/KishenLodhia" target="_blank" className="h-10 w-10">
                <FaGithub size={50} />
              </a>
            </div>
            <div className="p-5">
              <a href="https://www.facebook.com/lodhia.kishan" target="_blank" className="h-10 w-10">
                <FaFacebook size={50} />
              </a>
            </div>
            <div className="p-5">
              <a href="https://www.instagram.com/kishen_lodhia/" target="_blank" className="h-10 w-10">
                <FaInstagram size={50} />
              </a>
            </div>
          </div>
          <div className="flex flex-auto items-center justify-center text-sm text-slate-500">
            Looking forward connecting
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default HomePageDrawer;
