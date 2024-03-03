# Getting Started

## Step 1: Start the Project

Start off by running the following command:

```bash
yarn && yarn pod:install
```

This will complete the basic setup of the project.

Then, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# How the app works

The app is structured as follows:

1. ## Login page

A dummy login page that takes a username and password, and lets you in to the app. These credentials are just stored in the `Redux` store for now and is used to determine the entry point for the navigator. `LoginPage` if logged out, and `HomePage` if logged in.

2. ## Home page

Shows a list of quiz attempts. Is empty at first. You can start a new quiz using the button at the bottom.

3. ## Quiz Screen

- Generates and shows quiz questions based on `GBFS` data. There is support for 3 kinds of questions as of now. A new question is rendered when you've selected the answer for the question.
- Points are calculated based on the answers. They are shown in the header area.
- Shows a countount of one minute, after which the quiz is ended and you're taken to the `QuizDoneScreen`.

4. ## Quiz Done Screen

- Shows the result of the last attempt on the top.
- Has a button to retake the quiz, which basically starts a new attempt.
- List all past attempts too.

# Key technologies used

The following libraries have been used in this implementation. Each of them has either been picked because they are industry standard, or because I've used them before and found them to be a good choice for `React Native` projects in general.

- `redux-toolkit` with `redux-persist`

Used to store state data in slices. The `user` and `quiz` data are persisted. `AsyncStorage` from `@react-native-async-storage/async-storage` is used as the storage.

- `@tanstack/react-query`

The initial `GBFS` feed data is loaded using `@tanstack/react-query`. React Query has great inbuilt features for caching and reloading data. I've used this to control how often the `GBFS` data is loaded, as it doesn't change that often. We store the feed urls in the `Redux` store, and used those to generate the quiz questions.

- `react-native-vector-icons`

Some simple graphics are shown using `react-native-vector-icons`.

- `styled-components`

I prefer to use `styled-components` as it leads to a cleaner and more readable render function in the components.

- `react-navigation`

Library that manages the navigation in the app.

- `patch-package`

I've used this in my other projects, and I needed to use it here as there were some issues with the `react-native-vector-icons` library that needed to be fixed.

# Other decision and approaches

## Quiz Question generation

One of the challenges was to understand the `GBFS` data and figure out what questions to generate and how. Furthermore, how do I display these questions in a `React` component? For this, I used the following approach:

1. I decided to use a hook, in this case, the `useGetQuizQuestion` hook. This hook would get a random question generator function called `getRandomQuizGenerator`.
2. This hook would provide a function, `getNextQuestion` to get the question, and also return the question itself, which can be used by any component.
3. `getRandomQuizGenerator` would return a generator function, which would make the actual `API` calls for the question and answers to be generated.
4. The `getRandomQuizGenerator` takes a generator object to which we can supply the question text template, and a `quizQuestionGeneratorFunction`, which returns a question and answers. Here we have used the concept of inversion of control, so that the consumer of this setup is responsible for providing the quiz-question generator function.
5. The `useGetQuizQuestion` hook also provides an `isLoading` status so the consumer component can display the appropriate status.

# Troubleshooting

If you have issues running the project, shut down all simulators and emulators, close _Xcode_ and _Android Studio_, and run the following command:

```bash
yarn clean
```

In case of _Android_, you might also try running, before running `yarn android`:

```bash
yarn android:gradle:clean:build
```

## Challenges

1. What questions to come up with?
2. How to calculate the info needed for that question?
3. There were issues related to `JDK` 21, which caused problems with the Android build. I had to change it to `JDK` 17.
4. Dark mode on my Android device was causing the text to not be shown, so I had force disable it using this the `Android` `styles.xml` file:

```xml
<item name="android:forceDarkAllowed">false</item>
```

And change

```xml
<style name="AppTheme" parent="Theme.AppCompat.DayNight.NoActionBar">
```

to

```xml
<style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
```

# Future improvements

1. Make sure questions don't repeat.
2. Support more types of questions.
3. An actual authentication system connected to the backend.
4. Better logic for cache invalidation and reloading of data.
5. Expiry of auth token.
6. Middleware configuration for intercepting actions and logging out when auth token expires or is invalid.
7. Better handling of input validation in the login form.
