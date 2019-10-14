import React, { Component } from 'react'; //useState, useRef
//import PropTypes from 'prop-types';
import useDimensions from "react-use-dimensions";
import { useSpring, animated, config } from 'react-spring';
import './Drawer.pcss';
import { Container } from '../../';


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


export default class Drawer extends Component {
    render() {
      const {
        children,
        drawer,
        tag,
        ...rest
      } = this.props;

      const AnimatedDrawer = animated(DrawerPrimitive);
      const [bind, {height}] = useDimensions()
      const motionProps = useSpring({
        expand: {
          to: {
            marginTop:0,
          },
        },
        collapse: {
          to: {
            marginTop: 0,
          },
          config:config.stiff,
          onStart () {
            this.to.marginTop = -height//-this.store.$drawer.getBoundingClientRect().height;
          },
        },
      });

      return (
        <AnimatedDrawer
          style={{overflow:"hidden", ...motionProps}}
          tag={tag}
          drawer={drawer}
        >
          <div {...bind}>
            {children}
          </div>
        </AnimatedDrawer>
      )
    }
}

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
