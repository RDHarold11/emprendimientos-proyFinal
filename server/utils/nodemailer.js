import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendEmail = (email) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: "haroldaquino460@gmail.com",
    to: email,
    subject: "Bienvenido a Catalyst",
    html: `<!DOCTYPE html><html lang="en">
        <head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style>@font-face{font-family:Inter;font-style:normal;font-weight:400;mso-font-alt:Verdana;src:url(https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.19) format('woff2')}*{font-family:Inter,Verdana}</style><style>blockquote,h1,h2,h3,img,li,ol,p,ul{margin-top:0;margin-bottom:0}</style></head><body><table align="center" width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;margin-left:auto;margin-right:auto;padding:.5rem">
        <tbody><tr style="width:100%"><td><img alt="Vector gratuito pareja propietaria de la tienda de pie junto al letrero abierto y el edificio" src="https://img.freepik.com/vector-gratis/pareja-propietaria-tienda-pie-junto-al-letrero-abierto-edificio_778687-1233.jpg?t=st=1698967424~exp=1698968024~hmac=899737d44a96027ecbf3f9696525634093af3d83616276f32823a9d4c1f888f0" style="display: block;outline: none;border: none;text-decoration: none;margin-bottom: 32px;margin-top: 0px;height: auto;width: auto;max-width: 100%;"><h2 style="font-size: 30px;font-weight: 700;line-height: 40px;margin-bottom: 12px;color: rgb(17, 24, 39);text-align: center;"><strong>¡Bienvenido a Catalyst!</strong></h2><p style="font-size: 15px;line-height: 24px;margin: 16px 0;margin-top: 0px;margin-bottom: 20px;color: rgb(55, 65, 81);-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: left;">Estamos emocionados de tenerte como parte de nuestra comunidad. Gracias por registrarte en nuestra plataforma. Aquí en Catalyst, te ofrecemos una experencia excepcional llena de oportunidades para crecer, aprender y conectar. </p><p style="font-size: 15px;line-height: 24px;margin: 16px 0;margin-top: 0px;margin-bottom: 20px;color: rgb(55, 65, 81);-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: left;">Nuestra misión es proporcionarte las herramientas y recursos necesarios para alcanzar tus metas y lograr un impacto significativo. Presiona el botón debajo para comenzar tu aventura:</p><table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:0px;margin-bottom:20px;text-align:left;"><tbody><tr><td><a href="" style="border: 2px solid;line-height: 1.25rem;text-decoration: none;display: inline-block;max-width: 100%;font-size: 0.875rem;font-weight: 500;text-decoration-line: none;color: #ffffff;background-color: #141313;border-color: #141313;padding: 12px 34px;border-radius: 9999px;">
        <span></span>
        <span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px">
        Comienza a Emprender →</span>
        <span></span>
        </a></td></tr></tbody></table><p style="font-size: 15px;line-height: 24px;margin: 16px 0;margin-top: 0px;margin-bottom: 20px;color: rgb(55, 65, 81);-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: left;">No dudes en explorar todas las funciones y contenido que Catalyst tiene para ofrecer. Si tienes alguna preguna o necesitas asistencia, nuestro equipo de soporte está listo para ayudarte.</p><p style="font-size: 15px;line-height: 24px;margin: 16px 0;margin-top: 0px;margin-bottom: 20px;color: rgb(55, 65, 81);-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: left;">Atentamente,<br>Catalyst.</p></td></tr></tbody></table></body></html>`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Gmail enviado");
    }
  });
};

export { sendEmail };
