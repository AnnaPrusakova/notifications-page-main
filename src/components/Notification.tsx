import { NotificationItem, TypeNotification } from "../dto/NotificationItem";
import styles from './notification.module.scss';

interface IProps {
    notification: NotificationItem
}
const Notification: React.FC<IProps> = ({ notification }: IProps) => {
    return(
    <div className={styles.notificationWrapper}>
       <img src={notification.avatar} alt={notification.author}/>
        <div className={styles.actionInfoWrapper}>
        <div className={styles.info}>
                <p className={styles.author}>{notification.author}</p>
                <div className={styles.action}>{notification.action}</div>
                    {notification.type === TypeNotification.REACT && <p className={styles.reactType}>{notification.attachtedTo}</p>}
                    {notification.type === TypeNotification.GROUP && <p  className={styles.groupType}>{notification.attachtedTo}</p>}
                    {notification.isRead === false && <div className={styles.unreadMarker}></div>}
                    {notification.type === TypeNotification.COMMENT && 
                        <div className={styles.commentType}>
                            <img src={notification.attachtedTo} alt={'photo_with_comment'}/> 
                        </div>
                    }
                </div>
            <div className={styles.timeFromNow}>{notification.timeFromNow}</div>
            {notification.type === TypeNotification.MESSAGE &&
                <div className={styles.messageType}>{notification.message}</div>
            }
        </div>
    </div>
    )
} 

export default Notification;