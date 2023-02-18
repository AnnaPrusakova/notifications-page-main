import { useEffect, useState } from "react";
import { data } from "../data/notificationsData";

const NotificationWrapper: React.FC<{}> = () => {
    const [unreadMessages, setUnreadMessages] = useState<number>(0);

    useEffect(() => {
        countUnreadMessages();
    }, []);

    const countUnreadMessages = () => {
        let unread = 0;
        data.map(elem => elem.isRead === "false" && unread++);
        setUnreadMessages(unread);
    }
    return (<div>
        <div>
            <p>Notifications</p>
            <div>{unreadMessages}</div>
            <button>Mark all as read</button>
        </div>
    </div>);
}

export default NotificationWrapper;