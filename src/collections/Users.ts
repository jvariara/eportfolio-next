import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    read: ({ req }) =>
      req.user.role === "admin" || req.user.email === "jvariara@gmail.com",
    create: () => false,
  },
  admin: {
    hidden: ({ user }) => user.role !== "admin", // hidden for everyone not an admin
    defaultColumns: ["id"],
  },
  fields: [
    {
      name: "role",
      defaultValue: "user",
      type: "select",
      admin: {
        condition: ({ req }) => req.user.role === "admin",
      },
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
