import React from "react";
import { connect } from "react-redux";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MyMap extends React.Component {

  render() {
    if (!this.props.ready) {
      return <></>;
    }

    const position = [this.props.latitude, this.props.longitude];

    console.log("position", position);
    return (
      <Map center={position} style={{ height: "400px" }} zoom={13}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            The place to be!
            <b>Awesome</b>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

const mapStateToProps = state => ({
  longitude: state.longitude,
  latitude: state.latitude,
  ready: state.ready
});

export default connect(mapStateToProps)(MyMap);
