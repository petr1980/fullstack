import { Router } from "express";
import MembersController from "./controller/MembersController.js";
import TreeController from "./controller/TreeController.js";

import TranslateController from "./controller/TranslateController.js";
import LingvoliveTranslateController from "./controller/LingvoliveTranslateController.js";

const router = new Router();

router.post("/members", MembersController.create);

router.get("/members", MembersController.getAll);

router.get("/members/:id", MembersController.getOne);

router.put("/members", MembersController.update);

router.delete("/members/:id", MembersController.delete);

router.get("/tree", TreeController.getAll);

router.get("/translate", TranslateController.getTranslate);

router.get("/lingvolive/api/key", LingvoliveTranslateController.registrtion);
router.post(
  "/lingvolive/api/translate",
  LingvoliveTranslateController.translate
);

export default router;
