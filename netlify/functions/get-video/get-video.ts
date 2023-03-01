import {Handler} from '@netlify/functions'
import {X_SECRET_PASSWORD_HEADER} from "../../../src/types";

export const handler: Handler = async (event) => {
    const password = event.headers[X_SECRET_PASSWORD_HEADER.toLowerCase()];

    if (password === process.env.VIDEO_PASSWORD) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: "success",
                link: process.env.VIDEO_LINK
            }),
        }
    }

    return {
        statusCode: 401,
        body: JSON.stringify({
            success: false,
            message: `Wrong password`,
        }),
    }
}
