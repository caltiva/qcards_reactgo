import React, { Component, PropTypes } from 'react';
import Page from 'pages/Page';
import AboutQcardsContainer from 'containers/AboutQcards';

class AboutQcards extends Component {
  render() {
    return (
      <Page {...this.getMetaData()}>
        <AboutQcardsContainer {...this.props} />
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
    return 'No';
  }

  pageMeta() {
    return [
      { name: "description", content: "A reactGo example of life" }
    ];
  }

  pageLink() {
    return [];
  }
}

export default AboutQcards;
