import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions';
import { login } from '../../actions/session_actions';

import Greeting from './greeting';

const msp = (state) => {
  const currentUser = state.entities.users[state.session.id];

  return {currentUser};
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user))
  };
};

export default connect(msp,mdp)(Greeting);
