import React from "react";
import * as C from "./styles";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos)
      };
    });

    const getAcessos = data.map(({ acessos }) => {
      if (data) {
        return acessos.reduce((a, b) => a + b);
      } else return null;
    });

    setTotal(getAcessos);
    setGraph(graphData);
  }, [data]);

  return (
    <C.UserStatsGraphs className="animeLeft">
      <C.Total>
        <p>Acessos: {total}</p>
      </C.Total>
      <C.Graphs>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2
            },
            labels: {
              fontSize: 14,
              fill: "#333"
            }
          }}
        />
      </C.Graphs>
      <C.Graphs>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </C.Graphs>
    </C.UserStatsGraphs>
  );
};

export default UserStatGraphs;
