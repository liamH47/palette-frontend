import sizes from './mediaSizes'
import backGround from './backGround.svg'
export default {
    "@global": {
      ".fade-exit": {
        opacity: 1
      },
      ".fade-exit-active": {
        opacity: 0,
        transition: "opacity 500ms ease-out"
      }
    },
    root: {
      height: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
     /* background by SVGBackgrounds.com */
      backgroundColor: "#ffe0f9",
      backgroundImage: `url(${backGround})`,
      overflow: "scroll"
    },
    container: {
      width: "50%",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap",
      [sizes.down("xl")]: {
        width: "80%"
      },
      [sizes.down("xs")]: {
        width: "75%"
      }
    },
    nav: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#1CAD35",
      // "& a": {
      //   color: "#1CAD35",
      //   border: "1px solid #1CAD35"
      // },
      "& h1": {
        fontSize: "3em"
      },
    },
    palettes: {
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "2.5rem",
      [sizes.down("md")]: {
        gridTemplateColumns: "repeat(2, 50%)"
      },
      [sizes.down("xs")]: {
        gridTemplateColumns: "repeat(1, 100%)",
        gridGap: "1rem"
      }
    },
    link: {
      color: "#1CAD35",
      border: "2px solid #1CAD35",
      fontSize: "1.2em",
      padding: "4px",
      borderRadius: "4px",
      textDecoration: "none",
      backgroundColor: "#FFF8E7"
    }
  };