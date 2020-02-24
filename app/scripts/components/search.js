import React, { Component } from "react";
import ReactDOM from "react-dom";
const TMDBLogo = "./images/tmdb.svg";

class SearchBox extends Component {
  handleChange(event) {
    event.target.select();
  }
  render() {
    return (
      <div className="col-xs-12 search-container nopadding">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-12">
            <form className="searchbox">
              {/* <label> */}
              <input
                ref="search suggestion"
                onClick={this.handleChange}
                className="searchbox__input typeahead form-control"
                type="text"
                placeholder="Please enter movie name.."
                id="q"
              />
              {/* </label> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
module.exports = SearchBox;
