import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

const NotFoundPage = () => {
  return (
    <div className="h-dvh items-center place-content-center">
      <div className="h-50 flex flex-row gap-1 place-content-center items-center justify-center">
        <h1 className="text-base">404 Not Found</h1>
        <Separator orientation="vertical" />
        <Link to={"/"}>
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
