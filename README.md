## Inspiration
Statistics shows that people with depression feel alone and many times afraid to talk to other people about the situation. We want to help with this problem through the advancement of Brain-Computer Interface technology. We want to develop a system that can detect emotions based on individual brain wave signals. This can be used as a feedback system for mental illness patients, such as clinical depression.

## What it does
Our project will use the Emotiv headband to detect EEG signals and display a person's emotion. TEmo starts by talking to the user by asking them about their day. Depending on the user's response, TEmo uses sentenmental analysis combined with EEG feedback from Emotiv to determine the next question. We want to establish a conversation with the user, and the end result would be an improvement of the user's mood.

## How we built it
Emotiv Exavier Control Panel/Composer Watson speech to text recognition, sentimental analysis, text to speech API

## Challenges we ran into
Emotiv examples from developer tool kit did not provide raw EEG data for analysis. We had some problem running C code on Windows and software that pair with Emotiv ran into .dll issues because dependencies were missing. Watson's API was hard to figure due to authentication.

## Accomplishments that we're proud of
We are tackling a problem which none of us had prior experience before (emotion detection) Emotiv API We got most of functionalities working

## What we learned
Leared to use Emotiv SDK Learned to use Watson, socket.io, nodejs

## What's next for TEmo
Using machine learning for mood classification
