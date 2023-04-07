import Approot from './Approot.componet';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    // loggedUser: state.userPage.loggedUser,
    // isLoggedIn: state.userPage.isLoggedIn,
});

export const AppRootContainer = connect(mapStateToProps, {})(Approot);