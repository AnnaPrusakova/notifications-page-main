export type NotificationItem = {
    avatar: string,
    author: string,
    action: string,
    type: TypeNotification,
    attachtedTo: string,
    timeFromNow: string,
    message?: string,
    isRead: boolean;
}

export enum TypeNotification  {
    MESSAGE,
    COMMENT,
    REACT,
    FOLLOW,
    GROUP
}