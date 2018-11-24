import React from 'react';
import get from 'lodash/get';

class Home extends React.Component {
    render() {
        const { executeTransition, title, coreStore, registry, children, ...rest } = this.props;

        return (
            <div
                {...rest}
                style={{
                    backgroundColor: get(coreStore, 'theme.colors.backgroundColor', '#fff'),
                }}
                className="content"
            >
                <h1 style={{ textAlign: 'center', padding: '1rem' }}>{title}</h1>
                {children}
            </div>
        );
    }
}

export default Home;
