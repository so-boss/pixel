const _ = require("lodash");

const px = {
  block:{
    col_1: {
      width:{
        xs: '24px',
        s: '40px',
        m: '64px',
        l: '88px',
      },
    },
    col_2: {

    },
    col_3: {
      width:{
        min:'40px',
      },
      margin:'0 0 0 8px',
      padding:'0 0 0 0',
    },
    line: {
      margin: '0 0 8px 0',
    },
  },
  drawer:{
    border:{
      radius:'0 0 3px 3px',
    },
    padding:'0 48px 0 48px',
    header:{
      padding:{
        top: '40px',
      },
    },
    body:{
      padding:'40px 0 40px 0',
    },
    footer: {
      height:{
        min:'64px',
      },
      border:{
        position:{
          offset:'-48px'
        }
      }
    },
  },
  group:{
    header:{
      title:{
        margin:'0px 0px 16px 0px',
      },
    },
  },
  action:{
    button:{
      padding:'24px 0px',
    }
  },
  button:{
    border:{
      radius:'3px',
      thickness:'1px',
    },
    width:{
      min:'104px',
      max:'200px',
    },
    height:'48px',
    padding:'0 24px',
  },
  icon:{
    width:{
      xs:'16px',
      s:'24px',
      m:'40px',
      l:'56px',
    },
  },
  flagtag: {
    padding:'0 16px 0 16px',
    height:'32px',
    border:{
      radius:'100px',
    },
    margin:{
      left:'8px',
      bottom:'8px',
    },
  },
  page: {
    padding:'0 56px 0px 56px',
    header:{
      block: {
        padding:'40px 0 40px 0',
        border:{
          bottom:{
            thickness:'1px',
          },
          position:{
            offset:'-56px',
          },
        },
        col_2: {},
      },
    },
    body:{
      margin:'24px 0 0 0',
    },
    footer:{
      height:{
        min:'56px',
      },
    },
  },
  field:{
    margin:'24px 0 8px 0',
    width:{
      min:'140px',
    },
    label:{
      position:{
        lowered:'5px',
        raised:'27px',
      },
    },
    input:{
      wrapper: {
        height:'48px',
        margin:'0 8px 0 0',
        border:{
          bottom:'2px solid',
        },
      },
      text: {
        border:'0px none',
        position:{
          left:'0px',
          bottom:'0px',
        },
        margin:'0px',
        padding:'6px 0 4px 0',
        mask:{
          position:{
            top:'25px',
          }
        }
      },
    },
    message:{
      height:{
        min:'24px',
      },
    },
  },
}
px.flag = _.merge(
  px.flagtag,
  {},
);

px.tag = _.merge(
  px.flagtag,
  {},
);

module.exports = px;
