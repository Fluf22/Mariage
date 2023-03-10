export const X_SECRET_PASSWORD_HEADER = 'X-Secret-Password';

export interface VideoLinkResponse {
    success: boolean;
    message: boolean;
    link: string;
}

export type VideoLinkError = Omit<VideoLinkResponse, 'link'>;