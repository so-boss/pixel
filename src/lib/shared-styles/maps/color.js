const brand = {
  blue_1:'#00338d',
  blue_2:'#0096d6',
  blue_3:'#88cbdf',
  yellow_1:'#ffc425',
  yellow_1_hover:'#f2b719',
  red_1:'#d52b1e',
  red_1_hover:'#a61207',
};

let colors = {
  green_1:'#00844d',
  green_1_hover:'',

  blue_1:brand.blue_1,
  blue_2:brand.blue_2,
  blue_3:brand.blue_3,
  blue_4:'#1778d3',
  blue_4_hover:'#2685de',
  blue_5: '#015eb6',
  blue_6: '#107ba8',

  orange_1:'#cf4900',
  orange_1_hover:'',

  yellow_1:brand.yellow_1,
  yellow_1_hover:brand.yellow_1_hover,

  red_1:brand.red_1,
  red_1_hover:brand.red_1_hover,

  // Monochromatics
  white_1: '#ffffff',

  grey_1: '#333333',
  grey_2: '#5F6062',
  grey_3: '#767676',
  grey_4: '#CCCCCC',
  grey_5: '#EBEBEB',
  grey_6: '#F7F7F7',
  grey_7: '#5B5B5B',

  black_1: '#222222',

  empty: '#FEFEFE',
  hidden: 'rgba(255,255,255,0)',
  themes: {
    yoda:{},
    bb8:{},
    saber:{},
    r2d2:{},
    redLeader:{},
    grey:{},
  },
};

// Semantic color naming conventions (from Star Wars)
// NOTE: Please try to use these color names (if possible & relevant)
colors.yoda = colors.green_1;
colors.yoda_hover = '';
colors.saber = colors.blue_4;
colors.saber_hover = colors.blue_4_hover;
colors.r2d2 = colors.blue_1;
colors.r2d2_hover = '';
colors.bb8 = colors.orange_1;
colors.bb8_hover = '';
colors.c3po = colors.yellow_1;
colors.c3po_hover = colors.yellow_1_hover;
colors.redLeader = colors.red_1;
colors.redLeader_hover = colors.red_1_hover;

// Natural Language Mappings
colors.white = colors.white_1;
colors.grey = colors.grey_1;
colors.black = colors.black_1;

colors.themes = {
  yoda:{
    backgroundColor: colors.yoda,
    color: colors.white,
  },
  bb8: {
    backgroundColor:colors.bb8,
    color:colors.white,
  },
  saber: {
    backgroundColor:colors.saber,
    color:colors.white,
  },
  r2d2: {
    backgroundColor:colors.r2d2,
    color:colors.white,
  },
  redLeader: {
    backgroundColor:colors.redLeader,
    color:colors.white,
  },
  c3po: {
    backgroundColor:colors.c3po,
    color:colors.grey_1,
  },
  grey: {
    backgroundColor:colors.grey_4,
    color: colors.grey_1,
  },
};

//
// let get_color = function(primary, id) {
//   var color = colors[primary];
//   if(!color) {
//     color = colors.grey;
//   }
//
//   if(id) {
//     const color_by_id = colors[primary+"_"+id];
//     if(color_by_id) {
//       color = color_by_id;
//     }
//   }
//   return color;
// };
//
// module.exports = get_color;

module.exports = colors;
