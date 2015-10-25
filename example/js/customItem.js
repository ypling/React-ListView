/**
 * Created by ypling on 10/25/15.
 */
var React = require('react');

var Item = React.createClass({
    render: function () {
        return (
            <div className="item">
                <p>{this.props.data.title}</p>
            </div>
        )
    }
});

module.exports = Item;