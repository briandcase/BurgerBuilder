import React, { Component } from 'react';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types';
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            opacity: this.props.show ? '1' : '0',
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh',
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
  modalClosed: PropTypes.func,
};

export default Modal;
