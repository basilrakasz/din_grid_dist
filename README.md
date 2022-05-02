# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide

# Build and deploy commands

## Build Command:

```
mbt build -p=cf -t=mta_archives --mtar=din_grid_dist.mtar
```

## Deploy Command:

```
cf deploy mta_archives/din_grid_dist.mtar -f
```

## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).

## Workarounds / Problems

### SAP Fiori Service URL

Due to the fact, that while building the SAP Fiori app (`premises` and `buildings`)
the `ui5-builder` called by `npm run build:cf` strips the leading `/` of
the `dataSource.mainService.uri` property to make calls relative to the deployed path, it is
necessary to provide a route for the service call. The `xs-app.json` inside the `premises`
/`buildings` project is ignored so I added a global route inside the `approuter` project which
basically checks if there is `/service/` somewhere in the url and forwards the request to the
corresponding backend.

`xs-app.json` route of `approuter` before:

```json
{
  "source": "^/service/(.*)$",
  "target": "$1",
  "destination": "srv-api",
  "authenticationType": "xsuaa",
  "csrfProtection": true
}
```

`xs-app.json` route of `approuter` after:

```json
{
  "source": "^.*/service/(.*)$",
  "target": "/service/$1",
  "destination": "srv-api",
  "authenticationType": "xsuaa",
  "csrfProtection": true
}
```

Not sure if the `xs-app.json` inside the `premises`/`buildings` project should be recognized by
the `approuter`. But if so, it would be better to add the route for the backend there.

### CORS / Angular local development

- proxy + approuter lokal gestartet

### SAP Cloud SDK

- workaround wegen node polyfills in Dateien   `polyfills.ts` und `node-webpack.config.js`
- muss eine url gegeben werden, welche mit multitenancy?

### useHash im Angular

- wegen html5 repo welches versucht dort zu schauen anstatt an angular app weiterzuleiten
- lösung: useHash

### kein redirect zu /index.html im angular etc

https://din-consumer-1-inpeek-sandbox-din-din-grid-dist.cfapps.eu10.hana.ondemand.com/service-agent/
redirected nicht zu index.html

## Tutorials / Tasks

### Deployment to SAP Fiori Launchpad

The deployment to SAP Fiori Launchpad was already done, however it was removed due to not being
multitenancy capable. Basically the Fiori Apps must be deployed to the HTML5 Repository Host (which
is already done). However the destinations which are needed were removed.

See
commits [89b630c3](https://dev.azure.com/inpeek/Digital%20Installation%20Network(DIN)/_git/din_grid_dist/commit/89b630c325a536b37f734e3d6613c1bbe8c9e774?refName=refs/heads/master)
and [20cec7dd](https://dev.azure.com/inpeek/Digital%20Installation%20Network(DIN)/_git/din_grid_dist/commit/20cec7dd879f199a07cbb32ae6b050c02bf36dd0?refName=refs/heads/master)

### Local Development & Testing

Local testing was enabled by following the video tutorial from saphana
academy: https://youtu.be/YCesXwyGG_8

The following manually steps are necessary when setting up your development environment. The steps
are described for the SAP Business Application Studio:

- optional: Install BAS Plugin: "SAP Partner Engineering BAS Installer"
- Find command (CTRL+SHIT+P) "BAS: Install CF DefaultEnv Plugin" and run it. The CF Plugin
  DefaultEnv should now be installed
    - It seems the plugin is not in the Community Repo anymore, then you'll have to install it from
      the github repo: https://github.com/saphanaacademy/DefaultEnv
    - alternative you can install the plugin using `cf install-plugin DefaultEnv`
- In the root folder of the project run the command ``` cf de din_grid_dist-srv ``` for adding the
  default-env.json automatically
- In the approuter folder `approuter` run the command ``` cf de din_grid_dist ``` for adding the
  default-env.json for the approuter
- In the `approuter/default.env.json` add the Properties `TENANT_HOST`and `USE_EXTERNAL_PROXY`  and
  make the url in the destinations parameter is set to `http://localhost:4004` according to the
  follwing code snippet

```
"TENANT_HOST": "ipk-cons-1-dev-din-cap.cfapps.eu10.hana.ondemand.com",
"EXTERNAL_REVERSE_PROXY": true,
```

- optional: if you'd like to develop cds locally, add/change property `destinations` (not tested)

```
"destinations": "[ {\n  \"forwardAuthToken\" : true,\n  \"name\" : \"srv-api\",\n  \"timeout\" : 60000,\n  \"url\" : \"http://localhost:4004\"\n} ]"
```

- optional: Run `cds watch --profile production` on root folder to start cap services in production
  mode (as it would run when deployed on cf)
- Run `npm run dev` in the app folder for starting the approuter
- optional: start using angular locally using `npm start` in `app/service-agent` folder
- open `localhost:5000` and login
- optional: if angular is started locally, open `localhost:4200`

## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.
