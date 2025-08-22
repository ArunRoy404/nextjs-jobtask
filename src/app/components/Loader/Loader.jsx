
import { bouncy } from 'ldrs'
bouncy.register()


const Loader = ({ size = '45', speed = '1.75', color='black' }) => {
    return (
        <l-bouncy
            size={size}
            speed={speed}
            color={color}
        ></l-bouncy>
    );
};

export default Loader;
