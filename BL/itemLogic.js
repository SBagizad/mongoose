const itemController = require("../DL/controller/itemController")


const item1 = {
    name: "bread",
    price: "50",
    id: "30003",
    description: "5678",
    category: ["bread"],
    inStock: "100"
}

create(item1)
update({ name: "Milki" }, { Name: "egg", category: ["egg"] })
