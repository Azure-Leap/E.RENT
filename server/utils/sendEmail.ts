import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER_EMAIL,
    pass: process.env.GMAIL_USER_PASS,
  },
});

const sendEmail = async (name: string, email: string, code: string) => {
  console.log(name, email);
  console.log("form", process.env.GMAIL_USER_EMAIL);
  const info = await transport.sendMail({
    from: process.env.GMAIL_USER_EMAIL,
    to: email,
    subject: "Email Confirmation Link",
    html: `<h1>Email Confirmation</h1>
        <h2> Сайн байна уу? ${name}</h2>
        <p> Манай вэб хуудсанд бүртгүүлсэнд баярлалаа. Та доорх илгээсэн
         холбоосоор  хэрэглэгчийн эрхээ баталгаажуулна уу!!!</p>
         <a href=http://localhost:9000/confirm/${code}></a>
         Баталгаажуулах холбоос`,
  });
};
export default sendEmail;
