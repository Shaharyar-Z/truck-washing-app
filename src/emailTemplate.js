export const generateEmailTemplate = (formData) => {
    return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service Request Confirmation</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f4f4f4; padding: 20px;">
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <!-- Header -->
            <tr>
              <td style="background-color: #e0a423; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Service Request Confirmation</h1>
              </td>
            </tr>
  
            <!-- Content -->
            <tr>
              <td style="padding: 30px;">
                <p style="margin-top: 0; color: #333333;">Dear {{fullName}},</p>
                <p style="color: #333333;">Thank you for submitting your service request. We have received your inquiry and will process it promptly. Below are the details of your request:</p>
  
                <!-- Contact Information -->
                <h2 style="color: #e0a423; font-size: 18px; margin-top: 25px;">Contact Information</h2>
                <table cellpadding="5" cellspacing="0" border="0" width="100%" style="color: #333333;">
                  <tr>
                    <td width="150" style="color: #666666;">Full Name:</td>
                    <td>{{fullName}}</td>
                  </tr>
                  
                  <tr>
                    <td style="color: #666666;">Company Name:</td>
                    <td>{{companyName}}</td>
                  </tr>
                  <tr>
                    <td style="color: #666666;">Phone Number:</td>
                    <td>{{phoneNumber}}</td>
                  </tr>
                  <tr>
                    <td style="color: #666666;">Email Address:</td>
                    <td>{{emailAddress}}</td>
                  </tr>
                </table>
  
                <!-- Service Details -->
                <h2 style="color: #e0a423; font-size: 18px; margin-top: 25px;">Service Details</h2>
                <table cellpadding="5" cellspacing="0" border="0" width="100%" style="color: #333333;">
                  <tr>
                    <td width="150" style="color: #666666;">Service Type:</td>
                    <td>{{serviceType}}</td>
                  </tr>
                  <tr>
                    <td style="color: #666666;">Job Location:</td>
                    <td>{{jobLocation}}</td>
                  </tr>
                </table>
  
                <!-- Schedule Details -->
                <h2 style="color: #e0a423; font-size: 18px; margin-top: 25px;">Schedule Details</h2>
                <table cellpadding="5" cellspacing="0" border="0" width="100%" style="color: #333333;">
                  <tr>
                    <td width="150" style="color: #666666;">Completion Date:</td>
                    <td>{{jobCompletedOn}}</td>
                  </tr>
                  <tr>
                    <td style="color: #666666;">Completed By:</td>
                    <td>{{jobCompletedBy}}</td>
                  </tr>
                  <tr>
                    <td style="color: #666666;">Time Window:</td>
                    <td>{{jobCompletedBetweenStart}} - {{jobCompletedBetweenEnd}}</td>
                  </tr>
                  <tr>
                    <td style="color: #666666;">Service Frequency:</td>
                    <td>{{serviceFrequency}}</td>
                  </tr>
                </table>
  

                <h2 style="color: #e0a423; font-size: 18px; margin-top: 25px;">Additional Notes</h2>
                <p style="color: #333333; background-color: #f9f9f9; padding: 15px; border-radius: 4px;">{{additionalNotes}}</p>
  
                <!-- Footer Note -->
                <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 4px;">
                  <p style="color: #666666; margin: 0; font-size: 14px;">Note: This is a confirmation of your service request. Our team will review your requirements and contact you shortly with a detailed quote.</p>
                </div>
              </td>
            </tr>
  
            <!-- Footer -->
            <tr>
              <td style="background-color: #e0a423; padding: 20px; text-align: center;">
                <p style="color: #ffffff; margin: 0; font-size: 14px;">Thank you for choosing our services!</p>
              </td>
            </tr>
          </table>
  
          <!-- Company Info -->
          <table cellpadding="0" cellspacing="0" border="0" width="600" style="margin: 20px auto 0;">
            <tr>
              <td style="text-align: center; color: #666666; font-size: 12px;">
                <p style="margin: 5px 0;">© 2024 Your Company Name</p>
                <p style="margin: 5px 0;">123 Business Street, Sydney, NSW 2000</p>
                <p style="margin: 5px 0;">Tel: 1300 123 456 | Email: info@yourcompany.com.au</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
    `;
  };