import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/* eslint-disable no-trailing-spaces */
// TODO: $j needs to become a module
var $j = require("@pixel/helpers/dollarj"),
    _2 = require("lodash");

var postcss = require('postcss');

var colors = require('@pixel/shared-styles/maps/color');

var fonts = require('@pixel/shared-styles/maps/font');

var px = require('@pixel/shared-styles/maps/px');

var mixins = {
  /*
    @mixin empty;
  */
  empty: function empty(mixin) {
    return {
      '&:empty': mixins.hide(mixin)
    };
  },

  /*
      @mixin hide;
   */
  hide: function hide(mixin) {
    return {
      display: 'none'
    };
  },
  last: function last(mixin) {
    return {
      '&:last-child': {
        '@mixin-content': {}
      }
    };
  },

  /*
      @mixin element {...}
   */
  element: function element(mixin) {
    var rules = {
      display: 'block',
      position: 'relative',
      '@mixin-content': {}
    };
    return rules;
  },

  /*
        @mixin psuedo_content {...}
        mixins.psuedo_content(mixin)
   */
  psuedo_content: function psuedo_content(mixin) {
    var rules = {
      content: '" "'
    }; // rules['&:after'] = {
    //   '@mixin-content': {},
    // };

    return rules;
  },

  /*
    @mixin flex {...};
    @mixin flex top {...};
    @mixin flex right {...};
    @mixin flex bottom {...};
    @mixin flex left {...};
     @mixin flex center {...};
    @mixin flex center x {...};
    @mixin flex center y {...};
     @mixin flex wrap {...};
    @mixin flex stack {...};
     @mixin flex {
      flex:1;
    }
  */
  flex: function flex(mixin, a, b) {
    var rules = {
      display: 'flex',
      '@mixin-content': {}
    };
    $j.methods(a, {
      top: function top() {
        rules.alignItems = 'flex-start';
      },
      right: function right() {
        rules.justifyContent = 'flex-end';
      },
      bottom: function bottom() {
        rules.alignItems = 'flex-end';
      },
      left: function left() {
        rules.justifyContent = 'flex-start';
      },
      wrap: function wrap() {
        //mixins.flex_wrap(mixin);
        rules = _2.merge(rules, mixins.flex_wrap(mixin));
      },
      stack: function stack() {
        //mixins.flex_stack(mixin);
        rules = _2.merge(rules, mixins.flex_stack(mixin));
      },
      center: function center() {
        rules = _2.merge(rules, mixins.flex_center(mixin, b));
      }
    });
    return rules;
  },

  /*
      USE
      @mixin flex center {...}
      @mixin flex center, x {...}
      @mixin flex center, y {...}
       Low Level Helpers
      @mixin flex_center
      @mixin flex_center x
      @mixin flex_center y
  */
  flex_center: function flex_center(mixin, direction) {
    var rules = mixins.flex();

    if (!direction) {
      rules.justifyContent = rules.alignItems = 'center';
    } else {
      if (direction == 'x') {
        rules.justifyContent = 'center';
      } else {
        rules.alignItems = 'center';
      }
    }

    return rules;
  },

  /*
      @mixin flex_wrap {...}
      mixins.flex_wrap(mixin)
  */
  flex_wrap: function flex_wrap(mixin) {
    var rules = mixins.flex();
    rules.flexWrap = 'wrap';
    rules.flexDirection = 'row';
    return rules;
  },

  /*
    USE
    @mixin flex stack {}
     Low Level Helpers
    @mixin flex_stack;
  */
  flex_stack: function flex_stack(mixin) {
    var rules = mixins.flex();
    rules = _2.merge(rules, mixins.flex_wrap(mixin), {
      flexDirection: 'column'
    });
    return rules;
  },

  /*
      @mixin span {...}
      @mixin span x {...}
        >>  width: 100%
      @mixin span y {...}
        >>  height: 100%
      @mixin span 25 {...}
        >>  height & width: 25px
   */
  span: function span(mixin, x) {
    var rules = {
      '@mixin-content': {}
    };

    if (parseInt(x)) {
      x = parseInt(x);
    }

    $j.overload(x, {
      string: function string() {
        if (x == 'x') {
          this.width = '100%';
        } else {
          this.height = '100%';
        }
      },
      number: function number() {
        this.width = this.height = x + "px";
      },
      undefined: function undefined() {
        this.width = this.height = '100%';
      }
    }, rules);
    return rules;
  },

  /*
      @mixin font {...}
       @mixin font size {...}
      @mixin font size, xs {...}
      @mixin font size, s {...}
      @mixin font size, m {...}
      @mixin font size, l {...}
      @mixin font size, xl {...}
       mixins.font(mixin, 'size', 's'),
       @mixin font weight {...}
      @mixin font weight, light {...}
      @mixin font weight, normal {...}
      @mixin font weight, bold {...}
       @mixin font color, saber {...}
      mixins.font(mixin, 'color', 'saber'),
   */
  font: function font(mixin, property, id) {
    var rules = {
      '@mixin-content': {}
    };

    if (!property) {
      return _2.merge(rules, {
        fontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility'
      });
    } //var id = $j.defined(id, 'def');


    $j.methods(property, {
      'size': function size() {
        rules.fontSize = fonts.size[id];
      },
      'weight': function weight() {
        rules.fontWeight = fonts.weight[id];
      },
      'color': function color() {
        rules.color = colors[id];
      }
    });
    return rules;
  },

  /*
    TODO: Rename and move into Block mixins
    @mixin line 1 {...}
    @mixin line 1 flag {...}
    @mixin line 1 tag {...}
  */
  line: function line(mixin, index, element) {
    var rules = {
      '@mixin-content': {}
    };
    return $j.methods(index, {
      '1': function _() {
        return $j.methods(element, {
          tag: function tag() {
            return mixins.line(mixin, 1, 'flag');
          },
          flag: function flag() {
            return _2.merge(rules, mixins.font(mixin, 'size', 's'), mixins.font(mixin, 'weight', 'normal'), {
              textTransform: 'capitalize'
            });
          },
          // Generic Block
          undefined: function undefined() {
            return _2.merge(rules, mixins.font(mixin, 'size', 'l'), mixins.font(mixin, 'weight', 'bold'), {
              textTransform: 'uppercase'
            });
          }
        });
      }
    });
  },

  /*
      @mixin cursor pointer {...}
      mixins.cursor(mixin, 'pointer')
      mixins.cursor(mixin, 'text')
      mixins.cursor(mixin, 'not-allowed')
   */
  cursor: function cursor(mixin, id) {
    var rules = {
      '@mixin-content': {},
      cursor: id // "& > *": {
      //   cursor: id,
      // }

    };
    return rules;
  },

  /*
     @mixin select_child type, input;
     mixins.select_child(mixin, "type", "input");
      >> Returns context inside self
  */
  select_child: function select_child(mixin, prop, value) {
    var rules = {}; // NOTE: Supports both types of selection (with a value, or just the prop)
    // TODO: Migrate into some mixin helpers class/method/util

    var attr = '[' + prop + ']';

    if (value !== undefined) {
      attr = '[' + prop + '=' + value + ']';
    }

    rules['& > ' + attr] = {
      '@mixin-content': {}
    };
    return rules;
  },

  /*
     @mixin select_with char_count, "0";
     mixins.select_with(mixin, "char_count", "0");
      >> Returns context inside self
      TODO: Ensure we can use this and the select_child with a prop but no value
  */
  select_with: function select_with(mixin, prop, value) {
    var rules = {}; // NOTE: Supports both types of selection (with a value, or just the prop)
    // TODO: Migrate into some mixin helpers class/method/util

    var attr = '[' + prop + ']';

    if (value !== undefined) {
      attr = '[' + prop + '=' + value + ']';
    }

    rules['&' + attr] = {
      '@mixin-content': {}
    };
    return rules;
  },

  /*
     @mixin select_sibling input;
     mixins.select_sibling(mixin, "input");
      >> Returns context inside self
       TODO: Evaluate if inconsistency is created by passing the HTML DOM Tagname vs Prop
  */
  select_sibling: function select_sibling(mixin, selector) {
    var rules = {};
    rules['& + ' + selector] = {
      '@mixin-content': {}
    };
    return rules;
  },

  /*
        @mixin icon {...}
         TODO: Return single icon sizing,
        vs generating all (structure like theme)
   */
  icon: function icon(mixin, size) {
    var rules = {};
    var svg = rules.svg = {
      '@mixin-content': {}
    };

    _2.forIn(px.icon.width, function (value, key) {
      svg['&[hugeness=' + key + ']'] = {
        height: value,
        width: value
      };
    });

    return rules;
  },

  /*
      @mixin block_col_1 {...};
       TODO: Decide whether we should allow size specific
            generation or just rely on full generation
       @mixin block_col_1 s {...};
      @mixin block_col_1 m {...};
      @mixin block_col_1 l {...};
   */
  block_col_1: function block_col_1(mixin, size) {
    var rules = {};
    rules['&:nth-child(1)'] = _2.merge(mixins.empty(mixin), _defineProperty({
      //width: px.block.col_1.width[size],
      '@mixin-content': {},
      '& > svg': mixins.empty(mixin)
    }, "& > svg", {
      fill: colors.grey //height:px.icon.width[size],
      //width:px.icon.width[size],

    }));
    rules['&:nth-child(1)']['&[hugeness]'] = _2.merge(mixins.flex(mixin, 'center', 'y'), mixins.flex(mixin, 'left'));

    _2.forIn(px.block.col_1.width, function (value, key) {
      rules['&:nth-child(1)']['&[hugeness=' + key + ']'] = {
        width: value,
        '& > svg': {
          height: px.icon.width[key],
          width: px.icon.width[key]
        }
      };
    });

    return rules;
  },

  /*
      @mixin block_col_2 {...};
   */
  block_col_2: function block_col_2(mixin) {
    var rules = {};
    rules['&:nth-child(2)'] = _2.merge(mixins.flex_stack(), {
      '@mixin-content': {},
      flex: 1,
      '& > thing': _2.merge(mixins.span(mixin, 'x'), mixins.empty(mixin), mixins.font(mixin, 'size', 's'), {
        margin: px.block.line.margin
      }),
      '& > thing:last-child': {
        marginBottom: '0px'
      }
    });
    return rules;
  },

  /*
      @mixin block_col_3 {...};
   */
  block_col_3: function block_col_3(mixin) {
    var rules = {};
    var col_3 = px.block.col_3;
    rules['&:nth-child(3)'] = _2.merge(mixins.flex(mixin, 'right'), mixins.flex(mixin, 'top'), mixins.empty(mixin), {
      '@mixin-content': {},
      flex: 'initial',
      minWidth: col_3.width.min,
      margin: col_3.margin,
      padding: col_3.padding
    });
    return rules;
  },

  /*
      @mixin drawer {...};
       NOTE: Containers return two wrappers down
      (with header body and footer)
   */
  drawer: function drawer(mixin) {
    var rules = {};
    rules['drawer'] = _2.merge(mixins.element(mixin), mixins.span(mixin, 'x'), {
      borderRadius: px.drawer.border.radius,
      background: colors.grey_6
    });
    rules['drawer > wrapper'] = {
      padding: px.drawer.padding
    };
    rules['drawer > wrapper > wrapper'] = _2.merge(mixins.empty(mixin), {
      '@mixin-content': {}
    });
    return rules;
  },

  /*
      @mixin drawer_header {...}
   */
  drawer_header: function drawer_header(mixin) {
    var rules = {};
    rules['&[type=header]'] = {
      paddingTop: px.drawer.header.padding.top,
      '@mixin-content': {}
    };
    return rules;
  },

  /*
    @mixin drawer_body {...}
  */
  drawer_body: function drawer_body(mixin) {
    var rules = {};
    rules['&[type=body]'] = {
      padding: px.drawer.body.padding,
      '@mixin-content': {}
    };
    return rules;
  },

  /*
    @mixin drawer_footer {...}
  */
  drawer_footer: function drawer_footer(mixin) {
    var rules = {};
    rules['&[type=footer]'] = _2.merge(mixins.flex(mixin), mixins.empty(mixin), {
      minHeight: px.drawer.footer.height.min,
      '@mixin-content': {}
    });
    var offset = px.drawer.footer.border.position.offset;
    rules['&[type=footer]:before'] = _2.merge(mixins.psuedo_content(mixin), {
      position: 'absolute',
      top: '0',
      left: offset,
      width: 'calc(100% + ' + -1 * (parseInt(offset) * 2) + 'px)',
      borderTop: '1px solid ' + colors.grey_4,
      zIndex: 1
    });
    return rules;
  },

  /*
      @mixin group {...};
  */
  group: function group(mixin) {
    var rules = {};
    rules['group'] = _2.merge(mixins.element(mixin), {
      '& > wrapper': {
        '& > wrapper': {
          '@mixin-content': {}
        }
      }
    });
    return rules;
  },

  /*
      @mixin group_header;
  */
  group_header: function group_header(mixin) {
    var rules = {};
    rules['&[type=header]'] = {
      '@mixin-content': {},
      '& > [type=title]': {
        margin: px.group.header.title.margin
      }
    };
    return rules;
  },

  /*
      @mixin button {...}
  */
  button: function button(mixin, type) {
    var rules = {};
    rules['button[type]'] = _2.merge(mixins.flex(mixin, 'center'), mixins.font(mixin, 'color', 'grey'), mixins.cursor(mixin, 'pointer'), {
      position: 'relative',
      borderRadius: px.button.border.radius,
      minWidth: px.button.width.min,
      maxWidth: px.button.width.max,
      padding: px.button.padding,
      borderColor: colors.grey_4,
      borderWidth: px.button.border.thickness,
      borderStyle: 'solid',
      background: colors.white,
      height: px.button.height,
      flex: 'initial',
      outline: 'none',
      textShadow: '0 0 0 currentColor',
      textTransform: 'uppercase',
      '@mixin-content': {},
      '-webkit-appearance': 'initial',
      zIndex: 10,
      '&:first-child': {
        marginLeft: '0px'
      },
      '&:last-child': {
        marginRight: '0px'
      }
    });
    return rules;
  },

  /*
      @mixin button_primary;
       TODO: Abstract this into a parameterized mixin
  */
  button_primary: function button_primary(mixin) {
    var rules = {};
    rules['&[theme=primary] > button'] = {
      background: colors.saber,
      borderColor: colors.saber,
      color: colors.white,
      '@mixin-content': {},
      "&:hover": {
        background: colors.saber_hover,
        borderColor: colors.saber
      },
      "&:active": {
        background: colors.blue_5,
        borderColor: colors.blue_6
      },
      "&[disable=true]": _2.merge(mixins.cursor(mixin, 'not-allowed'), {
        background: colors.grey_5,
        borderColor: colors.grey_5,
        color: colors.grey_7
      })
    };
    return rules;
  },

  /*
      @mixin button_secondary;
       TODO: Abstract this into a parameterized mixin
  */
  button_secondary: function button_secondary(mixin) {
    var rules = {};
    rules['&[theme=secondary] > button'] = {
      background: colors.white,
      borderColor: colors.grey_4,
      color: colors.grey_2,
      '@mixin-content': {},
      "&:hover": {
        borderColor: colors.grey_3
      },
      "&:active": {
        background: colors.grey_2,
        color: colors.white
      }
    };
    rules['&[theme=secondary][selected=true]'] = {
      "& > button ": {
        borderColor: colors.saber,
        color: colors.saber
      }
    };
    return rules;
  },

  /*
      TODO: Refactor this since the action mixin
            should be for the action element
       @mixin action {...}
      @mixin action text {...}
      mixins.action(mixin, 'text')
  */
  action: function action(mixin, type) {
    var rules = {
      '@mixin-content': {}
    };
    return $j.methods(type, {
      'text': function text() {
        return _2.merge(rules, mixins.font(mixin, 'weight', 'bold'), mixins.font(mixin, 'color', 'saber'), mixins.cursor(mixin, 'pointer'), {
          textTransform: 'uppercase'
        });
      },
      undefined: function undefined() {
        return _2.merge(rules, mixins.element(mixin));
      }
    });
  },

  /*
      @mixin action_link {...};
       TODO: Both action_linkk and action_button
      are making the same calls (should abstract)
  */
  action_link: function action_link(mixin) {
    var rules = {};
    rules['action[type=link]'] = _2.merge(mixins.flex(mixin, 'center', 'y'), mixins.action(mixin, 'text'), mixins.font(mixin, 'font', 'size', 'm'), mixins.cursor(mixin, 'pointer'), {
      flex: 1,
      '-webkit-appearance': 'initial',
      '@mixin-content': {}
    });
    return rules;
  },

  /*
        @mixin action_button {...};
   */
  action_button: function action_button(mixin) {
    var rules = {};
    rules['action[type=button]'] = _2.merge(mixins.flex(mixin, 'center', 'y'), mixins.action(mixin, 'text'), mixins.font(mixin, 'font', 'size', 'm'), mixins.font(mixin, 'weight', 'normal'), mixins.cursor(mixin, 'pointer'), {
      flex: 1,
      '-webkit-appearance': 'initial',
      'padding': px.action.button.padding,
      '@mixin-content': {}
    });
    return rules;
  },

  /*
      @mixin flag {...};
  */
  flag: function flag(mixin) {
    var rules = {};
    return mixins.flagtag(mixin, rules, 'flag');
  },

  /*
      TODO: REFACTOR all of this flagtag crap ASAP
      @mixin tag {...}
   */
  tag: function tag(mixin) {
    var rules = {};
    rules = mixins.flagtag(mixin, rules, 'tag');
    rules.tag['& > block']['& > wrapper'].display = 'flex';
    return rules;
  },

  /*
        mixins.flagtag(mixin, 'flag');
        @mixin flagtag flag;
         mixins.flagtag(mixin, 'tag');
        @mxixin flagtag tag;
        TODO: Decide what flags/tags are actually so we can rename this private util
   */
  flagtag: function flagtag(mixin, rules, element) {
    var flagtag = px[element];
    rules[element] = _2.merge(mixins.flex(mixin, 'center'), {
      '@mixin-content': {},
      height: flagtag.height,
      borderRadius: flagtag.border.radius,
      width: 'fit-content',
      marginBottom: flagtag.margin.bottom,
      '& > block': {
        background: 'none',
        '& > wrapper': {
          padding: flagtag.padding,
          display: 'inline'
        }
      },
      '&:nth-child(n+2)': {
        marginLeft: flagtag.margin.left
      }
    });
    return rules;
  },

  /*
      @mixin themes;
      @mixin themes flag;
   */
  themes: function themes(mixin, element) {
    var rules = {};

    if (!element) {
      element = '&';
    }

    _2.each(colors.themes, function (value, key) {
      _2.merge(rules, mixins.theme(mixin, key, element));
    });

    return rules;
  },

  /*
      @mixin theme redLeader;
      mixins.theme(mixin, 'redLeader')
       @mixin theme redLeader, flag;
      mixins.theme(mixin, 'redLeader', 'flag')
   */
  theme: function theme(mixin, id, element) {
    var rules = {};

    if (!element) {
      element = '&';
    }

    rules[element + '[theme=' + id + ']'] = colors.themes[id];
    return rules;
  },

  /*
    @mixin wrapper {...};
  */
  wrapper: function wrapper(mixin) {
    var rules = {};
    rules['wrapper'] = _2.merge(mixins.element(mixin), {
      '@mixin-content': {}
    });
    return rules;
  },

  /*
      @mixin page {...};
       NOTE: Containers return two wrappers down
      (with header body and footer)
   */
  page: function page(mixin) {
    var rules = {};
    rules['page'] = _2.merge(mixins.element(mixin), mixins.flex(mixin), {
      padding: px.page.padding,
      background: colors.white,
      '& > wrapper': {
        flex: 1,
        '& > wrapper': _2.merge( //mixins.empty(mixin),
        {
          '@mixin-content': {}
        })
      }
    });
    return rules;
  },

  /*
      @mixin page_header {...};
      >> Returns context inside <Page> header wrapper
  */
  page_header: function page_header(mixin) {
    var rules = {};
    var header = rules['&[type=header]'] = {
      '@mixin-content': {}
    };
    header['& > block'] = {
      '& > wrapper': {
        padding: px.page.header.block.padding
      }
    };
    return rules;
  },

  /*
      @mixin page_header_block {...};
      >> Returns context inside <Page> header <Block> > wrapper
  */
  page_header_block: function page_header_block(mixin) {
    var rules = {};
    var block = rules['& > block'] = {};
    block['& > wrapper'] = {
      '@mixin-content': {},
      padding: px.page.header.block.padding,
      '& > wrapper:nth-child': {
        '&(2)': {
          '& > thing:nth-child': {
            '&(1)': _2.merge(mixins.font(mixin, 'size', 'xl'), mixins.font(mixin, 'weight', 'normal'), {
              textTransform: 'uppercase'
            })
          }
        }
      }
    };
    var px_block = px.page.header.block,
        offset = px_block.border.position.offset;
    block['&:after'] = _2.merge(mixins.psuedo_content(mixin), {
      borderBottom: px_block.border.bottom.thickness + ' solid ' + colors.grey_5,
      width: 'calc(100% + ' + -1 * (parseInt(offset) * 2) + 'px)',
      position: 'absolute',
      bottom: 0,
      left: offset
    });
    return rules;
  },

  /*
      @mixin page_body {...};
      >> Returns context inside <Page> body wrapper
  */
  page_body: function page_body(mixin) {
    var rules = {};
    rules['&[type=body]'] = {
      '@mixin-content': {},
      margin: px.page.body.margin
    };
    return rules;
  },

  /*
      @mixin page_footer {...};
      >> Returns context inside <Page> footer wrapper
  */
  page_footer: function page_footer(mixin) {
    var rules = {};
    rules['&[type=footer]'] = {
      '@mixin-content': {},
      minHeight: px.page.footer.height.min
    };
    return rules;
  },

  /*
        @mixin field {...}
        >> Returns context inside the wrapper[type=field] (self)
         TODO: Does this have a type since there are several types of input?
         TODO: Decide which approach is best (or how to do both)
              A. Include selectors in tokens
              B. Only include selectors in formal token wrapper
   */
  field: function field(mixin, type) {
    var rules = {};
    var input_px = px.field.input,
        wrap_px = input_px.wrapper;
    rules['&[type=field]'] = _2.merge(mixins.font(mixin, 'color', 'grey_1'), mixins.cursor(mixin, 'text'), {
      margin: px.field.margin,
      minWidth: px.field.width.min,
      '@mixin-content': {},
      '& > wrapper[type=input]': {
        outline: 'none',
        height: wrap_px.height,
        margin: wrap_px.margin,
        borderBottom: wrap_px.border.bottom,
        '&:after': _2.merge(mixins.font(mixin, 'size', 'm'), mixins.font(mixin, 'color', 'grey_3'), mixins.element(mixin), {
          content: 'attr(mask)',
          position: 'absolute',
          top: input_px.text.mask.position.top,
          opacity: '0',
          transition: '.1s linear'
        })
      },
      '& > wrapper[type=input] > thing[type=label]': mixins.field_label(mixin, "def")
    });
    return rules;
  },

  /*
        @mixin field label {...}
          & > [type=label] {...}
         @mixin field_label lowered {...}
        @mixin field_label raised {...}
         >> Returns context inside self (no selector attached)
         TODO: Refactor once we've nailed down how to handle states
   */
  field_label: function field_label(mixin, type) {
    var rules = {};

    if (!type) {
      rules['& > [type=label]'] = {
        '@mixin-content': {}
      };
      return rules;
    }

    rules['@mixin-content'] = {};
    var pos = px.field.label.position;
    return _2.merge(rules, $j.methods(type, {
      lowered: function lowered() {
        return _2.merge(mixins.font(mixin, 'weight', 'normal'), mixins.font(mixin, 'size', 'm'), {
          bottom: pos.lowered
        });
      },
      raised: function raised() {
        return _2.merge(mixins.font(mixin, 'weight', 'bold'), mixins.font(mixin, 'size', 'xs'), {
          bottom: pos.raised
        });
      },
      def: function def() {
        return _2.merge( //mixins.font(mixin, 'color', 'grey_2'),
        {
          position: 'absolute',
          '& + input': mixins.field_input(mixin, "text")
        }, mixins.field_label(mixin, 'lowered'));
      }
    }));
    return rules;
  },

  /*
     @mixin field_input_wrapper {...}
     mixins.field_input_wrapper(mixin)
       >> Returns context inside self
  */
  field_input_wrapper: function field_input_wrapper(mixin) {
    return mixins.select_child(mixin, "type", "input");
  },

  /*
     @mixin field_message_wrapper {...}
     mixins.field_message_wrapper(mixin)
       >> Returns context inside self
      TODO: Create field_message core mixin
  */
  field_message_wrapper: function field_message_wrapper(mixin) {
    return mixins.select_child(mixin, "type", "message");
  },

  /*
      @mixin field_message;
      >> Returns no context
   */
  field_message: function field_message(mixin) {
    var rules = {};
    return _2.merge(rules, {
      minHeight: px.field.message.height.min,
      '&:empty': {
        opacity: 0
      }
    });
  },

  /*
      @mixin field_input {...}
      mixins.field_input(mixin)
        >> Returns context inside self
       @mixin field_input, text {...}
      mixins.field_input(mixin, "text")
       NOTE: Not sure if 0px values should all be in config since we should have reset helpers
            Thought was that if we wanted to provide simple config between projects, and up
            the tiers, config would be easy
            Maybe we could have reset markup/indication in config
  */
  field_input: function field_input(mixin, type) {
    var rules = {};
    var input_px = px.field.input.text;
    return _2.merge(rules, mixins.font(mixin, 'size', 'm'), mixins.font(mixin, 'color', 'grey_1'), mixins.span(mixin, 'x'), {
      background: colors.hidden,
      border: input_px.border,
      //IDEA: no(border)
      position: 'absolute',
      left: input_px.position.left,
      //IDEA: zero(left)
      bottom: input_px.position.bottom,
      marginTop: input_px.margin,
      padding: input_px.padding,
      zIndex: 10,
      opacity: 1,
      transition: '.1s cubic-bezier(0.84,-0.01, 1, 1)'
    });
  },

  /*
      @mixin field_state focused {...}
      @mixin field_state focused, input {...}
      @mixin field_state focused, message {...}
       >> Returns context inside
         1. itself
         2. passed element type (input, message)
  */
  field_state: function field_state(mixin, state, element) {
    var rules = {};
    var field_state = rules['&[state=' + state + ']'] = {}; // IF There is no elemental context provided

    if (!element) {
      // THEN return custom state attribute wrapping bracketed context
      field_state['@mixin-content'] = {};
      return rules;
    } //OTHERWISE add a second level selection wrapper (type=input || message)


    field_state['& > [type=' + element + ']'] = {
      '@mixin-content': {}
    };
    return rules;
  },

  /*
       @mixin label {...}
       mixins.label(mixin);
       >> Returns context inside itself
  */
  label: function label(mixin) {
    var rules = {};
    rules['thing[type=label]'] = _2.merge(mixins.font(mixin, 'weight', 'normal'), mixins.font(mixin, 'size', 'm'), mixins.font(mixin, 'color', 'grey_2'), {
      textTransform: 'capitalize',
      transition: '.1s cubic-bezier(0.84,-0.01, 1, 1)',
      '@mixin-content': {}
    });
    return rules;
  },

  /*
      @mixin message {...};
      mixins.message(mixin);
      >> Returns context inside itself
   */
  message: function message(mixin) {
    var rules = {};
    rules['wrapper[type=message]'] = _2.merge(mixins.font(mixin, 'size', 'xs'), mixins.flex(mixin, 'center', 'y'), {
      opacity: 1,
      transition: '.1s linear',
      '@mixin-content': {}
    });
    return rules;
  }
};
module.exports = mixins;