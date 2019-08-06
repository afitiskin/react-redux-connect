var reactRedux = require('react-redux');

var staticNames = [
  'mapStateToProps',
  'mapDispatchToProps',
  'mergeProps',
  'connectOptions'
];

module.exports = function connector(Component) {
  return reactRedux.connect.apply(null, staticNames.map(function(name){
    return Component[name]
  }))(Component);
};
