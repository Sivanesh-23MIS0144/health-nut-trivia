function doPost(e) {
  try {
    // Check if postData exists
    if (!e || !e.postData || !e.postData.contents) {
      console.error('No POST data received');
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'No POST data received'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Get the spreadsheet (replace with your actual spreadsheet ID)
    var spreadsheetId = '1xSJrBOIIcnZ1GWzXUX59e4MEUTVAvkw3wXngBXp_jzk';
    
    // Check if spreadsheet exists and is accessible
    var spreadsheet;
    try {
      spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    } catch (spreadsheetError) {
      console.error('Cannot access spreadsheet:', spreadsheetError.toString());
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Cannot access spreadsheet: ' + spreadsheetError.toString()
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    var sheet = spreadsheet.getActiveSheet();
    
    // Parse the incoming data
    var data;
    try {
      data = JSON.parse(e.postData.contents);
      console.log('Received data:', JSON.stringify(data));
    } catch (parseError) {
      console.error('JSON parsing error:', parseError.toString());
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Invalid JSON data: ' + parseError.toString()
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Validate required fields
    if (!data.name || !data.email) {
      console.error('Missing required fields');
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Missing required fields (name, email)'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add timestamp if not provided
    if (!data.timestamp) {
      data.timestamp = new Date().toISOString();
    }
    
    // Prepare the row data with safe defaults
    var rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.registration || '',
      data.belongs || '',
      data.quizScore || 0,
      data.riddleScore || 0,
      data.totalScore || 0,
      data.quizAnswers || '',
      data.riddleAnswers || ''
    ];
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      var headers = [
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Registration',
        'Belongs To',
        'Quiz Score',
        'Riddle Score',
        'Total Score',
        'Quiz Answers',
        'Riddle Answers'
      ];
      sheet.appendRow(headers);
      console.log('Headers added to sheet');
    }
    
    // Append the data
    try {
      sheet.appendRow(rowData);
      console.log('Data added to sheet successfully:', rowData);
    } catch (appendError) {
      console.error('Error appending data to sheet:', appendError.toString());
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Failed to append data to sheet: ' + appendError.toString()
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Send email to user with error handling
    var emailResult = sendScoreEmail(data);
    console.log('Email sending result:', emailResult);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data submitted successfully',
      emailSent: emailResult.success,
      emailMessage: emailResult.message,
      rowsInSheet: sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error('Error in doPost:', error.toString());
    console.error('Error stack:', error.stack);
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString(),
      stack: error.stack
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendScoreEmail(data) {
  try {
    // Validate email address
    if (!data.email || !isValidEmail(data.email)) {
      console.error('Invalid email address:', data.email);
      return { success: false, message: 'Invalid email address' };
    }
    
    // Check Gmail quota
    var dailyQuotaRemaining = MailApp.getRemainingDailyQuota();
    console.log('Remaining email quota:', dailyQuotaRemaining);
    
    if (dailyQuotaRemaining <= 0) {
      console.error('Daily email quota exceeded');
      return { success: false, message: 'Daily email quota exceeded' };
    }
    
    const subject = '🎉 Your World Food Safety Day Quiz Results';
    
    // Simple text version as fallback
    const textBody = `
Hello ${data.name}!

Thank you for participating in our World Food Safety Day educational challenge!

Your Results:
- Quiz Score: ${data.quizScore || 0}/15
- Riddle Score: ${data.riddleScore || 0}/10
- Total Score: ${data.totalScore || 0}/25

${getPerformanceMessage(data.totalScore || 0)}

Your awareness about food safety contributes to a healthier world!
Keep learning and stay safe!

World Food Safety Day Educational Challenge
© Health Club Quiz Platform
    `;
    
    const htmlBody = `
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 15px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🏥 World Food Safety Day Quiz</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Educational Challenge Results</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 15px; margin-top: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Hello ${data.name}! 🎉</h2>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 25px;">
              Thank you for participating in our World Food Safety Day educational challenge! 
              Here are your quiz results:
            </p>
            
            <div style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); padding: 25px; border-radius: 15px; margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 15px; text-align: center;">📊 Your Score Summary</h3>
              
              <table style="width: 100%; text-align: center;">
                <tr>
                  <td style="background: white; padding: 15px; border-radius: 10px; margin: 5px; width: 33%;">
                    <div style="font-size: 24px; font-weight: bold; color: #667eea;">${data.quizScore || 0}</div>
                    <div style="font-size: 14px; color: #666;">Quiz Score</div>
                    <div style="font-size: 12px; color: #888;">out of 15</div>
                  </td>
                  <td style="background: white; padding: 15px; border-radius: 10px; margin: 5px; width: 33%;">
                    <div style="font-size: 24px; font-weight: bold; color: #764ba2;">${data.riddleScore || 0}</div>
                    <div style="font-size: 14px; color: #666;">Riddle Score</div>
                    <div style="font-size: 12px; color: #888;">out of 10</div>
                  </td>
                  <td style="background: white; padding: 15px; border-radius: 10px; margin: 5px; width: 33%; border: 2px solid #667eea;">
                    <div style="font-size: 28px; font-weight: bold; color: #333;">${data.totalScore || 0}</div>
                    <div style="font-size: 16px; color: #667eea; font-weight: bold;">Total Score</div>
                    <div style="font-size: 12px; color: #888;">out of 25</div>
                  </td>
                </tr>
              </table>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h4 style="color: #333; margin-bottom: 10px;">🎯 Performance Summary:</h4>
              <p style="margin: 5px 0; color: #555;">
                ${getPerformanceMessage(data.totalScore || 0)}
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666; font-size: 14px; line-height: 1.6;">
                Your awareness about food safety contributes to a healthier world! <br>
                Keep learning and stay safe! 🌟
              </p>
            </div>
            
            <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; text-align: center; color: #888; font-size: 12px;">
              <p>World Food Safety Day Educational Challenge</p>
              <p>© Health Club Quiz Platform</p>
            </div>
          </div>
        </body>
      </html>
    `;
    
    // Try sending the email with multiple fallback options
    try {
      // Method 1: Full HTML email
      MailApp.sendEmail({
        to: data.email,
        subject: subject,
        body: textBody,
        htmlBody: htmlBody,
        name: 'Health Club Quiz Platform'
      });
      console.log('HTML email sent successfully to: ' + data.email);
      return { success: true, message: 'HTML email sent successfully' };
      
    } catch (htmlError) {
      console.log('HTML email failed, trying text email:', htmlError.toString());
      
      // Method 2: Simple text email as fallback
      try {
        MailApp.sendEmail(data.email, subject, textBody);
        console.log('Text email sent successfully to: ' + data.email);
        return { success: true, message: 'Text email sent successfully' };
        
      } catch (textError) {
        console.error('Both HTML and text email failed:', textError.toString());
        return { success: false, message: 'Email sending failed: ' + textError.toString() };
      }
    }
    
  } catch (error) {
    console.error('Error in sendScoreEmail:', error.toString());
    return { success: false, message: 'Email function error: ' + error.toString() };
  }
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getPerformanceMessage(totalScore) {
  if (totalScore >= 23) {
    return "🌟 Outstanding! You have excellent knowledge of food safety practices.";
  } else if (totalScore >= 20) {
    return "🎉 Great job! You have a solid understanding of food safety principles.";
  } else if (totalScore >= 15) {
    return "👍 Good work! Keep learning more about food safety to improve further.";
  } else if (totalScore >= 10) {
    return "📚 You're on the right track! Consider reviewing food safety guidelines.";
  } else {
    return "💪 Thank you for participating! We encourage you to learn more about food safety.";
  }
}

function doGet(e) {
  // Handle GET requests (optional)
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'Google Apps Script is working'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Test function to manually check if the script can write to the sheet
function testSheetAccess() {
  try {
    var spreadsheetId = '1EW5QIxpZXNfaL3n0XCwV706e_oO-FadYlvYdUrHxN8M';
    var sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Test data
    var testData = ['Test', 'test@email.com', '123', 'reg123', 'test org', 10, 5, 15, 'answers', 'riddle answers'];
    sheet.appendRow(testData);
    
    console.log('Test data added successfully');
    console.log('Current rows in sheet:', sheet.getLastRow());
    
    return 'Success: Test data added to sheet';
  } catch (error) {
    console.error('Test failed:', error.toString());
    return 'Error: ' + error.toString();
  }
}