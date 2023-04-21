import {
    ActivityIndicator,
    Text
} from 'react-native';

const LoadingIndicator = ({loadingMessage='Loading data'}) => {
    return (
        <>
            <ActivityIndicator size='large' color='black'/>
            <Text>{loadingMessage}</Text>
        </>
    );
}

export { LoadingIndicator };
