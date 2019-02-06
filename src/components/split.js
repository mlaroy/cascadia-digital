import React, { Component } from 'react';
import Layout from './layout';

class Split extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <Layout>
        <div className="flex justify-center">
          <div className="w-1/2 bg-terra-cotta text-white p-4">
            {left}
          </div>
          <div className="w-1/2 bg-indigo text-white p-4">
            {right}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Split;