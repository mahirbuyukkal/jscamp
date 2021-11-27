import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User compononet yüklendi")

//let logger1 = new ElasticLogger()
let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Mahir","Büyükkal","Batman");
let user2 = new User(2,"Sahir","Büyükkal","İstanbul");

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))


