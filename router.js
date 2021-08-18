import { Router } from "express";
import MembersController from "./MembersController.js";

const router = new Router();

router.post("/members", MembersController.create);

router.get("/members", MembersController.getAll);

router.get("/members/:id", MembersController.getOne);

router.put("/members", MembersController.update);

router.delete("/members/:id", MembersController.delete);

export default router;
