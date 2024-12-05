import React, { Component } from "react";

export default class BackendImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="backend-svg"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="1098.75"
        height="632.37039"
        viewBox="0 0 1098.75 632.37039"
      >
        <title>Backend Development</title>
        {/* Ground shadow */}
        <ellipse
          cx="549.375"
          cy="600.77366"
          rx="549.375"
          ry="31.59674"
          fill={theme.compImgHighlight}
        />

        {/* Server Rack */}
        <rect
          x="200"
          y="100"
          width="200"
          height="400"
          rx="10"
          fill={theme.dark}
        />
        <rect
          x="220"
          y="120"
          width="160"
          height="40"
          rx="5"
          fill={theme.secondaryText}
        />
        <rect
          x="220"
          y="180"
          width="160"
          height="40"
          rx="5"
          fill={theme.secondaryText}
        />
        <rect
          x="220"
          y="240"
          width="160"
          height="40"
          rx="5"
          fill={theme.secondaryText}
        />
        <rect
          x="220"
          y="300"
          width="160"
          height="40"
          rx="5"
          fill={theme.secondaryText}
        />
        <rect
          x="220"
          y="360"
          width="160"
          height="40"
          rx="5"
          fill={theme.secondaryText}
        />

        {/* Database Icon */}
        <ellipse
          cx="700"
          cy="150"
          rx="100"
          ry="40"
          fill={theme.imageHighlight}
        />
        <rect
          x="600"
          y="150"
          width="200"
          height="150"
          fill={theme.imageHighlight}
        />
        <ellipse
          cx="700"
          cy="300"
          rx="100"
          ry="40"
          fill={theme.imageHighlight}
        />

        {/* API Symbol */}
        <circle
          cx="900"
          cy="400"
          r="50"
          fill={theme.imageHighlight}
          opacity="0.3"
        />
        <circle cx="900" cy="400" r="35" fill={theme.imageHighlight} />
        <text x="880" y="405" fill={theme.text} fontSize="20" fontWeight="bold">
          API
        </text>

        {/* Network Lines */}
        <line
          x1="300"
          y1="200"
          x2="600"
          y2="220"
          stroke={theme.text}
          strokeWidth="2"
        />
        <line
          x1="600"
          y1="220"
          x2="900"
          y2="380"
          stroke={theme.text}
          strokeWidth="2"
        />
        <line
          x1="300"
          y1="300"
          x2="600"
          y2="270"
          stroke={theme.text}
          strokeWidth="2"
        />
        <line
          x1="600"
          y1="270"
          x2="900"
          y2="420"
          stroke={theme.text}
          strokeWidth="2"
        />
      </svg>
    );
  }
}
