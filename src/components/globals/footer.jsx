import React from 'react';
import map from 'lodash/map';
import get from 'lodash/get';

class Footer extends React.Component {
    render() {
        const { executeTransition, title, links, coreStore, registry, ...rest } = this.props;
        return (
            <div
                {...rest}
                style={{
                    backgroundColor: get(coreStore, 'theme.colors.primaryColor', '#fff'),
                    color: get(coreStore, 'theme.colors.primaryTextColor', '#000'),
                }}
                className="footer"
            >
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="links">
                    {map(links, (list, index) => (
                        <ul key={index}>
                            {map(list, ({ text, url }, index) => (
                                <li key={index}>
                                    <a href={url} target="_blank" rel="noopener noreferrer">
                                        {text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        );
    }
}

export default Footer;
