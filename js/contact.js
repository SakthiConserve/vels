// Supabase Configuration
const SUPABASE_URL = "https://rytsuuibfxfdyqwaetfc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5dHN1dWliZnhmZHlxd2FldGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1OTM4OTgsImV4cCI6MjA5NzE2OTg5OH0.IeWVL7bOxcElgcnBi-59eT7GvKPCHBqLtlfTE786tGs";

// Create Supabase Client
const { createClient } = supabase;
const supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// Contact Form
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {

  // Save to Supabase
  const { data, error } = await supabaseClient
    .from("inquiries")
    .insert([formData]);

  if (error) {
    console.error("Supabase Error:", error);
    throw error;
  }

  console.log("Data saved to Supabase");

  // Call Edge Function
  console.log("Calling Edge Function...");

  const emailResponse = await fetch(
  "https://rytsuuibfxfdyqwaetfc.supabase.co/functions/v1/resend-email",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
    },
    body: JSON.stringify(formData)
  }
);

console.log("Email Status:", emailResponse.status);

const emailResult = await emailResponse.text();
console.log("Email Response:", emailResult);

  alert("Thank you! Your inquiry has been submitted.");
  form.reset();

} catch (err) {
  console.error("Submission Error:", err);
  alert("Something went wrong. Check browser console (F12).");
}

    submitBtn.disabled = false;
    submitBtn.innerText = "Send Inquiry";
  });
}