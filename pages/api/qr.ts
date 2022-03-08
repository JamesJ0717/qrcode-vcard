import { NextApiRequest, NextApiResponse } from "next";
// var vcardsjs = require("jamesj_vcards-js");
import vcardsjs from "jamesj_vcards-js";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  /* GET home page. */
  let vCard = vcardsjs();
  vCard.firstName = "James";
  vCard.lastName = "Johnson";
  vCard.title = "Software, Network, and Security Engineer";
  vCard.birthday = new Date(1998, 6, 17);
  vCard.homePhone = "631-495-0416";
  vCard.workPhone = "631-316-3290";
  vCard.email = "james@jamesjohnson.io";
  vCard.workEmail = "james@jjjtechconsulting.com";
  vCard.socialUrls["linkedIn"] = "jamesjjjohnson"; // http://www.linkedin.com/in/jamesjjjohnson
  vCard.url = "https://www.jamesjohnson.io";
  vCard.workUrl = "https://jjjtechconsulting.com";
  vCard.note = "Schedule a meeting: https://www.calendly.com/jjjtech"
  vCard.source = "https://qr.jamesjohnson.io/api/qr";

  res.setHeader("Content-Type", 'text/vcard; name="jjohnson.vcf"');
  res.setHeader("Content-Disposition", 'inline; filename="jjohnson.vcf"');
  res.send(vCard.getFormattedString());
}
