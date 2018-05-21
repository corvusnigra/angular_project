// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    firebase : {
        apiKey: "AIzaSyCZs1OYUeESBq2QXktps9SHjW55400YJ4g",
        authDomain: "psy-consalting.firebaseapp.com",
        databaseURL: "https://psy-consalting.firebaseio.com",
        projectId: "psy-consalting",
        storageBucket: "psy-consalting.appspot.com",
        messagingSenderId: "329080661493"
    }
};
