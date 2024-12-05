import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="frontend-svg"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="1098.75"
        height="632.37039"
        viewBox="0 0 1098.75 632.37039"
      >
        <title>Frontend Development</title>

        {/* Ground shadow */}
        <ellipse
          cx="549.375"
          cy="600.77366"
          rx="549.375"
          ry="31.59674"
          fill={theme.compImgHighlight}
        />

        {/* Browser Frame */}
        <rect
          x="200"
          y="100"
          width="700"
          height="400"
          rx="10"
          fill={theme.secondaryText}
        />
        <rect
          x="200"
          y="100"
          width="700"
          height="40"
          rx="10"
          fill={theme.dark}
        />
        <circle cx="230" cy="120" r="10" fill={theme.imageHighlight} />
        <circle cx="260" cy="120" r="10" fill={theme.imageHighlight} />
        <circle cx="290" cy="120" r="10" fill={theme.imageHighlight} />

        {/* UI Components */}
        <rect
          x="250"
          y="180"
          width="300"
          height="40"
          rx="5"
          fill={theme.imageHighlight}
        />
        <rect
          x="250"
          y="250"
          width="500"
          height="100"
          rx="10"
          fill={theme.compImgHighlight}
        />
        <rect
          x="320"
          y="380"
          width="300"
          height="40"
          rx="5"
          fill={theme.imageHighlight}
        />

        {/* Responsive Design Icons */}
        <rect
          x="100"
          y="150"
          width="120"
          height="200"
          rx="10"
          fill={theme.compImgHighlight}
        />
        <rect
          x="950"
          y="150"
          width="90"
          height="160"
          rx="10"
          fill={theme.imageHighlight}
        />
        <rect
          x="970"
          y="170"
          width="50"
          height="20"
          rx="5"
          fill={theme.secondaryText}
        />
        <rect
          x="970"
          y="210"
          width="50"
          height="20"
          rx="5"
          fill={theme.secondaryText}
        />

        {/* Design Tool Symbol */}
        <circle
          cx="900"
          cy="500"
          r="50"
          fill={theme.imageHighlight}
          opacity="0.3"
        />
        <circle cx="900" cy="500" r="35" fill={theme.compImgHighlight} />
        <text x="880" y="505" fill={theme.text} fontSize="20" fontWeight="bold">
          UI
        </text>

        {/* Interactive Circle */}
        <circle
          cx="600"
          cy="500"
          r="25"
          fill={theme.imageHighlight}
          opacity="0.6"
        />
        <circle cx="600" cy="500" r="15" fill={theme.text} />
      </svg>
    );
  }
}
