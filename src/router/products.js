import { Router } from "express";
import { create, getAll, getDetail, remove, update } from "../controller/products.js";
import { checkPermission } from "../middlewares/checkPermission.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", getDetail);
router.post("/", create);
router.put(`/:id`, update);
router.delete("/:id", remove);

router.post("/", checkPermission, create);
router.put(`/:id`, checkPermission, update);
router.delete("/:id", checkPermission, remove);

export default router;