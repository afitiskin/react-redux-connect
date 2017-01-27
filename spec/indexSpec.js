var reactRedux = require('react-redux');
var connect = require('../src/index');

var MAP_STATE_TO_PROPS = 'MAP_STATE_TO_PROPS';
var MAP_DISPATCH_TO_PROPS = 'MAP_DISPATCH_TO_PROPS';
var MERGE_PROPS = 'MERGE_PROPS';
var CONNECT_OPTIONS = 'CONNECT_OPTIONS';

describe('Connector', function () {
  it('should work properly', function () {
    var connector = jasmine.createSpy('connector');
    var Component = {
      mapStateToProps: MAP_STATE_TO_PROPS,
      mapDispatchToProps: MAP_DISPATCH_TO_PROPS,
      mergeProps: MERGE_PROPS,
      connectOptions: CONNECT_OPTIONS,
    };

    spyOn(reactRedux, 'connect').and.returnValue(connector);

    connect(Component);

    expect(reactRedux.connect).toHaveBeenCalledWith(MAP_STATE_TO_PROPS, MAP_DISPATCH_TO_PROPS, MERGE_PROPS, CONNECT_OPTIONS);
    expect(connector).toHaveBeenCalledWith(Component);
  });
});
