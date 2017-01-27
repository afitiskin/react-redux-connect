var reactRedux = require('react-redux');

module.exports = function connector(Component) {
  return reactRedux.connect(Component.mapStateToProps, Component.mapDispatchToProps, Component.mergeProps, Component.connectOptions)(Component);
};
