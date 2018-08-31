import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AppNavigator} from "./AppNavigator";

class WarriorsPathApp extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    render() {
        return (
            <AppNavigator />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(WarriorsPathApp)
