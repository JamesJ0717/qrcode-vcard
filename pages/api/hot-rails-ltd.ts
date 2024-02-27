import { NextApiRequest, NextApiResponse } from "next";
// var vcardsjs = require("jamesj_vcards-js");
import vcardsjs from "jamesj_vcards-js";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  /* GET home page. */
  let vCard = vcardsjs();
  vCard.firstName = "J";
  vCard.lastName = "J";
  vCard.homePhone = "781-818-5747";
  vCard.company = "Hot Rails Ltd.";
  vCard.nickname = "Purveyor of Verboten Esoteric Stones";

  res.setHeader("Content-Type", 'text/vcard; name="jj.vcf"');
  res.setHeader("Content-Disposition", 'inline; filename="jj.vcf"');
  res.send(vCard.getFormattedString());
}