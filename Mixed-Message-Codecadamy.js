function randomnumber(num){
    return Math.floor(Math.random() * num);
}

const sayings = {
    bruh: ["help", "go away", "hehe", "AHHHHHHH!"],
    yeahboi: ["yeah", "boi", "guccigang", "my lambo", "oerfvhbuiwqwrvhbioqwervbhvwerhbiqerfvbhuivqaedfrbhefvhbuiowedfvhbfhb jifhbiuv bhowedfhb uqwdfbh hwdfhb hbuiodwdfhbuov hb"],
    kids: ["im only 5", "help mom", "james charles", "moe lester"],
}

for(let label in sayings){
    let i = (randomnumber(sayings[label].length));

    switch(label){
        case "bruh":
            console.log(`No james chqarlesw go away! ${sayings[label][i]}`);
            break
        case "yeahboi":
            console.log(`yeah ${sayings[label][i]} Im so cool`);
            break
        case "kids":
            console.log(`no please stop ${sayings[label][i]}`);
            break
        default:
            console.log("you retard");
            break

    }
}

