const variables = require('./variables');

const { colors } = variables;

const tokens = {
  'round-button': {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    //backgroundColor: colors.grey,
    //color: colors.white,
  },
  'flex-x': {
    display: 'flex',
    alignItems: 'center',
  },
};

module.exports = tokens;
