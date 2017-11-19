import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';

const stylesObject = {
    $iconColor: '$buttonIconColor',
    container: {
      marginLeft: '$buttonContainerMargin',
      marginRight: '$buttonContainerMargin',
    },
    button: {
      padding: '$buttonPadding',
      backgroundColor: '$primaryColor',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    accent: {
        backgroundColor: '$accentColor',
    },
    text: {
      color: 'white',
      fontSize: '$fontSizeButton',
    },
    icon: {
        marginRight: 10,
    },
    iconRight: {
        marginLeft: 10,
    },
    small: {
      padding: '$smallButtonPadding',
    },
    smallFont: {
      fontSize: '$fontSizeSmallButton',
    },
    activityIndicatorStyle: {
      marginHorizontal: 10,
      height: 0,
    },
    raised: {
      ...Platform.select({
        ios: {
          shadowColor: 'rgba(0,0,0, .4)',
          shadowOffset: { height: 1, width: 1 },
          shadowOpacity: 1,
          shadowRadius: 1,
        },
        android: {
          backgroundColor: '#fff',
          elevation: 2,
        },
      }),
    },
  };
  
  export default styles = EStyleSheet.create(stylesObject);
  