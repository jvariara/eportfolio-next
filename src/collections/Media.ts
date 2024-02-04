import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
    create: ({ req }) =>
      req.user.role === "admin" || req.user.email === "jvariara@gmail.com",
    update: ({ req }) =>
      req.user.role === "admin" || req.user.email === "jvariara@gmail.com",
    delete: ({ req }) =>
      req.user.role === "admin" || req.user.email === "jvariara@gmail.com",
  },
  admin: {
    hidden: ({ user }) =>
      user.role !== "admin" || user.email === "jvariara@gmail.com",
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "project",
      type: "relationship",
      relationTo: "projects",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
  ],
};
