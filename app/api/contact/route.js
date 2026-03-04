import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "שירות השליחה לא מוגדר. אנא פנה למנהל האתר." },
      { status: 503 },
    );
  }
  try {
    const body = await request.json();
    const { fullName, phone, message } = body;

    if (!fullName?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "נא למלא שם ומספר טלפון" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Shay Tech Solutions <onboarding@resend.dev>",
      to: ["shaybishay@gmail.com"],
      subject: `פנייה חדשה מאתר: ${fullName}`,
      html: `
        <h2>פנייה חדשה מהשארת פרטים</h2>
        <p><strong>שם מלא:</strong> ${fullName}</p>
        <p><strong>מספר טלפון:</strong> ${phone}</p>
        <p><strong>במה אפשר לעזור:</strong></p>
        <p>${message || "(לא צוין)"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "אירעה שגיאה בשליחת ההודעה. נסו שוב." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "אירעה שגיאה. נסו שוב מאוחר יותר." },
      { status: 500 },
    );
  }
}
