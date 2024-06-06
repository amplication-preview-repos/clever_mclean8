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

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
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
        <TextInput label="name" source="name" />
        <TextInput label="parentCategory" source="parentCategory" />
      </SimpleForm>
    </Create>
  );
};
