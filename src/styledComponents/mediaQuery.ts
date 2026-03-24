const screens = {
  mobile: 0,
  desktop: 992,
};

const mediaQuery = (key: keyof typeof screens) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${screens[key]}px) { ${style} }`;
};

export default mediaQuery;
