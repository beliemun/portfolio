import { Line } from "@nivo/line";
import React from "react";
import { useTranslation } from "react-i18next";
import { Ads, Apple, InterestGoogle, MacaronGoogle, Total } from "./Jsons";

interface ILineChartProps {
  size: {
    width: number;
    height: number;
  };
}

const LineChart: React.FC<ILineChartProps> = ({ size }) => {
  const { t } = useTranslation();
  const data = [
    {
      id: t("chart1"),
      data: Total,
    },
    {
      id: t("chart2"),
      data: Ads,
    },
    {
      id: t("chart3"),
      data: Apple,
    },
    {
      id: t("chart4"),
      data: MacaronGoogle,
    },
    {
      id: t("chart5"),
      data: InterestGoogle,
    },
  ];
  return (
    <Line
      width={size.width}
      height={size.height}
      curve="monotoneX"
      data={data}
      enablePointLabel={true}
      pointSize={8}
      pointLabelYOffset={-10}
      pointBorderWidth={1}
      pointBorderColor={{
        from: "color",
        modifiers: [["darker", 1]],
      }}
      margin={{ top: 20, right: 120, bottom: 40, left: 30 }}
      colors={["#eb3b5a", "#1abc9c80", "#3498db80", "#eb3b5a80", "#f7b73180"]}
      axisLeft={null}
      yFormat=">-.3s"
      axisBottom={{
        tickSize: 0,
        tickPadding: 15,
        tickRotation: 0,
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 2,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 1,
          symbolSize: 14,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
        },
      ]}
    />
  );
};

export default LineChart;
