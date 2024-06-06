import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Stores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="owner" source="owner" />
        <TextField label="storeName" source="storeName" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
