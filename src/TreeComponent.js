import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  SelectionState,
  IntegratedSelection,
  TreeDataState,
  CustomTreeData,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn,
} from "@devexpress/dx-react-grid-material-ui";

import { jsondata } from "./datasource.js";

export default ({ FilterData, selectedId }) => {
  const [columns] = useState([
    { name: "Name", title: "Name" },
    { name: "category", title: "Category" },
    { name: "units", title: "Units" },
    { name: "unitPrice", title: "Unit Price" },
    { name: "price", title: "Price" },
  ]);
  const [data] = useState(jsondata);
  const [tableColumnExtensions] = useState([
    { columnName: "Name", width: 300 },
  ]);
  const [defaultExpandedRowIds] = useState([0]);

  const getChildRows = (row, rootRows) => {
    const childRows = rootRows.filter((r) => {
      return r.parentId === (row ? row.id : null);
    });
    return childRows.length ? childRows : null;
  };
  return (
    <Paper>
      <Grid rows={FilterData} columns={columns}>
        <TreeDataState defaultExpandedRowIds={defaultExpandedRowIds} />
        <SelectionState />
        <CustomTreeData getChildRows={getChildRows} />
        <Table columnExtensions={tableColumnExtensions} />
        <IntegratedSelection />
        <TableHeaderRow />
        <TableTreeColumn for="Name" showSelectionControls />
      </Grid>
    </Paper>
  );
};
