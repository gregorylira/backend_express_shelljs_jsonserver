import { Request, Response } from "express";

const shell = require("shelljs");

export class CreateArquivoController {
  async handle(req: Request, res: Response) {
    const { nome, conteudo } = req.body;
    const arquivo = `${nome}`;
    shell.touch(arquivo);
    shell.echo(conteudo).to(arquivo);
    return res.json({ message: "Arquivo criado com sucesso" });
  }
}
