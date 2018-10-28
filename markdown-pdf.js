var markdownpdf = require("markdown-pdf")
  , fs = require("fs")
 

markdownpdf().from("./docs/AdministrationManual.md").to("./docs/pdf/AdministrationManual.pdf", function () {
});

markdownpdf().from("./docs/DesignReport.md").to("./docs/pdf/DesignReport.pdf", function () {
});

markdownpdf().from("./docs/DevelopmentManual.md").to("./docs/pdf/DevelopmentManual.pdf", function () {
});

markdownpdf().from("./README.md").to("./docs/pdf/README.pdf", function () {
});