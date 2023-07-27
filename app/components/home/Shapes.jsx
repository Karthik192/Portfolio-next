import React from "react";

const Shapes = () => {
  return (
    <div className="shapes">
      <svg
        class="shape s1"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF0066"
          d="M43.4,-10.4C52.4,13.4,53,43.5,39.1,53.6C25.2,63.6,-3.2,53.5,-24.2,37.3C-45.1,21.1,-58.8,-1.2,-53.5,-19.9C-48.2,-38.6,-24.1,-53.6,-3.4,-52.5C17.3,-51.4,34.5,-34.1,43.4,-10.4Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        class="shape s2"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F1C21B"
          d="M39,3.8C39,25,19.5,50,-3,50C-25.5,50,-51,25,-51,3.8C-51,-17.5,-25.5,-34.9,-3,-34.9C19.5,-34.9,39,-17.5,39,3.8Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* <svg
        class="shape s3"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#B742FF"
          d="M43.5,-63.2C56.4,-59.5,66.8,-47.4,75.4,-33.1C84,-18.8,90.8,-2.4,85.1,9.7C79.5,21.9,61.4,29.7,48.3,38.2C35.3,46.8,27.2,56,15.9,63.7C4.6,71.4,-10,77.4,-23.1,75.2C-36.3,72.9,-48,62.4,-54.3,49.9C-60.6,37.5,-61.5,23.2,-66.3,7.9C-71,-7.4,-79.5,-23.8,-77.4,-38.2C-75.3,-52.5,-62.4,-64.9,-47.7,-67.7C-33.1,-70.6,-16.5,-64,-0.6,-63C15.3,-62.1,30.7,-66.9,43.5,-63.2Z"
          transform="translate(100 100)"
        />
      </svg> */}

      <svg
        className="shape s4"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FA4D56"
          d="M12.1,-28.9C15.7,-18.9,18.5,-15.6,31.7,-11.9C44.9,-8.2,68.4,-4.1,79.1,6.2C89.8,16.5,87.7,33,79.5,45.3C71.3,57.5,56.9,65.6,42.7,66.3C28.4,66.9,14.2,60.1,-0.4,60.7C-14.9,61.3,-29.8,69.4,-42.4,67.8C-54.9,66.1,-65.2,54.8,-61.4,41.9C-57.5,29,-39.7,14.5,-33.6,3.5C-27.5,-7.5,-33.2,-14.9,-36.1,-26.3C-38.9,-37.6,-39.1,-52.7,-32.6,-61.1C-26.1,-69.4,-13.1,-70.9,-4.4,-63.3C4.3,-55.7,8.5,-38.9,12.1,-28.9Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        class="shape s5"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#A7F0BA"
          d="M34.6,-60.4C46.6,-53,59.2,-47.2,62.3,-37.4C65.5,-27.6,59.1,-13.8,60.7,0.9C62.3,15.6,71.7,31.2,67,38.2C62.2,45.2,43.2,43.6,29.7,44.4C16.2,45.2,8.1,48.4,-0.4,49C-8.8,49.7,-17.7,47.8,-26.1,44.1C-34.5,40.3,-42.5,34.7,-48.3,27.1C-54,19.4,-57.6,9.7,-60.3,-1.5C-62.9,-12.8,-64.6,-25.5,-62.5,-39.6C-60.5,-53.7,-54.7,-69.2,-43.6,-77C-32.6,-84.9,-16.3,-85.2,-2.5,-80.9C11.3,-76.6,22.6,-67.7,34.6,-60.4Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        class="shape s6"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFD6E8"
          d="M42.4,-45.3C54.3,-30.6,62.6,-15.3,63.1,0.5C63.6,16.3,56.2,32.6,44.4,46.6C32.6,60.7,16.3,72.5,-3.2,75.8C-22.8,79,-45.5,73.6,-59.3,59.6C-73.1,45.5,-77.9,22.8,-76.9,1C-75.9,-20.8,-69.1,-41.5,-55.3,-56.2C-41.5,-70.9,-20.8,-79.5,-2.7,-76.7C15.3,-74,30.6,-60,42.4,-45.3Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        class="shape s7"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#BAE6FF"
          d="M33.4,-41.5C46.1,-29.1,61.3,-21.3,69.3,-7.5C77.4,6.2,78.3,26,68.3,35.8C58.3,45.6,37.4,45.5,18.8,52.7C0.2,59.8,-16,74.3,-25.7,70.8C-35.4,67.2,-38.5,45.6,-43.4,29C-48.2,12.4,-54.7,0.8,-52.8,-9.2C-50.9,-19.2,-40.6,-27.6,-30.4,-40.5C-20.2,-53.3,-10.1,-70.7,0.1,-70.8C10.3,-70.9,20.6,-53.9,33.4,-41.5Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        class="shape s8"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="M64.1,-47.2C77.5,-34.3,78.9,-8,70.3,10.5C61.7,29.1,43,39.8,24.5,47.4C6,55,-12.3,59.4,-30.4,54.1C-48.5,48.9,-66.3,34,-67.7,18.2C-69.1,2.4,-54.1,-14.4,-40.1,-27.4C-26,-40.5,-13,-49.7,6.2,-54.7C25.4,-59.6,50.7,-60.1,64.1,-47.2Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default Shapes;