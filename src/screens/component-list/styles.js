import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    container: {
        backgroundColor: '$baseBackgroundColor',
        padding: '$containerPadding'
    },
    sectionHeader: {
        backgroundColor: '#006699',
        padding: 8,
        marginTop: 15
    },
    text: {
        color: '$inverseTextColor',
        fontSize: '$titleFontSize'
    }
})