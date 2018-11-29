import React from 'react';
import map from 'lodash/map';
import get from 'lodash/get';

class Navbar extends React.Component {
    goTo = transition => {
        this.props.executeTransition(transition);
    };

    render() {
        const { executeTransition, items, core, registry, ...rest } = this.props;

        return (
            <div
                {...rest}
                style={{
                    backgroundColor: get(core, 'theme.colors.primaryColor', '#fff'),
                    color: get(core, 'theme.colors.primaryTextColor', '#000'),
                }}
                className="navbar"
            >
                {map(items, ({ text, transition }, index) => (
                    <div key={index} onClick={() => this.goTo(transition)} className="navbar-link">
                        {text}
                    </div>
                ))}
            </div>
        );
    }
}

export default Navbar;
