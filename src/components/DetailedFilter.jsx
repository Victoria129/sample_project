import React from 'react'

function DetailedFilter() {
    return (
        <div>
            hello there
        </div>
    )
}

export default DetailedFilter


var filterData = [
    { name: 'Aang', bender: 'yes', nation: 'Air', person: 'yes', show: 'ATLA' },
    { name: 'Appa', bender: 'yes', nation: 'Air', person: 'no', show: 'ATLA' },
    { name: 'Asami', bender: 'no', nation: 'Republic City', person: 'yes', show: 'LOK' },
    { name: 'Azula', bender: 'yes', nation: 'Fire', person: 'yes', show: 'ATLA' },
    { name: 'Bolin', bender: 'yes', nation: 'Earth', person: 'yes', show: 'LOK' },
    { name: 'Jinora', bender: 'yes', nation: 'Air', person: 'yes', show: 'LOK' },
    { name: 'Katara', bender: 'yes', nation: 'Water', person: 'yes', show: 'ATLA' },
    { name: 'Korra', bender: 'yes', nation: 'Water', person: 'yes', show: 'LOK' },
    { name: 'Lin Beifong', bender: 'yes', nation: 'Republic City', person: 'yes', show: 'LOK' },
    { name: 'Momo', bender: 'no', nation: 'Air',  person: 'no', show: 'ATLA'},
    { name: 'Mai', bender: 'no', nation: 'Fire', person: 'yes', show: 'ATLA' },
    { name: 'Mako', bender: 'yes', nation: 'Fire', person: 'yes', show: 'LOK' },
    { name: 'Naga', bender: 'no', nation: 'Water', person: 'no', show: 'LOK'},
    { name: 'Pabu', bender: 'no', nation: 'Fire', person: 'no', show: 'LOK' },
    { name: 'Sokka', bender: 'no', nation: 'Water', person: 'yes', show: 'ATLA' },
    { name: 'Suki', bender: 'no', nation: 'Earth', person: 'yes', show: 'ATLA' },
    { name: 'Tenzin', bender: 'yes', nation: 'Air', person: 'yes', show: 'LOK' },
    { name: 'Toph Beifong', bender: 'yes', nation: 'Earth', person: 'yes', show: 'ATLA' },
    { name: 'Ty Lee', bender: 'no', nation: 'Fire', person: 'yes', show: 'ATLA' },
    { name: 'Uncle Iroh', bender: 'yes', nation: 'Fire', person: 'yes', show: 'ATLA' },
    { name: 'Varrick', bender: 'no', nation: 'Republic City', person: 'yes', show: 'LOK' },
    { name: 'Zhu Li', bender: 'no', nation: 'Republic City', person: 'yes', show: 'LOK' },
    { name: 'Zuko', bender: 'yes', nation: 'Fire', person: 'yes', show: 'ATLA' }
  ];
  var FilterForm = React.createClass({
    getInitialState: function() {
      return {
        data: this.props.data,
        bender: '',
        nation: '',
        person: '',
        show: '',
        multiple: false
      }
    },
    checked: function(e) {
      this.setState({multiple: e.target.value});
    },
    filterItems: function(val, type) {
       switch (type) {
        case 'bender':
          this.setState({bender: val});
          break;
        case 'nation':
          this.setState({nation: val});
          break;
        case 'person': 
          this.setState({person: val});
          break;
        case 'show':
          this.setState({show: val});
          break;
        default:
          break;
      }
    },
    render: function() {
      var filteredItems = this.props.data;
      var state = this.state;
      var filterProperties = ["bender", "nation", "person", "show"];
      filterProperties.forEach(function(filterBy) {
        var filterValue = state[filterBy];
        if (filterValue) {
          filteredItems = filteredItems.filter(function(item) {
            return item[filterBy] === filterValue;
          });
        }
      });
      var benderArray = this.props.data.map(function(item) { return item.bender });
      var nationArray = this.props.data.map(function(item) { return item.nation });
      var personArray = this.props.data.map(function(item) { return item.person });
      var showArray = this.props.data.map(function(item) { return item.show });
      benderArray.unshift("");
      nationArray.unshift("");
      personArray.unshift("");
      showArray.unshift("");
      return (
        <div className="container">
          <FilterOptions 
              data={this.state.data} 
              benderOptions={benderArray} 
              nationOptions={nationArray}
              personOptions={personArray}
              showOptions={showArray}
              changeOption={this.filterItems} />
          <div className="filter-form">
            <FilterItems data={filteredItems} />
          </div>
        </div>
      )
    }
  });
  var FilterOptions = React.createClass({
    changeOption: function(type, e) {
      var val = e.target.value;
      this.props.changeOption(val, type);
    },
    render: function() {
      return (
        <div className="filter-options">
          <div className="filter-option">
            <label>Bender</label>
            <select id="bender" value={this.props.bender} onChange={this.changeOption.bind(this, 'bender')}>
            {this.props.benderOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
            </select>
            <label>Nation</label>
            <select id="nation" value={this.props.nation} onChange={this.changeOption.bind(this, 'nation')}>
            {this.props.nationOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
            </select>
            <label>Person</label>
            <select id="person" value={this.props.person} onChange={this.changeOption.bind(this, 'person')}>
            {this.props.personOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
            </select>
            <label>Show</label>
            <select id="show" value={this.props.show} onChange={this.changeOption.bind(this, 'show')}>
            {this.props.showOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
            </select>
          </div>
        </div>
      );
    }
  });
  var FilterItems = React.createClass({
    render: function() {
      return (
        <div className="filter-items">
        {this.props.data.map(function(item){
          return (
            <div className="filter-item">{item.name}</div>
          );
        })}
        </div>
      );
    }
  });
 
  /*if (val) {
        filteredItems = this.props.data.filter(function(item) {
          return item[type] === val;
        });
      } else {
        filteredItems = this.props.data;
      }*/
      //this.setState({data: filteredItems});