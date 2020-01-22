import React, { useContext } from 'react'; //useState, useRef
//import PropTypes from 'prop-types';
//import useDimensions from "react-use-dimensions";
//import { useSpring, animated as a, config } from 'react-spring';
//import posed from 'react-pose';
//import { motion } from "framer-motion";
//import { Animate } from "react-simple-animate";

//import {AnimatedPrimitive} from './AnimatedPrimitive'
import { Container } from '../../';
import WrapperContext from '../../wrappers/WrapperContext/WrapperContext.js'

import './Drawer.pcss';

// const DrawerPrimitive = ({children, expanded, drawer, tag, ...rest}) => (
//   <Container
//     tag="drawer"
//     drawer={drawer}
//     {...rest}
//   >
//     {children}
//   </Container>
// );


// const AnimatedPrimitive = ({expanded, children}) => {
//   return (
//     <Animate
//       play={expanded} // Toggle when animation should start
//       start={{
//         transform: "translateY(-100px)"
//       }}
//       end={{ transform: "translateY(0px)" }}
//     >
//       {children}
//     </Animate>
//   )
// }

// const AnimatedDrawer = ({children, expanded, ...rest}) => {
//   //const [isExpanded] = useState("collapse")
//   //const drawerMotion = expanded ? 'expand' : 'collapse';
//
//   return (
//     //<AnimatedPrimitive expanded={expanded}>
//       <DrawerPrimitive
//         expanded={expanded}
//         {...rest}
//       >
//           {children}
//       </DrawerPrimitive>
//     //</AnimatedPrimitive>
//   )
// }

// const variants = {
//   collapse: { marginTop: "-200px" },
//   expand: { marginTop: 0 },
// }
//export default class Drawer extends Component {
export default function Drawer({drawer, tag, children, ...rest }){
  /*
  constructor(props) {
    super(props);

    this.getDrawerState = this.getDrawerState.bind(this);

    this.state = {
        expanded:true
    };
  }

  getDrawerState (context) {
    return context.drawer.expanded
    // this.setState(prevState => ({
    //   drawer: {
    //     enabled:true,
    //     expanded:!prevState.drawer.expanded,
    //   },
    // }));
  }

  expand() {
    this.setState({
        expanded:false
    })
  }
  collapse() {
    this.setState({
        expanded:true
    })
  }
  */
  //const [isExpanded, setIsExpanded] = useState(true)

  // function getDrawerState (context) {
  //   return isExpanded;
  // }

  // function expand() {
  //   setIsExpanded(false);
  // }
  // function collapse() {
  //   setIsExpanded(true);
  // }

  //const ctx = useContext(WrapperContext)

  return (
      <Container
        tag="drawer" //tag={tag}
        drawer={drawer}
        //getDrawerState={this.handleDrawerState}
        //expanded={ctx}
        {...rest}
      >
        {children}
      </Container>
  )
}
Drawer.displayName = 'Drawer';
