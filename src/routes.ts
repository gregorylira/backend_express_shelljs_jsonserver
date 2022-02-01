import { Router } from "express";
import { CreateArquivoController } from "./controllers/createArquivoController";

const router = Router();

const createArquivoController = new CreateArquivoController();

router.get("/", (req, res) => {});
router.post("/create", createArquivoController.handle);

export { router };
