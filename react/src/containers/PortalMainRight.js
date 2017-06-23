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
      stripedRows: true,
      showRowHover: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: true,
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

console.log('devices inside PortalMainRight', this.props.devices)
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
                Connected Devices <strong>{this.props.devices.length}</strong>
              </TableHeaderColumn>
              <TableHeaderColumn colSpan="1" tooltip="Super Header" style={{textAlign: 'left'}}>
              </TableHeaderColumn>

              <TableHeaderColumn colSpan="1" tooltip="Super Header" style={{textAlign: 'right'}}>
                Total Gateways: 0
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The UUID">UUID</TableHeaderColumn>
              <TableHeaderColumn tooltip="Call it whatever you want">Device Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Latitute">Latitute</TableHeaderColumn>
              <TableHeaderColumn tooltip="Last recorded device Longitude">Longitude</TableHeaderColumn>
              <TableHeaderColumn tooltip="The power level of your device ">Signal Strength</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.devices.map( (device, index) => (
              <TableRow key={index}>
                <TableRowColumn>{device.device_name}</TableRowColumn>
                <TableRowColumn>{device.device_id}</TableRowColumn>
                <TableRowColumn>{device.device_lat}</TableRowColumn>
                <TableRowColumn>{device.device_long}</TableRowColumn>
                <TableRowColumn>62%</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          {/*
            USE THE FOOTER TO HIGHLIGHT THE SELECTED NODE
        */}
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>UUID</TableRowColumn>
              <TableRowColumn>Device Name</TableRowColumn>
              <TableRowColumn>Battery</TableRowColumn>
              <TableRowColumn>Range</TableRowColumn>
              <TableRowColumn>Signal Strength</TableRowColumn>
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