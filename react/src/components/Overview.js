import React from 'react';
// ReactDOM.render(
//       </div>
//     )

function Overview() {
  return (
    <div className='overviewFlexbox'>
      <div className='overviewFlexItem'>
        <h4>Secure</h4><hr/>
        <p>Freely share information with teams, coworkers, friends, and more!</p>
      </div>
      <div className='overviewFlexItem'>
        <h4>Private</h4><hr/>
        <p>No logs, ever. Designed with security in mind.</p>
      </div>
      <div className='overviewFlexItem'>
        <h4>Access Tokens</h4><hr/>
        <p>Quickly share secret lists!</p>
      </div>
    </div>
  );
}

export default Overview;