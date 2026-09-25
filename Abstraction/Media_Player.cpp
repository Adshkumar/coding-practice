// Create an abstract class:

// play()

// Implement:

//      MP3Player
//      MP4Player
//      WAVPlayer

// In main(), store them using:

// MediaPlayer* player;

#include <iostream>
#include <string>

using namespace std;

class MediaPlayer {
    public:
        virtual void play() = 0;

        virtual ~MediaPlayer() {}
};

class MP3Player : public MediaPlayer {
    public:
        void play() override {
            cout << "Playing MP3 file..." << endl;
        }
};

class MP4Player : public MediaPlayer {
    public:
        void play() override {
            cout << "Playing MP4 file..." << endl;
        }
};

class WAVPlayer : public MediaPlayer {
    public:
        void play() override {
            cout << "Playing WAV file..." << endl;
        }
};

int main() {
    MediaPlayer* player;

    player = new MP3Player();
    player->play();

    player = new MP4Player();
    player->play();

    player = new WAVPlayer();
    player->play();

    delete player;
    
    return 0;
}