import React from 'react'
import map from 'lodash/map'

class Footer extends React.Component {
    render() {
        const { executeTransition, title, links, ...rest } = this.props
        return (
            <div {...rest} className="footer">
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="links">
                    {map(links, list => (
                        <ul>
                            {map(list, ({ text, url }) => (
                                <li>
                                    <a href={url} target="_blank" rel="noopener noreferrer">
                                        {text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        )
    }
}

export default Footer
