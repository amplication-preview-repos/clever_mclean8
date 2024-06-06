import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AnnouncementTitle } from "../announcement/AnnouncementTitle";
import { OrderTitle } from "../order/OrderTitle";

export const StoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="announcements"
          reference="Announcement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnnouncementTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="owner" source="owner" />
        <TextInput label="storeName" source="storeName" />
      </SimpleForm>
    </Create>
  );
};
