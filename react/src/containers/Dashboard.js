import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {}

  }

  render() {
    return (
      <span id='dashboard'>

      <main>
        <div data-grid="grid-left-header">1</div>
        <div data-grid="grid-header">2
          <h1>Welcome To 3sixty</h1>
          <h2>Your Connected World</h2>
        </div>
        <div data-grid="grid-right-header">3</div>
        <div data-grid="grid-column">4
          <p><strong>Active Gateways</strong> A grid track is the space between two adjacent grid lines, forming a grid column or grid row.</p>
        </div>
        <div data-grid="grid-column-mid-left">5</div>
        <div data-grid="grid-area">6
          <p><strong>Grid Area</strong> A grid area consists of one or more adjecent grid cells. It is bound by four grid lines, one on each side of the grid area.</p>z
        </div>
        <div data-grid="grid-cell">7
          <p><strong>Grid Cell</strong> A grid cell is the smallest unit of the grid. A grid cell is the intersection of a grid row and a grid column.</p>
        </div>
        <div data-grid="grid-cell-left-action">8</div>
        <div data-grid="grid-cell-left-action">9</div>
        <div data-grid="grid-cell-right-action">10</div>
        <div data-grid="grid-cell-right-action">11</div>
        <div data-grid="grid-row">12
          <p><strong>Grid Track (Row)</strong> A grid track is the space between two adjacent grid lines, forming a grid column or grid row.</p>
        </div>
      </main>

      </span>
    )
  }
}

export default Dashboard;


