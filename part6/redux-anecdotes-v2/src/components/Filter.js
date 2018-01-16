import React from 'react'
import { connect } from 'react-redux'
import { changeFilter, clearFilter } from '../actions/filterActions'

class Filter extends React.Component {

  render() {
    return (
      <div>
        <input
          value={this.props.filter}
          onChange={(e) => this.props.changeFilter(e.target.value)}
        />
        <button
          onClick={this.props.clearFilter}
        >
          clear
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProp = {
  changeFilter,
  clearFilter
}

export default connect(mapStateToProps, mapDispatchToProp)(Filter)
