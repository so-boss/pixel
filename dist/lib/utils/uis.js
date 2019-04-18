const _ = require('lodash');

const __ = {
  merge (def, overwriter) {
    if (_.isString(def)) {
      return __.string.merge(def, overwriter);
    }

    if (_.isArray(def)) {
      return __.array.merge(def, overwriter);
    }
    return __.object.merge(def, overwriter);
  },
  /*
      __.string.merge
      utils.string.merge("saber", "redLeader")
      >> "redLeader"
  */
  string:{
    merge (def, overwriter) {
      if (overwriter) {
        return _.trim(overwriter);
      }
      return def;
    },
  },
  array:{
    /*
        __.array.merge
        utils.array.merge(4, [1, 2], [one])
        >> [one, 2, false, false]
    */
    merge (def, overwriter, length) {
      let arrayLength = 4;
      if (length) {
        arrayLength = length;
      }

      return _.map(_.fill(Array(arrayLength), false), (line, i) => {
        if (!overwriter) {
          return def[i];
        }
        if (overwriter[i]) {
          return overwriter[i];
        } if (def[i]) {
          return def[i];
        }
        return line;
      });
    },
  },
  object:{
    /*
         utils.object.merge(defObj, overwrittingObj)
         >> New Object with overwritten values
     */
    merge (def, overwriter) {
      return _.assignIn(
        {},
        def,
        overwriter,
      );
    },
  },
};
module.exports = __;
