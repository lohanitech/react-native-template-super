import React, { Component } from "react";
import PropTypes from "prop-types";


import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

class BaseIcon extends Component {
	static propTypes = {
        type: PropTypes.string,
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
    }

	componentWillMount() {
        switch (this.props.type) {
            case "Ionicons":
                this.Icon = Ionicons;
                break;
            case "Entypo":
                this.Icon = Entypo;
                break;
            case "FontAwesome":
                this.Icon = FontAwesome;
                break;
            case "Foundation":
                this.Icon = Foundation;
                break;
            case "MaterialIcons":
                this.Icon = MaterialIcons;
                break;
            case "MaterialCommunityIcons":
                this.Icon = MaterialCommunityIcons;
                break;
            case "Octicons":
                this.Icon = Octicons;
                break;
            case "Zocial":
                this.Icon = Zocial;
                break;
            case "SimpleLineIcons":
                this.Icon = SimpleLineIcons;
                break;
            default:
                this.Icon = Ionicons;
        }
	}

	render() {
		return <this.Icon {...this.props} />;
	}
}

BaseIcon.defaultProps = {
    type: 'Ionicons'
}

export default BaseIcon;