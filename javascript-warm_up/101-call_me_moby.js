#!/usr/bin/node
function callMeMoby(x, theFunction) {
    for (let n = 0; n < x; n++) {
        theFunction();
    }
}

module.exports.callMeMoby = callMeMoby;