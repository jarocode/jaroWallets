const size = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};

export default device;
