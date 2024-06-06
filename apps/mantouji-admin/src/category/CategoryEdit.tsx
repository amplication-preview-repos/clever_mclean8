import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AnnouncementTitle } from "../announcement/AnnouncementTitle";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
