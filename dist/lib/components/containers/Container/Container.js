import { Wrapper, Title } from './../../index.js';

import * as React from 'react';
import * as PropTypes from 'prop-types';
import './Container.pcss';

const isObject = function (value) {
  return typeof value === 'object' && typeof value !== 'function' && value !== undefined;
};
const isNamedSlots = function (children) {
  return isObject(children) && 'body' in children;
};

export default class Container extends React.Component {
  constructor (props) {
    super(props);
    this.containerEl = React.createRef();
    this.getContainer = this.getContainer.bind(this);
  }

  componentDidMount () {
    const {
      props,
    } = this;

    this.getContainer(props);
  }

  getContainer (props) {
    const $container = this.containerEl.current;

    if (props.getContainer) {
      props.getContainer({
        $container,
      });
    }
  }

  render () {
    const {
      children,
      tag,
      slots,
      // drawer,
      getContainer
      // ...rest
    } = this.props;

    if (!children) {
      throw new Error('children are missing !');
    }

    if (isNamedSlots(children)) {
      const {
        header,
        body,
      } = children;

      let {
        footer,
      } = children;

      // IF no footer child is described
      if (!footer) {
        if (slots.footer.include !== false) {
          footer = <Wrapper type="footer" />;
        } else {
          footer = null;
        }
      } else {
        // OTHERWISE a footer is descibed and should be rendered
        footer = <Wrapper type="footer">{footer}</Wrapper>;
      }

      const ContainerElement = `${tag}`;

      return (
        <ContainerElement
          getContainer={getContainer && this.getContainer}
          ref={this.containerEl}
        >
          <Wrapper>
            {header
              ? (
                <Wrapper type="header">
                  {
                    React.isValidElement(header)
                      ? header
                      : <Title>{header}</Title>
                  }
                </Wrapper>
              )
              : null
            }
            <Wrapper type="body">{body}</Wrapper>
            {footer}
          </Wrapper>
        </ContainerElement>
      );
    }

    return null;
  }
}

Container.defaultProps = {
  slots: {
    header: {
      include: false,
    },
    body: {
      include: true,
    },
    footer: {
      include: false,
    },
  },
};

Container.propTypes = {
  children: PropTypes.object,
  tag: PropTypes.string,
  slots: PropTypes.object,
  // drawer: PropTypes.any,
  getContainer: PropTypes.element
};
