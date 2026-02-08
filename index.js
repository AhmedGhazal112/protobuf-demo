const protobuf = require('protobufjs');
const sizeOf = require("object-sizeof");

async function run() {
    const player = await protobuf.load('./resources/player.proto')
    const playerMessage = player.lookupType('PlayerMessage');
    const object = {
        id: 21,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com'
    }
    console.log('Original object size:', sizeOf(object));
    const payload = playerMessage.create(object);
    console.log('Protobuf message size:', sizeOf(payload));
    const buffer = playerMessage.encode(payload).finish();
    console.log('Encoded buffer size:', sizeOf(buffer));
}
run().catch(console.error);