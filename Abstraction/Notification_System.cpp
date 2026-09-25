// Create an abstract class:

// sendMessage(string msg)

// Implement:

//      EmailNotification
//      SMSNotification
//      PushNotification

// In main(), store them using:

// Notification* notification;


#include <iostream>
#include <string>

using namespace std;

// Abstract Class
class Notification {
public:
    virtual void sendMessage(string msg) = 0;

    virtual ~Notification() {}
};

// Email Notification
class EmailNotification : public Notification {
public:
    void sendMessage(string msg) override {
        cout << "Email Notification: " << msg << endl;
    }
};

// SMS Notification
class SMSNotification : public Notification {
public:
    void sendMessage(string msg) override {
        cout << "SMS Notification: " << msg << endl;
    }
};

// Push Notification
class PushNotification : public Notification {
public:
    void sendMessage(string msg) override {
        cout << "Push Notification: " << msg << endl;
    }
};

int main() {

    Notification* notification;

    notification = new EmailNotification();
    notification->sendMessage("Welcome to our platform!");

    notification = new SMSNotification();
    notification->sendMessage("Your OTP is 1234");

    notification = new PushNotification();
    notification->sendMessage("You have a new message");

    return 0;
}