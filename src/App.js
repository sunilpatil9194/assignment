import React, { useState, useEffect, useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import TreeComponent from "./TreeComponent";
import CategoryList from "./CategoryList";
import { jsondata } from "./datasource";

const App = () => {
  const [data, setdata] = useState([]);
  const [selectedId, setSelectedId] = useState("1");

  const filterData = () => {
    const filter = jsondata.filter(
      (x) => (x.id === selectedId && x.parentId === null) || x.parentId
    );
    setdata(filter);
  };
  useEffect(() => {
    filterData();
  }, [selectedId]);

  return (
    <Grid container>
      <Grid item xs={2}>
        <CategoryList data={jsondata} onSelectId={(id) => setSelectedId(id)} />
      </Grid>
      <Grid item xs={10}>
        <TreeComponent FilterData={data} selectedId={selectedId} />
      </Grid>
    </Grid>
  );
};

export default App;
