let priorities = {
    "all":0,
    "low":1,
    "medium":5,
    "high":20,
    "always":99,
    
}
let minPriority = 0;
function log(s, {priority = 0} = {}){
    if(priority >= minPriority){
        console.log(s);
    }
}

module.exports = {
    log: log,
}