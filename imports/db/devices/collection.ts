import schema from "./schema";

const Devices = new Mongo.Collection("devices");

Devices.attachSchema(schema);

export default Devices;
