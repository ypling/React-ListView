/**
 * Created by ypling on 10/25/15.
 */
var React = require('react');

var ListView = React.createClass({
    render: function () {
        if (!this.props.data) {
            return null;
        }
        var sections;
        if (this.props.data.constructor === Array) {
            sections = this.props.data.map(function (sectionData, index) {
                var SectionComponent = this.props.sectionComponent;
                var itemArray = this.props.getItemDataFrom(sectionData);
                var items = itemArray.map(function (itemData, index) {
                    var ItemComponent = this.props.itemComponent;
                    return (
                        <li key={index}>
                            <ItemComponent index={index} data={itemData}/>
                        </li>
                    )
                }, this);
                return (
                    <li key={index}>
                        <SectionComponent index={index} data={sectionData}>
                            <ul>
                                {items}
                            </ul>
                        </SectionComponent>
                    </li>
                );
            }, this);
        }
        return (
            <div className="row scrollable">
                <ul>
                    {sections}
                </ul>
            </div>
        );
    }
});

module.exports = ListView;