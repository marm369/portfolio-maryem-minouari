import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "public", "visits.json");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      // Lire le fichier JSON
      const data = await fs.readFile(filePath, "utf8");
      const json = JSON.parse(data);
      return res.status(200).json({ count: json.count });
    }

    if (req.method === "POST") {
      // Lire, modifier et écrire dans le fichier JSON
      const data = await fs.readFile(filePath, "utf8");
      const json = JSON.parse(data);
      json.count += 1;

      await fs.writeFile(filePath, JSON.stringify(json, null, 2));

      return res.status(200).json({ count: json.count });
    }

    return res.status(405).json({ error: "Méthode non autorisée" });

  } catch (error) {
    console.error("Erreur API:", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
}
