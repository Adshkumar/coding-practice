// Question 1: Vehicle System

// Create an abstract class Vehicle with:

//      start()
//      stop()
//      fuelType()

// Implement:

// Car
// Bike

// Output should differ based on vehicle type.

#include <iostream>
#include <string>

using namespace std;

class Vehicle {
    public:
            virtual void start() = 0;
            virtual void stop() = 0;
            virtual void fuelType() = 0;

            virtual ~Vehicle() {}
};

class car : public Vehicle{
    public:
            void start() override{
                cout << "Car engine started." << endl;
            }

            void stop() override{
                cout << "Car engine stopped." << endl;
            }

            void fuelType() override{
                cout << "Car fuel type: Petrol" << endl;
            }
};

class Bike : public Vehicle{
    public:
            void start() override{
                cout << "Bike engine started." << endl;
            }

            void stop() override{
                cout << "Bike engine" << endl;
            }

            void fuelType() override{
                cout << "Bike fuel type: Petrol/Diesel/CNG" << endl;
            }
};

int main(){
    Vehicle* v1 = new car();
    Vehicle* v2 = new Bike();

    cout << "----- Car -----" << endl;
    v1->start();
    v1->stop();
    v1->fuelType();

    cout << "----- Bike -----" << endl;
    v2->start();
    v2->stop();
    v2->fuelType();

    delete v1;
    delete v2;

    return 0;
}