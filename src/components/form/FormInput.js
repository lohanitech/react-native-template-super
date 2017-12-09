import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Input from './Input';
import Label from './Label';
import ValidationMessage from './ValidationMessage';
import styles from './styles';


class FormInput extends Component{

    render() {
        const { label, containerStyle, validationMessage, validationProps, placeholder, labelProps, inputProps, ...attributes } = this.props;
        return(
            <View 
                style={[styles.formInputContainer, containerStyle && containerStyle ]}
            >
                {label && <Label {...labelProps}>{label}</Label>}
                <Input {...inputProps} placeholder={placeholder} {...attributes} />
                {validationMessage && <ValidationMessage {...validationProps}>{validationMessage}</ValidationMessage>}
            </View>
        );
    }

}


FormInput.propTypes = {
    containerStyle: PropTypes.any,
    placeholder: PropTypes.string,
    validationMessage: PropTypes.string,
    label: PropTypes.string,
    labelProps: PropTypes.object,
    inputProps: PropTypes.object,
    validationProps: PropTypes.object
}

export default FormInput;