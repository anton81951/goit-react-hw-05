import { Audio } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Audio
            height={80}
            width={80}
            radius={9}
            color="green"
            ariaLabel="Loading"
            visible={true}
        />
    );
};

export default Loader;
