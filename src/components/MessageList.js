import React, { useState } from "react";
import date from 'date-and-time'

function StatusMessage({msg, type, time}) {
    var statusDate = date.parse(time, "YYYY-MM-DD, HH:mm"),
        dateFormat = "M/D/Y, h:mm A";

    return (
        <div className="status-message">
            {msg}
            <span className="name">— {type}</span>
            <span className="time">{date.format(statusDate, dateFormat)}</span>
        </div>
    );
}

function MessageList({ messageTypes }) {
    var stubStatuses = [
        {
            id: 1,
            msg:
                "The hot tub is currently closed for maintenance.  We expect it to be back up and running within 48 hours.",
            type: "management",
            time: "2019-04-11, 09:15"
        },
        {
            id: 2,
            msg: "The hot tub maintenance is complete.  Please enjoy a dip!",
            type: "management",
            time: "2019-04-14, 17:12"
        },
        {
            id: 3,
            msg:
                "The rice cooker is on the fritz, any fried rice dishes will require some extra time to cook.",
            type: "dining",
            time: "2019-04-18, 15:00"
        }
    ];

    var [statuses, setStatuses] = useState(stubStatuses);

    // useEffect(function () {
    //   retrieveStatusMessages();
    // }, []);

    // function retrieveStatusMessages() {
    //   axios.get("http://localhost/reactjs/status_api/get.php").then(function (response) {
    //     setStatuses(response.data);
    //   });
    // }

    function displayStatusMessages() {
        return statuses.map(function (status) {
            return (
                <li key={status.id}>
                    <StatusMessage
                        msg={status.msg}
                        type={messageTypes[status.type]}
                        time={status.time}
                    />
                </li>
            );
        });
    }

    return <ul id="status-list">{displayStatusMessages()}</ul>;
}

export default MessageList