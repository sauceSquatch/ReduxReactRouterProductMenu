import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWoodData } from '../actions/index';

class WoodIndex extends Component {

  componentWillMount() {
    console.log("this is a good time to load data");
    this.props.fetchWoodData();
  }

  renderWoodNav() {
    console.log("ahoy")
    console.log(this.props.woodSections.items)

    if(!this.props.woodSections.items) {
      console.log("NO DATA YET")
      return <div>no data yet</div>;
    }
    return this.props.woodSections.items.map((item) => {
      
      console.log("item: ", item.fields.name);

      return (
        <li className="list-group-item" key={item.fields.name}>{item.fields.name}</li>
      );
    })
  }

  render() {
    return (
      <div>
        <h3>LIST OF WOOD SECTIONS</h3>
        <ul className="list-group"></ul>
        {this.renderWoodNav()}
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return { woodSections: state.woodSections.all }
}

export default connect( mapStateToProps, { fetchWoodData } )(WoodIndex);
