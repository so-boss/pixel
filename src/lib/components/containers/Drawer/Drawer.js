import React, { Component } from 'react'; //useState, useRef
//import PropTypes from 'prop-types';
import useDimensions from "react-use-dimensions";
import { useSpring, animated as a, config } from 'react-spring';
import posed from 'react-pose';

import { Container } from '../../';
import './Drawer.pcss';



const DrawerPrimitive = ({children, drawer, tag, ...rest}) => {
  return (
    <Container
      tag={tag}
      drawer={drawer}
      {...rest}
    >
      {children}
    </Container>
  )
}

const AnimatedDrawer = ({children, expanded, ...rest}) => {


  //const [isExpanded] = useState("collapse")
  const pose = expanded ? 'expand' : 'collapse';
  console.log(expanded, pose)
  const AnimatedPrimitive = posed.div({
    // pressable: true,
    // init: { scale: 1 },
    // press: { scale: 0.8 },
    expand: {
      applyAtStart: {
        overflow:'visible',
        marginTop:-100
      },
      transition: { duration: 700 },
      marginTop:0
    },
    collapse:{
      applyAtStart: {
        overflow:'hidden',
        marginTop:0
      },
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 0
      },
      marginTop:-100
    }
  });
  //const [ref, {height}] = useDimensions()
  // const motionProps = useSpring({
  //   expand: {
  //     to: {
  //       marginTop:0,
  //     },
  //   },
  //   collapse: {
  //     to: {
  //       marginTop: 0,
  //     },
  //     config:config.stiff,
  //     onStart (animation) {
  //       this.to.marginTop = -height//-this.store.$drawer.getBoundingClientRect().height;
  //     },
  //   }
  // });
  return (
    <AnimatedPrimitive pose={pose} {...rest}>
      <DrawerPrimitive {...rest}>
          {children}
      </DrawerPrimitive>
    </AnimatedPrimitive>
  )
}


export default class Drawer extends Component {
    constructor(props) {
      super(props);

      this.getDrawerState = this.getDrawerState.bind(this);

      this.state = {
          expanded:true
      };
    }

    getDrawerState () {
      return this.state.expanded
      // this.setState(prevState => ({
      //   drawer: {
      //     enabled:true,
      //     expanded:!prevState.drawer.expanded,
      //   },
      // }));
    }

    expand() {
      console.log("EXPAND")
      this.setState({
          expanded:false
      })
    }
    collapse() {
      console.log("COLLAPSE")
      this.setState({
          expanded:true
      })
    }
    render() {
      const {
        drawer,
        tag,
        children,
        ...rest
      } = this.props;

      return (
        <div onClick={() => this.state.expanded ? this.expand() : this.collapse()}>
        <AnimatedDrawer
          tag={tag}
          drawer={drawer}
          getDrawerState={this.handleDrawerState}
          expanded={this.state.expanded}
          {...rest}
        >
          {children}
        </AnimatedDrawer>
        </div>
      )
    }
}


// const AnimatedDrawer = ({children, drawer, tag, ...rest}) => {
//   const AnimatedPrimitive = animated(DrawerPrimitive);
//   const [bind, {height}] = useDimensions()
//   const motionProps = useSpring({
//     expand: {
//       to: {
//         marginTop:0,
//       },
//     },
//     collapse: {
//       to: {
//         marginTop: 0,
//       },
//       config:config.stiff,
//       onStart () {
//         this.to.marginTop = -height//-this.store.$drawer.getBoundingClientRect().height;
//       },
//     },
//   });
//
//   return (
//     <AnimatedPrimitive
//       style={{overflow:"hidden", ...motionProps}}
//       tag={tag}
//       drawer={drawer}
//     >
//       <div {...bind}>
//         {children}
//       </div>
//     </AnimatedPrimitive>
//   )
// }

/*
const MyComponent = () => {
    const [stepRef, stepSize] = useDimensions();
    const [titleRef, titleSize] = useDimensions();

    console.log("Step is at X: ", stepSize.x);
    console.log("Title is", titleSize.width, "wide");

    return (
        <div>
            <div ref={stepRef}>This is a step</div>
            <h1 ref={titleRef}>The title</h1>
        </div>
    );
};


const MyComponent = () => {
    const [ref, { x, y, width }] = useDimensions();

    return <div ref={ref}>This is the element you'll measure</div>;
};

const MyComponent = () => {
    const [stepRef, stepSize] = useDimensions({ liveMeasure: false });

    // useDimensions never updates and won't trigger re-renders
    console.log("Step is at X: ", stepSize.x);

    return (
        <div>
            <div ref={stepRef}>This is a step</div>
        </div>
    );
};
 */

//Drawer.displayName = 'Drawer';

// Drawer.defaultProps = {
//   type: 'primary',
//   tag: 'drawer',
// };
//
// Drawer.propTypes = {
//   tag: PropTypes.string,
//   type: PropTypes.string,
// };


// <Animate
//   drawer={drawer}
//   state={drawer.expanded === false
//     ? 'collapse'
//     : 'expand'
//   }
//   {...rest}
// >


//{styles => (
// <Container
//   tag={tag}
//   drawer={drawer}
//   style={styles}
//   {...rest}
// >
//   {children}
// </Container>
//      )}

// </Animate>
