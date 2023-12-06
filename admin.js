const { kafka } = require( "./client");


async function init() {
    const admin = kafka.admin();
    console.log("Connecting to admin...");
    admin.connect();
    console.log("Connected to admin successfully!");

    console.log("Creating topics...");
    await admin.createTopics({
        topics : [
            {
                topic : "rider-updates-2",
                numPartitations : 2
            },
        ],
    });
    console.log("Topic created successfully : [rider-updates-2]");

    console.log("disconnecting admin...");
    await admin.disconnect();
}

init();