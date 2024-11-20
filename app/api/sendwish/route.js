import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    console.log('Received POST request');
    
    // Parse the JSON body of the request
    const { wish } = await req.json();
    console.log('Wish received:', wish);

    // Configure the email transport
    console.log('Configuring email transport...');

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "sanjaygouda2109@gmail.com",
          pass: "rqbk lfej tzpt pdap",
        },
        tls: {
            rejectUnauthorized: false, // This will allow self-signed certificates
          },
      });
  

    // Log the transporter details (excluding sensitive info like password)
    

    // Define the email content
    const mailOptions = {
      from: 'sanjaygouda2109@gmail.com',
      to: 'sanjaygouda759@gmail.com', // The email where the wish will be sent
      subject: 'New Wish Received!',
      text: `You received a new wish: ${wish}`,
    };
    
    // Log the mail options
    console.log('Mail options:', mailOptions);

    // Send the email
    console.log('Sending email...');
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    // Log the error in more detail
    console.error('Error sending email:', error);
    
    return new Response(JSON.stringify({ success: false, message: 'Failed to send wish.' }), { status: 500 });
  }
}
