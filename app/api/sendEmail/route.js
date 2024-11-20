import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Parse the JSON body of the request
    const { message, recipientEmail } = await req.json();

    // Configure the email transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'sanjaygouda2109@gmail.com', // Your email address
        pass: 'rqbk lfej tzpt pdap', // Your email password or app-specific password
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });

    // Define the email content
    const mailOptions = {
      from: 'sanjaygouda2109@gmail.com',
      to: recipientEmail, // The email where the wish will be sent
      subject: 'Happy Birthday Puttaaaa',
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    // Log the error in more detail
    console.error('Error sending email:', error);

    return new Response(JSON.stringify({ success: false, message: 'Failed to send wish.' }), { status: 500 });
  }
}
