import React from "react";
import { Bar } from "react-chartjs-2";
import Box from "../components/box/Box";
import DashboardWrapper, {
  DashboardWrapperMain,
} from "../components/dashboard-wrapper/DashboardWrapper";
import SummaryBox from "../components/summary-box/SummaryBox";
import ResourceBox from "../components/summary-box/ResourceBox";
import { colors, data } from "../constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="section-title row ">
            Indice de Burnout de Perla
            <div className="section-alert">Riesgo Muy Alto</div>
            </div>
        <hr
          style={{
            color: "C4CEA1",
            color: "#C4CEA1",
            backgroundColor: "#C4CEA1",
            height: 3,
            borderColor: "#C4CEA1",
            marginTop: "20px",
            marginBottom: "40px",
          }}
        />
        <div className="row">
          <div className="col-4">
            <SummaryBox item={data.summary[0]} />
          </div>
          <div className="col-8">
            <Box>
              <RevenueByMonthsChart />
            </Box>
          </div>
        </div>
        <br/>
        <div className="section-title row ">
            Recursos
            </div>
        <hr
          style={{
            color: "C4CEA1",
            color: "#C4CEA1",
            backgroundColor: "#C4CEA1",
            height: 3,
            borderColor: "#C4CEA1",
            marginTop: "20px",
            marginBottom: "40px",
          }}
        />
          <div className="row">
          <div className="col-4">
            <ResourceBox resource={data.resources[0]} />
          </div>
          <div className="col-4">
            <ResourceBox resource={data.resources[1]} />
          </div>
          <div className="col-4">
            <ResourceBox resource={data.resources[2]} />
          </div>
        </div>
      </DashboardWrapperMain>
    </DashboardWrapper>
  );
};

export default Dashboard;

const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
            borderDash: [8, 4],
          display: true,
          drawBorder: false,
        },
        ticks: {
          min: 0,
          max: 150,
          stepSize: 30,
          suggestedMin: 0.5,
          suggestedMax: 150.5,
          callback: function(label, index, labels) {
            switch (label) {
              case 60:
                return 'riesgo\nbajo';
              case 90:
                return 'riesgo\nmedio';
              case 120:
                return 'riesgo\nalto';
            }
          }
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.pastelYellow,
        hoverBackgroundColor: colors.brown,
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: "Indice de Riesgo",
        data: data.revenueByMonths.data,
      },
    ],
  };
  return (
    <>
      <div className="title mb">data historica</div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  );
};
