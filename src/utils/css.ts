/**
 * Form classnames for a component
 *
 * @param  {string} defaultClassNames default classnames
 * @param  {string} additionalClassNames classnames to add to the default ones
 */
export const makeClassNames = (defaultClassNames: string, additionalClassNames: string) => {
  if (!additionalClassNames) {
    return defaultClassNames;
  }

  return `${defaultClassNames} ${additionalClassNames}`;
};
