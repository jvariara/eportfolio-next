"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
exports.Media = {
    slug: "media",
    access: {
        read: function () { return true; },
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
        hidden: function (_a) {
            var user = _a.user;
            return user.role !== "admin" || user.email === "jvariara@gmail.com";
        },
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
                condition: function () { return false; },
            },
        },
    ],
};
