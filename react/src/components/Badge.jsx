import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const BadgeIcon = function(){
  return(
    <div>
      <Badge
        badgeContent={10}
        primary={true}
        badgeStyle={{top: 21, right: 17}}
      >
        <IconButton tooltip="Notifications" className='notificationID'
        >
          <NotificationsIcon
          id='notificationID'
          />
        </IconButton>
      </Badge>
    </div>
    )
}

export default BadgeIcon;