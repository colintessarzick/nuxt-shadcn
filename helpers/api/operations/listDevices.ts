import { handleRequest } from "~/helpers/api/handleRequest";

export async function listDevices() {
    return await handleRequest<Object>("/devices");
}
