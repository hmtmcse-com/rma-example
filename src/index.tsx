import ReactDOM from "react-dom";
import React from "react";
import TRPageManager from "tm-react/src/artifacts/manager/tr-page-manager";
import RMAExampleConfig from "./config/rma-example-config";
import RMAExampleUrlMapping from "./config/rma-example-url-mapping";
import {AppMessage} from "react-material-app/src/system/app-message";

const appConfig = new RMAExampleConfig();
const urlMapping = new RMAExampleUrlMapping();
AppMessage.appName = "RMA Example Module";
AppMessage.loginLabel = "RMA Example Module";
ReactDOM.render(<TRPageManager appConfig={appConfig} urlMapping={urlMapping}/>, document.getElementById('root'));
