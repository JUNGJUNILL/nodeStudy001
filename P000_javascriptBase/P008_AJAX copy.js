var hash = bcrypt.hashSync("bacon");

bcrypt.compareSync("bacon", hash); // true