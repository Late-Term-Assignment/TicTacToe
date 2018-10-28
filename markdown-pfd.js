var markdownpdf = require("markdown-pdf")
  , fs = require("fs")
 

markdownpdf().from("./docs/AdministrationManual.md").to("./docs/pdf/AdministrationManual.pdf", function () {
  console.log("Done")
});

markdownpdf().from("./docs/DesignReport.md").to("./docs/pdf/DesignReport.pdf", function () {
  console.log("Done")
});

markdownpdf().from("./docs/DevelopmentManual.md").to("./docs/pdf/DevelopmentManual.pdf", function () {
  console.log("Done")
});

markdownpdf().from("./README.md").to("./docs/pdf/README.pdf", function () {
  console.log("Done")
});