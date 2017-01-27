# Installation
```bash
yarn add react-redux-connect
```

## Usage
Store all `connect` options as a static attributes inside your component.

```javascript
import connect from 'react-redux-connect';
import { actionOne, actionTwo }  from './actions';

export class MySmartComponent {
    static mapStateToProps(state, ownProps) {
        // if you need to map some data from store
        return {
            // some data from state here
        };
    }
    
    static mapDispatchToProps(dispatch, ownProps) {
        // if you need to dispatch some actions
        return {
            actionOne,
            actionTwo,
        };
    }
    
    static mergeProps(stateProps, dispatchProps, ownProps) {
        // if you want to merge props manually
        return {
            // ...
        }
    }
    
    static connectOptions = {
        // if you need to tweek some connect options
        // e.g. pure: false
    };
    
    render() {
        // return something...
    }
}

// and just pass your component to `connect` function
// all settings will be taken from static props
export default connect(MySmartComponent);
```

Example below is the same to following:
```javascript
import { connect } from 'react-redux';
import { actionOne, actionTwo }  from './actions';


const mapStateToProps = (state, ownProps) => {
    // if you need to map some data from store
    return {
        // some data from state here
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    // if you need to dispatch some actions
    return {
        actionOne,
        actionTwo,
    };
};
    
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    // if you want to merge props manually
    return {
        // ...
    }
};
    
const connectOptions = {
    // if you need to tweek some connect options
    // e.g. pure: false
};

export class MySmartComponent {
    render() {
        // return something...
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, connectOptions)(MySmartComponent);
```

## Licence

MIT

## Testing

```bash
yarn test
```

## Contributing

You are welcome! :)
