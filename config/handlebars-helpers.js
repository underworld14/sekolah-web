module.exports = {
  incr: function (value, options) {
    return parseInt(value) + 1;
  },
  times: function (value, options) {
    let accum = "";
    for (let i = 1; i < value + 1; ++i) accum += options.fn(i);
    return accum;
  },
  compare: function (value, value2) {
    return value === value2;
  },
};
