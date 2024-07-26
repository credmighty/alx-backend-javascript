export default function createIteratorObject(report) {
  const all = Object.values(report.allEmployees).reduce((a, b) => {
    a.push(...b);
    return a;
  }, []);
  let currIndex = 0;
  const maxIndex = all.length;
  return {
    next() {
      if (currIndex < maxIndex) {
        const res = { value: all[currIndex], done: false };
        currIndex += 1;
        return res;
      }
      return { value: null, done: true };
    },
    [Symbol.iterator]: () => this.next(),
  };
}
