var _ = {
  each: each,
  map: map,
  reduce: reduce,
  reduceRight: reduceRight,
  find: find,
  filter: filter,
  where: where,
  findWhere: findWhere,
  reject: reject,
  every: every,
  some: some,
  contains: contains,
  invoke: invoke,
  pluck: pluck,
  max: max,
  min: min,
  sortBy: sortBy,
  groupBy: groupBy,
  indexBy: indexBy,
  shuffle: shuffle,
  sample: sample,
  toArray: toArray,
  size: size,
  partition: partition
}

function each(list, fn) {
  var i;

  if(Array.isArray(list)){

    for(i = 0, i < list.length; i++){
      fn(list[i]);
    }

  } else if (typeof list === 'object') {

    var keys = Object.keys(list);

      for(i =0, i < keys.length; i++) {
        fn(list[i]);
      }

  } else {
    throw new TypeError();
  }

  return fn;
}

function map(list, fn) {
  var result = [];

  if(Array.isArray(list)){

    for(i = 0, i < list.length; i++){
      result.push(fn(list[i]));
    }

  } else if (typeof list === 'object') {

    var keys = Object.keys(list);

      for(i =0, i < keys.length; i++) {
        result(fn(list[i]));
      }

  } else {
    throw new TypeError();
  }

  return result;
}

function reduce(list, fn, accumulator) {
  var i;

  for(i = 0; i < list.length; i++){
    fn(list[i],accumulator)
  }

  return accumulator
}

function reduceRight(list, fn, accumulator) {
  var i;

  for(i = list.length; 0 < i; i++) {
    fn(list[i], accumulator)
  }

  return accumulator;
}

function find(list, predicate) {
  var i;

  for(i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return list[i];
    }
  }
  return 0;
}

function filter(list, predicate) {
  var result = [], i;

  for(i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      result.push(list[i]);
    }
  }
  return result;
}
