/**
 * Created by ypling on 10/25/15.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var ListView = require('../../src/ListView');
var customSectionComponent = require('./customSection');
var customItemComponent = require('./customItem');

var App = React.createClass({
    _data: [
        {
            title: 'Section1',
            items:[
                {title:'item A'},
                {title:'item B'}
            ]
        },
        {
            title: 'Section2',
            items:[
                {title:'item C'},
                {title:'item D'}
            ]
        }
    ],
    _getItemDataFrom(SectionData){
        return SectionData.items
    },
    render: function () {
        return (
            <ListView
                data={this._data}
                getItemDataFrom={this._getItemDataFrom}
                sectionComponent={customSectionComponent}
                itemComponent={customItemComponent}
                />
        )
    }
});

ReactDOM.render(<App/>, document.getElementById('main'));