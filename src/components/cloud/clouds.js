import React, { Fragment, useContext, useState, useEffect } from "react";
import { scaleLinear } from "d3-scale";
import PropTypes from "prop-types";
import { GlobalStateContext } from "../../context/GlobalContextProvider"

import Cloud from "./cloud";

const minClouds = 2;
const maxClouds = 20;

function generateClouds(width, height, timeOfDay, state) {

  const clouds = scaleLinear()
    .domain([0, 100])
    .rangeRound([minClouds, maxClouds])(state.cloudCover);

  const xPosScale = scaleLinear()
    .rangeRound([0, width]);

  const yPosScale = scaleLinear()
    .rangeRound([height / 4, height / 2]);

  const fillScale = scaleLinear()
    .domain([1, clouds])
    .range([
      state.colors[timeOfDay].cloudForeground,
      state.colors[timeOfDay].cloudBackground
    ]);

  return [...new Array(clouds)].map((a, layer) => ({
    x: xPosScale(Math.random()),
    y: yPosScale((Math.random() / 2) + ((clouds - layer) / 10)),
    fill: fillScale(clouds / 1.5  - layer),
    layer,
  }));
}

export default function Clouds({ width, height, timeOfDay }) {

  const context = useContext(GlobalStateContext);

  const [clouds, setClouds] = useState([], width, height, timeOfDay, context);

  useEffect(() =>
    setClouds(generateClouds(width, height, timeOfDay, context)),
    [width, height, timeOfDay, context]
  );

  return (
    <Fragment>
      <filter id="dropShadow">
        <feOffset dx="4" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.7"/>
        </feComponentTransfer>
        <feMerge> 
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
        {
          clouds.map((props, i) =>
            <Cloud { ...props } key={ i }></Cloud>)
        }
    </Fragment>
  )
}

Clouds.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  timeOfDay: PropTypes.string
}
