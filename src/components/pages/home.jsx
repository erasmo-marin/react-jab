import React from 'react'

class Home extends React.Component {
    render() {
        const { executeTransition, title, children, ...rest } = this.props

        return (
            <div {...rest} className="content">
                <h1 style={{ textAlign: 'center', padding: '1rem' }}>{title}</h1>
                {children}
            </div>
        )
    }
}

export default Home
