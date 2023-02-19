import { useEffect, useState } from "react";
import { data } from "../data/notificationsData";
import { NotificationItem } from "../dto/NotificationItem";
import Notification from "./Notification";
import styles from './notificationWrapper.module.scss';

const NotificationWrapper: React.FC<{}> = () => {
    const [notificationData, setNotificationData] = useState<NotificationItem[]>(data);
    const [unreadMessages, setUnreadMessages] = useState<number>(0);

    useEffect(() => {
        countUnreadMessages();
    }, []);

    const countUnreadMessages = () => {
        let unread = 0;
        notificationData.map(elem => elem.isRead === false && unread++);
        setUnreadMessages(unread);
    }

    const handleMarkAllAsRead = () => {
        const newData = notificationData.filter(elem => elem.isRead = true);
        setNotificationData(newData);
        countUnreadMessages();
    }

    return (
    <div className={styles.wrapper}>
        <div className={styles.notificationHeader}>
            <div className={styles.unreadWrapper}>
                <h1 className={styles.title}>Notifications</h1>
                <div className={styles.unreadMsg}>{unreadMessages}</div>
            </div>
            <p className={styles.markAsRead} onClick={handleMarkAllAsRead}>Mark all as read</p>
        </div>
            {notificationData.length > 0 && notificationData.map((notification: NotificationItem, i: number) => (
                <Notification key={i} notification={notification}/>
            ))}
    </div>);
}

export default NotificationWrapper;