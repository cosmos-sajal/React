var List = React.createClass({
	render : function() {
		return (
			<ul>
				this.props.items.map(function(item) {
					return <li key={item}>{item}</li>
				})
			</ul>
		);
	}
});

var FilteredList = React.createClass({
	searchItems : function(event) {
		var updatedList = this.state.initialItems;
		updatedList = updatedList.filter(function(item) {
			return item.toLowerCase().search(
				event.target.value.toLowerCase()) !== -1;
		});
		this.setState({items : updatedList});
	},
	getInitialState : function() {
		return {
			initialItems : [
				'Harley',
				'Royal Enfiled',
				'Triumph',
				'KTM',
				'Kawasaki',
				'Ducati',
				'Honda',
				'Yamaha'
			],
			items : []
		};
	},
	componentWillMount : function() {
		this.setState({items : this.state.initialItems});
	},
	render : function() {
		return (
			<div>
				<input type="text" placeholder="search" onchange={this.searchItem}/>
				<List items="{this.state.items}"></List>
			</div>
		);
	}
});

ReactDOM.render(<FilteredList/>, document.getElementById('search-list'));