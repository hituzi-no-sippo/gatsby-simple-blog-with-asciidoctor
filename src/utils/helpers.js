function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 5);
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E)).fill('🍱').join('')} ${minutes} min read`;
  }
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
}

function haveSameItem(arr1 = [], arr2 = []) {
  if (arr1 == null || arr2 == null) {
    return false;
  }
  const s = new Set([...arr1, ...arr2]);
  const uniques = [...s];

  return uniques.length < arr1.length + arr2.length;
}

function getPreviousNextNode(posts, fromInd) {
  let previous;
  let next;
  if (posts.length > 0 && fromInd > -1) {
    previous = fromInd <= 0 ? null : posts[fromInd - 1].node;
    next = fromInd === posts.length - 1 ? null : posts[fromInd + 1].node;
  }

  return {
    previous,
    next,
  };
}

const isAlphabetNum = s =>
  /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g.test(s);

function kebabCase(s) {
  if (isAlphabetNum(s)) {
    return s
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-');
  }

  return s
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

module.exports = {
  formatReadingTime,
  haveSameItem,
  getPreviousNextNode,
  kebabCase,
};
