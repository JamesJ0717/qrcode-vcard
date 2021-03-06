import { NextApiRequest, NextApiResponse } from "next";
// var vcardsjs = require("jamesj_vcards-js");
import vcardsjs from "jamesj_vcards-js";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  /* GET home page. */
  let vCard = vcardsjs();
  vCard.firstName = "James";
  vCard.lastName = "Johnson";
  vCard.title = "Software, Network, and Security Engineer";
  vCard.workPhone = "631-316-3290";
  vCard.workEmail = "james@jjjtechconsulting.com";
  vCard.socialUrls["linkedIn"] = "jamesjjjohnson"; // http://www.linkedin.com/in/jamesjjjohnson
  vCard.workUrl = "https://www.jjjtechconsulting.com";
  vCard.calUrl = "https://www.calendly.com/jjjtech";
  vCard.source = "https://qr.jamesjohnson.io/api/qr";

  res.setHeader("Content-Type", 'text/vcard; name="jjohnson.vcf"');
  res.setHeader("Content-Disposition", 'inline; filename="jjohnson.vcf"');
  res.send(vCard.getFormattedString());
}
