module.exports = {
  extends: ["react-app", "react-app/jest"],
  rules: {
    "react/prop-types": "error",
    "react/require-default-props": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
