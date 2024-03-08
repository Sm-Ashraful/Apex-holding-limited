import PropTypes from 'prop-types';

export default function Skeleton(props) {
    return (
        <div className={`container ${props?.className}`}>
            {props?.children}
        </div>
    )
}

Skeleton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};