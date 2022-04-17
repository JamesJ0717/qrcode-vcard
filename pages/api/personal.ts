import { NextApiRequest, NextApiResponse } from "next";
// var vcardsjs = require("jamesj_vcards-js");
import vcardsjs from "jamesj_vcards-js";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  /* GET home page. */
  let vCard = vcardsjs();
  vCard.firstName = "James";
  vCard.lastName = "Johnson";
  vCard.birthday = new Date(1998, 6, 17);
  vCard.homePhone = "631-495-0416";
  vCard.email = "james@jamesjohnson.io";
  vCard.url = "https://www.jamesjohnson.io";
  vCard.source = "https://qr.jamesjohnson.io/api/personal";

  res.setHeader("Content-Type", 'text/vcard; name="jjohnson.vcf"');
  res.setHeader("Content-Disposition", 'inline; filename="jjohnson.vcf"');
  res.send(vCard.getFormattedString());
}
