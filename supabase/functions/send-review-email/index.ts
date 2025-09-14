import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ReviewEmailRequest {
  name: string;
  email: string;
  area: string;
  rating: number;
  comment: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      name,
      email,
      area,
      rating,
      comment,
    }: ReviewEmailRequest = await req.json();

    console.log("Received review submission:", { name, email, area, rating });

    const emailResponse = await resend.emails.send({
      from: "Shree Cleaning Reviews <onboarding@resend.dev>",
      to: ["info@shreecleaning.com"],
      subject: `New Review from ${name} - ${rating} Stars`,
      html: `
        <h1>New Customer Review</h1>
        <h2>Customer Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Area:</strong> ${area}</p>
        
        <h2>Review Details</h2>
        <p><strong>Rating:</strong> ${'★'.repeat(rating)}${'☆'.repeat(5-rating)} (${rating}/5 stars)</p>
        
        <h2>Customer Comment</h2>
        <p>${comment}</p>
        
        <hr>
        <p><em>This review was submitted through the Shree Cleaning website testimonials section.</em></p>
        <p><em>Please verify this customer before publishing the review.</em></p>
      `,
    });

    console.log("Review email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-review-email function:", error);
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