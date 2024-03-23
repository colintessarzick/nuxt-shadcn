import { Warning } from "postcss";
import { base_url } from "~/helpers/api/common";
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()

async function spawnRequestErrorMessage(statusCode: number) {
    toast({
        title: `Request failed with status code ${statusCode}`,
        description: `Please check your internet connection and try again`,
    })
    throw new Error(`Request failed with status code ${statusCode}`)
}

async function spawnRequestWarningMessage() {
    toast({
        title: `Request failed with no status code`,
        description: `Please check your internet connection and try again`,
        variant: 'destructive'
    })
    throw new Warning(`Request failed with no status code`)
}

export async function handleRequest<T>(path: string): Promise<T> {
    return await fetch(base_url + path)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
            error.response ? spawnRequestErrorMessage(error.response.status) : spawnRequestWarningMessage()
        })
}
