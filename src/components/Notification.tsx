import { NotificationItem, TypeNotification } from "../dto/NotificationItem";

interface IProps {
    notification: NotificationItem
}
const Notification: React.FC<IProps> = ({ notification }: IProps) => {
    const img = notification.avatar;
    return(
    <div>
       <img src={img} alt={notification.author}/>
        <div>
            <p>{notification.author}</p>
            <p>{notification.action}</p>
            {notification.type === TypeNotification.REACT && <p>{notification.attachtedTo}</p>}
            {notification.type === TypeNotification.GROUP && <p>{notification.attachtedTo}</p>}
            <div>{notification.timeFromNow}</div>
            {notification.type === TypeNotification.MESSAGE && <div>{notification.message}</div>}
            {notification.type === TypeNotification.COMMENT && <div>{notification.attachtedTo}</div>}
        </div>
    </div>
    )
} 

export default Notification;