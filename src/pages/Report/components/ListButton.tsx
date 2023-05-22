import * as React from "react";
import { REPORT_LIST } from "../../../const";
import { CodeIcon } from "../../../icons";

interface IListButtonProps {
  handleShowCode: (name: string, type: string) => void;
}

const ListButton: React.FunctionComponent<IListButtonProps> = ({
  handleShowCode,
}) => {
  return (
    <>
      {REPORT_LIST.map((item, index) => (
        <div
          key={index}
          className="flex items-baseline border-b-2 border-gray-500 gap-[100px] py-8"
        >
          <span className="font-semibold text-3xl min-w-[150px]">
            {item.key}
          </span>
          {item.nodes.map((x, y) => (
            <div key={y} className="pl-3">
              <span className="font-medium text-xl">{x.name}</span>
              <div>
                {x.nodes.map((z, w) => (
                  <div key={w} className="pl-4 flex gap-8 items-center py-2">
                    <span className="min-w-[120px]">Button {z.type}</span>
                    <div className="min-w-[100px]">{z.node}</div>
                    <div
                      className="cursor-pointer"
                      title="Show code"
                      onClick={() => handleShowCode("button", z.type)}
                    >
                      <CodeIcon />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ListButton;
