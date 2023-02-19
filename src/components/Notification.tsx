import { NotificationItem, TypeNotification } from "../dto/NotificationItem";
import styles from './notification.module.scss';
import cn from "classnames";

interface IProps {
    notification: NotificationItem
}
const Notification: React.FC<IProps> = ({ notification }: IProps) => {
    return(
    <div className={cn(styles.notificationWrapper,  {[styles.isRead]: notification.isRead})}>
       <img className={styles.avatar} src={notification.avatar} alt={notification.author}/>
        <div className={styles.info}>
            <div>
                <span className={styles.author}>{notification.author}</span>
                <span className={styles.action}>{notification.action}</span>
                    {notification.type === TypeNotification.REACT && <span className={styles.reactType}>{notification.attachtedTo}</span>}
                    {notification.type === TypeNotification.GROUP && <span className={styles.groupType}>{notification.attachtedTo}</span>}
                    {notification.isRead === false && <span className={styles.unreadMarker}></span>}
                    </div>
            <div className={styles.timeFromNow}>{notification.timeFromNow}</div>
            {notification.type === TypeNotification.MESSAGE &&
                <div className={styles.messageType}>{notification.message}</div>
            }
        </div>
        {notification.type === TypeNotification.COMMENT && 
                        <div className={styles.commentType}>
                            <img className={styles.postImg} src={notification.attachtedTo} alt={'photo_with_comment'}/> 
                        </div>
        }
    </div>
    )
} 

export default Notification;