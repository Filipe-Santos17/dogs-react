import { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

export default function UserStatsGraphs({ data }) {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const graphData = data.map(item => {
      return {
        x: item.title,
        y: +item.acessos,
      }
    })

    setGraph(graphData)

    setTotal(data.map(({ acessos }) => +acessos).reduce((a, b) => a + b, 0));
  }, [data]);

  return (
    <section className="animeLeft grafico">
      <div className="grafico-total grafico-item">
        <p>Acessos: {total}</p>
      </div>
      <div className="grafico-item">
        <VictoryPie data={graph} innerRadius={50} padding={{top: 20, bottom: 20, left: 80, right: 80}} style={{
          data: {
            fillOpacity: .9,
            stroke: "#FFF",
            strokeWidth: 2,
          },
          labels: {
            fontSize: 14,
            fill: "#333",
          }
        }}/>
      </div>
      <div className="grafico-item">
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}/>
        </VictoryChart>
      </div>
    </section>
  );
}
