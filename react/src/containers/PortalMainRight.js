import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

class PortalMainRight extends Component {
  constructor(props){
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '40vh',
    }
    // bind functions
  }
  handleToggle(event, toggled){
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange(event){
    this.setState({height: event.target.value});
  };

  render() {

    const tableData = [
      {
        name: 'Main Pump',
        status: 'Connected',
      },
      {
        name: 'Home Base',
        status: 'Connected',
      },
      {
        name: 'Security',
        status: 'Active',
      },
      {
        name: 'Farming',
        status: 'Active',
      },
      {
        name: 'Solar',
        status: 'Update',
      },
      {
        name: 'Wind',
        status: 'Update',
      },
      {
        name: 'VR/Media Server',
        status: 'Active',
      },
    ];
  const styles = {
    propContainer: {
      width: 200,
      overflow: 'hidden',
      margin: '20px auto 0',
    },
    propToggleHeader: {
      margin: '20px auto 10px',
    },
  };

    return(
      <div>
        <Table

          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="1" tooltip="Super Header" style={{textAlign: 'left'}}>
                Connected Nodes Acting as Gateways <strong>5</strong>
              </TableHeaderColumn>
              <TableHeaderColumn colSpan="1" tooltip="Super Header" style={{textAlign: 'left'}}>
                5
              </TableHeaderColumn>

              <TableHeaderColumn colSpan="1" tooltip="Super Header" style={{textAlign: 'right'}}>
                Gateway Listing
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                Gateway Summary
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    )
  }
}

export default PortalMainRight;