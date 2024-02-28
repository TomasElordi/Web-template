// export { GET, POST } from "@/auth";

import { handlers } from "@/auth";

const { GET: AuthGET, POST } = handlers;
export { POST };

// Showcasing advanced initialization in Route Handlers
export async function GET(request: any) {
  // Do something with request
  const response = await AuthGET(request);
  // Do something with response
  return response;
}
