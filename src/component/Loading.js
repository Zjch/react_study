import React from 'react';
import { Spin } from 'antd'

class Loading extends React.Component{
    state = {

    };

    render(){
        return (
            <Spin size="large" />
        )
    };
};

export default Loading;