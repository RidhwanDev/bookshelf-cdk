#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { BookshelfCdkStack } from "../lib/bookshelf-cdk-stack";

const app = new cdk.App();
new BookshelfCdkStack(app, "BookshelfCdkStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
