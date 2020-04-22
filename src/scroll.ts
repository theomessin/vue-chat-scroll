/* istanbul ignore file */

/**
 * This function will set the scrollTop of an element using either the
 * scroll method if available, or by changing the scrollTop property.
 * If no scrollTop is specified, it'll scroll to the bottom.
 */
export const scroll = (el: Element, scrollTop?: number): void => {
  const top = scrollTop || el.scrollHeight - el.clientHeight;
  if (typeof el.scroll === 'function') el.scroll({ top });
  else el.scrollTop = top; // eslint-disable-line no-param-reassign
};

export default scroll;
