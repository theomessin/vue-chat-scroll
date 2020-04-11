/* istanbul ignore file */
export const scroll = (el: Element): void => {
  if (typeof el.scroll === 'function') el.scroll({ top: el.scrollHeight });
  else el.scrollTop = el.scrollHeight; // eslint-disable-line no-param-reassign
};

export default scroll;
