import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CLEAR_TOAST} from '../actions/types';

import errorMessageForCode from '../util/error-message-for-code';
import successMessageForAction from '../util/success-message-for-action';

const toastDuration = 2500;

class Toast extends React.PureComponent {
  static propTypes = {
    toast: PropTypes.object,
    clearToast: PropTypes.func,
    location: PropTypes.object,
  };

  state = {
    active: false,
  };

  componentDidUpdate(prevProps) {
    const {toast: prevToast} = prevProps;
    const {toast} = this.props;

    if (toast && toast !== prevToast) {
      clearTimeout(this.timeout);
      this.setState({active: true});
      this.timeout = setTimeout(() => {
        this.setState({active: false});
      }, toastDuration);
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  handleAnimationEnd = () => {
    const {active} = this.state;
    const {clearToast, toast} = this.props;
    !active && toast && clearToast();
  };

  render() {
    const {toast} = this.props;

    if (!toast) return null;

    const {active} = this.state;
    const {toastType} = toast;
    const isError = toastType === 'error';
    const isSuccess = toastType === 'success';

    const message = isError
      ? errorMessageForCode(toast.code)
      : successMessageForAction(toast.action);

    return (
      <div className="toast-wrap">
        <div
          onAnimationEnd={this.handleAnimationEnd}
          className={[
            'toast',
            active && 'toast--active',
            isError && 'toast--error',
            isSuccess && 'toast--success',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div className="toast__message">{message}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {toast} = state;
  return {toast};
};

const mapDispatchToProps = dispatch => {
  return {
    clearToast: () => dispatch({type: CLEAR_TOAST}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toast);