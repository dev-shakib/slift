const DashboardIcon = ({ fill, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 0H13V6H18V1.5C18 0.671573 17.3284 0 16.5 0Z"
    //   fill="#5C5F62"
    />
    <path
      d="M18 8H13V18H16.5C17.3284 18 18 17.3284 18 16.5V8Z"
    //   fill="#5C5F62"
    />
    <path d="M0 13H11V18H1.5C0.671573 18 0 17.3284 0 16.5V13Z" /*fill="#5C5F62"*/ />
    <path d="M1.5 0C0.671573 0 0 0.671573 0 1.5V11H11V0H1.5Z" /*fill="#5C5F62"*/ />
  </svg>
);

export default DashboardIcon;
