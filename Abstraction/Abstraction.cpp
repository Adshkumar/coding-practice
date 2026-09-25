#include <iostream>
#include <string>

using namespace std;

class Car {
public:
    virtual void startEngine() = 0;
    virtual void shiftGear(int gear) = 0;
    virtual void accelerate(int speed) = 0;
    virtual void brake() = 0;
    virtual void stopEngine() = 0;

    virtual ~Car() {}
};

class SportsCar : public Car {
private:
    string model;
    string brand;
    bool isEngineOn;
    int currentSpeed;
    int currentGear;

public:
    SportsCar(string brand, string model) {
        this->brand = brand;
        this->model = model;
        isEngineOn = false;
        currentSpeed = 0;
        currentGear = 0;
    }

    void startEngine() override {
        isEngineOn = true;
        cout << "Engine started for "
             << brand << " " << model << endl;
    }

    void shiftGear(int gear) override {
        if (isEngineOn) {
            currentGear = gear;
            cout << "Shifted to gear "
                 << currentGear
                 << " for "
                 << brand << " "
                 << model << endl;
        } else {
            cout << "Cannot shift gear. Engine is off."
                 << endl;
        }
    }

    void accelerate(int speed) override {
        if (isEngineOn) {
            currentSpeed += speed;

            cout << "Accelerated to "
                 << currentSpeed
                 << " km/h for "
                 << brand << " "
                 << model << endl;
        } else {
            cout << "Cannot accelerate. Engine is off."
                 << endl;
        }
    }

    void brake() override {
        if (currentSpeed > 0) {
            currentSpeed -= 20;

            if (currentSpeed < 0)
                currentSpeed = 0;

            cout << "Braking... Current speed: "
                 << currentSpeed
                 << " km/h" << endl;
        } else {
            cout << "Car is already stopped." << endl;
        }
    }

    void stopEngine() override {
        isEngineOn = false;
        currentSpeed = 0;
        currentGear = 0;

        cout << "Engine stopped for "
             << brand << " "
             << model << endl;
    }
};

int main() {

    Car* myCar = new SportsCar("Ferrari", "488 Spider");

    myCar->startEngine();
    myCar->shiftGear(1);
    myCar->accelerate(50);
    myCar->shiftGear(2);
    myCar->accelerate(30);
    myCar->brake();
    myCar->stopEngine();

    delete myCar;

    return 0;
}