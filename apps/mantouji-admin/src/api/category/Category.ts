import { Announcement } from "../announcement/Announcement";

export type Category = {
  announcements?: Array<Announcement>;
  createdAt: Date;
  id: string;
  name: string | null;
  parentCategory: string | null;
  updatedAt: Date;
};
