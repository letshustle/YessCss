import React from 'react'


const {object, string} = React.PropTypes

function isLeftClickEvent(event) {
    return event.button === 0
}

function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

function createLocationDescriptor(to, { query, hash, state }) {
    if (query || hash || state) {
        return {pathname: to, query, hash, state}
    }

    return to
}

/**
 * A <ServerLink> is used to create an <a> element that bypasses router.
 * OnClick request is sent to server.
 *
 * For example, assuming you have the following route:
 *
 * You could use the following component to link to that route:
 *
 *   <ServerLink to={`/posts/${post.id}`} />
 *
 * Links may pass along location state and/or query string parameters
 * in the state/query props, respectively.
 *
 *   <ServerLink ... query={{ show: true }} state={{ the: 'state' }} />
 */
const ServerLink = React.createClass({

    contextTypes: {
        router: object
    },

    propTypes: {
        to: string
    },

    getDefaultProps() {
        return {
            className: '',
            style: {}
        }
    },

    handleClick(event) {
        if (this.props.onClick)
            this.props.onClick(event)
        if (isModifiedEvent(event) || !isLeftClickEvent(event))
            return
        if (event.defaultPrevented === true)
            return
        event.preventDefault()
        window.location.href = this.props.to;
    },

    render() {
        return <a {...props} href={to} onClick={this.handleClick}/>
    }

})

export default ServerLink