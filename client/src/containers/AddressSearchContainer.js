import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import AddressSearch from '../components/AddressSearch'
import { addressEntered } from '../actions/AddressSearchActions'

const mapStateToProps = (state) => {
  return {
    AddressSearch: state.userEnteredAddress
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    doAddressEntered: (address, lat, long) => {
      dispatch(addressEntered(address, lat, long))
    }
    // addressEntered: bindActionCreators(addressEntered, dispatch)
  }
};

const AddressSearchWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressSearch);

export default AddressSearchWithData