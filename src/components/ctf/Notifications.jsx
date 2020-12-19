import React, {useEffect, useState} from 'react';
import shortid from 'shortid';
import styled from "@emotion/styled";

import Window from "./elements/Window";
import {APIFetch} from "../../utils/APIFetch";
import {notificationsQuery} from "../../graphql/ctf";

const NotificationContainer = styled.div`
    border-bottom: 1px dashed #eee!important;
    padding-top: 8px;
    padding-bottom: 8px;
    font-family: 'Poppins', sans-serif!important;
    h5 {
       font-size: 16px;
       margin-bottom: 2.5px;
       font-weight: 600;
    }
    p {
      font-size: 12px;
      margin-bottom: 0;
    }
`


const NotificationsWindow = ({
     cardID, position, type,
     onDrag = () => {}, onClose = () => {}
 }) => {
    const [data, setData] = useState(null);

    const handleDrag = (e, position) => { onDrag({cardID, type, position}); }

    const fetchNotifications = () => {
        APIFetch({ query: notificationsQuery }).then(({ data, errors, success }) => {
            if(success) {
                setData(data.notify);
            }
        })

    };

    useEffect(fetchNotifications, [])

    return <Window
        cardID={cardID}
        position={position}
        onDrag={handleDrag}
        onClose={onClose}
        title="Notifications"
        defaultHeight="400px"
        defaultWidth="300px"
    >
        <div className="p-2">
            <h3>Notifications</h3>
            {data?.length > 0 ?
            <div>
                {data.map((n) =>
                    <NotificationContainer key={shortid.generate()}>
                        <h5>{n.name}</h5>
                        <p>{n.description}</p>
                    </NotificationContainer>
                )}
            </div> : data?.length === 0 ?
                <div>
                    <h5>No Notifications Found</h5>
                </div> :
                <div>
                    <h5>Fetching Notifications</h5>
                </div>
            }
        </div>
    </Window>

};

export default NotificationsWindow;