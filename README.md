# ionic2-calendar
Using calendar with Ionic 2

### Check out the tutorial on the site
http://webaxx.fr/ionic-2/tutoriel-ionic-2-calendar/

### Install Ionic2 and Cordova
`npm install -g ionic@beta`

`npm install -g cordova`

### Create project
`ionic start TutoCalendar --v2 --ts`

`cd TutoCalendar`

`ionic platform ios`

`ionic platform android`

### Add ionic native
`npm install ionic-native --save`

### Add cordova Calendar plugin
`cordova plugin add https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin.git`

### Deploy
`ionic run android`

`ionic run ios`
