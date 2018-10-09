import React from "react";
import { connect } from "react-redux";

class Position extends React.Component {
  render() {
    const { longitude, latitude } = this.props;

    return (
      <div>
        <h1>Forecast</h1>
        <div>Longitude : {longitude}</div>
        <div>Latitude : {latitude}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  forecasts: state.forecasts,
  longitude: state.longitude,
  latitude: state.latitude
});

export default connect(mapStateToProps)(Position);
