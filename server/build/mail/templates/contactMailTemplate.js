export const contactMailTemplate = ({ city, code, zipcode, connection, continent, country, currency, daylight, email, ip, region_name, lat, lun, message, name, osinfo, phone, timezone }) => {
    return `<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; box-sizing: border-box;">
    <div class="container" style="background-color: #ffffff; padding: 20px; border-radius: 5px; line-height: 30px;">
        <h2 style="text-transform: uppercase; color: #1a1a1a; font-size: 20px;">Contact US</h2>
        <p style="font-size: 17px; color: #666666; line-height: 30px;">${message}</p>
        <div class="info" style="margin-top: 30px;">
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Name : ${name}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Email : ${email}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Mobile No :${!code ? "" : "+" + code} ${phone}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">OS Info : ${osinfo}</p>
        </div>

        <div class="links">
            <a href="tel:${!code ? "" : "+" + code} ${phone}" class="button"
                style="display: inline-block; padding: 10px 20px; background-color: #0e0e0e; color: #ffffff; text-decoration: none; margin-top: 20px;">Make
                a Call</a>
            <a href="mailto:${email}" class="button" target="_blank"
                style="display: inline-block; padding: 10px 20px; background-color: #0e0e0e; color: #ffffff; text-decoration: none; margin-top: 20px;">Reply</a>
        </div>

    </div>
</div>`;
};
// <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">City : ${city}</p>
// <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Country : ${country}</p>
// <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">ZipCode : ${zipcode}</p>
// <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Region Name : ${zipcode}</p>
// <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Continent : ${continent}</p>
// <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Code : +${code}</p>
// <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Time Zone : ${timezone}</p>
// <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Now Daylight : ${daylight}</p>
// <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Currency : ${currency}</p>
// <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Connection : ${connection}</p>
// <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Ip Address : ${ip}</p>
export const thankYouMail = (name) => {
    return `
    <p>Dear ${name}</p>
    <p>I believe this email finds you well. I wanted to express my sincere gratitude for your response and for taking the time to submit the form.</p>

    <p>Your participation is invaluable to us, and we appreciate the effort you've put into providing the necessary information. Your input plays a crucial role in helping us better understand your needs and expectations.</p>

    <p>Rest assured that your submission will be handled with the utmost care, and we will make every effort to address any inquiries or requests you may have made.</p>

    <p>If you have any further questions or require additional assistance, please do not hesitate to reach out. We are always here to help.</p>

    <p>Once again, thank you for your cooperation and for being a valuable part of our community.</p>

    <div class="signature">
      <p>Best Regards,</p>
      <p>Adarsh Arya</p>
      <p>WhatsApp : +91 7669702767</p>
      <p>Technical Consultant - <a href="https://idealedesigns.com" target="_blank">https://idealedesigns.com</a></p>
    </div>
  </div>
    `;
};
