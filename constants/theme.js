const colors = {
  accent: "#2196f3",
  primary: "#0AC4BA",
  secondary: "#2BDA8E",
  tertiary: "#FFE358",
  black: "#2F2F2F",
  white: "#FFFFFF",
  blue: '#2196f3',
  gray: "#BDBFC7",
  gray2: "#D8D8D8",
  gray3: "#F0F0F0",
  gray4: "#F7F8FA",
  pink: "#dd2476",
  orange: "#ff512f",
  // backgroundColor:  '#fecdd1'
  backgroundColor: '#f55f6b',
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  border: 15,
  padding: 25,
  radius: 6,

  // font sizes
  h1: 39,
  h2: 29,
  h3: 15,
  title: 18,
  header: 24,
  body: 12,
  caption: 12,
  small: 8,
};

const fonts = {
  h1: {
    fontFamily: "Rubik-Light",
    fontSize: sizes.h1
  },
  h2: {
    fontFamily: "Rubik-Medium",
    fontSize: sizes.h2
  },
  h3: {
    fontFamily: "Rubik-Regular",
    fontSize: sizes.h3
  },
  header: {
    fontFamily: "Rubik-Bold",
    fontSize: sizes.header
  },
  title: {
    fontFamily: "Rubik-Regular",
    fontSize: sizes.title
  },
  body: {
    fontSize: sizes.body
  },
  caption: {
    fontSize: sizes.caption
  },
  small: {
    fontSize: sizes.small
  }
};


export { colors, sizes, fonts };