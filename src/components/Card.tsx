import React from "react";
import ProgressCircle from "./ProgressCircle";
import DotMenu from "./DotMenu";

interface Data {
  topic: string;
  label: string;
  value: number;
  percentage: number;
}
interface Props {
  data: Data[];
}
const Card = ({ data }: Props) => {
  return (
    <>
      {data.map((data) => (
        <div className="col-xl-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="dropdown float-end">
                <DotMenu />
              </div>
              <h4 className="header-title mt-0 mb-4">
                <strong>{data.topic}</strong>
              </h4>

              <div className="widget-chart-1">
                <div className="widget-chart-box-1 float-start" dir="ltr">
                  <ProgressCircle value={data.percentage} />
                </div>

                <div className="widget-detail-1 text-end">
                  <h2 className="fw-normal pt-2 mb-1">{data.value}</h2>
                  <p className="text-muted mb-1">{data.label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
