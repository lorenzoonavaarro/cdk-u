#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkStack } from "../lib/cdk-stack";
import { PhotoStack } from "../lib/PhotoStack";
import { PhotoHandlerStack } from "../lib/PhotoHandlerStack";

const app = new cdk.App();
new PhotoStack(app, 'PhotoStack');
new PhotoHandlerStack(app, 'PhotosHandlerStack');