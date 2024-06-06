import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const AnnouncementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <TextField label="price" source="price" />
        <TextField label="status" source="status" />
        <ReferenceField label="store" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
