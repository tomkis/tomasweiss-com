import { connect } from 'react-redux';

import HireMe from 'components/HireMe';
import * as ActionTypes from 'constants/actionTypes';

const mapDispatchToProps = {
  onSubmit: payload => ({ type: ActionTypes.HIRE_ME_FORM_SUBMITTED, payload })
};

export default connect(
  null,
  mapDispatchToProps
)(HireMe);
