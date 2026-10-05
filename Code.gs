// function portfolioData() {
//   var spreadsheet = SpreadsheetApp.getActive();
//   Logger.log(spreadsheet)
  
// };

function doPost(e) {
  // var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // Logger.log(spreadsheet)
//  var sheetid = SpreadsheetApp.getActiveSpreadsheet().getId();
//  Logger.log(sheetid);
  try {
    const body = e && e.postData && e.postData.contents;
    if (!body) {
      throw new Error("Request body is missing.");
    }

    const data = JSON.parse(body);
  Logger.log("Contact form payload: " + JSON.stringify(data));
    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const message = String(data.message || "").trim();

    if (!name || !email || !message) {
      throw new Error("Name, email, and message are required.");
    }

    Logger.log(name);
    Logger.log(email);

    const sheet = SpreadsheetApp
      .openById("1k5zbCbP7HgpXm7-czHH1F8AYhmdAOqKYf_e2Lyh_mrg")
      .getSheetByName("Sheet1");

    if (!sheet) {
      throw new Error('Sheet tab "Sheet1" was not found.');
    }

    sheet.appendRow([new Date(), name, email, message]);

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({
      success: false,
      error: String(error)
    });
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}