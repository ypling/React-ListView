/**
 * Created by ypling on 10/25/15.
 */
var React = require('react');

var Section = React.createClass({
    render: function () {
        return (
            <div className="section">
                <p>{this.props.data.title}</p>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Section;