import { ClipLoader } from "react-spinners";

export const MainContent = () => {
  return (
    <div className="z-40 w-48 flex">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-30 -translate-y-1/2">
        <ClipLoader color="white" size={150} aria-label="Loading Spinner" />
      </div>
    </div>
  );
};

export const Background = () => {
  return (
    <div className="z-10 top-0 left-0 w-full h-screen absolute bg-black opacity-80 overflow-hidden"></div>
  );
};

export const Loading = () => {
  return (
    <div>
      <Background />
      <MainContent />
    </div>
  );
};
