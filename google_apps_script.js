/**
 * =========================================================================
 * GOOGLE APPS SCRIPT UNTUK DATABASE KUIZ AKADEMI KECEMERLANGAN MARA
 * =========================================================================
 * 
 * CARA SETUP:
 * 1. Buka Google Sheets baru di https://sheets.new
 * 2. Klik menu 'Extensions' -> 'Apps Script'
 * 3. Padam semua kod sedia ada, salin & tampal keseluruhan kod ini.
 * 4. Klik butang 'Deploy' (biru di atas kanan) -> 'New deployment'
 * 5. Pilih gear (Select type) -> 'Web app'
 * 6. Setkan:
 *    - Description: "MARA Quiz Database API"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (Penting supaya peserta boleh hantar jawapan tanpa login Google)
 * 7. Klik 'Deploy' dan salin "Web App URL" yang diberikan (cth: https://script.google.com/macros/s/.../exec)
 * 8. Masukkan URL tersebut ke dalam panel Admin di laman kuiz (Password Admin: ptm).
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Elak race condition

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Inisialisasi Header jika helaian masih kosong
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Tarikh & Masa",
        "Nama Peserta",
        "No. Gaji",
        "Kumpulan",
        "Skor",
        "Jumlah",
        "Peratus (%)"
      ]);
      // Format header
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#c21807");
      headerRange.setFontColor("#ffffff");
    }

    var requestData = JSON.parse(e.postData.contents);

    // TINDAKAN 1: PADAM DATABASE (KHAS ADMIN)
    if (requestData.action === "delete_all") {
      if (requestData.password === "ptm") {
        sheet.clearContents();
        // Cipta semula Header
        sheet.appendRow([
          "Tarikh & Masa",
          "Nama Peserta",
          "No. Gaji",
          "Kumpulan",
          "Skor",
          "Jumlah",
          "Peratus (%)"
        ]);
        var hr = sheet.getRange(1, 1, 1, 7);
        hr.setFontWeight("bold");
        hr.setBackground("#c21807");
        hr.setFontColor("#ffffff");

        return ContentService.createTextOutput(JSON.stringify({
          status: "success",
          message: "Database telah dikosongkan."
        })).setMimeType(ContentService.MimeType.JSON);
      } else {
        return ContentService.createTextOutput(JSON.stringify({
          status: "error",
          message: "Kata laluan tidak sah."
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }

    // TINDAKAN 2: SIMPAN REKOD JAWAPAN PESERTA
    sheet.appendRow([
      requestData.timestamp || new Date().toLocaleString("ms-MY"),
      requestData.name,
      requestData.salaryId,
      requestData.group,
      requestData.score,
      requestData.total,
      requestData.percentage
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data berjaya direkodkan."
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    
    if (data.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        data: []
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var records = [];
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      if (row[1]) { // Nama wujud
        records.push({
          timestamp: row[0],
          name: row[1],
          salaryId: row[2],
          group: row[3],
          score: Number(row[4]) || 0,
          total: Number(row[5]) || 10,
          percentage: row[6] || ""
        });
      }
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      data: records
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
