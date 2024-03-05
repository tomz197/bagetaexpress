import { getItemsBySchool } from "@/db/controllers/itemController";

async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url);
  const schoolID = searchParams.get("schoolID");

  if (!schoolID || schoolID === "") {
    return new Response("Missing schoolID", { status: 400 });
  }
  if (isNaN(Number(schoolID))) {
    return new Response("Invalid schoolID", { status: 400 });
  }

  const items = await getItemsBySchool(parseInt(schoolID));
  return Response.json(items);
}

export { GET };
