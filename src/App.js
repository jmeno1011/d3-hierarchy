import "./styles.css";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { data } from "./utils";
export default function App() {
  const svgRef = useRef(null);
  const height = 500;
  const width = 1100;
  const margin = { top: 0, left: 80, right: 50, bottom: 0 };
  const innerWidth = width - margin.right - margin.left;
  const innerHeight = height - margin.top - margin.bottom;
  const [tData, setTData] = useState({ name: "root" });
  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // svg 창 크기 및 테두리 border
    svg
      .attr("height", height)
      .attr("width", width)
      .attr("style", "border: 2px solid black")
      .style("padding", 16);
    // .attr("transform", `translate(80, 0)`);

    // tree link position
    const treeLayout = d3.tree().size([innerHeight, innerWidth]);

    // data hierarchy
    // const root = d3.hierarchy(data);
    const root = d3.hierarchy(tData);
    // root node sort and linked
    const links = treeLayout(root).links();
    // tree horizontal x -> y, y -> x
    const linkPathGenerator = d3
      .linkHorizontal()
      .x((d) =>
        // (d) => d.y + 300
        {
          return d.y + d.data.name.length;
        }
      )
      .y((d) => d.x);

    // all select text tag and add another text
    svg
      .selectAll("text")
      .data(root.descendants())
      .enter()
      .append("text")
      .attr("x", (d) => d.y)
      .attr("y", (d) => d.x)
      .attr("dy", "0.32em") // node text yAxies position
      .attr("text-anchor", (d) => {
        console.log(d);
        return d.children ? "end" : "start";
      })
      .attr("font-size", "20px")
      .attr("font-size", (d) => 3.2 - d.depth + "em")
      .text((d) => d.data.name); // show name text

    svg
      .selectAll("path")
      .data(links)
      .enter()
      .append("path")
      .attr("d", linkPathGenerator);
    console.log("tData::", tData);
    svg.exit().remove();
  }, [tData]);

  const addChild = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const { value } = e.target;
    if (tData.children == null) {
      setTData((tData) => ({
        ...tData,
        children: [
          {
            name: value
          }
        ]
      }));
    } else {
      const values = tData.children;
      values.push({ name: value });
      setTData({ ...tData, children: values });
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ margin: 16 }}>
        <svg ref={svgRef}> </svg>
      </div>
      <button onClick={(e) => addChild(e)} value="child#1">
        child#1
      </button>
      <button onClick={(e) => addChild(e)} value="child#2">
        child#2
      </button>
      <button onClick={(e) => addChild(e)} value="grandchild #1">
        grandchild #1
      </button>
    </div>
  );
}

const testData = {
  name: "root",
  children: [
    { name: "child #1" },
    {
      name: "child #2",
      children: [
        { name: "grandchild #1" },
        { name: "grandchild #2" },
        { name: "grandchild #3" }
      ]
    }
  ]
};
