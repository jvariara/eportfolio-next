import { TECH_STACK } from "../config";
import { CollectionConfig } from "payload/types";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    create: ({ req }) =>
      req.user.role === "admin" || req.user.email === "jvariara@gmail.com",
    update: ({ req }) =>
      req.user.role === "admin" || req.user.email === "jvariara@gmail.com",
    delete: ({ req }) =>
      req.user.role === "admin" || req.user.email === "jvariara@gmail.com",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name", // name of the project
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Project Description",
      type: "textarea",
      required: true,
    },
    {
      name: "live_url",
      label: "Project URL",
      type: "text",
      required: false,
    },
    {
      name: "github_url",
      label: "Project Github URL",
      type: "text",
      required: false,
    },
    {
      name: "images", // images for project to dispaly
      type: "array",
      label: "Project Images",
      minRows: 1,
      required: true,
      labels: {
        singular: "Image",
        plural: "Images",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "tech",
      label: "Project Tech Stack",
      type: "select",
      hasMany: true,
      options: Object.entries(TECH_STACK).map(([value, label]) => ({
        value,
        label,
      })),
    },
  ],
};
