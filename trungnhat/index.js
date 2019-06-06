const core = require("../core");
function execute(arg) {
    core(arg);
    console.log(this)
}

function thinhmt() {}
