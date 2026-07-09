import {Router} from "express"

import { registerUser , login} from "../controllers/auth.controllers.js";

import { validate } from "../middlewares/validator.middleware.js";

import { userRegisterValidator , userLoginValidator} from "../validators/index.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";



const router=Router();

router.route("/register").post(userRegisterValidator(), validate , registerUser);

router.route("/login").post(userLoginValidator(),validate,login);


export default router;