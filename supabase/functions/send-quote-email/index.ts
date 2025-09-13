import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteEmailRequest {
  fullName: string;
  phone: string;
  email: string;
  propertyAddress: string;
  serviceType: string;
  frequency: string;
  additionalDetails: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      fullName,
      phone,
      email,
      propertyAddress,
      serviceType,
      frequency,
      additionalDetails,
    }: QuoteEmailRequest = await req.json();

    console.log("Received quote request:", { fullName, email, serviceType });

    const emailResponse = await resend.emails.send({
      from: "Shree Cleaning <onboarding@resend.dev>",
      to: ["bikashbhandari733@gmail.com"],
      subject: `New Quote Request from ${fullName}`,
      html: `
        <h1>New Quote Request</h1>
        <h2>Customer Information</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Property Address:</strong> ${propertyAddress || 'Not provided'}</p>
        
        <h2>Service Details</h2>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Frequency:</strong> ${frequency}</p>
        
        <h2>Additional Details</h2>
        <p>${additionalDetails || 'No additional details provided'}</p>
        
        <hr>
        <p><em>This quote request was submitted through the Shree Cleaning website contact form.</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);