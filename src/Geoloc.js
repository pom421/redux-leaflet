import React from "react";
import { connect } from "react-redux";

const sendPosition = pos => {
  return {
    type: "SEND_POSITION",
    longitude: pos.coords.longitude,
    latitude: pos.coords.latitude
  };
};

const initRequest = () => ({
  type: "INIT_REQUEST"
});

// Renderless component
class Geoloc extends React.Component {
  refresh() {
    if (navigator.geolocation) {
      this.props.initRequest();

      const { sendPosition } = this.props;

      // on ajoute un setTimeout pour simuler un retour plus lent
      setTimeout(function() {
        navigator.geolocation.getCurrentPosition(
          sendPosition,
          err => {
            console.error("Error", err);
          },
          {
            timeout: 5000,
            enableHighAccuracy: true
          }
        );
      }, 1000);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

  }
  
  componentDidMount() {
    this.refresh()
  }

  render() {
    return (
      <div>
        <h1>Geoloc</h1>
        <button onClick={() => this.refresh()}>Refresh localisation</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  sendPosition,
  initRequest
};

export default connect(
  null,
  mapDispatchToProps
)(Geoloc);
