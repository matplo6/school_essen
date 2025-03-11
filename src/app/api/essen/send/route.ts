export async function POST(req: Request) {
    const { monday, tuesday, wednesday, thursday } = await req.json();
    return Response.json({ monday, tuesday, wednesday, thursday });
}
