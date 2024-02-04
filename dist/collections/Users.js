"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: "users",
    auth: true,
    access: {
        read: function (_a) {
            var req = _a.req;
            return req.user.role === "admin" || req.user.email === "jvariara@gmail.com";
        },
        create: function () { return false; },
    },
    admin: {
        hidden: function (_a) {
            var user = _a.user;
            return user.role !== "admin";
        }, // hidden for everyone not an admin
        defaultColumns: ["id"],
    },
    fields: [
        {
            name: "role",
            defaultValue: "user",
            type: "select",
            admin: {
                condition: function (_a) {
                    var req = _a.req;
                    return req.user.role === "admin";
                },
            },
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
            ],
        },
    ],
};
