"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const mongoose_1 = __importDefault(require("mongoose"));
function connectDatabase() {
    return new Promise((resolve, reject) => {
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connection
            .on('error', error => reject(error))
            .on('close', () => console.log('Database connection closed.'))
            // @ts-ignore
            .once('open', () => resolve(mongoose_1.default.connections[0]));
        mongoose_1.default.connect(process.env.MONGO_URL || 'mongodb://localhost/bastiani-blog-mdx', { useNewUrlParser: true });
    });
}
exports.default = connectDatabase;
