import React, { Component } from "react";
import Axios from "axios";

class DocP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  componentWillMount() {
    let url =
      "http://202.80.228.46:3000/api/DocPublishes/" +
      this.props.match.params.id;
    Axios.get(url)
      .then(res => {
        console.log(res);
        this.setState({ items: res.data });
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  render() {
    const p = this.state.items;
    console.log(p);
    return (
      <div>
      
      </div>
    );
  }
}
export default DocP;
