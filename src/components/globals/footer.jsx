import React from 'react'

class Footer extends React.Component {
    render() {
        const { executeTransition, ...rest } = this.props
        return <div {...rest} className="footer" />
    }
}

export default Footer
