import { TypeNotification } from "../dto/NotificationItem";

export const data = [
    {
        avatar: "avatar-mark-webber.webp",
        author: "Mark Webber",
        type: TypeNotification.REACT,
        action: "reacted to your recent post",
        attachtedTo: "My first tournament today!",
        timeFromNow: "1m ago",
        isRead: false
    },
    {
        avatar: "avatar-angela-gray.webp",
        author: "Angela Gray",
        type: TypeNotification.FOLLOW,
        action: "followed you",
        attachtedTo: "",
        timeFromNow: "5m ago",
        isRead: false
    },
    {
        avatar: "avatar-jacob-thompson.webp",
        author: "Jacob Thompson",
        type: TypeNotification.GROUP,
        action: "has joined your group",
        attachtedTo: "Chess Club",
        timeFromNow: "1 day ago",
        isRead: false
    },
    {
        avatar: "../../../assets/images/avatar-rizky-hasanuddin.webp",
        author: "Rizky Hasanuddin",
        type: TypeNotification.MESSAGE,
        action: "sent you a private message",
        attachtedTo: "",
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        timeFromNow: "5 days ago",
        isRead: false
    },
    {
        avatar: "../../../assets/images/avatar-kimberly-smith.webp",
        author: "Kimberly Smith",
        type: TypeNotification.COMMENT,
        action: "commented on your picture",
        attachtedTo: "../../../assets/images/image-chess.webp",
        timeFromNow: "1 week ago",
        isRead: false
    },
    {
        avatar: "../../../assets/images/avatar-nathan-peterson.webp",
        author: "Nathan Peterson",
        type: TypeNotification.REACT,
        action: "reacted to your recent post",
        attachtedTo: "5 end-game strategies to increase your win rate",
        timeFromNow: "2 weeks ago",
        isRead: false
    },
    {
        avatar: "../../../assets/images/avatar-anna-kim.webp",
        author: "Anna Kim",
        type: TypeNotification.GROUP,
        action: "left the group",
        attachtedTo: "Chess Club",
        timeFromNow: "2 weeks ago",
        isRead: false
    }
]