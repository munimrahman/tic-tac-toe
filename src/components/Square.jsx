import React from 'react';

class Square extends React.Component {
    render() {
        const { value, onClick } = this.props;
        return (
            <button className='border border-gray-500 py-6 px-7' onClick={onClick}>
                {value}
            </button>
        );
    }
}

export default Square;