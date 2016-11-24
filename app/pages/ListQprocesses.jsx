import React, { Component, PropTypes } from 'react';
import Page from 'pages/Page';
import QprocessContainer from 'containers/Qprocess';

class ListCards extends Component {
  render() {
    return (
      <Page {...this.getMetaData()}>
        <span>NOTHING</span>
      </Page>
    );
  }

  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'List';
  }

  pageMeta() {
    return [
      { name: "description", content: "A list of your Qprocesses" }
    ];
  }

  pageLink() {
    return [];
  }
}

export default ListCards;
