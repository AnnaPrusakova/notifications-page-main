import { useEffect, useState } from "react";
import { data } from "../data/notificationsData";
import { NotificationItem } from "../dto/NotificationItem";
import Notification from "./Notification";
import styles from './notificationWrapper.module.scss';

const NotificationWrapper: React.FC<{}> = () => {
    const [unreadMessages, setUnreadMessages] = useState<number>(0);

    useEffect(() => {
        countUnreadMessages();
    }, []);

    const countUnreadMessages = () => {
        let unread = 0;
        data.map(elem => elem.isRead === false && unread++);
        setUnreadMessages(unread);
    }
    return (
    <div className={styles.wrapper}>
        <div className={styles.notificationHeader}>
            <div className={styles.unreadWrapper}>
                <p className={styles.title}>Notifications</p>
                <div className={styles.unreadMsg}>{unreadMessages}</div>
            </div>
            <p className={styles.markAsRead}>Mark all as read</p>
        </div>
        <div>
            {data.length > 0 && data.map((notification: NotificationItem, i: number) => (
                <Notification key={i} notification={notification}/>
            ))}
        </div>
    </div>);
}

export default NotificationWrapper;