import React from "react";
import "./summary-box.scss";
import Box from "../box/Box";
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

const ResourceBox = ({ resource }) => {
  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box__info">
          <div className="summary-box__info__title">
            <div>{resource.title}</div>
          </div>
        </div>
        <div className="summary-box__text">{resource.content}</div>
        <div className="summary-box__readmore">
          <i class='bx bx-chevron-right bx-md'/>
          <a href={resource.url} target="_blank" style={{color: 'green'}}>leer mas</a>
        </div>
      </div>
    </Box>
  );
};

export default ResourceBox;
