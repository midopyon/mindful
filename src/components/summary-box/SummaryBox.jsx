import React from "react";
import "./summary-box.scss";
import Box from "../box/Box";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { colors } from "../../constants";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SummaryBox = ({ item }) => {
  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box__info">
          <div className="summary-box__info__title">
            <div>{item.title}</div>
          </div>
        </div>
        <div className="summary-box__parent">
          <div className="summary-box__chart">
            <CircularProgressbarWithChildren
              value={item.dim1}
              strokeWidth={12}
              styles={buildStyles({
                pathColor:
                  item.dim1 < 34
                    ? colors.circleGreen
                    : item.dim1 < 67
                    ? colors.circleYellow
                    : colors.circleRed,
                trailColor:
                  item.dim1 < 34
                    ? colors.pathGreen
                    : item.dim1 < 67
                    ? colors.pathYellow
                    : colors.pathRed,
                strokeLinecap: "round",
              })}
            >
              <div className="summary-box__chart__value">{item.dim1}%</div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="summary-box__description">
            cansancio <br />
            emocional
          </div>
        </div>
        <div className="summary-box__parent">
          <div className="summary-box__chart">
            <CircularProgressbarWithChildren
              value={item.dim2}
              strokeWidth={12}
              styles={buildStyles({
                pathColor:
                  item.dim2 < 34
                    ? colors.circleGreen
                    : item.dim2 < 67
                    ? colors.circleYellow
                    : colors.circleRed,
                trailColor:
                  item.dim2 < 34
                    ? colors.pathGreen
                    : item.dim2 < 67
                    ? colors.pathYellow
                    : colors.pathRed,
                strokeLinecap: "round",
              })}
            >
              <div className="summary-box__chart__value">{item.dim2}%</div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="summary-box__description">
            despersona-
            <br />
            lizacion
          </div>
        </div>
        <div className="summary-box__parent">
          <div className="summary-box__chart">
            <CircularProgressbarWithChildren
              value={item.dim3}
              strokeWidth={12}
              styles={buildStyles({
                pathColor:
                  item.dim3 < 34
                    ? colors.circleGreen
                    : item.dim3 < 67
                    ? colors.circleYellow
                    : colors.circleRed,
                trailColor:
                  item.dim3 < 34
                    ? colors.pathGreen
                    : item.dim3 < 67
                    ? colors.pathYellow
                    : colors.pathRed,
                strokeLinecap: "round",
              })}
            >
              <div className="summary-box__chart__value">{item.dim3}%</div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="summary-box__description">
            realizacion
            <br />
            personal
          </div>
        </div>
      </div>
    </Box>
  );
};

export default SummaryBox;

export const SummaryBoxSpecial = ({ item }) => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: item.chartData.labels,
    datasets: [
      {
        label: "Revenue",
        data: item.chartData.data,
        borderColor: "#fff",
        tension: 0.5,
      },
    ],
  };
  return (
    <Box purple fullheight>
      <div className="summary-box-special">
        <div className="summary-box-special__title">{item.title}</div>
        <div className="summary-box-special__value">{item.value}</div>
        <div className="summary-box-special__chart">
          <Line options={chartOptions} data={chartData} width={`250px`} />
        </div>
      </div>
    </Box>
  );
};
