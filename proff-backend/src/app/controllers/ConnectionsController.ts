import { Request, Response } from "express";
import db from "../../database/conn";

class ConnectionsController {
  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    await db("connections").insert({ user_id });

    return res.status(201).send();
  }

  async index(req: Request, res: Response) {
    const connections = await db("connections").count("* as total");

    const { total } = connections[0];

    return res.status(200).json(total);
  }
}

export default new ConnectionsController();
