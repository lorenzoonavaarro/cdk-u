#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkStack } from "../lib/cdk-stack";
import { PhotoStack } from "../lib/PhotoStack";

const app = new cdk.App();
new PhotoStack(app, 'PhotoStack');