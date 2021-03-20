import React from 'react';
import {
  View,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

const TouchItem = ({ noFeedback, onPress, children, ...props }) => {
  const RenderiOS = () => {
    return (
      <TouchableOpacity
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        activeOpacity={noFeedback ? 1 : 0.6}
        {...props}>
        {children}
      </TouchableOpacity>
    );
  };
  const RenderAndroid = () => {
    return (
      <TouchableNativeFeedback
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        {...this.props}
        background={TouchableNativeFeedback.Ripple('#EEE')}>
        <View {...this.props}>{this.props.children}</View>
      </TouchableNativeFeedback>
    );
  };
  const RenderNoFeedback = () => {
    return (
      <TouchableWithoutFeedback
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        {...this.props}>
        <View {...this.props}>{this.props.children}</View>
      </TouchableWithoutFeedback>
    );
  };
  return noFeedback || !onPress ? (
    <RenderNoFeedback />
  ) : Platform.OS === 'ios' ? (
    <RenderiOS />
  ) : (
    <RenderAndroid />
  );
};

TouchItem.propTypes = {
  onPress: PropTypes.any,
  noFeedback: PropTypes.bool,
  ripple: PropTypes.bool,
  white: PropTypes.bool,
};

TouchItem.defaultProps = {
  noFeedback: false,
  ripple: false,
  white: false,
};

export default TouchItem;
