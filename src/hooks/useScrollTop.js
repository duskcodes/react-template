import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function scrollToTop() {
  window.scrollTo(0, 0);
}

/**
 * Scroll to the top of the page on route change.
 */
function useScrollTop() {
  const history = useHistory();

  useEffect(() => history.listen(scrollToTop), [history]);
}

export { useScrollTop };
