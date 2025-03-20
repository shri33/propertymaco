export async function POST(req) {
    try {
      const data = await req.json();
      // Process data (e.g., store in DB, send email, etc.)
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ success: false }), { status: 400 });
    }
  }
  