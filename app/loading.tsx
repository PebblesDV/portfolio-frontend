import { Loader } from "react-feather";

export default function Loading() {
  return (
    <div className="flex justify-center items-center flex-1">
      <Loader className="animate-spin" />
    </div>
  );
}
