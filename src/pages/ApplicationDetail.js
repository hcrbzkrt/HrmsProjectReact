import React from 'react'
import { Button, Table} from 'semantic-ui-react'

export default function ApplicationDetail({apply}) {
    return (
        <div>
           <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Company Name</Table.HeaderCell>
        <Table.HeaderCell>JoB Title</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>Salary</Table.HeaderCell>
        <Table.HeaderCell>Application Deadline</Table.HeaderCell>
        <Table.HeaderCell>Working Hours</Table.HeaderCell>
        <Table.HeaderCell>Apply</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row >
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>Developer</Table.Cell>
        <Table.Cell>Ankara</Table.Cell>
        <Table.Cell>5000-7000</Table.Cell>
        <Table.Cell>23.06.20201</Table.Cell>
        <Table.Cell>Full Time</Table.Cell>
        <Table.Cell><Button onClick={apply} primary >Apply</Button></Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>Developer</Table.Cell>
        <Table.Cell>İstanbul</Table.Cell>
        <Table.Cell>5000-7000</Table.Cell>
        <Table.Cell>23.06.20201</Table.Cell>
        <Table.Cell>Part Time</Table.Cell>
        <Table.Cell><Button onClick={apply} primary>Apply</Button></Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>Developer</Table.Cell>
        <Table.Cell>Mersin</Table.Cell>
        <Table.Cell>5000-7000</Table.Cell>
        <Table.Cell>23.06.20201</Table.Cell>
        <Table.Cell>Part Time</Table.Cell>
        <Table.Cell><Button onClick={apply} primary>Apply</Button></Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>Developer</Table.Cell>
        <Table.Cell>İzmir</Table.Cell>
        <Table.Cell>5000-7000</Table.Cell>
        <Table.Cell>23.06.20201</Table.Cell>
        <Table.Cell>Full Time</Table.Cell>
        <Table.Cell><Button onClick={apply} primary>Apply</Button></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
        </div>
    )
}
