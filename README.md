## App Description

This application has several features that can be used by users, including automatically creating a random user when entering the application, posting text, viewing user posts, and replying posts. The application uses local storage to store feed data when the user does not have an internet connection. The libraries used in this application are react-navigation for screen transitions, async-storage for local storage, react-netinfo for checking the network connection, i18n-js for language localization, and flash-message for displaying messages to the user. For the UI, I used pure React Native to enhance React Native skills. In addition, This application is compatible with iOS and Android and implemented useContext for global state management.


### This is the documentation to run the application. Follow the steps below:

### Clone Project
Clone the project by running the following command on the terminal:\
 `git clone https://github.com/rofirezkin/Postr.git`

### Install Dependencies
After cloning the project, run the command `yarn install`. on the root directory to install the dependencies.

### Start the Server
Start the server with the command `yarn start`.

### Run the Application on Emulator or Device

### android 
Open an Android emulator or device.

Check if the emulator is running or not using the command `adb devices` on the terminal.

After the emulator/device is detected, run the application with the command `yarn run android` for Android 

### iOS
run `pod install` in ios folder\
then run `yarn run ios` 

## Note
Make sure the emulator or device is properly installed and detected before running the application.



## To resolve this issue:

If you encounter a problem like this:

`"SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in your project's."`

Create a file in the `android` folder called `local.properties` and fill it with the following:

### For Windows users:
`sdk.dir=C:\\\\Users\\\\UserName\\\\AppData\\\\Local\\\\Android\\\\sdk`

### For Mac users:
`sdk.dir = /Users/USERNAME/Library/Android/sdk`

For more detailed information, you can refer to this [link](https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil)


## messsage
# Mohon maaf saya lupa untuk lakukan first commit
