## Gainzlife

Gainzlife is the All-In-One lifestyle, fitness and health tracker built using React and Materialize. It implements FitBit's API to show statistics that are tracked using the user's FitBit device.

With the FitBit API users can see how well they are sleeping, resting heart rate, steps taken and calories burned.

The dashboard also helps you track calories consumed, daily habits and goals.

## Getting Started

Fork and clone this repository.

You need to register an app with [FitBit's API](https://dev.fitbit.com/apps/new)

Be sure to make the OAuth 2.0 Application type to be Server and the callback URL to be 'http://localhost:3000/'

Then follow the OAuth tutorial page to receive your Access Token.

Create a env.js file in your src folder and assign the access token as a variable

Example ````const FITBIT_API_KEY = <your access token here>```` (remember to export the file as well)

Run `yarn && yarn start`
