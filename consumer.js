const { kafka } = require( "./client");
const group = process.argv[2];

async function init() {
    const consumer = kafka.consumer({ groupId: group});

    console.log("Connecting to consumer...");
    await consumer.connect();
    console.log("Connected to consumer...");

    await consumer.subscribe({topics : ["rider-updates-2"], fromBeginning: true});

    await consumer.run({
        eachMessage : async ({topic, partition, message, heartbeat, pause}) => {
            console.log(`${group} : [${topic}] : PART:${partition}`, `${message.value.toString()}`);
        },
    });

    //await consumer.disconnect();
}

init();