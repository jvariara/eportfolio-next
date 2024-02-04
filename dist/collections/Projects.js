"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
var config_1 = require("../config");
exports.Projects = {
    slug: "projects",
    access: {
        create: function (_a) {
            var req = _a.req;
            return req.user.role === "admin" || req.user.email === "jvariara@gmail.com";
        },
        update: function (_a) {
            var req = _a.req;
            return req.user.role === "admin" || req.user.email === "jvariara@gmail.com";
        },
        delete: function (_a) {
            var req = _a.req;
            return req.user.role === "admin" || req.user.email === "jvariara@gmail.com";
        },
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
            options: Object.entries(config_1.TECH_STACK).map(function (_a) {
                var value = _a[0], label = _a[1];
                return ({
                    value: value,
                    label: label,
                });
            }),
        },
    ],
};
