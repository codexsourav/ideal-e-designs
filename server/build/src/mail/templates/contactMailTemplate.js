export const contactMailTemplate = ({ city, code, zipcode, connection, continent, country, currency, daylight, email, ip, region_name, lat, lun, message, name, osinfo, phone, timezone }) => {
    return `<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; box-sizing: border-box;">
    <div class="container" style="background-color: #ffffff; padding: 20px; border-radius: 5px; line-height: 30px;">
        <h2 style="text-transform: uppercase; color: #1a1a1a; font-size: 20px;">Contact US</h2>
        <p style="font-size: 17px; color: #666666; line-height: 30px;">${message}</p>
        <div class="info" style="margin-top: 30px;">
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Name : ${name}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Mobile No :${!code ? "" : "+" + code} ${phone}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">City : ${city}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Country : ${country}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">ZipCode : ${zipcode}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Region Name : ${zipcode}</p>

            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Continent : ${continent}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Code : +${code}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Time Zone : ${timezone}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Now Daylight : ${daylight}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Currency : ${currency}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Connection : ${connection}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">Ip Address : ${ip}</p>
            <p style="color: #666666; margin: 15px 0px; font-size: 16px; line-height: 20px; padding: 0px;">OS Info : ${osinfo}</p>
        </div>

        <div class="links">
            <a href="tel:${!code ? "" : "+" + code} ${phone}" class="button"
                style="display: inline-block; padding: 10px 20px; background-color: #0e0e0e; color: #ffffff; text-decoration: none; margin-top: 20px;">Make
                a Call</a>
            <a href="http://maps.google.com/?q=${lat},${lun}" class="button" target="_blank"
                style="display: inline-block; padding: 10px 20px; background-color: #0e0e0e; color: #ffffff; text-decoration: none; margin-top: 20px;">Track
                On Google Map</a>
        </div>

    </div>
</div>`;
};
