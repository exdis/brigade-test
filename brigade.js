const { events, Job } = require("brigadier")

events.on("exec", e => {
    console.log(e);
    var job = new Job("do-nothing", "alpine:3.4")
    job.tasks = [
        "echo Hello",
        "echo World"
    ]

    job.run();
});

events.on("simpleevent", e => {
    console.log(e);
    var job = new Job("do-nothing", "alpine:3.4")
    job.tasks = [
        "echo Hello, I'am updated job",
        "echo World from webhook"
    ]

    job.run();
});
