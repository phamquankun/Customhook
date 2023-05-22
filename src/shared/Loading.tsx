import * as React from "react";

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
      <div className="w-fit p-6 bg-slate-50 rounded-lg">
        <span className="font-medium text-lg">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
