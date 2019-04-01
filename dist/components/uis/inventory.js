import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { Input, UI, Page, Wrapper, Thing, Interview, Flag, Tag, Action, Block, ActionBlock, ActionButton, ActionLink, Icon, Group, Drawer, Title, Inputs, InputSelect } from '@pixel/components';
import { Formik, Field, Form, ErrorMessage } from 'formik';

var _ = require('lodash');

var __ = require('@pixel/utils/uis.js');

var config = function config() {
  return __.merge.apply(__, arguments);
};
/*
      TODOS:
      1. Establish easier way to merge/extend data
      2. Desiginate way to indicate if a package is dynamic
*/


var uis = {};
uis.block = {
  /*
      <UI.Block
        id="twoLiner"
        lines={[
          'New Vehicle',
          'Replacing 2006 Honda Accord',
        ]}
      />
  */
  twoLiner: function twoLiner(_ref) {
    var lines = _ref.lines;
    return React.createElement(Block, {
      lines: config(['Line 1', 'Line 2'], lines)
    });
  },

  /*
        <UI.Block id="twoLiner_with_flag" />
  */
  twoLiner_with_flag: function twoLiner_with_flag(_ref2) {
    var lines = _ref2.lines,
        flag = _ref2.flag;
    return React.createElement(Block, {
      lines: config(['Line 1', 'Line 2'], lines),
      flag: config({
        theme: 'bb8',
        label: 'Pending'
      }, flag)
    });
  },

  /*
        <UI.Block
            id="threeLiner"
            lines={[
              'CAA9111929292',
              'Auto Policy',
              'Policy Period: 2018-2019',
            ]}
          />
   */
  threeLiner: function threeLiner(_ref3) {
    var lines = _ref3.lines;
    return React.createElement(Block, {
      lines: config(['Line 1', 'Line 2', 'Line 3'], lines)
    });
  },

  /*
        <UI.Block
          id="fourLiner"
          lines={[
            'CAA9111929292',
            'Auto Policy',
            'Policy Period: 2018-2019',
            'A one-time payment was made in December 2018. Paid up through next year.',
          ]}
        />
   */
  fourLiner: function fourLiner(_ref4) {
    var lines = _ref4.lines;
    return React.createElement(Block, {
      lines: config(['Line 1', 'Line 2', 'Line 3', 'Line 4'], lines)
    });
  }
};
uis.action = {
  /*
      <UI.Action id='link'/>
      <UI.Action id='link'
        label='Action Link'
      />
  */
  link: function link(_ref5) {
    var label = _ref5.label;
    return React.createElement(ActionLink, null, config('Default Action Link', label));
  },

  /*
       <UI.Action id='back_link' />
        <ActionLink>Back</ActionLink>
  */
  back_link: function back_link() {
    return React.createElement(UI.Action, {
      id: "link",
      label: "back"
    });
  },

  /*
      <UI.Action id='next_link' />
       <ActionLink>Next</ActionLink>
  */
  next_link: function next_link() {
    return React.createElement(UI.Action, {
      id: "link",
      label: "next"
    });
  },

  /*
    <UI.Action id="interview_nav" />
  */
  interview_nav: function interview_nav() {
    return React.createElement(React.Fragment, null, React.createElement(UI.Action, {
      id: "back_link"
    }), React.createElement(UI.Action, {
      id: "next_link"
    }));
  },

  /*
      <UI.Action
        id="block"
        lines={[
          "Emily Swamker",
          "Removing driver from your policy." ,
        ]}
      />
       <UI.Action
        id="driver_block"
        lines={[
          "Emily Swamker",
          "Named insured" ,
        ]}
      />
  */
  block: function block(_ref6) {
    var lines = _ref6.lines;
    return React.createElement(ActionBlock, {
      lines: config(['Line 1'], lines)
    });
  },

  /*
      <UI.Action
        id="driver_block"
        driver="Emily Swamker"
        description="Named Insured"
         drawer="expanded"
      />
       TODO: Make ActionBlock auto sensing of <Drawer>
            ...so it can auto detect when it contains a drawer
  */
  driver_block: function driver_block(_ref7) {
    var driver = _ref7.driver,
        description = _ref7.description,
        rest = _objectWithoutProperties(_ref7, ["driver", "description"]);

    return React.createElement(ActionBlock, Object.assign({
      lines: [config('Driver First & Last Name', driver), config('Description about driver or process driver is associated.', description)]
    }, rest));
  },

  /*
      <UI.Action
        id="vehicle_block"
        vehicle="2006 HONDA ACCORD"
        vin="KDIOPW29812934"
         drawer="expanded"
      />
       TODO: Make ActionBlock auto sensing of <Drawer>
            ...so it can auto detect when it contains a drawer
  */
  vehicle_block: function vehicle_block(_ref8) {
    var vehicle = _ref8.vehicle,
        vin = _ref8.vin,
        rest = _objectWithoutProperties(_ref8, ["vehicle", "vin"]);

    return React.createElement(ActionBlock, Object.assign({
      lines: [config("Vehicle's Year, Make & Model", vehicle), "VIN: ".concat(config('Numberical ID.', vin))]
    }, rest));
  }
};
uis.tag = {
  /*
      <UI.Tag
        icon="core-auto"
        label="2017 Camry SE"
      />
  */
  def: function def(_ref9) {
    var icon = _ref9.icon,
        label = _ref9.label;
    return React.createElement(Tag, {
      icon: config('circle-full', icon)
    }, config('Default Tag Label', label));
  },

  /*
      <UI.Tag
        id="auto"
        label="2017 Camry SE"
      />
       <Tag icon="core-auto">
        2017 Toyota Camry SE
      </Tag>
  */
  auto: function auto(_ref10) {
    var label = _ref10.label;
    return React.createElement(UI.Tag, {
      icon: "core-auto",
      label: config('Default Automobile: Year/Make/Model', label)
    });
  }
};
uis.flag = {
  /*
      NOTE: If a UI Package type have a def method,
            which it should unless the package is super unique,
            packages belonging to that package type, without
            an ID specified, will configure def.
       TODO: Explore adding def concept to subtypes (requires identifying
            deeper meta data concept
            -- I.E. <UI.Action id="link" label="link text"/>
             There different types of actions, which differe by
            different what child components <Action> contains.
            SO like action > link vs action > block have different def()
       TODO: Still need to figure out an easy way to identify what props
            have been exposed for confiration.
  */
  def: function def(_ref11) {
    var theme = _ref11.theme,
        label = _ref11.label;
    return React.createElement(Flag, {
      theme: config('saber', theme)
    }, config('Default Flag Label', label));
  },

  /*
      <UI.Flag
        id="active"
        theme="r2d2"
      />
       <Flag theme="yoda">
        Active
      </Flag>
  */
  active: function active(_ref12) {
    var theme = _ref12.theme;
    return React.createElement(UI.Flag, {
      theme: config('yoda', theme),
      label: "active"
    });
  },

  /*
      <UI.Flag
        id="docs_uploaded"
      />
       <Flag theme="saber">
        Documents Uploaded
      </Flag>
  */
  docs_uploaded: function docs_uploaded(_ref13) {
    var theme = _ref13.theme;
    return React.createElement(UI.Flag, {
      theme: config('saber', theme),
      label: "documents uploaded"
    });
  },

  /*
      <UI.Flag
        id="late_payment"
      />
       <Flag theme="c3po">
        Late Payment
      </Flag>
  */
  late_payment: function late_payment(_ref14) {
    var theme = _ref14.theme;
    return React.createElement(UI.Flag, {
      theme: config('c3po', theme),
      label: "late payment"
    });
  },

  /*
      <UI.Flag
        id="unpaid_premium"
      />
      <Flag theme="redLeader">
        Unpaid Premium
      </Flag>
  */
  unpaid_premium: function unpaid_premium(_ref15) {
    var theme = _ref15.theme;
    return React.createElement(UI.Flag, {
      theme: config('redLeader', theme),
      label: "unpaid premium"
    });
  },

  /*
      <UI.Flag
        id="ubi_disconnected"
      />
      <Flag theme="bb8">
        UBI Disconnected
      </Flag>
  */
  ubi_disconnected: function ubi_disconnected(_ref16) {
    var theme = _ref16.theme;
    return React.createElement(UI.Flag, {
      theme: config('bb8', theme),
      label: "UBI disconnected"
    });
  },

  /*
      <UI.Flag
        id="grey_info"
        label="Underage Driver"
      />
       <Flag theme="grey">
        Something Grey
      </Flag>
  */
  grey_info: function grey_info(_ref17) {
    var label = _ref17.label;
    return React.createElement(UI.Flag, {
      theme: "grey",
      label: config('something grey', label)
    });
  }
};
uis.drawer = {
  // def () {
  //   return (
  //     <Drawer />
  //   );
  // },

  /*
      <UI.Drawer id="interview">
        <UI.Question id="remove_driver">
      </Drawer>
  */
  interview: function interview(_ref18) {
    var children = _ref18.children,
        rest = _objectWithoutProperties(_ref18, ["children"]);

    return React.createElement(Drawer, {
      type: "interview"
    }, {
      body: React.createElement(Wrapper, null, children),
      footer: React.createElement(UI.Action, {
        id: "interview_nav"
      })
    });
  }
};
/*

*/

uis.question = {
  /*
        <UI.Question
            question='Ask a question'
            answer=
        />
  */
  def: function def(_ref19) {
    var question = _ref19.question,
        answers = _ref19.answers;
    return React.createElement(Group, {
      id: "1",
      type: "step"
    }, {
      header: config('Ask a question', question),
      body: 'Answer Input Fields'
    });
  },

  /*
        <UI.Question
          id="remove_driver_reason"
          driver="Emily"
        />
  */
  remove_driver_reason: function remove_driver_reason(_ref20) {
    var driver = _ref20.driver;
    return React.createElement(UI.Question, {
      question: "Why are you removing ".concat(config('Driver One', driver), " from your policy?")
    });
  },

  /*
        <UI.Question
          id="state_licensed"
          driver="William"
        />
         TODO: Need to allow for passing specific types of data..like driver name
  */
  state_licensed: function state_licensed(_ref21) {
    var driver = _ref21.driver;
    return React.createElement(UI.Question, {
      question: "What state is ".concat(config('Driver One', driver), " licensed in?")
    });
  },

  /*
        <UI.Question
          id="license_number"
          driver="William"
        />
  */
  license_number: function license_number(_ref22) {
    var driver = _ref22.driver;
    return React.createElement(UI.Question, {
      question: "Please enter ".concat(config('Driver One', driver), "'s license number.")
    });
  },

  /*
        <UI.Question
          id="age_licensed"
          driver="William"
        />
  */
  age_licensed: function age_licensed(_ref23) {
    var driver = _ref23.driver;
    return React.createElement(UI.Question, {
      question: "At what age was ".concat(config('Driver One', driver), " first licensed?")
    });
  },

  /*
        <UI.Question
          id="gender"
          driver="William"
        />
  */
  gender: function gender(_ref24) {
    var driver = _ref24.driver;
    return React.createElement(UI.Question, {
      question: "Please select ".concat(config('Driver One', driver), "'s gender.")
    });
  },

  /*
        <UI.Question
          id="relationship_to"
          driver="William"
          driver2="Amanda"
        />
  */
  relationship_to: function relationship_to(_ref25) {
    var driver = _ref25.driver,
        driver2 = _ref25.driver2;
    return React.createElement(UI.Question, {
      question: "What is ".concat(config('Driver One', driver), "'s relationship to ").concat(config('Driver Two', driver2), "?")
    });
  },

  /*
        <UI.Question
          id="marital_status"
          driver="William"
        />
  */
  marital_status: function marital_status(_ref26) {
    var driver = _ref26.driver;
    return React.createElement(UI.Question, {
      question: "What is ".concat(config('Driver One', driver), "'s marital status?")
    });
  },

  /*
        <UI.Question id="modifying_more" />
  */
  modifying_more: function modifying_more() {
    return React.createElement(UI.Question, {
      question: "Will you be adding or removing any other drivers or vehicles?"
    });
  }
};
/*
    TEXT
    address
      - financial interest
      - financier
      - lessor
      - simple
    name
      - first
      - middle
      - last
      - full
      - suffix
      - business
    email

    NUMBER
    phone
      - contact info
      - fax
      - home
      - mobile
      - work
    date
      - payment
      - dob
    bank
    currency
      - payment amount
    credit card
    vin

    ALPHANUMBERIC
    drivers license

*/

uis.field = {
  /*
     <UI.Field
        mask="michael"
        {...props}
      />
     TODO: Explore how to create sub-sub types for things like
          Field > Text defs
  */
  def: function def(_ref27) {
    var rest = _extends({}, _ref27);

    return React.createElement(Input, Object.assign({
      type: "text"
    }, rest));
  },
  select: function select(_ref28) {
    var rest = _extends({}, _ref28);

    /*
      <Input
        type="select"
        {...rest}
      />
    */
    return React.createElement(InputSelect, null);
  },

  /*
     <UI.Field
        id="name_first"
     />
  */
  name_first: function name_first(_ref29) {
    var id = _ref29.id;
    return React.createElement(UI.Field, {
      name: id,
      label: "first name"
    });
  },

  /*
     <UI.Field
        id="name_middle"
     />
  */
  name_middle: function name_middle(_ref30) {
    var id = _ref30.id;
    return React.createElement(UI.Field, {
      name: id,
      label: "middle"
    });
  },

  /*
       <UI.Field
          id="name_last"
       />
  */
  name_last: function name_last(_ref31) {
    var id = _ref31.id;
    return React.createElement(UI.Field, {
      name: id,
      label: "last name"
    });
  },

  /*
       <UI.Field
          id="name_full"
       />
  */
  name_full: function name_full(_ref32) {
    var id = _ref32.id;
    return React.createElement(UI.Field, {
      id: "name"
    });
  },

  /*
      TODO: Add drop down field and migrate this into a drop down
        <UI.Field
          id="name_suffix"
       />
  */
  name_suffix: function name_suffix(_ref33) {
    var id = _ref33.id;
    return React.createElement(UI.Field, {
      name: id,
      label: "suffix"
    });
  },

  /*
      <UI.Field
        id="name"
      />
       <UI.Field
        id="name"
        label="Name of Lessor"
      />
       <UI.Field
        id="name"
        label="Name of Financier"
        mask="ACME Holdings"
      />
  */
  name: function name(_ref34) {
    var id = _ref34.id,
        label = _ref34.label,
        mask = _ref34.mask;
    return React.createElement(UI.Field, {
      name: id,
      label: config('full name', label),
      mask: mask
    });
  },

  /*
     <UI.Field
        id="email"
        mask="email@example.com"
     />
  */
  email: function email(_ref35) {
    var id = _ref35.id,
        mask = _ref35.mask;
    return React.createElement(UI.Field, {
      name: id,
      mask: config('email@domain.com', mask),
      label: "email"
    });
  },

  /*
       <UI.Field
          id="address_street"
       />
  */
  address_street: function address_street(_ref36) {
    var id = _ref36.id;
    return React.createElement(UI.Field, {
      name: id,
      label: "Street Address"
    });
  },

  /*
       <UI.Field
          id="address_city"
          {...props}
       />
  */
  address_city: function address_city(_ref37) {
    var id = _ref37.id;
    return React.createElement(UI.Field, {
      name: id,
      label: "City"
    });
  },

  /*
       <UI.Field
          id="address_zip"
          mask="94553"
       />
         NOTE: Is there a difference between a
              1. "zip"
              2. "address_zip"
  */
  address_zip: function address_zip(_ref38) {
    var id = _ref38.id,
        mask = _ref38.mask;
    return React.createElement(UI.Field, {
      name: id,
      mask: config('00000', mask),
      label: "Zip Code",
      spacing: "natural"
    });
  }
};
/*
     TODO: Evaluate whether to create a new type of <Wrapper> called <Fields>
*/

uis.fields = {
  /*
       <UI.Fields
          id="address"
       />
  */
  address: function address(_ref39) {
    var id = _ref39.id;
    return React.createElement(Wrapper, null, React.createElement(UI.Field, {
      id: "address_street"
    }), React.createElement(Wrapper, {
      layout: "wrap"
    }, React.createElement(UI.Field, {
      id: "address_city"
    }), React.createElement(UI.Field, {
      id: "address_zip"
    })));
  },

  /*
        <UI.Fields
           id="lessor"
        />
  */
  lessor: function lessor(_ref40) {
    var id = _ref40.id;
    return React.createElement(Wrapper, {
      id: id
    }, React.createElement(UI.Field, {
      id: "name",
      label: "Name of Lessor",
      mask: "ACME Holdings"
    }), React.createElement(UI.Fields, {
      id: "address"
    }));
  },

  /*
        <UI.Fields
           id="financier"
        />
  */
  financier: function financier(_ref41) {
    var id = _ref41.id;
    return React.createElement(Wrapper, {
      id: id
    }, React.createElement(UI.Field, {
      id: "name",
      label: "Name of Financier",
      mask: "ACME Bank"
    }), React.createElement(UI.Fields, {
      id: "address"
    }));
  },

  /*
       <UI.Fields
          id="name_person"
       />
  */
  name_person: function name_person(_ref42) {
    var id = _ref42.id;
    return React.createElement(Wrapper, null, React.createElement(Wrapper, {
      layout: "wrap"
    }, React.createElement(UI.Field, {
      id: "name_first"
    }), React.createElement(UI.Field, {
      id: "name_middle"
    })), React.createElement(Wrapper, {
      layout: "wrap"
    }, React.createElement(UI.Field, {
      id: "name_last"
    }), React.createElement(UI.Field, {
      id: "name_suffix"
    })));
  }
}; // TODO: Explore & Finalize how/where to store inventories

uis.icon = require('@pixel/components/elements/Icon/ui.inventory.js');
module.exports = uis;